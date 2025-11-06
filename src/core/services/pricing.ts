import { TipePromo } from "@prisma/client";

export type PaketWithPromos = {
  id: string;
  harga: any;
  harga_psb: any;
  total: any;
  harga_coret?: any | null;
  prodigis?: Array<{
    harga: any;
  }>;
  promo_pakets?: Array<{
    harga_promo?: any | null;
    harga_coret?: any | null;
    diskon_persen?: any | null;
    diskon_nominal?: any | null;
    promo: {
      id: string;
      aktif: boolean;
      tipe_promo: TipePromo;
      diskon_persen?: any | null;
      diskon_nominal?: any | null;
      psb_normal?: any | null;
      psb_diskon_persen?: any | null;
      psb_setelah_diskon?: any | null;
      tanggal_mulai: Date;
      tanggal_selesai: Date;
      prioritas: number;
      stackable: boolean;
    };
  }>;
};

function toNum(v: any, fallback = 0): number {
  if (v === null || v === undefined) return fallback;
  if (typeof v === "number") return v;
  if (typeof v === "string") return Number(v) || fallback;
  // Prisma Decimal has toNumber()
  if (typeof (v as any)?.toNumber === "function") return (v as any).toNumber();
  return Number(v) || fallback;
}

export type EffectivePrice = {
  effective_harga: number; // base paket setelah promo + sum prodigi
  effective_psb: number;   // psb setelah promo (combo)
  harga_coret?: number | null; // coret untuk base paket (tanpa prodigi)
  applied_promo_ids: string[];
};

type SimplePromo = {
  id: string;
  aktif: boolean;
  tipe_promo: TipePromo;
  diskon_persen?: any | null;
  diskon_nominal?: any | null;
  psb_normal?: any | null;
  psb_diskon_persen?: any | null;
  psb_setelah_diskon?: any | null;
  tanggal_mulai: Date;
  tanggal_selesai: Date;
};

export function computeEffectivePrice(
  paket: PaketWithPromos,
  now = new Date(),
  globalPromos: SimplePromo[] = []
): EffectivePrice {
  let baseHarga = toNum(paket.harga);
  let basePSB = toNum(paket.harga_psb);
  let prodigiSum = (paket.prodigis || []).reduce((acc, p) => acc + toNum(p.harga), 0);

  let hargaCoret: number | null = paket.harga_coret != null ? toNum(paket.harga_coret) : null;

  const related = (paket.promo_pakets || []).filter((pp) => {
    const p = pp.promo;
    return (
      p && p.aktif && new Date(p.tanggal_mulai) <= now && new Date(p.tanggal_selesai) >= now
    );
  });
  const globals = (globalPromos || []).filter(
    (p) => p && p.aktif && new Date(p.tanggal_mulai) <= now && new Date(p.tanggal_selesai) >= now
  ).map((p) => ({
    promo: p,
  } as any));

  const relations = [...related, ...globals];

  if (relations.length === 0) {
    return {
      effective_harga: baseHarga + prodigiSum,
      effective_psb: basePSB,
      harga_coret: hargaCoret,
      applied_promo_ids: [],
    };
  }

  // Ignore priority/stackable: apply in fixed order for simplicity
  const persenFirst = relations.filter((r) => r.promo.tipe_promo === TipePromo.DISKON_PERSEN);
  const nominalSecond = relations.filter((r) => r.promo.tipe_promo === TipePromo.DISKON_NOMINAL);
  const psbOnlyThird = relations.filter((r) => r.promo.tipe_promo === (TipePromo as any).DISKON_PSB);
  const comboLast = relations.filter((r) => r.promo.tipe_promo === TipePromo.COMBO);

  const toApply: typeof relations = [
    ...persenFirst,
    ...nominalSecond,
    ...psbOnlyThird,
    ...comboLast,
  ];

  let currentHarga = baseHarga;
  let currentPSB = basePSB;
  const applied: string[] = [];

  for (const r of toApply) {
    const p = r.promo;
    applied.push(p.id);

    switch (p.tipe_promo) {
      case TipePromo.DISKON_PERSEN: {
        const persen = toNum(r.diskon_persen ?? p.diskon_persen, 0);
        if (persen > 0) {
          const before = currentHarga;
          currentHarga = Math.max(0, currentHarga - (currentHarga * persen) / 100);
          if (currentHarga < before) hargaCoret = Math.max(hargaCoret ?? 0, before) || before;
        }
        break;
      }
      case TipePromo.DISKON_NOMINAL: {
        const nominal = toNum(r.diskon_nominal ?? p.diskon_nominal, 0);
        if (nominal > 0) {
          const before = currentHarga;
          currentHarga = Math.max(0, currentHarga - nominal);
          if (currentHarga < before) hargaCoret = Math.max(hargaCoret ?? 0, before) || before;
        }
        break;
      }
      // PSB only discount: change PSB without touching base harga
      case (TipePromo as any).DISKON_PSB: {
        const psbNormal = toNum(p.psb_normal, currentPSB);
        const psbPersen = toNum(p.psb_diskon_persen, 0);
        const psbAfter = toNum(p.psb_setelah_diskon);
        if (psbAfter > 0) currentPSB = psbAfter;
        else if (psbPersen > 0) currentPSB = Math.max(0, psbNormal - (psbNormal * psbPersen) / 100);
        break;
      }
      case TipePromo.COMBO: {
        // Apply paket discount if provided on relation or promo
        const persen = toNum(r.diskon_persen ?? p.diskon_persen, 0);
        const nominal = toNum(r.diskon_nominal ?? p.diskon_nominal, 0);
        let before = currentHarga;
        if (persen > 0) currentHarga = Math.max(0, currentHarga - (currentHarga * persen) / 100);
        if (nominal > 0) currentHarga = Math.max(0, currentHarga - nominal);
        if (currentHarga < before) hargaCoret = Math.max(hargaCoret ?? 0, before) || before;

        // PSB handling using promo params if present
        const psbNormal = toNum(p.psb_normal, currentPSB);
        const psbPersen = toNum(p.psb_diskon_persen, 0);
        const psbAfter = toNum(p.psb_setelah_diskon);
        if (psbAfter > 0) currentPSB = psbAfter;
        else if (psbPersen > 0) currentPSB = Math.max(0, psbNormal - (psbNormal * psbPersen) / 100);
        break;
      }
      default:
        break;
    }
  }

  return {
    effective_harga: currentHarga + prodigiSum,
    effective_psb: currentPSB,
    harga_coret: hargaCoret,
    applied_promo_ids: applied,
  };
}

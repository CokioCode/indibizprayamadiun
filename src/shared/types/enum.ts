import { z } from "zod";

export const KategoriPaketEnum = z.enum([
  "HSI_BISNIS_1_1",
  "HSI_BISNIS_1_2",
  "HSI_BASIC_1_2",
  "RETENSI_1_1",
  "RETENSI_1_2",
  "AKUISISI_1_1",
  "AKUISISI_1_2",
]);

export const JenisPaketEnum = z.enum([
  "INET_ONLY",
  "INET_PRODIGI",
  "INET_BASIC",
  "VOICE",
  "USEETV",
]);

export const RatioEnum = z.enum(["RATIO_1_1", "RATIO_1_2"]);

export const TipeONTEnum = z.enum(["STANDARD", "DUAL_BAND", "PREMIUM"]);

export const TipePromoEnum = z.enum([
  "DISKON_PERSEN",
  "DISKON_NOMINAL",
  "DISKON_PSB",
  "COMBO",
]);








/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Agenc
 * 
 */
export type Agenc = $Result.DefaultSelection<Prisma.$AgencPayload>
/**
 * Model Datel
 * 
 */
export type Datel = $Result.DefaultSelection<Prisma.$DatelPayload>
/**
 * Model Promo
 * 
 */
export type Promo = $Result.DefaultSelection<Prisma.$PromoPayload>
/**
 * Model Paket
 * 
 */
export type Paket = $Result.DefaultSelection<Prisma.$PaketPayload>
/**
 * Model PaketKategori
 * 
 */
export type PaketKategori = $Result.DefaultSelection<Prisma.$PaketKategoriPayload>
/**
 * Model PaketPromo
 * 
 */
export type PaketPromo = $Result.DefaultSelection<Prisma.$PaketPromoPayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model RegistrasiIndibiz
 * 
 */
export type RegistrasiIndibiz = $Result.DefaultSelection<Prisma.$RegistrasiIndibizPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusSales: {
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED'
};

export type StatusSales = (typeof StatusSales)[keyof typeof StatusSales]


export const JenisPromo: {
  DISKON: 'DISKON',
  CASHBACK: 'CASHBACK',
  BONUS: 'BONUS',
  DLL: 'DLL'
};

export type JenisPromo = (typeof JenisPromo)[keyof typeof JenisPromo]


export const KategoriDatel: {
  HERO: 'HERO',
  NON_HERO: 'NON_HERO'
};

export type KategoriDatel = (typeof KategoriDatel)[keyof typeof KategoriDatel]


export const SubArea: {
  INNER: 'INNER',
  OUTER: 'OUTER'
};

export type SubArea = (typeof SubArea)[keyof typeof SubArea]

}

export type StatusSales = $Enums.StatusSales

export const StatusSales: typeof $Enums.StatusSales

export type JenisPromo = $Enums.JenisPromo

export const JenisPromo: typeof $Enums.JenisPromo

export type KategoriDatel = $Enums.KategoriDatel

export const KategoriDatel: typeof $Enums.KategoriDatel

export type SubArea = $Enums.SubArea

export const SubArea: typeof $Enums.SubArea

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auths
 * const auths = await prisma.auth.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auths
   * const auths = await prisma.auth.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agenc`: Exposes CRUD operations for the **Agenc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agencs
    * const agencs = await prisma.agenc.findMany()
    * ```
    */
  get agenc(): Prisma.AgencDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datel`: Exposes CRUD operations for the **Datel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datels
    * const datels = await prisma.datel.findMany()
    * ```
    */
  get datel(): Prisma.DatelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promo`: Exposes CRUD operations for the **Promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promo.findMany()
    * ```
    */
  get promo(): Prisma.PromoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paket`: Exposes CRUD operations for the **Paket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pakets
    * const pakets = await prisma.paket.findMany()
    * ```
    */
  get paket(): Prisma.PaketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paketKategori`: Exposes CRUD operations for the **PaketKategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaketKategoris
    * const paketKategoris = await prisma.paketKategori.findMany()
    * ```
    */
  get paketKategori(): Prisma.PaketKategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paketPromo`: Exposes CRUD operations for the **PaketPromo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaketPromos
    * const paketPromos = await prisma.paketPromo.findMany()
    * ```
    */
  get paketPromo(): Prisma.PaketPromoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrasiIndibiz`: Exposes CRUD operations for the **RegistrasiIndibiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrasiIndibizs
    * const registrasiIndibizs = await prisma.registrasiIndibiz.findMany()
    * ```
    */
  get registrasiIndibiz(): Prisma.RegistrasiIndibizDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Auth: 'Auth',
    Kategori: 'Kategori',
    Agenc: 'Agenc',
    Datel: 'Datel',
    Promo: 'Promo',
    Paket: 'Paket',
    PaketKategori: 'PaketKategori',
    PaketPromo: 'PaketPromo',
    Sales: 'Sales',
    RegistrasiIndibiz: 'RegistrasiIndibiz'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auth" | "kategori" | "agenc" | "datel" | "promo" | "paket" | "paketKategori" | "paketPromo" | "sales" | "registrasiIndibiz"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Agenc: {
        payload: Prisma.$AgencPayload<ExtArgs>
        fields: Prisma.AgencFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgencFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgencFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          findFirst: {
            args: Prisma.AgencFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgencFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          findMany: {
            args: Prisma.AgencFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>[]
          }
          create: {
            args: Prisma.AgencCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          createMany: {
            args: Prisma.AgencCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgencCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>[]
          }
          delete: {
            args: Prisma.AgencDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          update: {
            args: Prisma.AgencUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          deleteMany: {
            args: Prisma.AgencDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgencUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgencUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>[]
          }
          upsert: {
            args: Prisma.AgencUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgencPayload>
          }
          aggregate: {
            args: Prisma.AgencAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenc>
          }
          groupBy: {
            args: Prisma.AgencGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgencGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgencCountArgs<ExtArgs>
            result: $Utils.Optional<AgencCountAggregateOutputType> | number
          }
        }
      }
      Datel: {
        payload: Prisma.$DatelPayload<ExtArgs>
        fields: Prisma.DatelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          findFirst: {
            args: Prisma.DatelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          findMany: {
            args: Prisma.DatelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>[]
          }
          create: {
            args: Prisma.DatelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          createMany: {
            args: Prisma.DatelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>[]
          }
          delete: {
            args: Prisma.DatelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          update: {
            args: Prisma.DatelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          deleteMany: {
            args: Prisma.DatelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>[]
          }
          upsert: {
            args: Prisma.DatelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatelPayload>
          }
          aggregate: {
            args: Prisma.DatelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatel>
          }
          groupBy: {
            args: Prisma.DatelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatelCountArgs<ExtArgs>
            result: $Utils.Optional<DatelCountAggregateOutputType> | number
          }
        }
      }
      Promo: {
        payload: Prisma.$PromoPayload<ExtArgs>
        fields: Prisma.PromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findFirst: {
            args: Prisma.PromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findMany: {
            args: Prisma.PromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          create: {
            args: Prisma.PromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          createMany: {
            args: Prisma.PromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          delete: {
            args: Prisma.PromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          update: {
            args: Prisma.PromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          deleteMany: {
            args: Prisma.PromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          upsert: {
            args: Prisma.PromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          aggregate: {
            args: Prisma.PromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromo>
          }
          groupBy: {
            args: Prisma.PromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCountAggregateOutputType> | number
          }
        }
      }
      Paket: {
        payload: Prisma.$PaketPayload<ExtArgs>
        fields: Prisma.PaketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          findFirst: {
            args: Prisma.PaketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          findMany: {
            args: Prisma.PaketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>[]
          }
          create: {
            args: Prisma.PaketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          createMany: {
            args: Prisma.PaketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>[]
          }
          delete: {
            args: Prisma.PaketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          update: {
            args: Prisma.PaketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          deleteMany: {
            args: Prisma.PaketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>[]
          }
          upsert: {
            args: Prisma.PaketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPayload>
          }
          aggregate: {
            args: Prisma.PaketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaket>
          }
          groupBy: {
            args: Prisma.PaketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaketGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaketCountArgs<ExtArgs>
            result: $Utils.Optional<PaketCountAggregateOutputType> | number
          }
        }
      }
      PaketKategori: {
        payload: Prisma.$PaketKategoriPayload<ExtArgs>
        fields: Prisma.PaketKategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaketKategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaketKategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          findFirst: {
            args: Prisma.PaketKategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaketKategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          findMany: {
            args: Prisma.PaketKategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>[]
          }
          create: {
            args: Prisma.PaketKategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          createMany: {
            args: Prisma.PaketKategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaketKategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>[]
          }
          delete: {
            args: Prisma.PaketKategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          update: {
            args: Prisma.PaketKategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          deleteMany: {
            args: Prisma.PaketKategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaketKategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaketKategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>[]
          }
          upsert: {
            args: Prisma.PaketKategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketKategoriPayload>
          }
          aggregate: {
            args: Prisma.PaketKategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaketKategori>
          }
          groupBy: {
            args: Prisma.PaketKategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaketKategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaketKategoriCountArgs<ExtArgs>
            result: $Utils.Optional<PaketKategoriCountAggregateOutputType> | number
          }
        }
      }
      PaketPromo: {
        payload: Prisma.$PaketPromoPayload<ExtArgs>
        fields: Prisma.PaketPromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaketPromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaketPromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          findFirst: {
            args: Prisma.PaketPromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaketPromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          findMany: {
            args: Prisma.PaketPromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>[]
          }
          create: {
            args: Prisma.PaketPromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          createMany: {
            args: Prisma.PaketPromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaketPromoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>[]
          }
          delete: {
            args: Prisma.PaketPromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          update: {
            args: Prisma.PaketPromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          deleteMany: {
            args: Prisma.PaketPromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaketPromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaketPromoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>[]
          }
          upsert: {
            args: Prisma.PaketPromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaketPromoPayload>
          }
          aggregate: {
            args: Prisma.PaketPromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaketPromo>
          }
          groupBy: {
            args: Prisma.PaketPromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaketPromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaketPromoCountArgs<ExtArgs>
            result: $Utils.Optional<PaketPromoCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      RegistrasiIndibiz: {
        payload: Prisma.$RegistrasiIndibizPayload<ExtArgs>
        fields: Prisma.RegistrasiIndibizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrasiIndibizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrasiIndibizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          findFirst: {
            args: Prisma.RegistrasiIndibizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrasiIndibizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          findMany: {
            args: Prisma.RegistrasiIndibizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>[]
          }
          create: {
            args: Prisma.RegistrasiIndibizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          createMany: {
            args: Prisma.RegistrasiIndibizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrasiIndibizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>[]
          }
          delete: {
            args: Prisma.RegistrasiIndibizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          update: {
            args: Prisma.RegistrasiIndibizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          deleteMany: {
            args: Prisma.RegistrasiIndibizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrasiIndibizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrasiIndibizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>[]
          }
          upsert: {
            args: Prisma.RegistrasiIndibizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrasiIndibizPayload>
          }
          aggregate: {
            args: Prisma.RegistrasiIndibizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrasiIndibiz>
          }
          groupBy: {
            args: Prisma.RegistrasiIndibizGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrasiIndibizGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrasiIndibizCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrasiIndibizCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auth?: AuthOmit
    kategori?: KategoriOmit
    agenc?: AgencOmit
    datel?: DatelOmit
    promo?: PromoOmit
    paket?: PaketOmit
    paketKategori?: PaketKategoriOmit
    paketPromo?: PaketPromoOmit
    sales?: SalesOmit
    registrasiIndibiz?: RegistrasiIndibizOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    paket_categories: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_categories?: boolean | KategoriCountOutputTypeCountPaket_categoriesArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountPaket_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketKategoriWhereInput
  }


  /**
   * Count Type AgencCountOutputType
   */

  export type AgencCountOutputType = {
    sales: number
  }

  export type AgencCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | AgencCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * AgencCountOutputType without action
   */
  export type AgencCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgencCountOutputType
     */
    select?: AgencCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgencCountOutputType without action
   */
  export type AgencCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }


  /**
   * Count Type DatelCountOutputType
   */

  export type DatelCountOutputType = {
    sales: number
    registrasi_indibiz: number
  }

  export type DatelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | DatelCountOutputTypeCountSalesArgs
    registrasi_indibiz?: boolean | DatelCountOutputTypeCountRegistrasi_indibizArgs
  }

  // Custom InputTypes
  /**
   * DatelCountOutputType without action
   */
  export type DatelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatelCountOutputType
     */
    select?: DatelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatelCountOutputType without action
   */
  export type DatelCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }

  /**
   * DatelCountOutputType without action
   */
  export type DatelCountOutputTypeCountRegistrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrasiIndibizWhereInput
  }


  /**
   * Count Type PromoCountOutputType
   */

  export type PromoCountOutputType = {
    paket_promos: number
  }

  export type PromoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_promos?: boolean | PromoCountOutputTypeCountPaket_promosArgs
  }

  // Custom InputTypes
  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCountOutputType
     */
    select?: PromoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeCountPaket_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketPromoWhereInput
  }


  /**
   * Count Type PaketCountOutputType
   */

  export type PaketCountOutputType = {
    paket_categories: number
    paket_promos: number
    registrasi_indibiz: number
  }

  export type PaketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_categories?: boolean | PaketCountOutputTypeCountPaket_categoriesArgs
    paket_promos?: boolean | PaketCountOutputTypeCountPaket_promosArgs
    registrasi_indibiz?: boolean | PaketCountOutputTypeCountRegistrasi_indibizArgs
  }

  // Custom InputTypes
  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketCountOutputType
     */
    select?: PaketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeCountPaket_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketKategoriWhereInput
  }

  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeCountPaket_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketPromoWhereInput
  }

  /**
   * PaketCountOutputType without action
   */
  export type PaketCountOutputTypeCountRegistrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrasiIndibizWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    registrasi_indibiz: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrasi_indibiz?: boolean | SalesCountOutputTypeCountRegistrasi_indibizArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountRegistrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrasiIndibizWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AuthMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: string
    username: string
    password: string
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["auth"]>

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auth model
   */
  interface AuthFieldRefs {
    readonly id: FieldRef<"Auth", 'String'>
    readonly username: FieldRef<"Auth", 'String'>
    readonly password: FieldRef<"Auth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriMinAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: string
    nama: string
    created_at: Date
    updated_at: Date
    _count: KategoriCountAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
    paket_categories?: boolean | Kategori$paket_categoriesArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "created_at" | "updated_at", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_categories?: boolean | Kategori$paket_categoriesArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      paket_categories: Prisma.$PaketKategoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket_categories<T extends Kategori$paket_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$paket_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'String'>
    readonly nama: FieldRef<"Kategori", 'String'>
    readonly created_at: FieldRef<"Kategori", 'DateTime'>
    readonly updated_at: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.paket_categories
   */
  export type Kategori$paket_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    where?: PaketKategoriWhereInput
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    cursor?: PaketKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaketKategoriScalarFieldEnum | PaketKategoriScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Agenc
   */

  export type AggregateAgenc = {
    _count: AgencCountAggregateOutputType | null
    _min: AgencMinAggregateOutputType | null
    _max: AgencMaxAggregateOutputType | null
  }

  export type AgencMinAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AgencMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AgencCountAggregateOutputType = {
    id: number
    nama: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AgencMinAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
  }

  export type AgencMaxAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
  }

  export type AgencCountAggregateInputType = {
    id?: true
    nama?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AgencAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenc to aggregate.
     */
    where?: AgencWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencs to fetch.
     */
    orderBy?: AgencOrderByWithRelationInput | AgencOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgencWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agencs
    **/
    _count?: true | AgencCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgencMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgencMaxAggregateInputType
  }

  export type GetAgencAggregateType<T extends AgencAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenc[P]>
      : GetScalarType<T[P], AggregateAgenc[P]>
  }




  export type AgencGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgencWhereInput
    orderBy?: AgencOrderByWithAggregationInput | AgencOrderByWithAggregationInput[]
    by: AgencScalarFieldEnum[] | AgencScalarFieldEnum
    having?: AgencScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgencCountAggregateInputType | true
    _min?: AgencMinAggregateInputType
    _max?: AgencMaxAggregateInputType
  }

  export type AgencGroupByOutputType = {
    id: string
    nama: string
    created_at: Date
    updated_at: Date
    _count: AgencCountAggregateOutputType | null
    _min: AgencMinAggregateOutputType | null
    _max: AgencMaxAggregateOutputType | null
  }

  type GetAgencGroupByPayload<T extends AgencGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgencGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgencGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgencGroupByOutputType[P]>
            : GetScalarType<T[P], AgencGroupByOutputType[P]>
        }
      >
    >


  export type AgencSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
    sales?: boolean | Agenc$salesArgs<ExtArgs>
    _count?: boolean | AgencCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenc"]>

  export type AgencSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["agenc"]>

  export type AgencSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["agenc"]>

  export type AgencSelectScalar = {
    id?: boolean
    nama?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AgencOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "created_at" | "updated_at", ExtArgs["result"]["agenc"]>
  export type AgencInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Agenc$salesArgs<ExtArgs>
    _count?: boolean | AgencCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgencIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgencIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgencPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenc"
    objects: {
      sales: Prisma.$SalesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["agenc"]>
    composites: {}
  }

  type AgencGetPayload<S extends boolean | null | undefined | AgencDefaultArgs> = $Result.GetResult<Prisma.$AgencPayload, S>

  type AgencCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgencFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgencCountAggregateInputType | true
    }

  export interface AgencDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenc'], meta: { name: 'Agenc' } }
    /**
     * Find zero or one Agenc that matches the filter.
     * @param {AgencFindUniqueArgs} args - Arguments to find a Agenc
     * @example
     * // Get one Agenc
     * const agenc = await prisma.agenc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgencFindUniqueArgs>(args: SelectSubset<T, AgencFindUniqueArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgencFindUniqueOrThrowArgs} args - Arguments to find a Agenc
     * @example
     * // Get one Agenc
     * const agenc = await prisma.agenc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgencFindUniqueOrThrowArgs>(args: SelectSubset<T, AgencFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencFindFirstArgs} args - Arguments to find a Agenc
     * @example
     * // Get one Agenc
     * const agenc = await prisma.agenc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgencFindFirstArgs>(args?: SelectSubset<T, AgencFindFirstArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencFindFirstOrThrowArgs} args - Arguments to find a Agenc
     * @example
     * // Get one Agenc
     * const agenc = await prisma.agenc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgencFindFirstOrThrowArgs>(args?: SelectSubset<T, AgencFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agencs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agencs
     * const agencs = await prisma.agenc.findMany()
     * 
     * // Get first 10 Agencs
     * const agencs = await prisma.agenc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agencWithIdOnly = await prisma.agenc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgencFindManyArgs>(args?: SelectSubset<T, AgencFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenc.
     * @param {AgencCreateArgs} args - Arguments to create a Agenc.
     * @example
     * // Create one Agenc
     * const Agenc = await prisma.agenc.create({
     *   data: {
     *     // ... data to create a Agenc
     *   }
     * })
     * 
     */
    create<T extends AgencCreateArgs>(args: SelectSubset<T, AgencCreateArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agencs.
     * @param {AgencCreateManyArgs} args - Arguments to create many Agencs.
     * @example
     * // Create many Agencs
     * const agenc = await prisma.agenc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgencCreateManyArgs>(args?: SelectSubset<T, AgencCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agencs and returns the data saved in the database.
     * @param {AgencCreateManyAndReturnArgs} args - Arguments to create many Agencs.
     * @example
     * // Create many Agencs
     * const agenc = await prisma.agenc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agencs and only return the `id`
     * const agencWithIdOnly = await prisma.agenc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgencCreateManyAndReturnArgs>(args?: SelectSubset<T, AgencCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenc.
     * @param {AgencDeleteArgs} args - Arguments to delete one Agenc.
     * @example
     * // Delete one Agenc
     * const Agenc = await prisma.agenc.delete({
     *   where: {
     *     // ... filter to delete one Agenc
     *   }
     * })
     * 
     */
    delete<T extends AgencDeleteArgs>(args: SelectSubset<T, AgencDeleteArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenc.
     * @param {AgencUpdateArgs} args - Arguments to update one Agenc.
     * @example
     * // Update one Agenc
     * const agenc = await prisma.agenc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgencUpdateArgs>(args: SelectSubset<T, AgencUpdateArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agencs.
     * @param {AgencDeleteManyArgs} args - Arguments to filter Agencs to delete.
     * @example
     * // Delete a few Agencs
     * const { count } = await prisma.agenc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgencDeleteManyArgs>(args?: SelectSubset<T, AgencDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agencs
     * const agenc = await prisma.agenc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgencUpdateManyArgs>(args: SelectSubset<T, AgencUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agencs and returns the data updated in the database.
     * @param {AgencUpdateManyAndReturnArgs} args - Arguments to update many Agencs.
     * @example
     * // Update many Agencs
     * const agenc = await prisma.agenc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agencs and only return the `id`
     * const agencWithIdOnly = await prisma.agenc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgencUpdateManyAndReturnArgs>(args: SelectSubset<T, AgencUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenc.
     * @param {AgencUpsertArgs} args - Arguments to update or create a Agenc.
     * @example
     * // Update or create a Agenc
     * const agenc = await prisma.agenc.upsert({
     *   create: {
     *     // ... data to create a Agenc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenc we want to update
     *   }
     * })
     */
    upsert<T extends AgencUpsertArgs>(args: SelectSubset<T, AgencUpsertArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agencs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencCountArgs} args - Arguments to filter Agencs to count.
     * @example
     * // Count the number of Agencs
     * const count = await prisma.agenc.count({
     *   where: {
     *     // ... the filter for the Agencs we want to count
     *   }
     * })
    **/
    count<T extends AgencCountArgs>(
      args?: Subset<T, AgencCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgencCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgencAggregateArgs>(args: Subset<T, AgencAggregateArgs>): Prisma.PrismaPromise<GetAgencAggregateType<T>>

    /**
     * Group by Agenc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgencGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgencGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgencGroupByArgs['orderBy'] }
        : { orderBy?: AgencGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgencGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgencGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenc model
   */
  readonly fields: AgencFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgencClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Agenc$salesArgs<ExtArgs> = {}>(args?: Subset<T, Agenc$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agenc model
   */
  interface AgencFieldRefs {
    readonly id: FieldRef<"Agenc", 'String'>
    readonly nama: FieldRef<"Agenc", 'String'>
    readonly created_at: FieldRef<"Agenc", 'DateTime'>
    readonly updated_at: FieldRef<"Agenc", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agenc findUnique
   */
  export type AgencFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter, which Agenc to fetch.
     */
    where: AgencWhereUniqueInput
  }

  /**
   * Agenc findUniqueOrThrow
   */
  export type AgencFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter, which Agenc to fetch.
     */
    where: AgencWhereUniqueInput
  }

  /**
   * Agenc findFirst
   */
  export type AgencFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter, which Agenc to fetch.
     */
    where?: AgencWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencs to fetch.
     */
    orderBy?: AgencOrderByWithRelationInput | AgencOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencs.
     */
    cursor?: AgencWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencs.
     */
    distinct?: AgencScalarFieldEnum | AgencScalarFieldEnum[]
  }

  /**
   * Agenc findFirstOrThrow
   */
  export type AgencFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter, which Agenc to fetch.
     */
    where?: AgencWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencs to fetch.
     */
    orderBy?: AgencOrderByWithRelationInput | AgencOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agencs.
     */
    cursor?: AgencWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agencs.
     */
    distinct?: AgencScalarFieldEnum | AgencScalarFieldEnum[]
  }

  /**
   * Agenc findMany
   */
  export type AgencFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter, which Agencs to fetch.
     */
    where?: AgencWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agencs to fetch.
     */
    orderBy?: AgencOrderByWithRelationInput | AgencOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agencs.
     */
    cursor?: AgencWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agencs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agencs.
     */
    skip?: number
    distinct?: AgencScalarFieldEnum | AgencScalarFieldEnum[]
  }

  /**
   * Agenc create
   */
  export type AgencCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * The data needed to create a Agenc.
     */
    data: XOR<AgencCreateInput, AgencUncheckedCreateInput>
  }

  /**
   * Agenc createMany
   */
  export type AgencCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agencs.
     */
    data: AgencCreateManyInput | AgencCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenc createManyAndReturn
   */
  export type AgencCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * The data used to create many Agencs.
     */
    data: AgencCreateManyInput | AgencCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenc update
   */
  export type AgencUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * The data needed to update a Agenc.
     */
    data: XOR<AgencUpdateInput, AgencUncheckedUpdateInput>
    /**
     * Choose, which Agenc to update.
     */
    where: AgencWhereUniqueInput
  }

  /**
   * Agenc updateMany
   */
  export type AgencUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agencs.
     */
    data: XOR<AgencUpdateManyMutationInput, AgencUncheckedUpdateManyInput>
    /**
     * Filter which Agencs to update
     */
    where?: AgencWhereInput
    /**
     * Limit how many Agencs to update.
     */
    limit?: number
  }

  /**
   * Agenc updateManyAndReturn
   */
  export type AgencUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * The data used to update Agencs.
     */
    data: XOR<AgencUpdateManyMutationInput, AgencUncheckedUpdateManyInput>
    /**
     * Filter which Agencs to update
     */
    where?: AgencWhereInput
    /**
     * Limit how many Agencs to update.
     */
    limit?: number
  }

  /**
   * Agenc upsert
   */
  export type AgencUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * The filter to search for the Agenc to update in case it exists.
     */
    where: AgencWhereUniqueInput
    /**
     * In case the Agenc found by the `where` argument doesn't exist, create a new Agenc with this data.
     */
    create: XOR<AgencCreateInput, AgencUncheckedCreateInput>
    /**
     * In case the Agenc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgencUpdateInput, AgencUncheckedUpdateInput>
  }

  /**
   * Agenc delete
   */
  export type AgencDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
    /**
     * Filter which Agenc to delete.
     */
    where: AgencWhereUniqueInput
  }

  /**
   * Agenc deleteMany
   */
  export type AgencDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agencs to delete
     */
    where?: AgencWhereInput
    /**
     * Limit how many Agencs to delete.
     */
    limit?: number
  }

  /**
   * Agenc.sales
   */
  export type Agenc$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Agenc without action
   */
  export type AgencDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenc
     */
    select?: AgencSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenc
     */
    omit?: AgencOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgencInclude<ExtArgs> | null
  }


  /**
   * Model Datel
   */

  export type AggregateDatel = {
    _count: DatelCountAggregateOutputType | null
    _min: DatelMinAggregateOutputType | null
    _max: DatelMaxAggregateOutputType | null
  }

  export type DatelMinAggregateOutputType = {
    id: string | null
    kode_sto: string | null
    nama: string | null
    categori: $Enums.KategoriDatel | null
    wilayah: string | null
    sub_area: $Enums.SubArea | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DatelMaxAggregateOutputType = {
    id: string | null
    kode_sto: string | null
    nama: string | null
    categori: $Enums.KategoriDatel | null
    wilayah: string | null
    sub_area: $Enums.SubArea | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DatelCountAggregateOutputType = {
    id: number
    kode_sto: number
    nama: number
    categori: number
    wilayah: number
    sub_area: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DatelMinAggregateInputType = {
    id?: true
    kode_sto?: true
    nama?: true
    categori?: true
    wilayah?: true
    sub_area?: true
    created_at?: true
    updated_at?: true
  }

  export type DatelMaxAggregateInputType = {
    id?: true
    kode_sto?: true
    nama?: true
    categori?: true
    wilayah?: true
    sub_area?: true
    created_at?: true
    updated_at?: true
  }

  export type DatelCountAggregateInputType = {
    id?: true
    kode_sto?: true
    nama?: true
    categori?: true
    wilayah?: true
    sub_area?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DatelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datel to aggregate.
     */
    where?: DatelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datels to fetch.
     */
    orderBy?: DatelOrderByWithRelationInput | DatelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datels
    **/
    _count?: true | DatelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatelMaxAggregateInputType
  }

  export type GetDatelAggregateType<T extends DatelAggregateArgs> = {
        [P in keyof T & keyof AggregateDatel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatel[P]>
      : GetScalarType<T[P], AggregateDatel[P]>
  }




  export type DatelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatelWhereInput
    orderBy?: DatelOrderByWithAggregationInput | DatelOrderByWithAggregationInput[]
    by: DatelScalarFieldEnum[] | DatelScalarFieldEnum
    having?: DatelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatelCountAggregateInputType | true
    _min?: DatelMinAggregateInputType
    _max?: DatelMaxAggregateInputType
  }

  export type DatelGroupByOutputType = {
    id: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at: Date
    updated_at: Date
    _count: DatelCountAggregateOutputType | null
    _min: DatelMinAggregateOutputType | null
    _max: DatelMaxAggregateOutputType | null
  }

  type GetDatelGroupByPayload<T extends DatelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatelGroupByOutputType[P]>
            : GetScalarType<T[P], DatelGroupByOutputType[P]>
        }
      >
    >


  export type DatelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_sto?: boolean
    nama?: boolean
    categori?: boolean
    wilayah?: boolean
    sub_area?: boolean
    created_at?: boolean
    updated_at?: boolean
    sales?: boolean | Datel$salesArgs<ExtArgs>
    registrasi_indibiz?: boolean | Datel$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | DatelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datel"]>

  export type DatelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_sto?: boolean
    nama?: boolean
    categori?: boolean
    wilayah?: boolean
    sub_area?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["datel"]>

  export type DatelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_sto?: boolean
    nama?: boolean
    categori?: boolean
    wilayah?: boolean
    sub_area?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["datel"]>

  export type DatelSelectScalar = {
    id?: boolean
    kode_sto?: boolean
    nama?: boolean
    categori?: boolean
    wilayah?: boolean
    sub_area?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DatelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_sto" | "nama" | "categori" | "wilayah" | "sub_area" | "created_at" | "updated_at", ExtArgs["result"]["datel"]>
  export type DatelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Datel$salesArgs<ExtArgs>
    registrasi_indibiz?: boolean | Datel$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | DatelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DatelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DatelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Datel"
    objects: {
      sales: Prisma.$SalesPayload<ExtArgs>[]
      registrasi_indibiz: Prisma.$RegistrasiIndibizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kode_sto: string
      nama: string
      categori: $Enums.KategoriDatel
      wilayah: string
      sub_area: $Enums.SubArea
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["datel"]>
    composites: {}
  }

  type DatelGetPayload<S extends boolean | null | undefined | DatelDefaultArgs> = $Result.GetResult<Prisma.$DatelPayload, S>

  type DatelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatelCountAggregateInputType | true
    }

  export interface DatelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Datel'], meta: { name: 'Datel' } }
    /**
     * Find zero or one Datel that matches the filter.
     * @param {DatelFindUniqueArgs} args - Arguments to find a Datel
     * @example
     * // Get one Datel
     * const datel = await prisma.datel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatelFindUniqueArgs>(args: SelectSubset<T, DatelFindUniqueArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatelFindUniqueOrThrowArgs} args - Arguments to find a Datel
     * @example
     * // Get one Datel
     * const datel = await prisma.datel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatelFindUniqueOrThrowArgs>(args: SelectSubset<T, DatelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelFindFirstArgs} args - Arguments to find a Datel
     * @example
     * // Get one Datel
     * const datel = await prisma.datel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatelFindFirstArgs>(args?: SelectSubset<T, DatelFindFirstArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelFindFirstOrThrowArgs} args - Arguments to find a Datel
     * @example
     * // Get one Datel
     * const datel = await prisma.datel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatelFindFirstOrThrowArgs>(args?: SelectSubset<T, DatelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datels
     * const datels = await prisma.datel.findMany()
     * 
     * // Get first 10 Datels
     * const datels = await prisma.datel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datelWithIdOnly = await prisma.datel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatelFindManyArgs>(args?: SelectSubset<T, DatelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datel.
     * @param {DatelCreateArgs} args - Arguments to create a Datel.
     * @example
     * // Create one Datel
     * const Datel = await prisma.datel.create({
     *   data: {
     *     // ... data to create a Datel
     *   }
     * })
     * 
     */
    create<T extends DatelCreateArgs>(args: SelectSubset<T, DatelCreateArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datels.
     * @param {DatelCreateManyArgs} args - Arguments to create many Datels.
     * @example
     * // Create many Datels
     * const datel = await prisma.datel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatelCreateManyArgs>(args?: SelectSubset<T, DatelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datels and returns the data saved in the database.
     * @param {DatelCreateManyAndReturnArgs} args - Arguments to create many Datels.
     * @example
     * // Create many Datels
     * const datel = await prisma.datel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datels and only return the `id`
     * const datelWithIdOnly = await prisma.datel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatelCreateManyAndReturnArgs>(args?: SelectSubset<T, DatelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Datel.
     * @param {DatelDeleteArgs} args - Arguments to delete one Datel.
     * @example
     * // Delete one Datel
     * const Datel = await prisma.datel.delete({
     *   where: {
     *     // ... filter to delete one Datel
     *   }
     * })
     * 
     */
    delete<T extends DatelDeleteArgs>(args: SelectSubset<T, DatelDeleteArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datel.
     * @param {DatelUpdateArgs} args - Arguments to update one Datel.
     * @example
     * // Update one Datel
     * const datel = await prisma.datel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatelUpdateArgs>(args: SelectSubset<T, DatelUpdateArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datels.
     * @param {DatelDeleteManyArgs} args - Arguments to filter Datels to delete.
     * @example
     * // Delete a few Datels
     * const { count } = await prisma.datel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatelDeleteManyArgs>(args?: SelectSubset<T, DatelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datels
     * const datel = await prisma.datel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatelUpdateManyArgs>(args: SelectSubset<T, DatelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datels and returns the data updated in the database.
     * @param {DatelUpdateManyAndReturnArgs} args - Arguments to update many Datels.
     * @example
     * // Update many Datels
     * const datel = await prisma.datel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datels and only return the `id`
     * const datelWithIdOnly = await prisma.datel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatelUpdateManyAndReturnArgs>(args: SelectSubset<T, DatelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Datel.
     * @param {DatelUpsertArgs} args - Arguments to update or create a Datel.
     * @example
     * // Update or create a Datel
     * const datel = await prisma.datel.upsert({
     *   create: {
     *     // ... data to create a Datel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datel we want to update
     *   }
     * })
     */
    upsert<T extends DatelUpsertArgs>(args: SelectSubset<T, DatelUpsertArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelCountArgs} args - Arguments to filter Datels to count.
     * @example
     * // Count the number of Datels
     * const count = await prisma.datel.count({
     *   where: {
     *     // ... the filter for the Datels we want to count
     *   }
     * })
    **/
    count<T extends DatelCountArgs>(
      args?: Subset<T, DatelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatelAggregateArgs>(args: Subset<T, DatelAggregateArgs>): Prisma.PrismaPromise<GetDatelAggregateType<T>>

    /**
     * Group by Datel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatelGroupByArgs['orderBy'] }
        : { orderBy?: DatelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Datel model
   */
  readonly fields: DatelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Datel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Datel$salesArgs<ExtArgs> = {}>(args?: Subset<T, Datel$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrasi_indibiz<T extends Datel$registrasi_indibizArgs<ExtArgs> = {}>(args?: Subset<T, Datel$registrasi_indibizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Datel model
   */
  interface DatelFieldRefs {
    readonly id: FieldRef<"Datel", 'String'>
    readonly kode_sto: FieldRef<"Datel", 'String'>
    readonly nama: FieldRef<"Datel", 'String'>
    readonly categori: FieldRef<"Datel", 'KategoriDatel'>
    readonly wilayah: FieldRef<"Datel", 'String'>
    readonly sub_area: FieldRef<"Datel", 'SubArea'>
    readonly created_at: FieldRef<"Datel", 'DateTime'>
    readonly updated_at: FieldRef<"Datel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Datel findUnique
   */
  export type DatelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter, which Datel to fetch.
     */
    where: DatelWhereUniqueInput
  }

  /**
   * Datel findUniqueOrThrow
   */
  export type DatelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter, which Datel to fetch.
     */
    where: DatelWhereUniqueInput
  }

  /**
   * Datel findFirst
   */
  export type DatelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter, which Datel to fetch.
     */
    where?: DatelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datels to fetch.
     */
    orderBy?: DatelOrderByWithRelationInput | DatelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datels.
     */
    cursor?: DatelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datels.
     */
    distinct?: DatelScalarFieldEnum | DatelScalarFieldEnum[]
  }

  /**
   * Datel findFirstOrThrow
   */
  export type DatelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter, which Datel to fetch.
     */
    where?: DatelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datels to fetch.
     */
    orderBy?: DatelOrderByWithRelationInput | DatelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datels.
     */
    cursor?: DatelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datels.
     */
    distinct?: DatelScalarFieldEnum | DatelScalarFieldEnum[]
  }

  /**
   * Datel findMany
   */
  export type DatelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter, which Datels to fetch.
     */
    where?: DatelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datels to fetch.
     */
    orderBy?: DatelOrderByWithRelationInput | DatelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datels.
     */
    cursor?: DatelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datels.
     */
    skip?: number
    distinct?: DatelScalarFieldEnum | DatelScalarFieldEnum[]
  }

  /**
   * Datel create
   */
  export type DatelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * The data needed to create a Datel.
     */
    data: XOR<DatelCreateInput, DatelUncheckedCreateInput>
  }

  /**
   * Datel createMany
   */
  export type DatelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datels.
     */
    data: DatelCreateManyInput | DatelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Datel createManyAndReturn
   */
  export type DatelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * The data used to create many Datels.
     */
    data: DatelCreateManyInput | DatelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Datel update
   */
  export type DatelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * The data needed to update a Datel.
     */
    data: XOR<DatelUpdateInput, DatelUncheckedUpdateInput>
    /**
     * Choose, which Datel to update.
     */
    where: DatelWhereUniqueInput
  }

  /**
   * Datel updateMany
   */
  export type DatelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datels.
     */
    data: XOR<DatelUpdateManyMutationInput, DatelUncheckedUpdateManyInput>
    /**
     * Filter which Datels to update
     */
    where?: DatelWhereInput
    /**
     * Limit how many Datels to update.
     */
    limit?: number
  }

  /**
   * Datel updateManyAndReturn
   */
  export type DatelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * The data used to update Datels.
     */
    data: XOR<DatelUpdateManyMutationInput, DatelUncheckedUpdateManyInput>
    /**
     * Filter which Datels to update
     */
    where?: DatelWhereInput
    /**
     * Limit how many Datels to update.
     */
    limit?: number
  }

  /**
   * Datel upsert
   */
  export type DatelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * The filter to search for the Datel to update in case it exists.
     */
    where: DatelWhereUniqueInput
    /**
     * In case the Datel found by the `where` argument doesn't exist, create a new Datel with this data.
     */
    create: XOR<DatelCreateInput, DatelUncheckedCreateInput>
    /**
     * In case the Datel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatelUpdateInput, DatelUncheckedUpdateInput>
  }

  /**
   * Datel delete
   */
  export type DatelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
    /**
     * Filter which Datel to delete.
     */
    where: DatelWhereUniqueInput
  }

  /**
   * Datel deleteMany
   */
  export type DatelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datels to delete
     */
    where?: DatelWhereInput
    /**
     * Limit how many Datels to delete.
     */
    limit?: number
  }

  /**
   * Datel.sales
   */
  export type Datel$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Datel.registrasi_indibiz
   */
  export type Datel$registrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    where?: RegistrasiIndibizWhereInput
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    cursor?: RegistrasiIndibizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * Datel without action
   */
  export type DatelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Datel
     */
    select?: DatelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Datel
     */
    omit?: DatelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatelInclude<ExtArgs> | null
  }


  /**
   * Model Promo
   */

  export type AggregatePromo = {
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  export type PromoAvgAggregateOutputType = {
    diskon: Decimal | null
  }

  export type PromoSumAggregateOutputType = {
    diskon: Decimal | null
  }

  export type PromoMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    jenis: $Enums.JenisPromo | null
    diskon: Decimal | null
    mulai: Date | null
    akhir: Date | null
    is_global: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PromoMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    jenis: $Enums.JenisPromo | null
    diskon: Decimal | null
    mulai: Date | null
    akhir: Date | null
    is_global: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PromoCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    jenis: number
    diskon: number
    mulai: number
    akhir: number
    is_global: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PromoAvgAggregateInputType = {
    diskon?: true
  }

  export type PromoSumAggregateInputType = {
    diskon?: true
  }

  export type PromoMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    jenis?: true
    diskon?: true
    mulai?: true
    akhir?: true
    is_global?: true
    created_at?: true
    updated_at?: true
  }

  export type PromoMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    jenis?: true
    diskon?: true
    mulai?: true
    akhir?: true
    is_global?: true
    created_at?: true
    updated_at?: true
  }

  export type PromoCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    jenis?: true
    diskon?: true
    mulai?: true
    akhir?: true
    is_global?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo to aggregate.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promos
    **/
    _count?: true | PromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoMaxAggregateInputType
  }

  export type GetPromoAggregateType<T extends PromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo[P]>
      : GetScalarType<T[P], AggregatePromo[P]>
  }




  export type PromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoWhereInput
    orderBy?: PromoOrderByWithAggregationInput | PromoOrderByWithAggregationInput[]
    by: PromoScalarFieldEnum[] | PromoScalarFieldEnum
    having?: PromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCountAggregateInputType | true
    _avg?: PromoAvgAggregateInputType
    _sum?: PromoSumAggregateInputType
    _min?: PromoMinAggregateInputType
    _max?: PromoMaxAggregateInputType
  }

  export type PromoGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal
    mulai: Date
    akhir: Date
    is_global: boolean
    created_at: Date
    updated_at: Date
    _count: PromoCountAggregateOutputType | null
    _avg: PromoAvgAggregateOutputType | null
    _sum: PromoSumAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  type GetPromoGroupByPayload<T extends PromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoGroupByOutputType[P]>
            : GetScalarType<T[P], PromoGroupByOutputType[P]>
        }
      >
    >


  export type PromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    jenis?: boolean
    diskon?: boolean
    mulai?: boolean
    akhir?: boolean
    is_global?: boolean
    created_at?: boolean
    updated_at?: boolean
    paket_promos?: boolean | Promo$paket_promosArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    jenis?: boolean
    diskon?: boolean
    mulai?: boolean
    akhir?: boolean
    is_global?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    jenis?: boolean
    diskon?: boolean
    mulai?: boolean
    akhir?: boolean
    is_global?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    jenis?: boolean
    diskon?: boolean
    mulai?: boolean
    akhir?: boolean
    is_global?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "jenis" | "diskon" | "mulai" | "akhir" | "is_global" | "created_at" | "updated_at", ExtArgs["result"]["promo"]>
  export type PromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_promos?: boolean | Promo$paket_promosArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promo"
    objects: {
      paket_promos: Prisma.$PaketPromoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string
      jenis: $Enums.JenisPromo
      diskon: Prisma.Decimal
      mulai: Date
      akhir: Date
      is_global: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["promo"]>
    composites: {}
  }

  type PromoGetPayload<S extends boolean | null | undefined | PromoDefaultArgs> = $Result.GetResult<Prisma.$PromoPayload, S>

  type PromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCountAggregateInputType | true
    }

  export interface PromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promo'], meta: { name: 'Promo' } }
    /**
     * Find zero or one Promo that matches the filter.
     * @param {PromoFindUniqueArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoFindUniqueArgs>(args: SelectSubset<T, PromoFindUniqueArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoFindUniqueOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoFindFirstArgs>(args?: SelectSubset<T, PromoFindFirstArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promo.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoWithIdOnly = await prisma.promo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoFindManyArgs>(args?: SelectSubset<T, PromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promo.
     * @param {PromoCreateArgs} args - Arguments to create a Promo.
     * @example
     * // Create one Promo
     * const Promo = await prisma.promo.create({
     *   data: {
     *     // ... data to create a Promo
     *   }
     * })
     * 
     */
    create<T extends PromoCreateArgs>(args: SelectSubset<T, PromoCreateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promos.
     * @param {PromoCreateManyArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCreateManyArgs>(args?: SelectSubset<T, PromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promos and returns the data saved in the database.
     * @param {PromoCreateManyAndReturnArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promo.
     * @param {PromoDeleteArgs} args - Arguments to delete one Promo.
     * @example
     * // Delete one Promo
     * const Promo = await prisma.promo.delete({
     *   where: {
     *     // ... filter to delete one Promo
     *   }
     * })
     * 
     */
    delete<T extends PromoDeleteArgs>(args: SelectSubset<T, PromoDeleteArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promo.
     * @param {PromoUpdateArgs} args - Arguments to update one Promo.
     * @example
     * // Update one Promo
     * const promo = await prisma.promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoUpdateArgs>(args: SelectSubset<T, PromoUpdateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promos.
     * @param {PromoDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoDeleteManyArgs>(args?: SelectSubset<T, PromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoUpdateManyArgs>(args: SelectSubset<T, PromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos and returns the data updated in the database.
     * @param {PromoUpdateManyAndReturnArgs} args - Arguments to update many Promos.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromoUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promo.
     * @param {PromoUpsertArgs} args - Arguments to update or create a Promo.
     * @example
     * // Update or create a Promo
     * const promo = await prisma.promo.upsert({
     *   create: {
     *     // ... data to create a Promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo we want to update
     *   }
     * })
     */
    upsert<T extends PromoUpsertArgs>(args: SelectSubset<T, PromoUpsertArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promo.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends PromoCountArgs>(
      args?: Subset<T, PromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoAggregateArgs>(args: Subset<T, PromoAggregateArgs>): Prisma.PrismaPromise<GetPromoAggregateType<T>>

    /**
     * Group by Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoGroupByArgs['orderBy'] }
        : { orderBy?: PromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promo model
   */
  readonly fields: PromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket_promos<T extends Promo$paket_promosArgs<ExtArgs> = {}>(args?: Subset<T, Promo$paket_promosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promo model
   */
  interface PromoFieldRefs {
    readonly id: FieldRef<"Promo", 'String'>
    readonly nama: FieldRef<"Promo", 'String'>
    readonly deskripsi: FieldRef<"Promo", 'String'>
    readonly jenis: FieldRef<"Promo", 'JenisPromo'>
    readonly diskon: FieldRef<"Promo", 'Decimal'>
    readonly mulai: FieldRef<"Promo", 'DateTime'>
    readonly akhir: FieldRef<"Promo", 'DateTime'>
    readonly is_global: FieldRef<"Promo", 'Boolean'>
    readonly created_at: FieldRef<"Promo", 'DateTime'>
    readonly updated_at: FieldRef<"Promo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promo findUnique
   */
  export type PromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findUniqueOrThrow
   */
  export type PromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findFirst
   */
  export type PromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findFirstOrThrow
   */
  export type PromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findMany
   */
  export type PromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promos to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo create
   */
  export type PromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to create a Promo.
     */
    data: XOR<PromoCreateInput, PromoUncheckedCreateInput>
  }

  /**
   * Promo createMany
   */
  export type PromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo createManyAndReturn
   */
  export type PromoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo update
   */
  export type PromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to update a Promo.
     */
    data: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
    /**
     * Choose, which Promo to update.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo updateMany
   */
  export type PromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo updateManyAndReturn
   */
  export type PromoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo upsert
   */
  export type PromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The filter to search for the Promo to update in case it exists.
     */
    where: PromoWhereUniqueInput
    /**
     * In case the Promo found by the `where` argument doesn't exist, create a new Promo with this data.
     */
    create: XOR<PromoCreateInput, PromoUncheckedCreateInput>
    /**
     * In case the Promo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
  }

  /**
   * Promo delete
   */
  export type PromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter which Promo to delete.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo deleteMany
   */
  export type PromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promos to delete
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to delete.
     */
    limit?: number
  }

  /**
   * Promo.paket_promos
   */
  export type Promo$paket_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    where?: PaketPromoWhereInput
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    cursor?: PaketPromoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaketPromoScalarFieldEnum | PaketPromoScalarFieldEnum[]
  }

  /**
   * Promo without action
   */
  export type PromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
  }


  /**
   * Model Paket
   */

  export type AggregatePaket = {
    _count: PaketCountAggregateOutputType | null
    _avg: PaketAvgAggregateOutputType | null
    _sum: PaketSumAggregateOutputType | null
    _min: PaketMinAggregateOutputType | null
    _max: PaketMaxAggregateOutputType | null
  }

  export type PaketAvgAggregateOutputType = {
    bandwith: number | null
    price: Decimal | null
    price_psb: Decimal | null
    ppn: number | null
    final_price: Decimal | null
  }

  export type PaketSumAggregateOutputType = {
    bandwith: number | null
    price: Decimal | null
    price_psb: Decimal | null
    ppn: number | null
    final_price: Decimal | null
  }

  export type PaketMinAggregateOutputType = {
    id: string | null
    nama: string | null
    bandwith: number | null
    price: Decimal | null
    price_psb: Decimal | null
    ppn: number | null
    final_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaketMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    bandwith: number | null
    price: Decimal | null
    price_psb: Decimal | null
    ppn: number | null
    final_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaketCountAggregateOutputType = {
    id: number
    nama: number
    bandwith: number
    price: number
    price_psb: number
    ppn: number
    final_price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaketAvgAggregateInputType = {
    bandwith?: true
    price?: true
    price_psb?: true
    ppn?: true
    final_price?: true
  }

  export type PaketSumAggregateInputType = {
    bandwith?: true
    price?: true
    price_psb?: true
    ppn?: true
    final_price?: true
  }

  export type PaketMinAggregateInputType = {
    id?: true
    nama?: true
    bandwith?: true
    price?: true
    price_psb?: true
    ppn?: true
    final_price?: true
    created_at?: true
    updated_at?: true
  }

  export type PaketMaxAggregateInputType = {
    id?: true
    nama?: true
    bandwith?: true
    price?: true
    price_psb?: true
    ppn?: true
    final_price?: true
    created_at?: true
    updated_at?: true
  }

  export type PaketCountAggregateInputType = {
    id?: true
    nama?: true
    bandwith?: true
    price?: true
    price_psb?: true
    ppn?: true
    final_price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paket to aggregate.
     */
    where?: PaketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakets to fetch.
     */
    orderBy?: PaketOrderByWithRelationInput | PaketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pakets
    **/
    _count?: true | PaketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaketMaxAggregateInputType
  }

  export type GetPaketAggregateType<T extends PaketAggregateArgs> = {
        [P in keyof T & keyof AggregatePaket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaket[P]>
      : GetScalarType<T[P], AggregatePaket[P]>
  }




  export type PaketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketWhereInput
    orderBy?: PaketOrderByWithAggregationInput | PaketOrderByWithAggregationInput[]
    by: PaketScalarFieldEnum[] | PaketScalarFieldEnum
    having?: PaketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaketCountAggregateInputType | true
    _avg?: PaketAvgAggregateInputType
    _sum?: PaketSumAggregateInputType
    _min?: PaketMinAggregateInputType
    _max?: PaketMaxAggregateInputType
  }

  export type PaketGroupByOutputType = {
    id: string
    nama: string
    bandwith: number
    price: Decimal
    price_psb: Decimal
    ppn: number
    final_price: Decimal
    created_at: Date
    updated_at: Date
    _count: PaketCountAggregateOutputType | null
    _avg: PaketAvgAggregateOutputType | null
    _sum: PaketSumAggregateOutputType | null
    _min: PaketMinAggregateOutputType | null
    _max: PaketMaxAggregateOutputType | null
  }

  type GetPaketGroupByPayload<T extends PaketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaketGroupByOutputType[P]>
            : GetScalarType<T[P], PaketGroupByOutputType[P]>
        }
      >
    >


  export type PaketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    bandwith?: boolean
    price?: boolean
    price_psb?: boolean
    ppn?: boolean
    final_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    paket_categories?: boolean | Paket$paket_categoriesArgs<ExtArgs>
    paket_promos?: boolean | Paket$paket_promosArgs<ExtArgs>
    registrasi_indibiz?: boolean | Paket$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | PaketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paket"]>

  export type PaketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    bandwith?: boolean
    price?: boolean
    price_psb?: boolean
    ppn?: boolean
    final_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paket"]>

  export type PaketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    bandwith?: boolean
    price?: boolean
    price_psb?: boolean
    ppn?: boolean
    final_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paket"]>

  export type PaketSelectScalar = {
    id?: boolean
    nama?: boolean
    bandwith?: boolean
    price?: boolean
    price_psb?: boolean
    ppn?: boolean
    final_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "bandwith" | "price" | "price_psb" | "ppn" | "final_price" | "created_at" | "updated_at", ExtArgs["result"]["paket"]>
  export type PaketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket_categories?: boolean | Paket$paket_categoriesArgs<ExtArgs>
    paket_promos?: boolean | Paket$paket_promosArgs<ExtArgs>
    registrasi_indibiz?: boolean | Paket$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | PaketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paket"
    objects: {
      paket_categories: Prisma.$PaketKategoriPayload<ExtArgs>[]
      paket_promos: Prisma.$PaketPromoPayload<ExtArgs>[]
      registrasi_indibiz: Prisma.$RegistrasiIndibizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      bandwith: number
      price: Prisma.Decimal
      price_psb: Prisma.Decimal
      ppn: number
      final_price: Prisma.Decimal
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paket"]>
    composites: {}
  }

  type PaketGetPayload<S extends boolean | null | undefined | PaketDefaultArgs> = $Result.GetResult<Prisma.$PaketPayload, S>

  type PaketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaketCountAggregateInputType | true
    }

  export interface PaketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paket'], meta: { name: 'Paket' } }
    /**
     * Find zero or one Paket that matches the filter.
     * @param {PaketFindUniqueArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaketFindUniqueArgs>(args: SelectSubset<T, PaketFindUniqueArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaketFindUniqueOrThrowArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaketFindUniqueOrThrowArgs>(args: SelectSubset<T, PaketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketFindFirstArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaketFindFirstArgs>(args?: SelectSubset<T, PaketFindFirstArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketFindFirstOrThrowArgs} args - Arguments to find a Paket
     * @example
     * // Get one Paket
     * const paket = await prisma.paket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaketFindFirstOrThrowArgs>(args?: SelectSubset<T, PaketFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pakets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pakets
     * const pakets = await prisma.paket.findMany()
     * 
     * // Get first 10 Pakets
     * const pakets = await prisma.paket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paketWithIdOnly = await prisma.paket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaketFindManyArgs>(args?: SelectSubset<T, PaketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paket.
     * @param {PaketCreateArgs} args - Arguments to create a Paket.
     * @example
     * // Create one Paket
     * const Paket = await prisma.paket.create({
     *   data: {
     *     // ... data to create a Paket
     *   }
     * })
     * 
     */
    create<T extends PaketCreateArgs>(args: SelectSubset<T, PaketCreateArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pakets.
     * @param {PaketCreateManyArgs} args - Arguments to create many Pakets.
     * @example
     * // Create many Pakets
     * const paket = await prisma.paket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaketCreateManyArgs>(args?: SelectSubset<T, PaketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pakets and returns the data saved in the database.
     * @param {PaketCreateManyAndReturnArgs} args - Arguments to create many Pakets.
     * @example
     * // Create many Pakets
     * const paket = await prisma.paket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pakets and only return the `id`
     * const paketWithIdOnly = await prisma.paket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaketCreateManyAndReturnArgs>(args?: SelectSubset<T, PaketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paket.
     * @param {PaketDeleteArgs} args - Arguments to delete one Paket.
     * @example
     * // Delete one Paket
     * const Paket = await prisma.paket.delete({
     *   where: {
     *     // ... filter to delete one Paket
     *   }
     * })
     * 
     */
    delete<T extends PaketDeleteArgs>(args: SelectSubset<T, PaketDeleteArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paket.
     * @param {PaketUpdateArgs} args - Arguments to update one Paket.
     * @example
     * // Update one Paket
     * const paket = await prisma.paket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaketUpdateArgs>(args: SelectSubset<T, PaketUpdateArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pakets.
     * @param {PaketDeleteManyArgs} args - Arguments to filter Pakets to delete.
     * @example
     * // Delete a few Pakets
     * const { count } = await prisma.paket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaketDeleteManyArgs>(args?: SelectSubset<T, PaketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pakets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pakets
     * const paket = await prisma.paket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaketUpdateManyArgs>(args: SelectSubset<T, PaketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pakets and returns the data updated in the database.
     * @param {PaketUpdateManyAndReturnArgs} args - Arguments to update many Pakets.
     * @example
     * // Update many Pakets
     * const paket = await prisma.paket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pakets and only return the `id`
     * const paketWithIdOnly = await prisma.paket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaketUpdateManyAndReturnArgs>(args: SelectSubset<T, PaketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paket.
     * @param {PaketUpsertArgs} args - Arguments to update or create a Paket.
     * @example
     * // Update or create a Paket
     * const paket = await prisma.paket.upsert({
     *   create: {
     *     // ... data to create a Paket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paket we want to update
     *   }
     * })
     */
    upsert<T extends PaketUpsertArgs>(args: SelectSubset<T, PaketUpsertArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pakets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketCountArgs} args - Arguments to filter Pakets to count.
     * @example
     * // Count the number of Pakets
     * const count = await prisma.paket.count({
     *   where: {
     *     // ... the filter for the Pakets we want to count
     *   }
     * })
    **/
    count<T extends PaketCountArgs>(
      args?: Subset<T, PaketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaketAggregateArgs>(args: Subset<T, PaketAggregateArgs>): Prisma.PrismaPromise<GetPaketAggregateType<T>>

    /**
     * Group by Paket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaketGroupByArgs['orderBy'] }
        : { orderBy?: PaketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paket model
   */
  readonly fields: PaketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket_categories<T extends Paket$paket_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Paket$paket_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paket_promos<T extends Paket$paket_promosArgs<ExtArgs> = {}>(args?: Subset<T, Paket$paket_promosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrasi_indibiz<T extends Paket$registrasi_indibizArgs<ExtArgs> = {}>(args?: Subset<T, Paket$registrasi_indibizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paket model
   */
  interface PaketFieldRefs {
    readonly id: FieldRef<"Paket", 'String'>
    readonly nama: FieldRef<"Paket", 'String'>
    readonly bandwith: FieldRef<"Paket", 'Int'>
    readonly price: FieldRef<"Paket", 'Decimal'>
    readonly price_psb: FieldRef<"Paket", 'Decimal'>
    readonly ppn: FieldRef<"Paket", 'Int'>
    readonly final_price: FieldRef<"Paket", 'Decimal'>
    readonly created_at: FieldRef<"Paket", 'DateTime'>
    readonly updated_at: FieldRef<"Paket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paket findUnique
   */
  export type PaketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter, which Paket to fetch.
     */
    where: PaketWhereUniqueInput
  }

  /**
   * Paket findUniqueOrThrow
   */
  export type PaketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter, which Paket to fetch.
     */
    where: PaketWhereUniqueInput
  }

  /**
   * Paket findFirst
   */
  export type PaketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter, which Paket to fetch.
     */
    where?: PaketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakets to fetch.
     */
    orderBy?: PaketOrderByWithRelationInput | PaketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pakets.
     */
    cursor?: PaketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pakets.
     */
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * Paket findFirstOrThrow
   */
  export type PaketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter, which Paket to fetch.
     */
    where?: PaketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakets to fetch.
     */
    orderBy?: PaketOrderByWithRelationInput | PaketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pakets.
     */
    cursor?: PaketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pakets.
     */
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * Paket findMany
   */
  export type PaketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter, which Pakets to fetch.
     */
    where?: PaketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pakets to fetch.
     */
    orderBy?: PaketOrderByWithRelationInput | PaketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pakets.
     */
    cursor?: PaketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pakets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pakets.
     */
    skip?: number
    distinct?: PaketScalarFieldEnum | PaketScalarFieldEnum[]
  }

  /**
   * Paket create
   */
  export type PaketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * The data needed to create a Paket.
     */
    data: XOR<PaketCreateInput, PaketUncheckedCreateInput>
  }

  /**
   * Paket createMany
   */
  export type PaketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pakets.
     */
    data: PaketCreateManyInput | PaketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paket createManyAndReturn
   */
  export type PaketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * The data used to create many Pakets.
     */
    data: PaketCreateManyInput | PaketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paket update
   */
  export type PaketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * The data needed to update a Paket.
     */
    data: XOR<PaketUpdateInput, PaketUncheckedUpdateInput>
    /**
     * Choose, which Paket to update.
     */
    where: PaketWhereUniqueInput
  }

  /**
   * Paket updateMany
   */
  export type PaketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pakets.
     */
    data: XOR<PaketUpdateManyMutationInput, PaketUncheckedUpdateManyInput>
    /**
     * Filter which Pakets to update
     */
    where?: PaketWhereInput
    /**
     * Limit how many Pakets to update.
     */
    limit?: number
  }

  /**
   * Paket updateManyAndReturn
   */
  export type PaketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * The data used to update Pakets.
     */
    data: XOR<PaketUpdateManyMutationInput, PaketUncheckedUpdateManyInput>
    /**
     * Filter which Pakets to update
     */
    where?: PaketWhereInput
    /**
     * Limit how many Pakets to update.
     */
    limit?: number
  }

  /**
   * Paket upsert
   */
  export type PaketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * The filter to search for the Paket to update in case it exists.
     */
    where: PaketWhereUniqueInput
    /**
     * In case the Paket found by the `where` argument doesn't exist, create a new Paket with this data.
     */
    create: XOR<PaketCreateInput, PaketUncheckedCreateInput>
    /**
     * In case the Paket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaketUpdateInput, PaketUncheckedUpdateInput>
  }

  /**
   * Paket delete
   */
  export type PaketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
    /**
     * Filter which Paket to delete.
     */
    where: PaketWhereUniqueInput
  }

  /**
   * Paket deleteMany
   */
  export type PaketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pakets to delete
     */
    where?: PaketWhereInput
    /**
     * Limit how many Pakets to delete.
     */
    limit?: number
  }

  /**
   * Paket.paket_categories
   */
  export type Paket$paket_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    where?: PaketKategoriWhereInput
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    cursor?: PaketKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaketKategoriScalarFieldEnum | PaketKategoriScalarFieldEnum[]
  }

  /**
   * Paket.paket_promos
   */
  export type Paket$paket_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    where?: PaketPromoWhereInput
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    cursor?: PaketPromoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaketPromoScalarFieldEnum | PaketPromoScalarFieldEnum[]
  }

  /**
   * Paket.registrasi_indibiz
   */
  export type Paket$registrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    where?: RegistrasiIndibizWhereInput
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    cursor?: RegistrasiIndibizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * Paket without action
   */
  export type PaketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paket
     */
    select?: PaketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paket
     */
    omit?: PaketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketInclude<ExtArgs> | null
  }


  /**
   * Model PaketKategori
   */

  export type AggregatePaketKategori = {
    _count: PaketKategoriCountAggregateOutputType | null
    _min: PaketKategoriMinAggregateOutputType | null
    _max: PaketKategoriMaxAggregateOutputType | null
  }

  export type PaketKategoriMinAggregateOutputType = {
    id: string | null
    paket_id: string | null
    kategori_id: string | null
    created_at: Date | null
  }

  export type PaketKategoriMaxAggregateOutputType = {
    id: string | null
    paket_id: string | null
    kategori_id: string | null
    created_at: Date | null
  }

  export type PaketKategoriCountAggregateOutputType = {
    id: number
    paket_id: number
    kategori_id: number
    created_at: number
    _all: number
  }


  export type PaketKategoriMinAggregateInputType = {
    id?: true
    paket_id?: true
    kategori_id?: true
    created_at?: true
  }

  export type PaketKategoriMaxAggregateInputType = {
    id?: true
    paket_id?: true
    kategori_id?: true
    created_at?: true
  }

  export type PaketKategoriCountAggregateInputType = {
    id?: true
    paket_id?: true
    kategori_id?: true
    created_at?: true
    _all?: true
  }

  export type PaketKategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketKategori to aggregate.
     */
    where?: PaketKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketKategoris to fetch.
     */
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaketKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaketKategoris
    **/
    _count?: true | PaketKategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaketKategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaketKategoriMaxAggregateInputType
  }

  export type GetPaketKategoriAggregateType<T extends PaketKategoriAggregateArgs> = {
        [P in keyof T & keyof AggregatePaketKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaketKategori[P]>
      : GetScalarType<T[P], AggregatePaketKategori[P]>
  }




  export type PaketKategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketKategoriWhereInput
    orderBy?: PaketKategoriOrderByWithAggregationInput | PaketKategoriOrderByWithAggregationInput[]
    by: PaketKategoriScalarFieldEnum[] | PaketKategoriScalarFieldEnum
    having?: PaketKategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaketKategoriCountAggregateInputType | true
    _min?: PaketKategoriMinAggregateInputType
    _max?: PaketKategoriMaxAggregateInputType
  }

  export type PaketKategoriGroupByOutputType = {
    id: string
    paket_id: string
    kategori_id: string
    created_at: Date
    _count: PaketKategoriCountAggregateOutputType | null
    _min: PaketKategoriMinAggregateOutputType | null
    _max: PaketKategoriMaxAggregateOutputType | null
  }

  type GetPaketKategoriGroupByPayload<T extends PaketKategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaketKategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaketKategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaketKategoriGroupByOutputType[P]>
            : GetScalarType<T[P], PaketKategoriGroupByOutputType[P]>
        }
      >
    >


  export type PaketKategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    kategori_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketKategori"]>

  export type PaketKategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    kategori_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketKategori"]>

  export type PaketKategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    kategori_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketKategori"]>

  export type PaketKategoriSelectScalar = {
    id?: boolean
    paket_id?: boolean
    kategori_id?: boolean
    created_at?: boolean
  }

  export type PaketKategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paket_id" | "kategori_id" | "created_at", ExtArgs["result"]["paketKategori"]>
  export type PaketKategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type PaketKategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type PaketKategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $PaketKategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaketKategori"
    objects: {
      paket: Prisma.$PaketPayload<ExtArgs>
      kategori: Prisma.$KategoriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paket_id: string
      kategori_id: string
      created_at: Date
    }, ExtArgs["result"]["paketKategori"]>
    composites: {}
  }

  type PaketKategoriGetPayload<S extends boolean | null | undefined | PaketKategoriDefaultArgs> = $Result.GetResult<Prisma.$PaketKategoriPayload, S>

  type PaketKategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaketKategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaketKategoriCountAggregateInputType | true
    }

  export interface PaketKategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaketKategori'], meta: { name: 'PaketKategori' } }
    /**
     * Find zero or one PaketKategori that matches the filter.
     * @param {PaketKategoriFindUniqueArgs} args - Arguments to find a PaketKategori
     * @example
     * // Get one PaketKategori
     * const paketKategori = await prisma.paketKategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaketKategoriFindUniqueArgs>(args: SelectSubset<T, PaketKategoriFindUniqueArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaketKategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaketKategoriFindUniqueOrThrowArgs} args - Arguments to find a PaketKategori
     * @example
     * // Get one PaketKategori
     * const paketKategori = await prisma.paketKategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaketKategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, PaketKategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaketKategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriFindFirstArgs} args - Arguments to find a PaketKategori
     * @example
     * // Get one PaketKategori
     * const paketKategori = await prisma.paketKategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaketKategoriFindFirstArgs>(args?: SelectSubset<T, PaketKategoriFindFirstArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaketKategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriFindFirstOrThrowArgs} args - Arguments to find a PaketKategori
     * @example
     * // Get one PaketKategori
     * const paketKategori = await prisma.paketKategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaketKategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, PaketKategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaketKategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaketKategoris
     * const paketKategoris = await prisma.paketKategori.findMany()
     * 
     * // Get first 10 PaketKategoris
     * const paketKategoris = await prisma.paketKategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paketKategoriWithIdOnly = await prisma.paketKategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaketKategoriFindManyArgs>(args?: SelectSubset<T, PaketKategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaketKategori.
     * @param {PaketKategoriCreateArgs} args - Arguments to create a PaketKategori.
     * @example
     * // Create one PaketKategori
     * const PaketKategori = await prisma.paketKategori.create({
     *   data: {
     *     // ... data to create a PaketKategori
     *   }
     * })
     * 
     */
    create<T extends PaketKategoriCreateArgs>(args: SelectSubset<T, PaketKategoriCreateArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaketKategoris.
     * @param {PaketKategoriCreateManyArgs} args - Arguments to create many PaketKategoris.
     * @example
     * // Create many PaketKategoris
     * const paketKategori = await prisma.paketKategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaketKategoriCreateManyArgs>(args?: SelectSubset<T, PaketKategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaketKategoris and returns the data saved in the database.
     * @param {PaketKategoriCreateManyAndReturnArgs} args - Arguments to create many PaketKategoris.
     * @example
     * // Create many PaketKategoris
     * const paketKategori = await prisma.paketKategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaketKategoris and only return the `id`
     * const paketKategoriWithIdOnly = await prisma.paketKategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaketKategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, PaketKategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaketKategori.
     * @param {PaketKategoriDeleteArgs} args - Arguments to delete one PaketKategori.
     * @example
     * // Delete one PaketKategori
     * const PaketKategori = await prisma.paketKategori.delete({
     *   where: {
     *     // ... filter to delete one PaketKategori
     *   }
     * })
     * 
     */
    delete<T extends PaketKategoriDeleteArgs>(args: SelectSubset<T, PaketKategoriDeleteArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaketKategori.
     * @param {PaketKategoriUpdateArgs} args - Arguments to update one PaketKategori.
     * @example
     * // Update one PaketKategori
     * const paketKategori = await prisma.paketKategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaketKategoriUpdateArgs>(args: SelectSubset<T, PaketKategoriUpdateArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaketKategoris.
     * @param {PaketKategoriDeleteManyArgs} args - Arguments to filter PaketKategoris to delete.
     * @example
     * // Delete a few PaketKategoris
     * const { count } = await prisma.paketKategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaketKategoriDeleteManyArgs>(args?: SelectSubset<T, PaketKategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaketKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaketKategoris
     * const paketKategori = await prisma.paketKategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaketKategoriUpdateManyArgs>(args: SelectSubset<T, PaketKategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaketKategoris and returns the data updated in the database.
     * @param {PaketKategoriUpdateManyAndReturnArgs} args - Arguments to update many PaketKategoris.
     * @example
     * // Update many PaketKategoris
     * const paketKategori = await prisma.paketKategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaketKategoris and only return the `id`
     * const paketKategoriWithIdOnly = await prisma.paketKategori.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaketKategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, PaketKategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaketKategori.
     * @param {PaketKategoriUpsertArgs} args - Arguments to update or create a PaketKategori.
     * @example
     * // Update or create a PaketKategori
     * const paketKategori = await prisma.paketKategori.upsert({
     *   create: {
     *     // ... data to create a PaketKategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaketKategori we want to update
     *   }
     * })
     */
    upsert<T extends PaketKategoriUpsertArgs>(args: SelectSubset<T, PaketKategoriUpsertArgs<ExtArgs>>): Prisma__PaketKategoriClient<$Result.GetResult<Prisma.$PaketKategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaketKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriCountArgs} args - Arguments to filter PaketKategoris to count.
     * @example
     * // Count the number of PaketKategoris
     * const count = await prisma.paketKategori.count({
     *   where: {
     *     // ... the filter for the PaketKategoris we want to count
     *   }
     * })
    **/
    count<T extends PaketKategoriCountArgs>(
      args?: Subset<T, PaketKategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaketKategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaketKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaketKategoriAggregateArgs>(args: Subset<T, PaketKategoriAggregateArgs>): Prisma.PrismaPromise<GetPaketKategoriAggregateType<T>>

    /**
     * Group by PaketKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketKategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaketKategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaketKategoriGroupByArgs['orderBy'] }
        : { orderBy?: PaketKategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaketKategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaketKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaketKategori model
   */
  readonly fields: PaketKategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaketKategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaketKategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket<T extends PaketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaketDefaultArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaketKategori model
   */
  interface PaketKategoriFieldRefs {
    readonly id: FieldRef<"PaketKategori", 'String'>
    readonly paket_id: FieldRef<"PaketKategori", 'String'>
    readonly kategori_id: FieldRef<"PaketKategori", 'String'>
    readonly created_at: FieldRef<"PaketKategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaketKategori findUnique
   */
  export type PaketKategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter, which PaketKategori to fetch.
     */
    where: PaketKategoriWhereUniqueInput
  }

  /**
   * PaketKategori findUniqueOrThrow
   */
  export type PaketKategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter, which PaketKategori to fetch.
     */
    where: PaketKategoriWhereUniqueInput
  }

  /**
   * PaketKategori findFirst
   */
  export type PaketKategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter, which PaketKategori to fetch.
     */
    where?: PaketKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketKategoris to fetch.
     */
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketKategoris.
     */
    cursor?: PaketKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketKategoris.
     */
    distinct?: PaketKategoriScalarFieldEnum | PaketKategoriScalarFieldEnum[]
  }

  /**
   * PaketKategori findFirstOrThrow
   */
  export type PaketKategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter, which PaketKategori to fetch.
     */
    where?: PaketKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketKategoris to fetch.
     */
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketKategoris.
     */
    cursor?: PaketKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketKategoris.
     */
    distinct?: PaketKategoriScalarFieldEnum | PaketKategoriScalarFieldEnum[]
  }

  /**
   * PaketKategori findMany
   */
  export type PaketKategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter, which PaketKategoris to fetch.
     */
    where?: PaketKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketKategoris to fetch.
     */
    orderBy?: PaketKategoriOrderByWithRelationInput | PaketKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaketKategoris.
     */
    cursor?: PaketKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketKategoris.
     */
    skip?: number
    distinct?: PaketKategoriScalarFieldEnum | PaketKategoriScalarFieldEnum[]
  }

  /**
   * PaketKategori create
   */
  export type PaketKategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a PaketKategori.
     */
    data: XOR<PaketKategoriCreateInput, PaketKategoriUncheckedCreateInput>
  }

  /**
   * PaketKategori createMany
   */
  export type PaketKategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaketKategoris.
     */
    data: PaketKategoriCreateManyInput | PaketKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaketKategori createManyAndReturn
   */
  export type PaketKategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * The data used to create many PaketKategoris.
     */
    data: PaketKategoriCreateManyInput | PaketKategoriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaketKategori update
   */
  export type PaketKategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a PaketKategori.
     */
    data: XOR<PaketKategoriUpdateInput, PaketKategoriUncheckedUpdateInput>
    /**
     * Choose, which PaketKategori to update.
     */
    where: PaketKategoriWhereUniqueInput
  }

  /**
   * PaketKategori updateMany
   */
  export type PaketKategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaketKategoris.
     */
    data: XOR<PaketKategoriUpdateManyMutationInput, PaketKategoriUncheckedUpdateManyInput>
    /**
     * Filter which PaketKategoris to update
     */
    where?: PaketKategoriWhereInput
    /**
     * Limit how many PaketKategoris to update.
     */
    limit?: number
  }

  /**
   * PaketKategori updateManyAndReturn
   */
  export type PaketKategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * The data used to update PaketKategoris.
     */
    data: XOR<PaketKategoriUpdateManyMutationInput, PaketKategoriUncheckedUpdateManyInput>
    /**
     * Filter which PaketKategoris to update
     */
    where?: PaketKategoriWhereInput
    /**
     * Limit how many PaketKategoris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaketKategori upsert
   */
  export type PaketKategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the PaketKategori to update in case it exists.
     */
    where: PaketKategoriWhereUniqueInput
    /**
     * In case the PaketKategori found by the `where` argument doesn't exist, create a new PaketKategori with this data.
     */
    create: XOR<PaketKategoriCreateInput, PaketKategoriUncheckedCreateInput>
    /**
     * In case the PaketKategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaketKategoriUpdateInput, PaketKategoriUncheckedUpdateInput>
  }

  /**
   * PaketKategori delete
   */
  export type PaketKategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
    /**
     * Filter which PaketKategori to delete.
     */
    where: PaketKategoriWhereUniqueInput
  }

  /**
   * PaketKategori deleteMany
   */
  export type PaketKategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketKategoris to delete
     */
    where?: PaketKategoriWhereInput
    /**
     * Limit how many PaketKategoris to delete.
     */
    limit?: number
  }

  /**
   * PaketKategori without action
   */
  export type PaketKategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketKategori
     */
    select?: PaketKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketKategori
     */
    omit?: PaketKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketKategoriInclude<ExtArgs> | null
  }


  /**
   * Model PaketPromo
   */

  export type AggregatePaketPromo = {
    _count: PaketPromoCountAggregateOutputType | null
    _min: PaketPromoMinAggregateOutputType | null
    _max: PaketPromoMaxAggregateOutputType | null
  }

  export type PaketPromoMinAggregateOutputType = {
    id: string | null
    paket_id: string | null
    promo_id: string | null
    created_at: Date | null
  }

  export type PaketPromoMaxAggregateOutputType = {
    id: string | null
    paket_id: string | null
    promo_id: string | null
    created_at: Date | null
  }

  export type PaketPromoCountAggregateOutputType = {
    id: number
    paket_id: number
    promo_id: number
    created_at: number
    _all: number
  }


  export type PaketPromoMinAggregateInputType = {
    id?: true
    paket_id?: true
    promo_id?: true
    created_at?: true
  }

  export type PaketPromoMaxAggregateInputType = {
    id?: true
    paket_id?: true
    promo_id?: true
    created_at?: true
  }

  export type PaketPromoCountAggregateInputType = {
    id?: true
    paket_id?: true
    promo_id?: true
    created_at?: true
    _all?: true
  }

  export type PaketPromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketPromo to aggregate.
     */
    where?: PaketPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketPromos to fetch.
     */
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaketPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaketPromos
    **/
    _count?: true | PaketPromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaketPromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaketPromoMaxAggregateInputType
  }

  export type GetPaketPromoAggregateType<T extends PaketPromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePaketPromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaketPromo[P]>
      : GetScalarType<T[P], AggregatePaketPromo[P]>
  }




  export type PaketPromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaketPromoWhereInput
    orderBy?: PaketPromoOrderByWithAggregationInput | PaketPromoOrderByWithAggregationInput[]
    by: PaketPromoScalarFieldEnum[] | PaketPromoScalarFieldEnum
    having?: PaketPromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaketPromoCountAggregateInputType | true
    _min?: PaketPromoMinAggregateInputType
    _max?: PaketPromoMaxAggregateInputType
  }

  export type PaketPromoGroupByOutputType = {
    id: string
    paket_id: string
    promo_id: string
    created_at: Date
    _count: PaketPromoCountAggregateOutputType | null
    _min: PaketPromoMinAggregateOutputType | null
    _max: PaketPromoMaxAggregateOutputType | null
  }

  type GetPaketPromoGroupByPayload<T extends PaketPromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaketPromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaketPromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaketPromoGroupByOutputType[P]>
            : GetScalarType<T[P], PaketPromoGroupByOutputType[P]>
        }
      >
    >


  export type PaketPromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    promo_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketPromo"]>

  export type PaketPromoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    promo_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketPromo"]>

  export type PaketPromoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paket_id?: boolean
    promo_id?: boolean
    created_at?: boolean
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paketPromo"]>

  export type PaketPromoSelectScalar = {
    id?: boolean
    paket_id?: boolean
    promo_id?: boolean
    created_at?: boolean
  }

  export type PaketPromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paket_id" | "promo_id" | "created_at", ExtArgs["result"]["paketPromo"]>
  export type PaketPromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }
  export type PaketPromoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }
  export type PaketPromoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }

  export type $PaketPromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaketPromo"
    objects: {
      paket: Prisma.$PaketPayload<ExtArgs>
      promo: Prisma.$PromoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paket_id: string
      promo_id: string
      created_at: Date
    }, ExtArgs["result"]["paketPromo"]>
    composites: {}
  }

  type PaketPromoGetPayload<S extends boolean | null | undefined | PaketPromoDefaultArgs> = $Result.GetResult<Prisma.$PaketPromoPayload, S>

  type PaketPromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaketPromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaketPromoCountAggregateInputType | true
    }

  export interface PaketPromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaketPromo'], meta: { name: 'PaketPromo' } }
    /**
     * Find zero or one PaketPromo that matches the filter.
     * @param {PaketPromoFindUniqueArgs} args - Arguments to find a PaketPromo
     * @example
     * // Get one PaketPromo
     * const paketPromo = await prisma.paketPromo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaketPromoFindUniqueArgs>(args: SelectSubset<T, PaketPromoFindUniqueArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaketPromo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaketPromoFindUniqueOrThrowArgs} args - Arguments to find a PaketPromo
     * @example
     * // Get one PaketPromo
     * const paketPromo = await prisma.paketPromo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaketPromoFindUniqueOrThrowArgs>(args: SelectSubset<T, PaketPromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaketPromo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoFindFirstArgs} args - Arguments to find a PaketPromo
     * @example
     * // Get one PaketPromo
     * const paketPromo = await prisma.paketPromo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaketPromoFindFirstArgs>(args?: SelectSubset<T, PaketPromoFindFirstArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaketPromo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoFindFirstOrThrowArgs} args - Arguments to find a PaketPromo
     * @example
     * // Get one PaketPromo
     * const paketPromo = await prisma.paketPromo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaketPromoFindFirstOrThrowArgs>(args?: SelectSubset<T, PaketPromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaketPromos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaketPromos
     * const paketPromos = await prisma.paketPromo.findMany()
     * 
     * // Get first 10 PaketPromos
     * const paketPromos = await prisma.paketPromo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paketPromoWithIdOnly = await prisma.paketPromo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaketPromoFindManyArgs>(args?: SelectSubset<T, PaketPromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaketPromo.
     * @param {PaketPromoCreateArgs} args - Arguments to create a PaketPromo.
     * @example
     * // Create one PaketPromo
     * const PaketPromo = await prisma.paketPromo.create({
     *   data: {
     *     // ... data to create a PaketPromo
     *   }
     * })
     * 
     */
    create<T extends PaketPromoCreateArgs>(args: SelectSubset<T, PaketPromoCreateArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaketPromos.
     * @param {PaketPromoCreateManyArgs} args - Arguments to create many PaketPromos.
     * @example
     * // Create many PaketPromos
     * const paketPromo = await prisma.paketPromo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaketPromoCreateManyArgs>(args?: SelectSubset<T, PaketPromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaketPromos and returns the data saved in the database.
     * @param {PaketPromoCreateManyAndReturnArgs} args - Arguments to create many PaketPromos.
     * @example
     * // Create many PaketPromos
     * const paketPromo = await prisma.paketPromo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaketPromos and only return the `id`
     * const paketPromoWithIdOnly = await prisma.paketPromo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaketPromoCreateManyAndReturnArgs>(args?: SelectSubset<T, PaketPromoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaketPromo.
     * @param {PaketPromoDeleteArgs} args - Arguments to delete one PaketPromo.
     * @example
     * // Delete one PaketPromo
     * const PaketPromo = await prisma.paketPromo.delete({
     *   where: {
     *     // ... filter to delete one PaketPromo
     *   }
     * })
     * 
     */
    delete<T extends PaketPromoDeleteArgs>(args: SelectSubset<T, PaketPromoDeleteArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaketPromo.
     * @param {PaketPromoUpdateArgs} args - Arguments to update one PaketPromo.
     * @example
     * // Update one PaketPromo
     * const paketPromo = await prisma.paketPromo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaketPromoUpdateArgs>(args: SelectSubset<T, PaketPromoUpdateArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaketPromos.
     * @param {PaketPromoDeleteManyArgs} args - Arguments to filter PaketPromos to delete.
     * @example
     * // Delete a few PaketPromos
     * const { count } = await prisma.paketPromo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaketPromoDeleteManyArgs>(args?: SelectSubset<T, PaketPromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaketPromos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaketPromos
     * const paketPromo = await prisma.paketPromo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaketPromoUpdateManyArgs>(args: SelectSubset<T, PaketPromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaketPromos and returns the data updated in the database.
     * @param {PaketPromoUpdateManyAndReturnArgs} args - Arguments to update many PaketPromos.
     * @example
     * // Update many PaketPromos
     * const paketPromo = await prisma.paketPromo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaketPromos and only return the `id`
     * const paketPromoWithIdOnly = await prisma.paketPromo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaketPromoUpdateManyAndReturnArgs>(args: SelectSubset<T, PaketPromoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaketPromo.
     * @param {PaketPromoUpsertArgs} args - Arguments to update or create a PaketPromo.
     * @example
     * // Update or create a PaketPromo
     * const paketPromo = await prisma.paketPromo.upsert({
     *   create: {
     *     // ... data to create a PaketPromo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaketPromo we want to update
     *   }
     * })
     */
    upsert<T extends PaketPromoUpsertArgs>(args: SelectSubset<T, PaketPromoUpsertArgs<ExtArgs>>): Prisma__PaketPromoClient<$Result.GetResult<Prisma.$PaketPromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaketPromos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoCountArgs} args - Arguments to filter PaketPromos to count.
     * @example
     * // Count the number of PaketPromos
     * const count = await prisma.paketPromo.count({
     *   where: {
     *     // ... the filter for the PaketPromos we want to count
     *   }
     * })
    **/
    count<T extends PaketPromoCountArgs>(
      args?: Subset<T, PaketPromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaketPromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaketPromo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaketPromoAggregateArgs>(args: Subset<T, PaketPromoAggregateArgs>): Prisma.PrismaPromise<GetPaketPromoAggregateType<T>>

    /**
     * Group by PaketPromo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaketPromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaketPromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaketPromoGroupByArgs['orderBy'] }
        : { orderBy?: PaketPromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaketPromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaketPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaketPromo model
   */
  readonly fields: PaketPromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaketPromo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaketPromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paket<T extends PaketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaketDefaultArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    promo<T extends PromoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromoDefaultArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaketPromo model
   */
  interface PaketPromoFieldRefs {
    readonly id: FieldRef<"PaketPromo", 'String'>
    readonly paket_id: FieldRef<"PaketPromo", 'String'>
    readonly promo_id: FieldRef<"PaketPromo", 'String'>
    readonly created_at: FieldRef<"PaketPromo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaketPromo findUnique
   */
  export type PaketPromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter, which PaketPromo to fetch.
     */
    where: PaketPromoWhereUniqueInput
  }

  /**
   * PaketPromo findUniqueOrThrow
   */
  export type PaketPromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter, which PaketPromo to fetch.
     */
    where: PaketPromoWhereUniqueInput
  }

  /**
   * PaketPromo findFirst
   */
  export type PaketPromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter, which PaketPromo to fetch.
     */
    where?: PaketPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketPromos to fetch.
     */
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketPromos.
     */
    cursor?: PaketPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketPromos.
     */
    distinct?: PaketPromoScalarFieldEnum | PaketPromoScalarFieldEnum[]
  }

  /**
   * PaketPromo findFirstOrThrow
   */
  export type PaketPromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter, which PaketPromo to fetch.
     */
    where?: PaketPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketPromos to fetch.
     */
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaketPromos.
     */
    cursor?: PaketPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketPromos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaketPromos.
     */
    distinct?: PaketPromoScalarFieldEnum | PaketPromoScalarFieldEnum[]
  }

  /**
   * PaketPromo findMany
   */
  export type PaketPromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter, which PaketPromos to fetch.
     */
    where?: PaketPromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaketPromos to fetch.
     */
    orderBy?: PaketPromoOrderByWithRelationInput | PaketPromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaketPromos.
     */
    cursor?: PaketPromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaketPromos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaketPromos.
     */
    skip?: number
    distinct?: PaketPromoScalarFieldEnum | PaketPromoScalarFieldEnum[]
  }

  /**
   * PaketPromo create
   */
  export type PaketPromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * The data needed to create a PaketPromo.
     */
    data: XOR<PaketPromoCreateInput, PaketPromoUncheckedCreateInput>
  }

  /**
   * PaketPromo createMany
   */
  export type PaketPromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaketPromos.
     */
    data: PaketPromoCreateManyInput | PaketPromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaketPromo createManyAndReturn
   */
  export type PaketPromoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * The data used to create many PaketPromos.
     */
    data: PaketPromoCreateManyInput | PaketPromoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaketPromo update
   */
  export type PaketPromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * The data needed to update a PaketPromo.
     */
    data: XOR<PaketPromoUpdateInput, PaketPromoUncheckedUpdateInput>
    /**
     * Choose, which PaketPromo to update.
     */
    where: PaketPromoWhereUniqueInput
  }

  /**
   * PaketPromo updateMany
   */
  export type PaketPromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaketPromos.
     */
    data: XOR<PaketPromoUpdateManyMutationInput, PaketPromoUncheckedUpdateManyInput>
    /**
     * Filter which PaketPromos to update
     */
    where?: PaketPromoWhereInput
    /**
     * Limit how many PaketPromos to update.
     */
    limit?: number
  }

  /**
   * PaketPromo updateManyAndReturn
   */
  export type PaketPromoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * The data used to update PaketPromos.
     */
    data: XOR<PaketPromoUpdateManyMutationInput, PaketPromoUncheckedUpdateManyInput>
    /**
     * Filter which PaketPromos to update
     */
    where?: PaketPromoWhereInput
    /**
     * Limit how many PaketPromos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaketPromo upsert
   */
  export type PaketPromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * The filter to search for the PaketPromo to update in case it exists.
     */
    where: PaketPromoWhereUniqueInput
    /**
     * In case the PaketPromo found by the `where` argument doesn't exist, create a new PaketPromo with this data.
     */
    create: XOR<PaketPromoCreateInput, PaketPromoUncheckedCreateInput>
    /**
     * In case the PaketPromo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaketPromoUpdateInput, PaketPromoUncheckedUpdateInput>
  }

  /**
   * PaketPromo delete
   */
  export type PaketPromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
    /**
     * Filter which PaketPromo to delete.
     */
    where: PaketPromoWhereUniqueInput
  }

  /**
   * PaketPromo deleteMany
   */
  export type PaketPromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaketPromos to delete
     */
    where?: PaketPromoWhereInput
    /**
     * Limit how many PaketPromos to delete.
     */
    limit?: number
  }

  /**
   * PaketPromo without action
   */
  export type PaketPromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaketPromo
     */
    select?: PaketPromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaketPromo
     */
    omit?: PaketPromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaketPromoInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    nama: string | null
    kode_sales: string | null
    email: string | null
    status: $Enums.StatusSales | null
    agency_id: string | null
    datel_id: string | null
    kat_umur_sa: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    kode_sales: string | null
    email: string | null
    status: $Enums.StatusSales | null
    agency_id: string | null
    datel_id: string | null
    kat_umur_sa: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    nama: number
    kode_sales: number
    email: number
    status: number
    agency_id: number
    datel_id: number
    kat_umur_sa: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesMinAggregateInputType = {
    id?: true
    nama?: true
    kode_sales?: true
    email?: true
    status?: true
    agency_id?: true
    datel_id?: true
    kat_umur_sa?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    nama?: true
    kode_sales?: true
    email?: true
    status?: true
    agency_id?: true
    datel_id?: true
    kat_umur_sa?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    nama?: true
    kode_sales?: true
    email?: true
    status?: true
    agency_id?: true
    datel_id?: true
    kat_umur_sa?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    datel_id: string
    kat_umur_sa: Date
    created_at: Date
    updated_at: Date
    _count: SalesCountAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode_sales?: boolean
    email?: boolean
    status?: boolean
    agency_id?: boolean
    datel_id?: boolean
    kat_umur_sa?: boolean
    created_at?: boolean
    updated_at?: boolean
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    registrasi_indibiz?: boolean | Sales$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode_sales?: boolean
    email?: boolean
    status?: boolean
    agency_id?: boolean
    datel_id?: boolean
    kat_umur_sa?: boolean
    created_at?: boolean
    updated_at?: boolean
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode_sales?: boolean
    email?: boolean
    status?: boolean
    agency_id?: boolean
    datel_id?: boolean
    kat_umur_sa?: boolean
    created_at?: boolean
    updated_at?: boolean
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    nama?: boolean
    kode_sales?: boolean
    email?: boolean
    status?: boolean
    agency_id?: boolean
    datel_id?: boolean
    kat_umur_sa?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kode_sales" | "email" | "status" | "agency_id" | "datel_id" | "kat_umur_sa" | "created_at" | "updated_at", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    registrasi_indibiz?: boolean | Sales$registrasi_indibizArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agency?: boolean | AgencDefaultArgs<ExtArgs>
    datel?: boolean | DatelDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      agency: Prisma.$AgencPayload<ExtArgs>
      datel: Prisma.$DatelPayload<ExtArgs>
      registrasi_indibiz: Prisma.$RegistrasiIndibizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      kode_sales: string
      email: string
      status: $Enums.StatusSales
      agency_id: string
      datel_id: string
      kat_umur_sa: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agency<T extends AgencDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgencDefaultArgs<ExtArgs>>): Prisma__AgencClient<$Result.GetResult<Prisma.$AgencPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    datel<T extends DatelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatelDefaultArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registrasi_indibiz<T extends Sales$registrasi_indibizArgs<ExtArgs> = {}>(args?: Subset<T, Sales$registrasi_indibizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'String'>
    readonly nama: FieldRef<"Sales", 'String'>
    readonly kode_sales: FieldRef<"Sales", 'String'>
    readonly email: FieldRef<"Sales", 'String'>
    readonly status: FieldRef<"Sales", 'StatusSales'>
    readonly agency_id: FieldRef<"Sales", 'String'>
    readonly datel_id: FieldRef<"Sales", 'String'>
    readonly kat_umur_sa: FieldRef<"Sales", 'DateTime'>
    readonly created_at: FieldRef<"Sales", 'DateTime'>
    readonly updated_at: FieldRef<"Sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales.registrasi_indibiz
   */
  export type Sales$registrasi_indibizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    where?: RegistrasiIndibizWhereInput
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    cursor?: RegistrasiIndibizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model RegistrasiIndibiz
   */

  export type AggregateRegistrasiIndibiz = {
    _count: RegistrasiIndibizCountAggregateOutputType | null
    _min: RegistrasiIndibizMinAggregateOutputType | null
    _max: RegistrasiIndibizMaxAggregateOutputType | null
  }

  export type RegistrasiIndibizMinAggregateOutputType = {
    id: string | null
    nama: string | null
    datel_id: string | null
    paket_id: string | null
    sales_id: string | null
    no_hp_1: string | null
    no_hp_2: string | null
    kordinat: string | null
    alamat: string | null
    nama_pic: string | null
    ttl_pic: string | null
    no_ktp: string | null
    email: string | null
    foto_ktp: string | null
    foto_selfie: string | null
    bukti_usaha: string | null
    bukti_niwp: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RegistrasiIndibizMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    datel_id: string | null
    paket_id: string | null
    sales_id: string | null
    no_hp_1: string | null
    no_hp_2: string | null
    kordinat: string | null
    alamat: string | null
    nama_pic: string | null
    ttl_pic: string | null
    no_ktp: string | null
    email: string | null
    foto_ktp: string | null
    foto_selfie: string | null
    bukti_usaha: string | null
    bukti_niwp: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RegistrasiIndibizCountAggregateOutputType = {
    id: number
    nama: number
    datel_id: number
    paket_id: number
    sales_id: number
    no_hp_1: number
    no_hp_2: number
    kordinat: number
    alamat: number
    nama_pic: number
    ttl_pic: number
    no_ktp: number
    email: number
    foto_ktp: number
    foto_selfie: number
    bukti_usaha: number
    bukti_niwp: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RegistrasiIndibizMinAggregateInputType = {
    id?: true
    nama?: true
    datel_id?: true
    paket_id?: true
    sales_id?: true
    no_hp_1?: true
    no_hp_2?: true
    kordinat?: true
    alamat?: true
    nama_pic?: true
    ttl_pic?: true
    no_ktp?: true
    email?: true
    foto_ktp?: true
    foto_selfie?: true
    bukti_usaha?: true
    bukti_niwp?: true
    created_at?: true
    updated_at?: true
  }

  export type RegistrasiIndibizMaxAggregateInputType = {
    id?: true
    nama?: true
    datel_id?: true
    paket_id?: true
    sales_id?: true
    no_hp_1?: true
    no_hp_2?: true
    kordinat?: true
    alamat?: true
    nama_pic?: true
    ttl_pic?: true
    no_ktp?: true
    email?: true
    foto_ktp?: true
    foto_selfie?: true
    bukti_usaha?: true
    bukti_niwp?: true
    created_at?: true
    updated_at?: true
  }

  export type RegistrasiIndibizCountAggregateInputType = {
    id?: true
    nama?: true
    datel_id?: true
    paket_id?: true
    sales_id?: true
    no_hp_1?: true
    no_hp_2?: true
    kordinat?: true
    alamat?: true
    nama_pic?: true
    ttl_pic?: true
    no_ktp?: true
    email?: true
    foto_ktp?: true
    foto_selfie?: true
    bukti_usaha?: true
    bukti_niwp?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RegistrasiIndibizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrasiIndibiz to aggregate.
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrasiIndibizs to fetch.
     */
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrasiIndibizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrasiIndibizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrasiIndibizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrasiIndibizs
    **/
    _count?: true | RegistrasiIndibizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrasiIndibizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrasiIndibizMaxAggregateInputType
  }

  export type GetRegistrasiIndibizAggregateType<T extends RegistrasiIndibizAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrasiIndibiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrasiIndibiz[P]>
      : GetScalarType<T[P], AggregateRegistrasiIndibiz[P]>
  }




  export type RegistrasiIndibizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrasiIndibizWhereInput
    orderBy?: RegistrasiIndibizOrderByWithAggregationInput | RegistrasiIndibizOrderByWithAggregationInput[]
    by: RegistrasiIndibizScalarFieldEnum[] | RegistrasiIndibizScalarFieldEnum
    having?: RegistrasiIndibizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrasiIndibizCountAggregateInputType | true
    _min?: RegistrasiIndibizMinAggregateInputType
    _max?: RegistrasiIndibizMaxAggregateInputType
  }

  export type RegistrasiIndibizGroupByOutputType = {
    id: string
    nama: string
    datel_id: string
    paket_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at: Date
    updated_at: Date
    _count: RegistrasiIndibizCountAggregateOutputType | null
    _min: RegistrasiIndibizMinAggregateOutputType | null
    _max: RegistrasiIndibizMaxAggregateOutputType | null
  }

  type GetRegistrasiIndibizGroupByPayload<T extends RegistrasiIndibizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrasiIndibizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrasiIndibizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrasiIndibizGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrasiIndibizGroupByOutputType[P]>
        }
      >
    >


  export type RegistrasiIndibizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    datel_id?: boolean
    paket_id?: boolean
    sales_id?: boolean
    no_hp_1?: boolean
    no_hp_2?: boolean
    kordinat?: boolean
    alamat?: boolean
    nama_pic?: boolean
    ttl_pic?: boolean
    no_ktp?: boolean
    email?: boolean
    foto_ktp?: boolean
    foto_selfie?: boolean
    bukti_usaha?: boolean
    bukti_niwp?: boolean
    created_at?: boolean
    updated_at?: boolean
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrasiIndibiz"]>

  export type RegistrasiIndibizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    datel_id?: boolean
    paket_id?: boolean
    sales_id?: boolean
    no_hp_1?: boolean
    no_hp_2?: boolean
    kordinat?: boolean
    alamat?: boolean
    nama_pic?: boolean
    ttl_pic?: boolean
    no_ktp?: boolean
    email?: boolean
    foto_ktp?: boolean
    foto_selfie?: boolean
    bukti_usaha?: boolean
    bukti_niwp?: boolean
    created_at?: boolean
    updated_at?: boolean
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrasiIndibiz"]>

  export type RegistrasiIndibizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    datel_id?: boolean
    paket_id?: boolean
    sales_id?: boolean
    no_hp_1?: boolean
    no_hp_2?: boolean
    kordinat?: boolean
    alamat?: boolean
    nama_pic?: boolean
    ttl_pic?: boolean
    no_ktp?: boolean
    email?: boolean
    foto_ktp?: boolean
    foto_selfie?: boolean
    bukti_usaha?: boolean
    bukti_niwp?: boolean
    created_at?: boolean
    updated_at?: boolean
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registrasiIndibiz"]>

  export type RegistrasiIndibizSelectScalar = {
    id?: boolean
    nama?: boolean
    datel_id?: boolean
    paket_id?: boolean
    sales_id?: boolean
    no_hp_1?: boolean
    no_hp_2?: boolean
    kordinat?: boolean
    alamat?: boolean
    nama_pic?: boolean
    ttl_pic?: boolean
    no_ktp?: boolean
    email?: boolean
    foto_ktp?: boolean
    foto_selfie?: boolean
    bukti_usaha?: boolean
    bukti_niwp?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RegistrasiIndibizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "datel_id" | "paket_id" | "sales_id" | "no_hp_1" | "no_hp_2" | "kordinat" | "alamat" | "nama_pic" | "ttl_pic" | "no_ktp" | "email" | "foto_ktp" | "foto_selfie" | "bukti_usaha" | "bukti_niwp" | "created_at" | "updated_at", ExtArgs["result"]["registrasiIndibiz"]>
  export type RegistrasiIndibizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type RegistrasiIndibizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type RegistrasiIndibizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datel?: boolean | DatelDefaultArgs<ExtArgs>
    paket?: boolean | PaketDefaultArgs<ExtArgs>
    sales?: boolean | SalesDefaultArgs<ExtArgs>
  }

  export type $RegistrasiIndibizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrasiIndibiz"
    objects: {
      datel: Prisma.$DatelPayload<ExtArgs>
      paket: Prisma.$PaketPayload<ExtArgs>
      sales: Prisma.$SalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      datel_id: string
      paket_id: string
      sales_id: string
      no_hp_1: string
      no_hp_2: string
      kordinat: string
      alamat: string
      nama_pic: string
      ttl_pic: string
      no_ktp: string
      email: string
      foto_ktp: string
      foto_selfie: string
      bukti_usaha: string
      bukti_niwp: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["registrasiIndibiz"]>
    composites: {}
  }

  type RegistrasiIndibizGetPayload<S extends boolean | null | undefined | RegistrasiIndibizDefaultArgs> = $Result.GetResult<Prisma.$RegistrasiIndibizPayload, S>

  type RegistrasiIndibizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrasiIndibizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrasiIndibizCountAggregateInputType | true
    }

  export interface RegistrasiIndibizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrasiIndibiz'], meta: { name: 'RegistrasiIndibiz' } }
    /**
     * Find zero or one RegistrasiIndibiz that matches the filter.
     * @param {RegistrasiIndibizFindUniqueArgs} args - Arguments to find a RegistrasiIndibiz
     * @example
     * // Get one RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrasiIndibizFindUniqueArgs>(args: SelectSubset<T, RegistrasiIndibizFindUniqueArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrasiIndibiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrasiIndibizFindUniqueOrThrowArgs} args - Arguments to find a RegistrasiIndibiz
     * @example
     * // Get one RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrasiIndibizFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrasiIndibizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrasiIndibiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizFindFirstArgs} args - Arguments to find a RegistrasiIndibiz
     * @example
     * // Get one RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrasiIndibizFindFirstArgs>(args?: SelectSubset<T, RegistrasiIndibizFindFirstArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrasiIndibiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizFindFirstOrThrowArgs} args - Arguments to find a RegistrasiIndibiz
     * @example
     * // Get one RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrasiIndibizFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrasiIndibizFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrasiIndibizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrasiIndibizs
     * const registrasiIndibizs = await prisma.registrasiIndibiz.findMany()
     * 
     * // Get first 10 RegistrasiIndibizs
     * const registrasiIndibizs = await prisma.registrasiIndibiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrasiIndibizWithIdOnly = await prisma.registrasiIndibiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrasiIndibizFindManyArgs>(args?: SelectSubset<T, RegistrasiIndibizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrasiIndibiz.
     * @param {RegistrasiIndibizCreateArgs} args - Arguments to create a RegistrasiIndibiz.
     * @example
     * // Create one RegistrasiIndibiz
     * const RegistrasiIndibiz = await prisma.registrasiIndibiz.create({
     *   data: {
     *     // ... data to create a RegistrasiIndibiz
     *   }
     * })
     * 
     */
    create<T extends RegistrasiIndibizCreateArgs>(args: SelectSubset<T, RegistrasiIndibizCreateArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrasiIndibizs.
     * @param {RegistrasiIndibizCreateManyArgs} args - Arguments to create many RegistrasiIndibizs.
     * @example
     * // Create many RegistrasiIndibizs
     * const registrasiIndibiz = await prisma.registrasiIndibiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrasiIndibizCreateManyArgs>(args?: SelectSubset<T, RegistrasiIndibizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrasiIndibizs and returns the data saved in the database.
     * @param {RegistrasiIndibizCreateManyAndReturnArgs} args - Arguments to create many RegistrasiIndibizs.
     * @example
     * // Create many RegistrasiIndibizs
     * const registrasiIndibiz = await prisma.registrasiIndibiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrasiIndibizs and only return the `id`
     * const registrasiIndibizWithIdOnly = await prisma.registrasiIndibiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrasiIndibizCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrasiIndibizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistrasiIndibiz.
     * @param {RegistrasiIndibizDeleteArgs} args - Arguments to delete one RegistrasiIndibiz.
     * @example
     * // Delete one RegistrasiIndibiz
     * const RegistrasiIndibiz = await prisma.registrasiIndibiz.delete({
     *   where: {
     *     // ... filter to delete one RegistrasiIndibiz
     *   }
     * })
     * 
     */
    delete<T extends RegistrasiIndibizDeleteArgs>(args: SelectSubset<T, RegistrasiIndibizDeleteArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrasiIndibiz.
     * @param {RegistrasiIndibizUpdateArgs} args - Arguments to update one RegistrasiIndibiz.
     * @example
     * // Update one RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrasiIndibizUpdateArgs>(args: SelectSubset<T, RegistrasiIndibizUpdateArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrasiIndibizs.
     * @param {RegistrasiIndibizDeleteManyArgs} args - Arguments to filter RegistrasiIndibizs to delete.
     * @example
     * // Delete a few RegistrasiIndibizs
     * const { count } = await prisma.registrasiIndibiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrasiIndibizDeleteManyArgs>(args?: SelectSubset<T, RegistrasiIndibizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrasiIndibizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrasiIndibizs
     * const registrasiIndibiz = await prisma.registrasiIndibiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrasiIndibizUpdateManyArgs>(args: SelectSubset<T, RegistrasiIndibizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrasiIndibizs and returns the data updated in the database.
     * @param {RegistrasiIndibizUpdateManyAndReturnArgs} args - Arguments to update many RegistrasiIndibizs.
     * @example
     * // Update many RegistrasiIndibizs
     * const registrasiIndibiz = await prisma.registrasiIndibiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistrasiIndibizs and only return the `id`
     * const registrasiIndibizWithIdOnly = await prisma.registrasiIndibiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrasiIndibizUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrasiIndibizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistrasiIndibiz.
     * @param {RegistrasiIndibizUpsertArgs} args - Arguments to update or create a RegistrasiIndibiz.
     * @example
     * // Update or create a RegistrasiIndibiz
     * const registrasiIndibiz = await prisma.registrasiIndibiz.upsert({
     *   create: {
     *     // ... data to create a RegistrasiIndibiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrasiIndibiz we want to update
     *   }
     * })
     */
    upsert<T extends RegistrasiIndibizUpsertArgs>(args: SelectSubset<T, RegistrasiIndibizUpsertArgs<ExtArgs>>): Prisma__RegistrasiIndibizClient<$Result.GetResult<Prisma.$RegistrasiIndibizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistrasiIndibizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizCountArgs} args - Arguments to filter RegistrasiIndibizs to count.
     * @example
     * // Count the number of RegistrasiIndibizs
     * const count = await prisma.registrasiIndibiz.count({
     *   where: {
     *     // ... the filter for the RegistrasiIndibizs we want to count
     *   }
     * })
    **/
    count<T extends RegistrasiIndibizCountArgs>(
      args?: Subset<T, RegistrasiIndibizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrasiIndibizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrasiIndibiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrasiIndibizAggregateArgs>(args: Subset<T, RegistrasiIndibizAggregateArgs>): Prisma.PrismaPromise<GetRegistrasiIndibizAggregateType<T>>

    /**
     * Group by RegistrasiIndibiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrasiIndibizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrasiIndibizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrasiIndibizGroupByArgs['orderBy'] }
        : { orderBy?: RegistrasiIndibizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrasiIndibizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrasiIndibizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrasiIndibiz model
   */
  readonly fields: RegistrasiIndibizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrasiIndibiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrasiIndibizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datel<T extends DatelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatelDefaultArgs<ExtArgs>>): Prisma__DatelClient<$Result.GetResult<Prisma.$DatelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paket<T extends PaketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaketDefaultArgs<ExtArgs>>): Prisma__PaketClient<$Result.GetResult<Prisma.$PaketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends SalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesDefaultArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistrasiIndibiz model
   */
  interface RegistrasiIndibizFieldRefs {
    readonly id: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly nama: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly datel_id: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly paket_id: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly sales_id: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly no_hp_1: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly no_hp_2: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly kordinat: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly alamat: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly nama_pic: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly ttl_pic: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly no_ktp: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly email: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly foto_ktp: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly foto_selfie: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly bukti_usaha: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly bukti_niwp: FieldRef<"RegistrasiIndibiz", 'String'>
    readonly created_at: FieldRef<"RegistrasiIndibiz", 'DateTime'>
    readonly updated_at: FieldRef<"RegistrasiIndibiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrasiIndibiz findUnique
   */
  export type RegistrasiIndibizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter, which RegistrasiIndibiz to fetch.
     */
    where: RegistrasiIndibizWhereUniqueInput
  }

  /**
   * RegistrasiIndibiz findUniqueOrThrow
   */
  export type RegistrasiIndibizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter, which RegistrasiIndibiz to fetch.
     */
    where: RegistrasiIndibizWhereUniqueInput
  }

  /**
   * RegistrasiIndibiz findFirst
   */
  export type RegistrasiIndibizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter, which RegistrasiIndibiz to fetch.
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrasiIndibizs to fetch.
     */
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrasiIndibizs.
     */
    cursor?: RegistrasiIndibizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrasiIndibizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrasiIndibizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrasiIndibizs.
     */
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * RegistrasiIndibiz findFirstOrThrow
   */
  export type RegistrasiIndibizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter, which RegistrasiIndibiz to fetch.
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrasiIndibizs to fetch.
     */
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrasiIndibizs.
     */
    cursor?: RegistrasiIndibizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrasiIndibizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrasiIndibizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrasiIndibizs.
     */
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * RegistrasiIndibiz findMany
   */
  export type RegistrasiIndibizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter, which RegistrasiIndibizs to fetch.
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrasiIndibizs to fetch.
     */
    orderBy?: RegistrasiIndibizOrderByWithRelationInput | RegistrasiIndibizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrasiIndibizs.
     */
    cursor?: RegistrasiIndibizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrasiIndibizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrasiIndibizs.
     */
    skip?: number
    distinct?: RegistrasiIndibizScalarFieldEnum | RegistrasiIndibizScalarFieldEnum[]
  }

  /**
   * RegistrasiIndibiz create
   */
  export type RegistrasiIndibizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistrasiIndibiz.
     */
    data: XOR<RegistrasiIndibizCreateInput, RegistrasiIndibizUncheckedCreateInput>
  }

  /**
   * RegistrasiIndibiz createMany
   */
  export type RegistrasiIndibizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrasiIndibizs.
     */
    data: RegistrasiIndibizCreateManyInput | RegistrasiIndibizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistrasiIndibiz createManyAndReturn
   */
  export type RegistrasiIndibizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * The data used to create many RegistrasiIndibizs.
     */
    data: RegistrasiIndibizCreateManyInput | RegistrasiIndibizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrasiIndibiz update
   */
  export type RegistrasiIndibizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistrasiIndibiz.
     */
    data: XOR<RegistrasiIndibizUpdateInput, RegistrasiIndibizUncheckedUpdateInput>
    /**
     * Choose, which RegistrasiIndibiz to update.
     */
    where: RegistrasiIndibizWhereUniqueInput
  }

  /**
   * RegistrasiIndibiz updateMany
   */
  export type RegistrasiIndibizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrasiIndibizs.
     */
    data: XOR<RegistrasiIndibizUpdateManyMutationInput, RegistrasiIndibizUncheckedUpdateManyInput>
    /**
     * Filter which RegistrasiIndibizs to update
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * Limit how many RegistrasiIndibizs to update.
     */
    limit?: number
  }

  /**
   * RegistrasiIndibiz updateManyAndReturn
   */
  export type RegistrasiIndibizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * The data used to update RegistrasiIndibizs.
     */
    data: XOR<RegistrasiIndibizUpdateManyMutationInput, RegistrasiIndibizUncheckedUpdateManyInput>
    /**
     * Filter which RegistrasiIndibizs to update
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * Limit how many RegistrasiIndibizs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistrasiIndibiz upsert
   */
  export type RegistrasiIndibizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistrasiIndibiz to update in case it exists.
     */
    where: RegistrasiIndibizWhereUniqueInput
    /**
     * In case the RegistrasiIndibiz found by the `where` argument doesn't exist, create a new RegistrasiIndibiz with this data.
     */
    create: XOR<RegistrasiIndibizCreateInput, RegistrasiIndibizUncheckedCreateInput>
    /**
     * In case the RegistrasiIndibiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrasiIndibizUpdateInput, RegistrasiIndibizUncheckedUpdateInput>
  }

  /**
   * RegistrasiIndibiz delete
   */
  export type RegistrasiIndibizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
    /**
     * Filter which RegistrasiIndibiz to delete.
     */
    where: RegistrasiIndibizWhereUniqueInput
  }

  /**
   * RegistrasiIndibiz deleteMany
   */
  export type RegistrasiIndibizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrasiIndibizs to delete
     */
    where?: RegistrasiIndibizWhereInput
    /**
     * Limit how many RegistrasiIndibizs to delete.
     */
    limit?: number
  }

  /**
   * RegistrasiIndibiz without action
   */
  export type RegistrasiIndibizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrasiIndibiz
     */
    select?: RegistrasiIndibizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrasiIndibiz
     */
    omit?: RegistrasiIndibizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrasiIndibizInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const AgencScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AgencScalarFieldEnum = (typeof AgencScalarFieldEnum)[keyof typeof AgencScalarFieldEnum]


  export const DatelScalarFieldEnum: {
    id: 'id',
    kode_sto: 'kode_sto',
    nama: 'nama',
    categori: 'categori',
    wilayah: 'wilayah',
    sub_area: 'sub_area',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DatelScalarFieldEnum = (typeof DatelScalarFieldEnum)[keyof typeof DatelScalarFieldEnum]


  export const PromoScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    jenis: 'jenis',
    diskon: 'diskon',
    mulai: 'mulai',
    akhir: 'akhir',
    is_global: 'is_global',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PromoScalarFieldEnum = (typeof PromoScalarFieldEnum)[keyof typeof PromoScalarFieldEnum]


  export const PaketScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    bandwith: 'bandwith',
    price: 'price',
    price_psb: 'price_psb',
    ppn: 'ppn',
    final_price: 'final_price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaketScalarFieldEnum = (typeof PaketScalarFieldEnum)[keyof typeof PaketScalarFieldEnum]


  export const PaketKategoriScalarFieldEnum: {
    id: 'id',
    paket_id: 'paket_id',
    kategori_id: 'kategori_id',
    created_at: 'created_at'
  };

  export type PaketKategoriScalarFieldEnum = (typeof PaketKategoriScalarFieldEnum)[keyof typeof PaketKategoriScalarFieldEnum]


  export const PaketPromoScalarFieldEnum: {
    id: 'id',
    paket_id: 'paket_id',
    promo_id: 'promo_id',
    created_at: 'created_at'
  };

  export type PaketPromoScalarFieldEnum = (typeof PaketPromoScalarFieldEnum)[keyof typeof PaketPromoScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kode_sales: 'kode_sales',
    email: 'email',
    status: 'status',
    agency_id: 'agency_id',
    datel_id: 'datel_id',
    kat_umur_sa: 'kat_umur_sa',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const RegistrasiIndibizScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    datel_id: 'datel_id',
    paket_id: 'paket_id',
    sales_id: 'sales_id',
    no_hp_1: 'no_hp_1',
    no_hp_2: 'no_hp_2',
    kordinat: 'kordinat',
    alamat: 'alamat',
    nama_pic: 'nama_pic',
    ttl_pic: 'ttl_pic',
    no_ktp: 'no_ktp',
    email: 'email',
    foto_ktp: 'foto_ktp',
    foto_selfie: 'foto_selfie',
    bukti_usaha: 'bukti_usaha',
    bukti_niwp: 'bukti_niwp',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RegistrasiIndibizScalarFieldEnum = (typeof RegistrasiIndibizScalarFieldEnum)[keyof typeof RegistrasiIndibizScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'KategoriDatel'
   */
  export type EnumKategoriDatelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriDatel'>
    


  /**
   * Reference to a field of type 'KategoriDatel[]'
   */
  export type ListEnumKategoriDatelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KategoriDatel[]'>
    


  /**
   * Reference to a field of type 'SubArea'
   */
  export type EnumSubAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubArea'>
    


  /**
   * Reference to a field of type 'SubArea[]'
   */
  export type ListEnumSubAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubArea[]'>
    


  /**
   * Reference to a field of type 'JenisPromo'
   */
  export type EnumJenisPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPromo'>
    


  /**
   * Reference to a field of type 'JenisPromo[]'
   */
  export type ListEnumJenisPromoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisPromo[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusSales'
   */
  export type EnumStatusSalesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSales'>
    


  /**
   * Reference to a field of type 'StatusSales[]'
   */
  export type ListEnumStatusSalesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSales[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    id?: StringFilter<"Auth"> | string
    username?: StringFilter<"Auth"> | string
    password?: StringFilter<"Auth"> | string
  }

  export type AuthOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    password?: StringFilter<"Auth"> | string
  }, "id" | "username">

  export type AuthOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: AuthCountOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auth"> | string
    username?: StringWithAggregatesFilter<"Auth"> | string
    password?: StringWithAggregatesFilter<"Auth"> | string
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: StringFilter<"Kategori"> | string
    nama?: StringFilter<"Kategori"> | string
    created_at?: DateTimeFilter<"Kategori"> | Date | string
    updated_at?: DateTimeFilter<"Kategori"> | Date | string
    paket_categories?: PaketKategoriListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    paket_categories?: PaketKategoriOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    created_at?: DateTimeFilter<"Kategori"> | Date | string
    updated_at?: DateTimeFilter<"Kategori"> | Date | string
    paket_categories?: PaketKategoriListRelationFilter
  }, "id" | "nama">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kategori"> | string
    nama?: StringWithAggregatesFilter<"Kategori"> | string
    created_at?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
  }

  export type AgencWhereInput = {
    AND?: AgencWhereInput | AgencWhereInput[]
    OR?: AgencWhereInput[]
    NOT?: AgencWhereInput | AgencWhereInput[]
    id?: StringFilter<"Agenc"> | string
    nama?: StringFilter<"Agenc"> | string
    created_at?: DateTimeFilter<"Agenc"> | Date | string
    updated_at?: DateTimeFilter<"Agenc"> | Date | string
    sales?: SalesListRelationFilter
  }

  export type AgencOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sales?: SalesOrderByRelationAggregateInput
  }

  export type AgencWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: AgencWhereInput | AgencWhereInput[]
    OR?: AgencWhereInput[]
    NOT?: AgencWhereInput | AgencWhereInput[]
    created_at?: DateTimeFilter<"Agenc"> | Date | string
    updated_at?: DateTimeFilter<"Agenc"> | Date | string
    sales?: SalesListRelationFilter
  }, "id" | "nama">

  export type AgencOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AgencCountOrderByAggregateInput
    _max?: AgencMaxOrderByAggregateInput
    _min?: AgencMinOrderByAggregateInput
  }

  export type AgencScalarWhereWithAggregatesInput = {
    AND?: AgencScalarWhereWithAggregatesInput | AgencScalarWhereWithAggregatesInput[]
    OR?: AgencScalarWhereWithAggregatesInput[]
    NOT?: AgencScalarWhereWithAggregatesInput | AgencScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agenc"> | string
    nama?: StringWithAggregatesFilter<"Agenc"> | string
    created_at?: DateTimeWithAggregatesFilter<"Agenc"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Agenc"> | Date | string
  }

  export type DatelWhereInput = {
    AND?: DatelWhereInput | DatelWhereInput[]
    OR?: DatelWhereInput[]
    NOT?: DatelWhereInput | DatelWhereInput[]
    id?: StringFilter<"Datel"> | string
    kode_sto?: StringFilter<"Datel"> | string
    nama?: StringFilter<"Datel"> | string
    categori?: EnumKategoriDatelFilter<"Datel"> | $Enums.KategoriDatel
    wilayah?: StringFilter<"Datel"> | string
    sub_area?: EnumSubAreaFilter<"Datel"> | $Enums.SubArea
    created_at?: DateTimeFilter<"Datel"> | Date | string
    updated_at?: DateTimeFilter<"Datel"> | Date | string
    sales?: SalesListRelationFilter
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }

  export type DatelOrderByWithRelationInput = {
    id?: SortOrder
    kode_sto?: SortOrder
    nama?: SortOrder
    categori?: SortOrder
    wilayah?: SortOrder
    sub_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sales?: SalesOrderByRelationAggregateInput
    registrasi_indibiz?: RegistrasiIndibizOrderByRelationAggregateInput
  }

  export type DatelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode_sto?: string
    AND?: DatelWhereInput | DatelWhereInput[]
    OR?: DatelWhereInput[]
    NOT?: DatelWhereInput | DatelWhereInput[]
    nama?: StringFilter<"Datel"> | string
    categori?: EnumKategoriDatelFilter<"Datel"> | $Enums.KategoriDatel
    wilayah?: StringFilter<"Datel"> | string
    sub_area?: EnumSubAreaFilter<"Datel"> | $Enums.SubArea
    created_at?: DateTimeFilter<"Datel"> | Date | string
    updated_at?: DateTimeFilter<"Datel"> | Date | string
    sales?: SalesListRelationFilter
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }, "id" | "kode_sto">

  export type DatelOrderByWithAggregationInput = {
    id?: SortOrder
    kode_sto?: SortOrder
    nama?: SortOrder
    categori?: SortOrder
    wilayah?: SortOrder
    sub_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DatelCountOrderByAggregateInput
    _max?: DatelMaxOrderByAggregateInput
    _min?: DatelMinOrderByAggregateInput
  }

  export type DatelScalarWhereWithAggregatesInput = {
    AND?: DatelScalarWhereWithAggregatesInput | DatelScalarWhereWithAggregatesInput[]
    OR?: DatelScalarWhereWithAggregatesInput[]
    NOT?: DatelScalarWhereWithAggregatesInput | DatelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Datel"> | string
    kode_sto?: StringWithAggregatesFilter<"Datel"> | string
    nama?: StringWithAggregatesFilter<"Datel"> | string
    categori?: EnumKategoriDatelWithAggregatesFilter<"Datel"> | $Enums.KategoriDatel
    wilayah?: StringWithAggregatesFilter<"Datel"> | string
    sub_area?: EnumSubAreaWithAggregatesFilter<"Datel"> | $Enums.SubArea
    created_at?: DateTimeWithAggregatesFilter<"Datel"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Datel"> | Date | string
  }

  export type PromoWhereInput = {
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    id?: StringFilter<"Promo"> | string
    nama?: StringFilter<"Promo"> | string
    deskripsi?: StringFilter<"Promo"> | string
    jenis?: EnumJenisPromoFilter<"Promo"> | $Enums.JenisPromo
    diskon?: DecimalFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFilter<"Promo"> | Date | string
    akhir?: DateTimeFilter<"Promo"> | Date | string
    is_global?: BoolFilter<"Promo"> | boolean
    created_at?: DateTimeFilter<"Promo"> | Date | string
    updated_at?: DateTimeFilter<"Promo"> | Date | string
    paket_promos?: PaketPromoListRelationFilter
  }

  export type PromoOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    jenis?: SortOrder
    diskon?: SortOrder
    mulai?: SortOrder
    akhir?: SortOrder
    is_global?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    paket_promos?: PaketPromoOrderByRelationAggregateInput
  }

  export type PromoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    deskripsi?: StringFilter<"Promo"> | string
    jenis?: EnumJenisPromoFilter<"Promo"> | $Enums.JenisPromo
    diskon?: DecimalFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFilter<"Promo"> | Date | string
    akhir?: DateTimeFilter<"Promo"> | Date | string
    is_global?: BoolFilter<"Promo"> | boolean
    created_at?: DateTimeFilter<"Promo"> | Date | string
    updated_at?: DateTimeFilter<"Promo"> | Date | string
    paket_promos?: PaketPromoListRelationFilter
  }, "id" | "nama">

  export type PromoOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    jenis?: SortOrder
    diskon?: SortOrder
    mulai?: SortOrder
    akhir?: SortOrder
    is_global?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PromoCountOrderByAggregateInput
    _avg?: PromoAvgOrderByAggregateInput
    _max?: PromoMaxOrderByAggregateInput
    _min?: PromoMinOrderByAggregateInput
    _sum?: PromoSumOrderByAggregateInput
  }

  export type PromoScalarWhereWithAggregatesInput = {
    AND?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    OR?: PromoScalarWhereWithAggregatesInput[]
    NOT?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promo"> | string
    nama?: StringWithAggregatesFilter<"Promo"> | string
    deskripsi?: StringWithAggregatesFilter<"Promo"> | string
    jenis?: EnumJenisPromoWithAggregatesFilter<"Promo"> | $Enums.JenisPromo
    diskon?: DecimalWithAggregatesFilter<"Promo"> | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    akhir?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    is_global?: BoolWithAggregatesFilter<"Promo"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
  }

  export type PaketWhereInput = {
    AND?: PaketWhereInput | PaketWhereInput[]
    OR?: PaketWhereInput[]
    NOT?: PaketWhereInput | PaketWhereInput[]
    id?: StringFilter<"Paket"> | string
    nama?: StringFilter<"Paket"> | string
    bandwith?: IntFilter<"Paket"> | number
    price?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    ppn?: IntFilter<"Paket"> | number
    final_price?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Paket"> | Date | string
    updated_at?: DateTimeFilter<"Paket"> | Date | string
    paket_categories?: PaketKategoriListRelationFilter
    paket_promos?: PaketPromoListRelationFilter
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }

  export type PaketOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    paket_categories?: PaketKategoriOrderByRelationAggregateInput
    paket_promos?: PaketPromoOrderByRelationAggregateInput
    registrasi_indibiz?: RegistrasiIndibizOrderByRelationAggregateInput
  }

  export type PaketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: PaketWhereInput | PaketWhereInput[]
    OR?: PaketWhereInput[]
    NOT?: PaketWhereInput | PaketWhereInput[]
    bandwith?: IntFilter<"Paket"> | number
    price?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    ppn?: IntFilter<"Paket"> | number
    final_price?: DecimalFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Paket"> | Date | string
    updated_at?: DateTimeFilter<"Paket"> | Date | string
    paket_categories?: PaketKategoriListRelationFilter
    paket_promos?: PaketPromoListRelationFilter
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }, "id" | "nama">

  export type PaketOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaketCountOrderByAggregateInput
    _avg?: PaketAvgOrderByAggregateInput
    _max?: PaketMaxOrderByAggregateInput
    _min?: PaketMinOrderByAggregateInput
    _sum?: PaketSumOrderByAggregateInput
  }

  export type PaketScalarWhereWithAggregatesInput = {
    AND?: PaketScalarWhereWithAggregatesInput | PaketScalarWhereWithAggregatesInput[]
    OR?: PaketScalarWhereWithAggregatesInput[]
    NOT?: PaketScalarWhereWithAggregatesInput | PaketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paket"> | string
    nama?: StringWithAggregatesFilter<"Paket"> | string
    bandwith?: IntWithAggregatesFilter<"Paket"> | number
    price?: DecimalWithAggregatesFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalWithAggregatesFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    ppn?: IntWithAggregatesFilter<"Paket"> | number
    final_price?: DecimalWithAggregatesFilter<"Paket"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Paket"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Paket"> | Date | string
  }

  export type PaketKategoriWhereInput = {
    AND?: PaketKategoriWhereInput | PaketKategoriWhereInput[]
    OR?: PaketKategoriWhereInput[]
    NOT?: PaketKategoriWhereInput | PaketKategoriWhereInput[]
    id?: StringFilter<"PaketKategori"> | string
    paket_id?: StringFilter<"PaketKategori"> | string
    kategori_id?: StringFilter<"PaketKategori"> | string
    created_at?: DateTimeFilter<"PaketKategori"> | Date | string
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }

  export type PaketKategoriOrderByWithRelationInput = {
    id?: SortOrder
    paket_id?: SortOrder
    kategori_id?: SortOrder
    created_at?: SortOrder
    paket?: PaketOrderByWithRelationInput
    kategori?: KategoriOrderByWithRelationInput
  }

  export type PaketKategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paket_id_kategori_id?: PaketKategoriPaket_idKategori_idCompoundUniqueInput
    AND?: PaketKategoriWhereInput | PaketKategoriWhereInput[]
    OR?: PaketKategoriWhereInput[]
    NOT?: PaketKategoriWhereInput | PaketKategoriWhereInput[]
    paket_id?: StringFilter<"PaketKategori"> | string
    kategori_id?: StringFilter<"PaketKategori"> | string
    created_at?: DateTimeFilter<"PaketKategori"> | Date | string
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }, "id" | "paket_id_kategori_id">

  export type PaketKategoriOrderByWithAggregationInput = {
    id?: SortOrder
    paket_id?: SortOrder
    kategori_id?: SortOrder
    created_at?: SortOrder
    _count?: PaketKategoriCountOrderByAggregateInput
    _max?: PaketKategoriMaxOrderByAggregateInput
    _min?: PaketKategoriMinOrderByAggregateInput
  }

  export type PaketKategoriScalarWhereWithAggregatesInput = {
    AND?: PaketKategoriScalarWhereWithAggregatesInput | PaketKategoriScalarWhereWithAggregatesInput[]
    OR?: PaketKategoriScalarWhereWithAggregatesInput[]
    NOT?: PaketKategoriScalarWhereWithAggregatesInput | PaketKategoriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaketKategori"> | string
    paket_id?: StringWithAggregatesFilter<"PaketKategori"> | string
    kategori_id?: StringWithAggregatesFilter<"PaketKategori"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaketKategori"> | Date | string
  }

  export type PaketPromoWhereInput = {
    AND?: PaketPromoWhereInput | PaketPromoWhereInput[]
    OR?: PaketPromoWhereInput[]
    NOT?: PaketPromoWhereInput | PaketPromoWhereInput[]
    id?: StringFilter<"PaketPromo"> | string
    paket_id?: StringFilter<"PaketPromo"> | string
    promo_id?: StringFilter<"PaketPromo"> | string
    created_at?: DateTimeFilter<"PaketPromo"> | Date | string
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
  }

  export type PaketPromoOrderByWithRelationInput = {
    id?: SortOrder
    paket_id?: SortOrder
    promo_id?: SortOrder
    created_at?: SortOrder
    paket?: PaketOrderByWithRelationInput
    promo?: PromoOrderByWithRelationInput
  }

  export type PaketPromoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paket_id_promo_id?: PaketPromoPaket_idPromo_idCompoundUniqueInput
    AND?: PaketPromoWhereInput | PaketPromoWhereInput[]
    OR?: PaketPromoWhereInput[]
    NOT?: PaketPromoWhereInput | PaketPromoWhereInput[]
    paket_id?: StringFilter<"PaketPromo"> | string
    promo_id?: StringFilter<"PaketPromo"> | string
    created_at?: DateTimeFilter<"PaketPromo"> | Date | string
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
  }, "id" | "paket_id_promo_id">

  export type PaketPromoOrderByWithAggregationInput = {
    id?: SortOrder
    paket_id?: SortOrder
    promo_id?: SortOrder
    created_at?: SortOrder
    _count?: PaketPromoCountOrderByAggregateInput
    _max?: PaketPromoMaxOrderByAggregateInput
    _min?: PaketPromoMinOrderByAggregateInput
  }

  export type PaketPromoScalarWhereWithAggregatesInput = {
    AND?: PaketPromoScalarWhereWithAggregatesInput | PaketPromoScalarWhereWithAggregatesInput[]
    OR?: PaketPromoScalarWhereWithAggregatesInput[]
    NOT?: PaketPromoScalarWhereWithAggregatesInput | PaketPromoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaketPromo"> | string
    paket_id?: StringWithAggregatesFilter<"PaketPromo"> | string
    promo_id?: StringWithAggregatesFilter<"PaketPromo"> | string
    created_at?: DateTimeWithAggregatesFilter<"PaketPromo"> | Date | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: StringFilter<"Sales"> | string
    nama?: StringFilter<"Sales"> | string
    kode_sales?: StringFilter<"Sales"> | string
    email?: StringFilter<"Sales"> | string
    status?: EnumStatusSalesFilter<"Sales"> | $Enums.StatusSales
    agency_id?: StringFilter<"Sales"> | string
    datel_id?: StringFilter<"Sales"> | string
    kat_umur_sa?: DateTimeFilter<"Sales"> | Date | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    updated_at?: DateTimeFilter<"Sales"> | Date | string
    agency?: XOR<AgencScalarRelationFilter, AgencWhereInput>
    datel?: XOR<DatelScalarRelationFilter, DatelWhereInput>
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode_sales?: SortOrder
    email?: SortOrder
    status?: SortOrder
    agency_id?: SortOrder
    datel_id?: SortOrder
    kat_umur_sa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    agency?: AgencOrderByWithRelationInput
    datel?: DatelOrderByWithRelationInput
    registrasi_indibiz?: RegistrasiIndibizOrderByRelationAggregateInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    email?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    kode_sales?: StringFilter<"Sales"> | string
    status?: EnumStatusSalesFilter<"Sales"> | $Enums.StatusSales
    agency_id?: StringFilter<"Sales"> | string
    datel_id?: StringFilter<"Sales"> | string
    kat_umur_sa?: DateTimeFilter<"Sales"> | Date | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    updated_at?: DateTimeFilter<"Sales"> | Date | string
    agency?: XOR<AgencScalarRelationFilter, AgencWhereInput>
    datel?: XOR<DatelScalarRelationFilter, DatelWhereInput>
    registrasi_indibiz?: RegistrasiIndibizListRelationFilter
  }, "id" | "nama" | "email">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode_sales?: SortOrder
    email?: SortOrder
    status?: SortOrder
    agency_id?: SortOrder
    datel_id?: SortOrder
    kat_umur_sa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sales"> | string
    nama?: StringWithAggregatesFilter<"Sales"> | string
    kode_sales?: StringWithAggregatesFilter<"Sales"> | string
    email?: StringWithAggregatesFilter<"Sales"> | string
    status?: EnumStatusSalesWithAggregatesFilter<"Sales"> | $Enums.StatusSales
    agency_id?: StringWithAggregatesFilter<"Sales"> | string
    datel_id?: StringWithAggregatesFilter<"Sales"> | string
    kat_umur_sa?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
  }

  export type RegistrasiIndibizWhereInput = {
    AND?: RegistrasiIndibizWhereInput | RegistrasiIndibizWhereInput[]
    OR?: RegistrasiIndibizWhereInput[]
    NOT?: RegistrasiIndibizWhereInput | RegistrasiIndibizWhereInput[]
    id?: StringFilter<"RegistrasiIndibiz"> | string
    nama?: StringFilter<"RegistrasiIndibiz"> | string
    datel_id?: StringFilter<"RegistrasiIndibiz"> | string
    paket_id?: StringFilter<"RegistrasiIndibiz"> | string
    sales_id?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_1?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_2?: StringFilter<"RegistrasiIndibiz"> | string
    kordinat?: StringFilter<"RegistrasiIndibiz"> | string
    alamat?: StringFilter<"RegistrasiIndibiz"> | string
    nama_pic?: StringFilter<"RegistrasiIndibiz"> | string
    ttl_pic?: StringFilter<"RegistrasiIndibiz"> | string
    no_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    email?: StringFilter<"RegistrasiIndibiz"> | string
    foto_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    foto_selfie?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_usaha?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_niwp?: StringFilter<"RegistrasiIndibiz"> | string
    created_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
    updated_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
    datel?: XOR<DatelScalarRelationFilter, DatelWhereInput>
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    sales?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }

  export type RegistrasiIndibizOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    datel_id?: SortOrder
    paket_id?: SortOrder
    sales_id?: SortOrder
    no_hp_1?: SortOrder
    no_hp_2?: SortOrder
    kordinat?: SortOrder
    alamat?: SortOrder
    nama_pic?: SortOrder
    ttl_pic?: SortOrder
    no_ktp?: SortOrder
    email?: SortOrder
    foto_ktp?: SortOrder
    foto_selfie?: SortOrder
    bukti_usaha?: SortOrder
    bukti_niwp?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    datel?: DatelOrderByWithRelationInput
    paket?: PaketOrderByWithRelationInput
    sales?: SalesOrderByWithRelationInput
  }

  export type RegistrasiIndibizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistrasiIndibizWhereInput | RegistrasiIndibizWhereInput[]
    OR?: RegistrasiIndibizWhereInput[]
    NOT?: RegistrasiIndibizWhereInput | RegistrasiIndibizWhereInput[]
    nama?: StringFilter<"RegistrasiIndibiz"> | string
    datel_id?: StringFilter<"RegistrasiIndibiz"> | string
    paket_id?: StringFilter<"RegistrasiIndibiz"> | string
    sales_id?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_1?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_2?: StringFilter<"RegistrasiIndibiz"> | string
    kordinat?: StringFilter<"RegistrasiIndibiz"> | string
    alamat?: StringFilter<"RegistrasiIndibiz"> | string
    nama_pic?: StringFilter<"RegistrasiIndibiz"> | string
    ttl_pic?: StringFilter<"RegistrasiIndibiz"> | string
    no_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    email?: StringFilter<"RegistrasiIndibiz"> | string
    foto_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    foto_selfie?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_usaha?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_niwp?: StringFilter<"RegistrasiIndibiz"> | string
    created_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
    updated_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
    datel?: XOR<DatelScalarRelationFilter, DatelWhereInput>
    paket?: XOR<PaketScalarRelationFilter, PaketWhereInput>
    sales?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }, "id">

  export type RegistrasiIndibizOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    datel_id?: SortOrder
    paket_id?: SortOrder
    sales_id?: SortOrder
    no_hp_1?: SortOrder
    no_hp_2?: SortOrder
    kordinat?: SortOrder
    alamat?: SortOrder
    nama_pic?: SortOrder
    ttl_pic?: SortOrder
    no_ktp?: SortOrder
    email?: SortOrder
    foto_ktp?: SortOrder
    foto_selfie?: SortOrder
    bukti_usaha?: SortOrder
    bukti_niwp?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RegistrasiIndibizCountOrderByAggregateInput
    _max?: RegistrasiIndibizMaxOrderByAggregateInput
    _min?: RegistrasiIndibizMinOrderByAggregateInput
  }

  export type RegistrasiIndibizScalarWhereWithAggregatesInput = {
    AND?: RegistrasiIndibizScalarWhereWithAggregatesInput | RegistrasiIndibizScalarWhereWithAggregatesInput[]
    OR?: RegistrasiIndibizScalarWhereWithAggregatesInput[]
    NOT?: RegistrasiIndibizScalarWhereWithAggregatesInput | RegistrasiIndibizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    nama?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    datel_id?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    paket_id?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    sales_id?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    no_hp_1?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    no_hp_2?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    kordinat?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    alamat?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    nama_pic?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    ttl_pic?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    no_ktp?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    email?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    foto_ktp?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    foto_selfie?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    bukti_usaha?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    bukti_niwp?: StringWithAggregatesFilter<"RegistrasiIndibiz"> | string
    created_at?: DateTimeWithAggregatesFilter<"RegistrasiIndibiz"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RegistrasiIndibiz"> | Date | string
  }

  export type AuthCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AuthUncheckedCreateInput = {
    id?: string
    username: string
    password: string
  }

  export type AuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type AuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesCreateNestedManyWithoutAgencyInput
  }

  export type AgencUncheckedCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesUncheckedCreateNestedManyWithoutAgencyInput
  }

  export type AgencUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUpdateManyWithoutAgencyNestedInput
  }

  export type AgencUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUncheckedUpdateManyWithoutAgencyNestedInput
  }

  export type AgencCreateManyInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AgencUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatelCreateInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesCreateNestedManyWithoutDatelInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutDatelInput
  }

  export type DatelUncheckedCreateInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesUncheckedCreateNestedManyWithoutDatelInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutDatelInput
  }

  export type DatelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUpdateManyWithoutDatelNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutDatelNestedInput
  }

  export type DatelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUncheckedUpdateManyWithoutDatelNestedInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutDatelNestedInput
  }

  export type DatelCreateManyInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DatelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal | DecimalJsLike | number | string
    mulai: Date | string
    akhir: Date | string
    is_global: boolean
    created_at?: Date | string
    updated_at?: Date | string
    paket_promos?: PaketPromoCreateNestedManyWithoutPromoInput
  }

  export type PromoUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal | DecimalJsLike | number | string
    mulai: Date | string
    akhir: Date | string
    is_global: boolean
    created_at?: Date | string
    updated_at?: Date | string
    paket_promos?: PaketPromoUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_promos?: PaketPromoUpdateManyWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_promos?: PaketPromoUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromoCreateManyInput = {
    id?: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal | DecimalJsLike | number | string
    mulai: Date | string
    akhir: Date | string
    is_global: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketCreateInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriCreateNestedManyWithoutPaketInput
    paket_promos?: PaketPromoCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutPaketInput
  }

  export type PaketUncheckedCreateInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriUncheckedCreateNestedManyWithoutPaketInput
    paket_promos?: PaketPromoUncheckedCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutPaketInput
  }

  export type PaketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUpdateManyWithoutPaketNestedInput
    paket_promos?: PaketPromoUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutPaketNestedInput
  }

  export type PaketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUncheckedUpdateManyWithoutPaketNestedInput
    paket_promos?: PaketPromoUncheckedUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutPaketNestedInput
  }

  export type PaketCreateManyInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriCreateInput = {
    id?: string
    created_at?: Date | string
    paket: PaketCreateNestedOneWithoutPaket_categoriesInput
    kategori: KategoriCreateNestedOneWithoutPaket_categoriesInput
  }

  export type PaketKategoriUncheckedCreateInput = {
    id?: string
    paket_id: string
    kategori_id: string
    created_at?: Date | string
  }

  export type PaketKategoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket?: PaketUpdateOneRequiredWithoutPaket_categoriesNestedInput
    kategori?: KategoriUpdateOneRequiredWithoutPaket_categoriesNestedInput
  }

  export type PaketKategoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    kategori_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriCreateManyInput = {
    id?: string
    paket_id: string
    kategori_id: string
    created_at?: Date | string
  }

  export type PaketKategoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    kategori_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoCreateInput = {
    id?: string
    created_at?: Date | string
    paket: PaketCreateNestedOneWithoutPaket_promosInput
    promo: PromoCreateNestedOneWithoutPaket_promosInput
  }

  export type PaketPromoUncheckedCreateInput = {
    id?: string
    paket_id: string
    promo_id: string
    created_at?: Date | string
  }

  export type PaketPromoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket?: PaketUpdateOneRequiredWithoutPaket_promosNestedInput
    promo?: PromoUpdateOneRequiredWithoutPaket_promosNestedInput
  }

  export type PaketPromoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    promo_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoCreateManyInput = {
    id?: string
    paket_id: string
    promo_id: string
    created_at?: Date | string
  }

  export type PaketPromoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    promo_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    agency: AgencCreateNestedOneWithoutSalesInput
    datel: DatelCreateNestedOneWithoutSalesInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    datel_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutSalesInput
  }

  export type SalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencUpdateOneRequiredWithoutSalesNestedInput
    datel?: DatelUpdateOneRequiredWithoutSalesNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    agency_id?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type SalesCreateManyInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    datel_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    agency_id?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizCreateInput = {
    id?: string
    nama: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
    datel: DatelCreateNestedOneWithoutRegistrasi_indibizInput
    paket: PaketCreateNestedOneWithoutRegistrasi_indibizInput
    sales: SalesCreateNestedOneWithoutRegistrasi_indibizInput
  }

  export type RegistrasiIndibizUncheckedCreateInput = {
    id?: string
    nama: string
    datel_id: string
    paket_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    datel?: DatelUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
    paket?: PaketUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
    sales?: SalesUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
  }

  export type RegistrasiIndibizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizCreateManyInput = {
    id?: string
    nama: string
    datel_id: string
    paket_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AuthCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PaketKategoriListRelationFilter = {
    every?: PaketKategoriWhereInput
    some?: PaketKategoriWhereInput
    none?: PaketKategoriWhereInput
  }

  export type PaketKategoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgencCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AgencMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AgencMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumKategoriDatelFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriDatel | EnumKategoriDatelFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriDatelFilter<$PrismaModel> | $Enums.KategoriDatel
  }

  export type EnumSubAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.SubArea | EnumSubAreaFieldRefInput<$PrismaModel>
    in?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAreaFilter<$PrismaModel> | $Enums.SubArea
  }

  export type RegistrasiIndibizListRelationFilter = {
    every?: RegistrasiIndibizWhereInput
    some?: RegistrasiIndibizWhereInput
    none?: RegistrasiIndibizWhereInput
  }

  export type RegistrasiIndibizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatelCountOrderByAggregateInput = {
    id?: SortOrder
    kode_sto?: SortOrder
    nama?: SortOrder
    categori?: SortOrder
    wilayah?: SortOrder
    sub_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DatelMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_sto?: SortOrder
    nama?: SortOrder
    categori?: SortOrder
    wilayah?: SortOrder
    sub_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DatelMinOrderByAggregateInput = {
    id?: SortOrder
    kode_sto?: SortOrder
    nama?: SortOrder
    categori?: SortOrder
    wilayah?: SortOrder
    sub_area?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumKategoriDatelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriDatel | EnumKategoriDatelFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriDatelWithAggregatesFilter<$PrismaModel> | $Enums.KategoriDatel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriDatelFilter<$PrismaModel>
    _max?: NestedEnumKategoriDatelFilter<$PrismaModel>
  }

  export type EnumSubAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubArea | EnumSubAreaFieldRefInput<$PrismaModel>
    in?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAreaWithAggregatesFilter<$PrismaModel> | $Enums.SubArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubAreaFilter<$PrismaModel>
    _max?: NestedEnumSubAreaFilter<$PrismaModel>
  }

  export type EnumJenisPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPromo | EnumJenisPromoFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPromoFilter<$PrismaModel> | $Enums.JenisPromo
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PaketPromoListRelationFilter = {
    every?: PaketPromoWhereInput
    some?: PaketPromoWhereInput
    none?: PaketPromoWhereInput
  }

  export type PaketPromoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromoCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    jenis?: SortOrder
    diskon?: SortOrder
    mulai?: SortOrder
    akhir?: SortOrder
    is_global?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PromoAvgOrderByAggregateInput = {
    diskon?: SortOrder
  }

  export type PromoMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    jenis?: SortOrder
    diskon?: SortOrder
    mulai?: SortOrder
    akhir?: SortOrder
    is_global?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PromoMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    jenis?: SortOrder
    diskon?: SortOrder
    mulai?: SortOrder
    akhir?: SortOrder
    is_global?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PromoSumOrderByAggregateInput = {
    diskon?: SortOrder
  }

  export type EnumJenisPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPromo | EnumJenisPromoFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPromoWithAggregatesFilter<$PrismaModel> | $Enums.JenisPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPromoFilter<$PrismaModel>
    _max?: NestedEnumJenisPromoFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PaketCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaketAvgOrderByAggregateInput = {
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
  }

  export type PaketMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaketMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaketSumOrderByAggregateInput = {
    bandwith?: SortOrder
    price?: SortOrder
    price_psb?: SortOrder
    ppn?: SortOrder
    final_price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PaketScalarRelationFilter = {
    is?: PaketWhereInput
    isNot?: PaketWhereInput
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type PaketKategoriPaket_idKategori_idCompoundUniqueInput = {
    paket_id: string
    kategori_id: string
  }

  export type PaketKategoriCountOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    kategori_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaketKategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    kategori_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaketKategoriMinOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    kategori_id?: SortOrder
    created_at?: SortOrder
  }

  export type PromoScalarRelationFilter = {
    is?: PromoWhereInput
    isNot?: PromoWhereInput
  }

  export type PaketPromoPaket_idPromo_idCompoundUniqueInput = {
    paket_id: string
    promo_id: string
  }

  export type PaketPromoCountOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    promo_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaketPromoMaxOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    promo_id?: SortOrder
    created_at?: SortOrder
  }

  export type PaketPromoMinOrderByAggregateInput = {
    id?: SortOrder
    paket_id?: SortOrder
    promo_id?: SortOrder
    created_at?: SortOrder
  }

  export type EnumStatusSalesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSales | EnumStatusSalesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalesFilter<$PrismaModel> | $Enums.StatusSales
  }

  export type AgencScalarRelationFilter = {
    is?: AgencWhereInput
    isNot?: AgencWhereInput
  }

  export type DatelScalarRelationFilter = {
    is?: DatelWhereInput
    isNot?: DatelWhereInput
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode_sales?: SortOrder
    email?: SortOrder
    status?: SortOrder
    agency_id?: SortOrder
    datel_id?: SortOrder
    kat_umur_sa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode_sales?: SortOrder
    email?: SortOrder
    status?: SortOrder
    agency_id?: SortOrder
    datel_id?: SortOrder
    kat_umur_sa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode_sales?: SortOrder
    email?: SortOrder
    status?: SortOrder
    agency_id?: SortOrder
    datel_id?: SortOrder
    kat_umur_sa?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumStatusSalesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSales | EnumStatusSalesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalesWithAggregatesFilter<$PrismaModel> | $Enums.StatusSales
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSalesFilter<$PrismaModel>
    _max?: NestedEnumStatusSalesFilter<$PrismaModel>
  }

  export type SalesScalarRelationFilter = {
    is?: SalesWhereInput
    isNot?: SalesWhereInput
  }

  export type RegistrasiIndibizCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    datel_id?: SortOrder
    paket_id?: SortOrder
    sales_id?: SortOrder
    no_hp_1?: SortOrder
    no_hp_2?: SortOrder
    kordinat?: SortOrder
    alamat?: SortOrder
    nama_pic?: SortOrder
    ttl_pic?: SortOrder
    no_ktp?: SortOrder
    email?: SortOrder
    foto_ktp?: SortOrder
    foto_selfie?: SortOrder
    bukti_usaha?: SortOrder
    bukti_niwp?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RegistrasiIndibizMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    datel_id?: SortOrder
    paket_id?: SortOrder
    sales_id?: SortOrder
    no_hp_1?: SortOrder
    no_hp_2?: SortOrder
    kordinat?: SortOrder
    alamat?: SortOrder
    nama_pic?: SortOrder
    ttl_pic?: SortOrder
    no_ktp?: SortOrder
    email?: SortOrder
    foto_ktp?: SortOrder
    foto_selfie?: SortOrder
    bukti_usaha?: SortOrder
    bukti_niwp?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RegistrasiIndibizMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    datel_id?: SortOrder
    paket_id?: SortOrder
    sales_id?: SortOrder
    no_hp_1?: SortOrder
    no_hp_2?: SortOrder
    kordinat?: SortOrder
    alamat?: SortOrder
    nama_pic?: SortOrder
    ttl_pic?: SortOrder
    no_ktp?: SortOrder
    email?: SortOrder
    foto_ktp?: SortOrder
    foto_selfie?: SortOrder
    bukti_usaha?: SortOrder
    bukti_niwp?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PaketKategoriCreateNestedManyWithoutKategoriInput = {
    create?: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput> | PaketKategoriCreateWithoutKategoriInput[] | PaketKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutKategoriInput | PaketKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: PaketKategoriCreateManyKategoriInputEnvelope
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
  }

  export type PaketKategoriUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput> | PaketKategoriCreateWithoutKategoriInput[] | PaketKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutKategoriInput | PaketKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: PaketKategoriCreateManyKategoriInputEnvelope
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaketKategoriUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput> | PaketKategoriCreateWithoutKategoriInput[] | PaketKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutKategoriInput | PaketKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: PaketKategoriUpsertWithWhereUniqueWithoutKategoriInput | PaketKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: PaketKategoriCreateManyKategoriInputEnvelope
    set?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    disconnect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    delete?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    update?: PaketKategoriUpdateWithWhereUniqueWithoutKategoriInput | PaketKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: PaketKategoriUpdateManyWithWhereWithoutKategoriInput | PaketKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
  }

  export type PaketKategoriUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput> | PaketKategoriCreateWithoutKategoriInput[] | PaketKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutKategoriInput | PaketKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: PaketKategoriUpsertWithWhereUniqueWithoutKategoriInput | PaketKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: PaketKategoriCreateManyKategoriInputEnvelope
    set?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    disconnect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    delete?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    update?: PaketKategoriUpdateWithWhereUniqueWithoutKategoriInput | PaketKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: PaketKategoriUpdateManyWithWhereWithoutKategoriInput | PaketKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
  }

  export type SalesCreateNestedManyWithoutAgencyInput = {
    create?: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput> | SalesCreateWithoutAgencyInput[] | SalesUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutAgencyInput | SalesCreateOrConnectWithoutAgencyInput[]
    createMany?: SalesCreateManyAgencyInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutAgencyInput = {
    create?: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput> | SalesCreateWithoutAgencyInput[] | SalesUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutAgencyInput | SalesCreateOrConnectWithoutAgencyInput[]
    createMany?: SalesCreateManyAgencyInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type SalesUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput> | SalesCreateWithoutAgencyInput[] | SalesUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutAgencyInput | SalesCreateOrConnectWithoutAgencyInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutAgencyInput | SalesUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: SalesCreateManyAgencyInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutAgencyInput | SalesUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutAgencyInput | SalesUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutAgencyNestedInput = {
    create?: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput> | SalesCreateWithoutAgencyInput[] | SalesUncheckedCreateWithoutAgencyInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutAgencyInput | SalesCreateOrConnectWithoutAgencyInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutAgencyInput | SalesUpsertWithWhereUniqueWithoutAgencyInput[]
    createMany?: SalesCreateManyAgencyInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutAgencyInput | SalesUpdateWithWhereUniqueWithoutAgencyInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutAgencyInput | SalesUpdateManyWithWhereWithoutAgencyInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type SalesCreateNestedManyWithoutDatelInput = {
    create?: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput> | SalesCreateWithoutDatelInput[] | SalesUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutDatelInput | SalesCreateOrConnectWithoutDatelInput[]
    createMany?: SalesCreateManyDatelInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type RegistrasiIndibizCreateNestedManyWithoutDatelInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput> | RegistrasiIndibizCreateWithoutDatelInput[] | RegistrasiIndibizUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutDatelInput | RegistrasiIndibizCreateOrConnectWithoutDatelInput[]
    createMany?: RegistrasiIndibizCreateManyDatelInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type SalesUncheckedCreateNestedManyWithoutDatelInput = {
    create?: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput> | SalesCreateWithoutDatelInput[] | SalesUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutDatelInput | SalesCreateOrConnectWithoutDatelInput[]
    createMany?: SalesCreateManyDatelInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type RegistrasiIndibizUncheckedCreateNestedManyWithoutDatelInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput> | RegistrasiIndibizCreateWithoutDatelInput[] | RegistrasiIndibizUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutDatelInput | RegistrasiIndibizCreateOrConnectWithoutDatelInput[]
    createMany?: RegistrasiIndibizCreateManyDatelInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type EnumKategoriDatelFieldUpdateOperationsInput = {
    set?: $Enums.KategoriDatel
  }

  export type EnumSubAreaFieldUpdateOperationsInput = {
    set?: $Enums.SubArea
  }

  export type SalesUpdateManyWithoutDatelNestedInput = {
    create?: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput> | SalesCreateWithoutDatelInput[] | SalesUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutDatelInput | SalesCreateOrConnectWithoutDatelInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutDatelInput | SalesUpsertWithWhereUniqueWithoutDatelInput[]
    createMany?: SalesCreateManyDatelInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutDatelInput | SalesUpdateWithWhereUniqueWithoutDatelInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutDatelInput | SalesUpdateManyWithWhereWithoutDatelInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type RegistrasiIndibizUpdateManyWithoutDatelNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput> | RegistrasiIndibizCreateWithoutDatelInput[] | RegistrasiIndibizUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutDatelInput | RegistrasiIndibizCreateOrConnectWithoutDatelInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutDatelInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutDatelInput[]
    createMany?: RegistrasiIndibizCreateManyDatelInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutDatelInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutDatelInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutDatelInput | RegistrasiIndibizUpdateManyWithWhereWithoutDatelInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type SalesUncheckedUpdateManyWithoutDatelNestedInput = {
    create?: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput> | SalesCreateWithoutDatelInput[] | SalesUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutDatelInput | SalesCreateOrConnectWithoutDatelInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutDatelInput | SalesUpsertWithWhereUniqueWithoutDatelInput[]
    createMany?: SalesCreateManyDatelInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutDatelInput | SalesUpdateWithWhereUniqueWithoutDatelInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutDatelInput | SalesUpdateManyWithWhereWithoutDatelInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutDatelNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput> | RegistrasiIndibizCreateWithoutDatelInput[] | RegistrasiIndibizUncheckedCreateWithoutDatelInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutDatelInput | RegistrasiIndibizCreateOrConnectWithoutDatelInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutDatelInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutDatelInput[]
    createMany?: RegistrasiIndibizCreateManyDatelInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutDatelInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutDatelInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutDatelInput | RegistrasiIndibizUpdateManyWithWhereWithoutDatelInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type PaketPromoCreateNestedManyWithoutPromoInput = {
    create?: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput> | PaketPromoCreateWithoutPromoInput[] | PaketPromoUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPromoInput | PaketPromoCreateOrConnectWithoutPromoInput[]
    createMany?: PaketPromoCreateManyPromoInputEnvelope
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
  }

  export type PaketPromoUncheckedCreateNestedManyWithoutPromoInput = {
    create?: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput> | PaketPromoCreateWithoutPromoInput[] | PaketPromoUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPromoInput | PaketPromoCreateOrConnectWithoutPromoInput[]
    createMany?: PaketPromoCreateManyPromoInputEnvelope
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
  }

  export type EnumJenisPromoFieldUpdateOperationsInput = {
    set?: $Enums.JenisPromo
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaketPromoUpdateManyWithoutPromoNestedInput = {
    create?: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput> | PaketPromoCreateWithoutPromoInput[] | PaketPromoUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPromoInput | PaketPromoCreateOrConnectWithoutPromoInput[]
    upsert?: PaketPromoUpsertWithWhereUniqueWithoutPromoInput | PaketPromoUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: PaketPromoCreateManyPromoInputEnvelope
    set?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    disconnect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    delete?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    update?: PaketPromoUpdateWithWhereUniqueWithoutPromoInput | PaketPromoUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: PaketPromoUpdateManyWithWhereWithoutPromoInput | PaketPromoUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
  }

  export type PaketPromoUncheckedUpdateManyWithoutPromoNestedInput = {
    create?: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput> | PaketPromoCreateWithoutPromoInput[] | PaketPromoUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPromoInput | PaketPromoCreateOrConnectWithoutPromoInput[]
    upsert?: PaketPromoUpsertWithWhereUniqueWithoutPromoInput | PaketPromoUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: PaketPromoCreateManyPromoInputEnvelope
    set?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    disconnect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    delete?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    update?: PaketPromoUpdateWithWhereUniqueWithoutPromoInput | PaketPromoUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: PaketPromoUpdateManyWithWhereWithoutPromoInput | PaketPromoUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
  }

  export type PaketKategoriCreateNestedManyWithoutPaketInput = {
    create?: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput> | PaketKategoriCreateWithoutPaketInput[] | PaketKategoriUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutPaketInput | PaketKategoriCreateOrConnectWithoutPaketInput[]
    createMany?: PaketKategoriCreateManyPaketInputEnvelope
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
  }

  export type PaketPromoCreateNestedManyWithoutPaketInput = {
    create?: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput> | PaketPromoCreateWithoutPaketInput[] | PaketPromoUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPaketInput | PaketPromoCreateOrConnectWithoutPaketInput[]
    createMany?: PaketPromoCreateManyPaketInputEnvelope
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
  }

  export type RegistrasiIndibizCreateNestedManyWithoutPaketInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput> | RegistrasiIndibizCreateWithoutPaketInput[] | RegistrasiIndibizUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutPaketInput | RegistrasiIndibizCreateOrConnectWithoutPaketInput[]
    createMany?: RegistrasiIndibizCreateManyPaketInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type PaketKategoriUncheckedCreateNestedManyWithoutPaketInput = {
    create?: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput> | PaketKategoriCreateWithoutPaketInput[] | PaketKategoriUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutPaketInput | PaketKategoriCreateOrConnectWithoutPaketInput[]
    createMany?: PaketKategoriCreateManyPaketInputEnvelope
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
  }

  export type PaketPromoUncheckedCreateNestedManyWithoutPaketInput = {
    create?: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput> | PaketPromoCreateWithoutPaketInput[] | PaketPromoUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPaketInput | PaketPromoCreateOrConnectWithoutPaketInput[]
    createMany?: PaketPromoCreateManyPaketInputEnvelope
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
  }

  export type RegistrasiIndibizUncheckedCreateNestedManyWithoutPaketInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput> | RegistrasiIndibizCreateWithoutPaketInput[] | RegistrasiIndibizUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutPaketInput | RegistrasiIndibizCreateOrConnectWithoutPaketInput[]
    createMany?: RegistrasiIndibizCreateManyPaketInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaketKategoriUpdateManyWithoutPaketNestedInput = {
    create?: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput> | PaketKategoriCreateWithoutPaketInput[] | PaketKategoriUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutPaketInput | PaketKategoriCreateOrConnectWithoutPaketInput[]
    upsert?: PaketKategoriUpsertWithWhereUniqueWithoutPaketInput | PaketKategoriUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: PaketKategoriCreateManyPaketInputEnvelope
    set?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    disconnect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    delete?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    update?: PaketKategoriUpdateWithWhereUniqueWithoutPaketInput | PaketKategoriUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: PaketKategoriUpdateManyWithWhereWithoutPaketInput | PaketKategoriUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
  }

  export type PaketPromoUpdateManyWithoutPaketNestedInput = {
    create?: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput> | PaketPromoCreateWithoutPaketInput[] | PaketPromoUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPaketInput | PaketPromoCreateOrConnectWithoutPaketInput[]
    upsert?: PaketPromoUpsertWithWhereUniqueWithoutPaketInput | PaketPromoUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: PaketPromoCreateManyPaketInputEnvelope
    set?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    disconnect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    delete?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    update?: PaketPromoUpdateWithWhereUniqueWithoutPaketInput | PaketPromoUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: PaketPromoUpdateManyWithWhereWithoutPaketInput | PaketPromoUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
  }

  export type RegistrasiIndibizUpdateManyWithoutPaketNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput> | RegistrasiIndibizCreateWithoutPaketInput[] | RegistrasiIndibizUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutPaketInput | RegistrasiIndibizCreateOrConnectWithoutPaketInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutPaketInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: RegistrasiIndibizCreateManyPaketInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutPaketInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutPaketInput | RegistrasiIndibizUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type PaketKategoriUncheckedUpdateManyWithoutPaketNestedInput = {
    create?: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput> | PaketKategoriCreateWithoutPaketInput[] | PaketKategoriUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketKategoriCreateOrConnectWithoutPaketInput | PaketKategoriCreateOrConnectWithoutPaketInput[]
    upsert?: PaketKategoriUpsertWithWhereUniqueWithoutPaketInput | PaketKategoriUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: PaketKategoriCreateManyPaketInputEnvelope
    set?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    disconnect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    delete?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    connect?: PaketKategoriWhereUniqueInput | PaketKategoriWhereUniqueInput[]
    update?: PaketKategoriUpdateWithWhereUniqueWithoutPaketInput | PaketKategoriUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: PaketKategoriUpdateManyWithWhereWithoutPaketInput | PaketKategoriUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
  }

  export type PaketPromoUncheckedUpdateManyWithoutPaketNestedInput = {
    create?: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput> | PaketPromoCreateWithoutPaketInput[] | PaketPromoUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: PaketPromoCreateOrConnectWithoutPaketInput | PaketPromoCreateOrConnectWithoutPaketInput[]
    upsert?: PaketPromoUpsertWithWhereUniqueWithoutPaketInput | PaketPromoUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: PaketPromoCreateManyPaketInputEnvelope
    set?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    disconnect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    delete?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    connect?: PaketPromoWhereUniqueInput | PaketPromoWhereUniqueInput[]
    update?: PaketPromoUpdateWithWhereUniqueWithoutPaketInput | PaketPromoUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: PaketPromoUpdateManyWithWhereWithoutPaketInput | PaketPromoUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutPaketNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput> | RegistrasiIndibizCreateWithoutPaketInput[] | RegistrasiIndibizUncheckedCreateWithoutPaketInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutPaketInput | RegistrasiIndibizCreateOrConnectWithoutPaketInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutPaketInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutPaketInput[]
    createMany?: RegistrasiIndibizCreateManyPaketInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutPaketInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutPaketInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutPaketInput | RegistrasiIndibizUpdateManyWithWhereWithoutPaketInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type PaketCreateNestedOneWithoutPaket_categoriesInput = {
    create?: XOR<PaketCreateWithoutPaket_categoriesInput, PaketUncheckedCreateWithoutPaket_categoriesInput>
    connectOrCreate?: PaketCreateOrConnectWithoutPaket_categoriesInput
    connect?: PaketWhereUniqueInput
  }

  export type KategoriCreateNestedOneWithoutPaket_categoriesInput = {
    create?: XOR<KategoriCreateWithoutPaket_categoriesInput, KategoriUncheckedCreateWithoutPaket_categoriesInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutPaket_categoriesInput
    connect?: KategoriWhereUniqueInput
  }

  export type PaketUpdateOneRequiredWithoutPaket_categoriesNestedInput = {
    create?: XOR<PaketCreateWithoutPaket_categoriesInput, PaketUncheckedCreateWithoutPaket_categoriesInput>
    connectOrCreate?: PaketCreateOrConnectWithoutPaket_categoriesInput
    upsert?: PaketUpsertWithoutPaket_categoriesInput
    connect?: PaketWhereUniqueInput
    update?: XOR<XOR<PaketUpdateToOneWithWhereWithoutPaket_categoriesInput, PaketUpdateWithoutPaket_categoriesInput>, PaketUncheckedUpdateWithoutPaket_categoriesInput>
  }

  export type KategoriUpdateOneRequiredWithoutPaket_categoriesNestedInput = {
    create?: XOR<KategoriCreateWithoutPaket_categoriesInput, KategoriUncheckedCreateWithoutPaket_categoriesInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutPaket_categoriesInput
    upsert?: KategoriUpsertWithoutPaket_categoriesInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutPaket_categoriesInput, KategoriUpdateWithoutPaket_categoriesInput>, KategoriUncheckedUpdateWithoutPaket_categoriesInput>
  }

  export type PaketCreateNestedOneWithoutPaket_promosInput = {
    create?: XOR<PaketCreateWithoutPaket_promosInput, PaketUncheckedCreateWithoutPaket_promosInput>
    connectOrCreate?: PaketCreateOrConnectWithoutPaket_promosInput
    connect?: PaketWhereUniqueInput
  }

  export type PromoCreateNestedOneWithoutPaket_promosInput = {
    create?: XOR<PromoCreateWithoutPaket_promosInput, PromoUncheckedCreateWithoutPaket_promosInput>
    connectOrCreate?: PromoCreateOrConnectWithoutPaket_promosInput
    connect?: PromoWhereUniqueInput
  }

  export type PaketUpdateOneRequiredWithoutPaket_promosNestedInput = {
    create?: XOR<PaketCreateWithoutPaket_promosInput, PaketUncheckedCreateWithoutPaket_promosInput>
    connectOrCreate?: PaketCreateOrConnectWithoutPaket_promosInput
    upsert?: PaketUpsertWithoutPaket_promosInput
    connect?: PaketWhereUniqueInput
    update?: XOR<XOR<PaketUpdateToOneWithWhereWithoutPaket_promosInput, PaketUpdateWithoutPaket_promosInput>, PaketUncheckedUpdateWithoutPaket_promosInput>
  }

  export type PromoUpdateOneRequiredWithoutPaket_promosNestedInput = {
    create?: XOR<PromoCreateWithoutPaket_promosInput, PromoUncheckedCreateWithoutPaket_promosInput>
    connectOrCreate?: PromoCreateOrConnectWithoutPaket_promosInput
    upsert?: PromoUpsertWithoutPaket_promosInput
    connect?: PromoWhereUniqueInput
    update?: XOR<XOR<PromoUpdateToOneWithWhereWithoutPaket_promosInput, PromoUpdateWithoutPaket_promosInput>, PromoUncheckedUpdateWithoutPaket_promosInput>
  }

  export type AgencCreateNestedOneWithoutSalesInput = {
    create?: XOR<AgencCreateWithoutSalesInput, AgencUncheckedCreateWithoutSalesInput>
    connectOrCreate?: AgencCreateOrConnectWithoutSalesInput
    connect?: AgencWhereUniqueInput
  }

  export type DatelCreateNestedOneWithoutSalesInput = {
    create?: XOR<DatelCreateWithoutSalesInput, DatelUncheckedCreateWithoutSalesInput>
    connectOrCreate?: DatelCreateOrConnectWithoutSalesInput
    connect?: DatelWhereUniqueInput
  }

  export type RegistrasiIndibizCreateNestedManyWithoutSalesInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput> | RegistrasiIndibizCreateWithoutSalesInput[] | RegistrasiIndibizUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutSalesInput | RegistrasiIndibizCreateOrConnectWithoutSalesInput[]
    createMany?: RegistrasiIndibizCreateManySalesInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type RegistrasiIndibizUncheckedCreateNestedManyWithoutSalesInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput> | RegistrasiIndibizCreateWithoutSalesInput[] | RegistrasiIndibizUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutSalesInput | RegistrasiIndibizCreateOrConnectWithoutSalesInput[]
    createMany?: RegistrasiIndibizCreateManySalesInputEnvelope
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
  }

  export type EnumStatusSalesFieldUpdateOperationsInput = {
    set?: $Enums.StatusSales
  }

  export type AgencUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<AgencCreateWithoutSalesInput, AgencUncheckedCreateWithoutSalesInput>
    connectOrCreate?: AgencCreateOrConnectWithoutSalesInput
    upsert?: AgencUpsertWithoutSalesInput
    connect?: AgencWhereUniqueInput
    update?: XOR<XOR<AgencUpdateToOneWithWhereWithoutSalesInput, AgencUpdateWithoutSalesInput>, AgencUncheckedUpdateWithoutSalesInput>
  }

  export type DatelUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<DatelCreateWithoutSalesInput, DatelUncheckedCreateWithoutSalesInput>
    connectOrCreate?: DatelCreateOrConnectWithoutSalesInput
    upsert?: DatelUpsertWithoutSalesInput
    connect?: DatelWhereUniqueInput
    update?: XOR<XOR<DatelUpdateToOneWithWhereWithoutSalesInput, DatelUpdateWithoutSalesInput>, DatelUncheckedUpdateWithoutSalesInput>
  }

  export type RegistrasiIndibizUpdateManyWithoutSalesNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput> | RegistrasiIndibizCreateWithoutSalesInput[] | RegistrasiIndibizUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutSalesInput | RegistrasiIndibizCreateOrConnectWithoutSalesInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutSalesInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: RegistrasiIndibizCreateManySalesInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutSalesInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutSalesInput | RegistrasiIndibizUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutSalesNestedInput = {
    create?: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput> | RegistrasiIndibizCreateWithoutSalesInput[] | RegistrasiIndibizUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: RegistrasiIndibizCreateOrConnectWithoutSalesInput | RegistrasiIndibizCreateOrConnectWithoutSalesInput[]
    upsert?: RegistrasiIndibizUpsertWithWhereUniqueWithoutSalesInput | RegistrasiIndibizUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: RegistrasiIndibizCreateManySalesInputEnvelope
    set?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    disconnect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    delete?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    connect?: RegistrasiIndibizWhereUniqueInput | RegistrasiIndibizWhereUniqueInput[]
    update?: RegistrasiIndibizUpdateWithWhereUniqueWithoutSalesInput | RegistrasiIndibizUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: RegistrasiIndibizUpdateManyWithWhereWithoutSalesInput | RegistrasiIndibizUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
  }

  export type DatelCreateNestedOneWithoutRegistrasi_indibizInput = {
    create?: XOR<DatelCreateWithoutRegistrasi_indibizInput, DatelUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: DatelCreateOrConnectWithoutRegistrasi_indibizInput
    connect?: DatelWhereUniqueInput
  }

  export type PaketCreateNestedOneWithoutRegistrasi_indibizInput = {
    create?: XOR<PaketCreateWithoutRegistrasi_indibizInput, PaketUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: PaketCreateOrConnectWithoutRegistrasi_indibizInput
    connect?: PaketWhereUniqueInput
  }

  export type SalesCreateNestedOneWithoutRegistrasi_indibizInput = {
    create?: XOR<SalesCreateWithoutRegistrasi_indibizInput, SalesUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: SalesCreateOrConnectWithoutRegistrasi_indibizInput
    connect?: SalesWhereUniqueInput
  }

  export type DatelUpdateOneRequiredWithoutRegistrasi_indibizNestedInput = {
    create?: XOR<DatelCreateWithoutRegistrasi_indibizInput, DatelUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: DatelCreateOrConnectWithoutRegistrasi_indibizInput
    upsert?: DatelUpsertWithoutRegistrasi_indibizInput
    connect?: DatelWhereUniqueInput
    update?: XOR<XOR<DatelUpdateToOneWithWhereWithoutRegistrasi_indibizInput, DatelUpdateWithoutRegistrasi_indibizInput>, DatelUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type PaketUpdateOneRequiredWithoutRegistrasi_indibizNestedInput = {
    create?: XOR<PaketCreateWithoutRegistrasi_indibizInput, PaketUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: PaketCreateOrConnectWithoutRegistrasi_indibizInput
    upsert?: PaketUpsertWithoutRegistrasi_indibizInput
    connect?: PaketWhereUniqueInput
    update?: XOR<XOR<PaketUpdateToOneWithWhereWithoutRegistrasi_indibizInput, PaketUpdateWithoutRegistrasi_indibizInput>, PaketUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type SalesUpdateOneRequiredWithoutRegistrasi_indibizNestedInput = {
    create?: XOR<SalesCreateWithoutRegistrasi_indibizInput, SalesUncheckedCreateWithoutRegistrasi_indibizInput>
    connectOrCreate?: SalesCreateOrConnectWithoutRegistrasi_indibizInput
    upsert?: SalesUpsertWithoutRegistrasi_indibizInput
    connect?: SalesWhereUniqueInput
    update?: XOR<XOR<SalesUpdateToOneWithWhereWithoutRegistrasi_indibizInput, SalesUpdateWithoutRegistrasi_indibizInput>, SalesUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumKategoriDatelFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriDatel | EnumKategoriDatelFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriDatelFilter<$PrismaModel> | $Enums.KategoriDatel
  }

  export type NestedEnumSubAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.SubArea | EnumSubAreaFieldRefInput<$PrismaModel>
    in?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAreaFilter<$PrismaModel> | $Enums.SubArea
  }

  export type NestedEnumKategoriDatelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KategoriDatel | EnumKategoriDatelFieldRefInput<$PrismaModel>
    in?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    notIn?: $Enums.KategoriDatel[] | ListEnumKategoriDatelFieldRefInput<$PrismaModel>
    not?: NestedEnumKategoriDatelWithAggregatesFilter<$PrismaModel> | $Enums.KategoriDatel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKategoriDatelFilter<$PrismaModel>
    _max?: NestedEnumKategoriDatelFilter<$PrismaModel>
  }

  export type NestedEnumSubAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubArea | EnumSubAreaFieldRefInput<$PrismaModel>
    in?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubArea[] | ListEnumSubAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumSubAreaWithAggregatesFilter<$PrismaModel> | $Enums.SubArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubAreaFilter<$PrismaModel>
    _max?: NestedEnumSubAreaFilter<$PrismaModel>
  }

  export type NestedEnumJenisPromoFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPromo | EnumJenisPromoFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPromoFilter<$PrismaModel> | $Enums.JenisPromo
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumJenisPromoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisPromo | EnumJenisPromoFieldRefInput<$PrismaModel>
    in?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisPromo[] | ListEnumJenisPromoFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisPromoWithAggregatesFilter<$PrismaModel> | $Enums.JenisPromo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisPromoFilter<$PrismaModel>
    _max?: NestedEnumJenisPromoFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusSalesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSales | EnumStatusSalesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalesFilter<$PrismaModel> | $Enums.StatusSales
  }

  export type NestedEnumStatusSalesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSales | EnumStatusSalesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSales[] | ListEnumStatusSalesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalesWithAggregatesFilter<$PrismaModel> | $Enums.StatusSales
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSalesFilter<$PrismaModel>
    _max?: NestedEnumStatusSalesFilter<$PrismaModel>
  }

  export type PaketKategoriCreateWithoutKategoriInput = {
    id?: string
    created_at?: Date | string
    paket: PaketCreateNestedOneWithoutPaket_categoriesInput
  }

  export type PaketKategoriUncheckedCreateWithoutKategoriInput = {
    id?: string
    paket_id: string
    created_at?: Date | string
  }

  export type PaketKategoriCreateOrConnectWithoutKategoriInput = {
    where: PaketKategoriWhereUniqueInput
    create: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type PaketKategoriCreateManyKategoriInputEnvelope = {
    data: PaketKategoriCreateManyKategoriInput | PaketKategoriCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type PaketKategoriUpsertWithWhereUniqueWithoutKategoriInput = {
    where: PaketKategoriWhereUniqueInput
    update: XOR<PaketKategoriUpdateWithoutKategoriInput, PaketKategoriUncheckedUpdateWithoutKategoriInput>
    create: XOR<PaketKategoriCreateWithoutKategoriInput, PaketKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type PaketKategoriUpdateWithWhereUniqueWithoutKategoriInput = {
    where: PaketKategoriWhereUniqueInput
    data: XOR<PaketKategoriUpdateWithoutKategoriInput, PaketKategoriUncheckedUpdateWithoutKategoriInput>
  }

  export type PaketKategoriUpdateManyWithWhereWithoutKategoriInput = {
    where: PaketKategoriScalarWhereInput
    data: XOR<PaketKategoriUpdateManyMutationInput, PaketKategoriUncheckedUpdateManyWithoutKategoriInput>
  }

  export type PaketKategoriScalarWhereInput = {
    AND?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
    OR?: PaketKategoriScalarWhereInput[]
    NOT?: PaketKategoriScalarWhereInput | PaketKategoriScalarWhereInput[]
    id?: StringFilter<"PaketKategori"> | string
    paket_id?: StringFilter<"PaketKategori"> | string
    kategori_id?: StringFilter<"PaketKategori"> | string
    created_at?: DateTimeFilter<"PaketKategori"> | Date | string
  }

  export type SalesCreateWithoutAgencyInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    datel: DatelCreateNestedOneWithoutSalesInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutSalesInput
  }

  export type SalesUncheckedCreateWithoutAgencyInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    datel_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutSalesInput
  }

  export type SalesCreateOrConnectWithoutAgencyInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput>
  }

  export type SalesCreateManyAgencyInputEnvelope = {
    data: SalesCreateManyAgencyInput | SalesCreateManyAgencyInput[]
    skipDuplicates?: boolean
  }

  export type SalesUpsertWithWhereUniqueWithoutAgencyInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutAgencyInput, SalesUncheckedUpdateWithoutAgencyInput>
    create: XOR<SalesCreateWithoutAgencyInput, SalesUncheckedCreateWithoutAgencyInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutAgencyInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutAgencyInput, SalesUncheckedUpdateWithoutAgencyInput>
  }

  export type SalesUpdateManyWithWhereWithoutAgencyInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutAgencyInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    id?: StringFilter<"Sales"> | string
    nama?: StringFilter<"Sales"> | string
    kode_sales?: StringFilter<"Sales"> | string
    email?: StringFilter<"Sales"> | string
    status?: EnumStatusSalesFilter<"Sales"> | $Enums.StatusSales
    agency_id?: StringFilter<"Sales"> | string
    datel_id?: StringFilter<"Sales"> | string
    kat_umur_sa?: DateTimeFilter<"Sales"> | Date | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    updated_at?: DateTimeFilter<"Sales"> | Date | string
  }

  export type SalesCreateWithoutDatelInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    agency: AgencCreateNestedOneWithoutSalesInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutSalesInput
  }

  export type SalesUncheckedCreateWithoutDatelInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutSalesInput
  }

  export type SalesCreateOrConnectWithoutDatelInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput>
  }

  export type SalesCreateManyDatelInputEnvelope = {
    data: SalesCreateManyDatelInput | SalesCreateManyDatelInput[]
    skipDuplicates?: boolean
  }

  export type RegistrasiIndibizCreateWithoutDatelInput = {
    id?: string
    nama: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
    paket: PaketCreateNestedOneWithoutRegistrasi_indibizInput
    sales: SalesCreateNestedOneWithoutRegistrasi_indibizInput
  }

  export type RegistrasiIndibizUncheckedCreateWithoutDatelInput = {
    id?: string
    nama: string
    paket_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizCreateOrConnectWithoutDatelInput = {
    where: RegistrasiIndibizWhereUniqueInput
    create: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput>
  }

  export type RegistrasiIndibizCreateManyDatelInputEnvelope = {
    data: RegistrasiIndibizCreateManyDatelInput | RegistrasiIndibizCreateManyDatelInput[]
    skipDuplicates?: boolean
  }

  export type SalesUpsertWithWhereUniqueWithoutDatelInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutDatelInput, SalesUncheckedUpdateWithoutDatelInput>
    create: XOR<SalesCreateWithoutDatelInput, SalesUncheckedCreateWithoutDatelInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutDatelInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutDatelInput, SalesUncheckedUpdateWithoutDatelInput>
  }

  export type SalesUpdateManyWithWhereWithoutDatelInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutDatelInput>
  }

  export type RegistrasiIndibizUpsertWithWhereUniqueWithoutDatelInput = {
    where: RegistrasiIndibizWhereUniqueInput
    update: XOR<RegistrasiIndibizUpdateWithoutDatelInput, RegistrasiIndibizUncheckedUpdateWithoutDatelInput>
    create: XOR<RegistrasiIndibizCreateWithoutDatelInput, RegistrasiIndibizUncheckedCreateWithoutDatelInput>
  }

  export type RegistrasiIndibizUpdateWithWhereUniqueWithoutDatelInput = {
    where: RegistrasiIndibizWhereUniqueInput
    data: XOR<RegistrasiIndibizUpdateWithoutDatelInput, RegistrasiIndibizUncheckedUpdateWithoutDatelInput>
  }

  export type RegistrasiIndibizUpdateManyWithWhereWithoutDatelInput = {
    where: RegistrasiIndibizScalarWhereInput
    data: XOR<RegistrasiIndibizUpdateManyMutationInput, RegistrasiIndibizUncheckedUpdateManyWithoutDatelInput>
  }

  export type RegistrasiIndibizScalarWhereInput = {
    AND?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
    OR?: RegistrasiIndibizScalarWhereInput[]
    NOT?: RegistrasiIndibizScalarWhereInput | RegistrasiIndibizScalarWhereInput[]
    id?: StringFilter<"RegistrasiIndibiz"> | string
    nama?: StringFilter<"RegistrasiIndibiz"> | string
    datel_id?: StringFilter<"RegistrasiIndibiz"> | string
    paket_id?: StringFilter<"RegistrasiIndibiz"> | string
    sales_id?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_1?: StringFilter<"RegistrasiIndibiz"> | string
    no_hp_2?: StringFilter<"RegistrasiIndibiz"> | string
    kordinat?: StringFilter<"RegistrasiIndibiz"> | string
    alamat?: StringFilter<"RegistrasiIndibiz"> | string
    nama_pic?: StringFilter<"RegistrasiIndibiz"> | string
    ttl_pic?: StringFilter<"RegistrasiIndibiz"> | string
    no_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    email?: StringFilter<"RegistrasiIndibiz"> | string
    foto_ktp?: StringFilter<"RegistrasiIndibiz"> | string
    foto_selfie?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_usaha?: StringFilter<"RegistrasiIndibiz"> | string
    bukti_niwp?: StringFilter<"RegistrasiIndibiz"> | string
    created_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
    updated_at?: DateTimeFilter<"RegistrasiIndibiz"> | Date | string
  }

  export type PaketPromoCreateWithoutPromoInput = {
    id?: string
    created_at?: Date | string
    paket: PaketCreateNestedOneWithoutPaket_promosInput
  }

  export type PaketPromoUncheckedCreateWithoutPromoInput = {
    id?: string
    paket_id: string
    created_at?: Date | string
  }

  export type PaketPromoCreateOrConnectWithoutPromoInput = {
    where: PaketPromoWhereUniqueInput
    create: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput>
  }

  export type PaketPromoCreateManyPromoInputEnvelope = {
    data: PaketPromoCreateManyPromoInput | PaketPromoCreateManyPromoInput[]
    skipDuplicates?: boolean
  }

  export type PaketPromoUpsertWithWhereUniqueWithoutPromoInput = {
    where: PaketPromoWhereUniqueInput
    update: XOR<PaketPromoUpdateWithoutPromoInput, PaketPromoUncheckedUpdateWithoutPromoInput>
    create: XOR<PaketPromoCreateWithoutPromoInput, PaketPromoUncheckedCreateWithoutPromoInput>
  }

  export type PaketPromoUpdateWithWhereUniqueWithoutPromoInput = {
    where: PaketPromoWhereUniqueInput
    data: XOR<PaketPromoUpdateWithoutPromoInput, PaketPromoUncheckedUpdateWithoutPromoInput>
  }

  export type PaketPromoUpdateManyWithWhereWithoutPromoInput = {
    where: PaketPromoScalarWhereInput
    data: XOR<PaketPromoUpdateManyMutationInput, PaketPromoUncheckedUpdateManyWithoutPromoInput>
  }

  export type PaketPromoScalarWhereInput = {
    AND?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
    OR?: PaketPromoScalarWhereInput[]
    NOT?: PaketPromoScalarWhereInput | PaketPromoScalarWhereInput[]
    id?: StringFilter<"PaketPromo"> | string
    paket_id?: StringFilter<"PaketPromo"> | string
    promo_id?: StringFilter<"PaketPromo"> | string
    created_at?: DateTimeFilter<"PaketPromo"> | Date | string
  }

  export type PaketKategoriCreateWithoutPaketInput = {
    id?: string
    created_at?: Date | string
    kategori: KategoriCreateNestedOneWithoutPaket_categoriesInput
  }

  export type PaketKategoriUncheckedCreateWithoutPaketInput = {
    id?: string
    kategori_id: string
    created_at?: Date | string
  }

  export type PaketKategoriCreateOrConnectWithoutPaketInput = {
    where: PaketKategoriWhereUniqueInput
    create: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput>
  }

  export type PaketKategoriCreateManyPaketInputEnvelope = {
    data: PaketKategoriCreateManyPaketInput | PaketKategoriCreateManyPaketInput[]
    skipDuplicates?: boolean
  }

  export type PaketPromoCreateWithoutPaketInput = {
    id?: string
    created_at?: Date | string
    promo: PromoCreateNestedOneWithoutPaket_promosInput
  }

  export type PaketPromoUncheckedCreateWithoutPaketInput = {
    id?: string
    promo_id: string
    created_at?: Date | string
  }

  export type PaketPromoCreateOrConnectWithoutPaketInput = {
    where: PaketPromoWhereUniqueInput
    create: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput>
  }

  export type PaketPromoCreateManyPaketInputEnvelope = {
    data: PaketPromoCreateManyPaketInput | PaketPromoCreateManyPaketInput[]
    skipDuplicates?: boolean
  }

  export type RegistrasiIndibizCreateWithoutPaketInput = {
    id?: string
    nama: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
    datel: DatelCreateNestedOneWithoutRegistrasi_indibizInput
    sales: SalesCreateNestedOneWithoutRegistrasi_indibizInput
  }

  export type RegistrasiIndibizUncheckedCreateWithoutPaketInput = {
    id?: string
    nama: string
    datel_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizCreateOrConnectWithoutPaketInput = {
    where: RegistrasiIndibizWhereUniqueInput
    create: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput>
  }

  export type RegistrasiIndibizCreateManyPaketInputEnvelope = {
    data: RegistrasiIndibizCreateManyPaketInput | RegistrasiIndibizCreateManyPaketInput[]
    skipDuplicates?: boolean
  }

  export type PaketKategoriUpsertWithWhereUniqueWithoutPaketInput = {
    where: PaketKategoriWhereUniqueInput
    update: XOR<PaketKategoriUpdateWithoutPaketInput, PaketKategoriUncheckedUpdateWithoutPaketInput>
    create: XOR<PaketKategoriCreateWithoutPaketInput, PaketKategoriUncheckedCreateWithoutPaketInput>
  }

  export type PaketKategoriUpdateWithWhereUniqueWithoutPaketInput = {
    where: PaketKategoriWhereUniqueInput
    data: XOR<PaketKategoriUpdateWithoutPaketInput, PaketKategoriUncheckedUpdateWithoutPaketInput>
  }

  export type PaketKategoriUpdateManyWithWhereWithoutPaketInput = {
    where: PaketKategoriScalarWhereInput
    data: XOR<PaketKategoriUpdateManyMutationInput, PaketKategoriUncheckedUpdateManyWithoutPaketInput>
  }

  export type PaketPromoUpsertWithWhereUniqueWithoutPaketInput = {
    where: PaketPromoWhereUniqueInput
    update: XOR<PaketPromoUpdateWithoutPaketInput, PaketPromoUncheckedUpdateWithoutPaketInput>
    create: XOR<PaketPromoCreateWithoutPaketInput, PaketPromoUncheckedCreateWithoutPaketInput>
  }

  export type PaketPromoUpdateWithWhereUniqueWithoutPaketInput = {
    where: PaketPromoWhereUniqueInput
    data: XOR<PaketPromoUpdateWithoutPaketInput, PaketPromoUncheckedUpdateWithoutPaketInput>
  }

  export type PaketPromoUpdateManyWithWhereWithoutPaketInput = {
    where: PaketPromoScalarWhereInput
    data: XOR<PaketPromoUpdateManyMutationInput, PaketPromoUncheckedUpdateManyWithoutPaketInput>
  }

  export type RegistrasiIndibizUpsertWithWhereUniqueWithoutPaketInput = {
    where: RegistrasiIndibizWhereUniqueInput
    update: XOR<RegistrasiIndibizUpdateWithoutPaketInput, RegistrasiIndibizUncheckedUpdateWithoutPaketInput>
    create: XOR<RegistrasiIndibizCreateWithoutPaketInput, RegistrasiIndibizUncheckedCreateWithoutPaketInput>
  }

  export type RegistrasiIndibizUpdateWithWhereUniqueWithoutPaketInput = {
    where: RegistrasiIndibizWhereUniqueInput
    data: XOR<RegistrasiIndibizUpdateWithoutPaketInput, RegistrasiIndibizUncheckedUpdateWithoutPaketInput>
  }

  export type RegistrasiIndibizUpdateManyWithWhereWithoutPaketInput = {
    where: RegistrasiIndibizScalarWhereInput
    data: XOR<RegistrasiIndibizUpdateManyMutationInput, RegistrasiIndibizUncheckedUpdateManyWithoutPaketInput>
  }

  export type PaketCreateWithoutPaket_categoriesInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_promos?: PaketPromoCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutPaketInput
  }

  export type PaketUncheckedCreateWithoutPaket_categoriesInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_promos?: PaketPromoUncheckedCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutPaketInput
  }

  export type PaketCreateOrConnectWithoutPaket_categoriesInput = {
    where: PaketWhereUniqueInput
    create: XOR<PaketCreateWithoutPaket_categoriesInput, PaketUncheckedCreateWithoutPaket_categoriesInput>
  }

  export type KategoriCreateWithoutPaket_categoriesInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KategoriUncheckedCreateWithoutPaket_categoriesInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KategoriCreateOrConnectWithoutPaket_categoriesInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutPaket_categoriesInput, KategoriUncheckedCreateWithoutPaket_categoriesInput>
  }

  export type PaketUpsertWithoutPaket_categoriesInput = {
    update: XOR<PaketUpdateWithoutPaket_categoriesInput, PaketUncheckedUpdateWithoutPaket_categoriesInput>
    create: XOR<PaketCreateWithoutPaket_categoriesInput, PaketUncheckedCreateWithoutPaket_categoriesInput>
    where?: PaketWhereInput
  }

  export type PaketUpdateToOneWithWhereWithoutPaket_categoriesInput = {
    where?: PaketWhereInput
    data: XOR<PaketUpdateWithoutPaket_categoriesInput, PaketUncheckedUpdateWithoutPaket_categoriesInput>
  }

  export type PaketUpdateWithoutPaket_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_promos?: PaketPromoUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutPaketNestedInput
  }

  export type PaketUncheckedUpdateWithoutPaket_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_promos?: PaketPromoUncheckedUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutPaketNestedInput
  }

  export type KategoriUpsertWithoutPaket_categoriesInput = {
    update: XOR<KategoriUpdateWithoutPaket_categoriesInput, KategoriUncheckedUpdateWithoutPaket_categoriesInput>
    create: XOR<KategoriCreateWithoutPaket_categoriesInput, KategoriUncheckedCreateWithoutPaket_categoriesInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutPaket_categoriesInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutPaket_categoriesInput, KategoriUncheckedUpdateWithoutPaket_categoriesInput>
  }

  export type KategoriUpdateWithoutPaket_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateWithoutPaket_categoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketCreateWithoutPaket_promosInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutPaketInput
  }

  export type PaketUncheckedCreateWithoutPaket_promosInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriUncheckedCreateNestedManyWithoutPaketInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutPaketInput
  }

  export type PaketCreateOrConnectWithoutPaket_promosInput = {
    where: PaketWhereUniqueInput
    create: XOR<PaketCreateWithoutPaket_promosInput, PaketUncheckedCreateWithoutPaket_promosInput>
  }

  export type PromoCreateWithoutPaket_promosInput = {
    id?: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal | DecimalJsLike | number | string
    mulai: Date | string
    akhir: Date | string
    is_global: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromoUncheckedCreateWithoutPaket_promosInput = {
    id?: string
    nama: string
    deskripsi: string
    jenis: $Enums.JenisPromo
    diskon: Decimal | DecimalJsLike | number | string
    mulai: Date | string
    akhir: Date | string
    is_global: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromoCreateOrConnectWithoutPaket_promosInput = {
    where: PromoWhereUniqueInput
    create: XOR<PromoCreateWithoutPaket_promosInput, PromoUncheckedCreateWithoutPaket_promosInput>
  }

  export type PaketUpsertWithoutPaket_promosInput = {
    update: XOR<PaketUpdateWithoutPaket_promosInput, PaketUncheckedUpdateWithoutPaket_promosInput>
    create: XOR<PaketCreateWithoutPaket_promosInput, PaketUncheckedCreateWithoutPaket_promosInput>
    where?: PaketWhereInput
  }

  export type PaketUpdateToOneWithWhereWithoutPaket_promosInput = {
    where?: PaketWhereInput
    data: XOR<PaketUpdateWithoutPaket_promosInput, PaketUncheckedUpdateWithoutPaket_promosInput>
  }

  export type PaketUpdateWithoutPaket_promosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutPaketNestedInput
  }

  export type PaketUncheckedUpdateWithoutPaket_promosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUncheckedUpdateManyWithoutPaketNestedInput
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutPaketNestedInput
  }

  export type PromoUpsertWithoutPaket_promosInput = {
    update: XOR<PromoUpdateWithoutPaket_promosInput, PromoUncheckedUpdateWithoutPaket_promosInput>
    create: XOR<PromoCreateWithoutPaket_promosInput, PromoUncheckedCreateWithoutPaket_promosInput>
    where?: PromoWhereInput
  }

  export type PromoUpdateToOneWithWhereWithoutPaket_promosInput = {
    where?: PromoWhereInput
    data: XOR<PromoUpdateWithoutPaket_promosInput, PromoUncheckedUpdateWithoutPaket_promosInput>
  }

  export type PromoUpdateWithoutPaket_promosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateWithoutPaket_promosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisPromoFieldUpdateOperationsInput | $Enums.JenisPromo
    diskon?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mulai?: DateTimeFieldUpdateOperationsInput | Date | string
    akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    is_global?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencCreateWithoutSalesInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AgencUncheckedCreateWithoutSalesInput = {
    id?: string
    nama: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AgencCreateOrConnectWithoutSalesInput = {
    where: AgencWhereUniqueInput
    create: XOR<AgencCreateWithoutSalesInput, AgencUncheckedCreateWithoutSalesInput>
  }

  export type DatelCreateWithoutSalesInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    registrasi_indibiz?: RegistrasiIndibizCreateNestedManyWithoutDatelInput
  }

  export type DatelUncheckedCreateWithoutSalesInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedCreateNestedManyWithoutDatelInput
  }

  export type DatelCreateOrConnectWithoutSalesInput = {
    where: DatelWhereUniqueInput
    create: XOR<DatelCreateWithoutSalesInput, DatelUncheckedCreateWithoutSalesInput>
  }

  export type RegistrasiIndibizCreateWithoutSalesInput = {
    id?: string
    nama: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
    datel: DatelCreateNestedOneWithoutRegistrasi_indibizInput
    paket: PaketCreateNestedOneWithoutRegistrasi_indibizInput
  }

  export type RegistrasiIndibizUncheckedCreateWithoutSalesInput = {
    id?: string
    nama: string
    datel_id: string
    paket_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizCreateOrConnectWithoutSalesInput = {
    where: RegistrasiIndibizWhereUniqueInput
    create: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput>
  }

  export type RegistrasiIndibizCreateManySalesInputEnvelope = {
    data: RegistrasiIndibizCreateManySalesInput | RegistrasiIndibizCreateManySalesInput[]
    skipDuplicates?: boolean
  }

  export type AgencUpsertWithoutSalesInput = {
    update: XOR<AgencUpdateWithoutSalesInput, AgencUncheckedUpdateWithoutSalesInput>
    create: XOR<AgencCreateWithoutSalesInput, AgencUncheckedCreateWithoutSalesInput>
    where?: AgencWhereInput
  }

  export type AgencUpdateToOneWithWhereWithoutSalesInput = {
    where?: AgencWhereInput
    data: XOR<AgencUpdateWithoutSalesInput, AgencUncheckedUpdateWithoutSalesInput>
  }

  export type AgencUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgencUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatelUpsertWithoutSalesInput = {
    update: XOR<DatelUpdateWithoutSalesInput, DatelUncheckedUpdateWithoutSalesInput>
    create: XOR<DatelCreateWithoutSalesInput, DatelUncheckedCreateWithoutSalesInput>
    where?: DatelWhereInput
  }

  export type DatelUpdateToOneWithWhereWithoutSalesInput = {
    where?: DatelWhereInput
    data: XOR<DatelUpdateWithoutSalesInput, DatelUncheckedUpdateWithoutSalesInput>
  }

  export type DatelUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutDatelNestedInput
  }

  export type DatelUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutDatelNestedInput
  }

  export type RegistrasiIndibizUpsertWithWhereUniqueWithoutSalesInput = {
    where: RegistrasiIndibizWhereUniqueInput
    update: XOR<RegistrasiIndibizUpdateWithoutSalesInput, RegistrasiIndibizUncheckedUpdateWithoutSalesInput>
    create: XOR<RegistrasiIndibizCreateWithoutSalesInput, RegistrasiIndibizUncheckedCreateWithoutSalesInput>
  }

  export type RegistrasiIndibizUpdateWithWhereUniqueWithoutSalesInput = {
    where: RegistrasiIndibizWhereUniqueInput
    data: XOR<RegistrasiIndibizUpdateWithoutSalesInput, RegistrasiIndibizUncheckedUpdateWithoutSalesInput>
  }

  export type RegistrasiIndibizUpdateManyWithWhereWithoutSalesInput = {
    where: RegistrasiIndibizScalarWhereInput
    data: XOR<RegistrasiIndibizUpdateManyMutationInput, RegistrasiIndibizUncheckedUpdateManyWithoutSalesInput>
  }

  export type DatelCreateWithoutRegistrasi_indibizInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesCreateNestedManyWithoutDatelInput
  }

  export type DatelUncheckedCreateWithoutRegistrasi_indibizInput = {
    id?: string
    kode_sto: string
    nama: string
    categori: $Enums.KategoriDatel
    wilayah: string
    sub_area: $Enums.SubArea
    created_at?: Date | string
    updated_at?: Date | string
    sales?: SalesUncheckedCreateNestedManyWithoutDatelInput
  }

  export type DatelCreateOrConnectWithoutRegistrasi_indibizInput = {
    where: DatelWhereUniqueInput
    create: XOR<DatelCreateWithoutRegistrasi_indibizInput, DatelUncheckedCreateWithoutRegistrasi_indibizInput>
  }

  export type PaketCreateWithoutRegistrasi_indibizInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriCreateNestedManyWithoutPaketInput
    paket_promos?: PaketPromoCreateNestedManyWithoutPaketInput
  }

  export type PaketUncheckedCreateWithoutRegistrasi_indibizInput = {
    id?: string
    nama: string
    bandwith: number
    price: Decimal | DecimalJsLike | number | string
    price_psb: Decimal | DecimalJsLike | number | string
    ppn: number
    final_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    updated_at?: Date | string
    paket_categories?: PaketKategoriUncheckedCreateNestedManyWithoutPaketInput
    paket_promos?: PaketPromoUncheckedCreateNestedManyWithoutPaketInput
  }

  export type PaketCreateOrConnectWithoutRegistrasi_indibizInput = {
    where: PaketWhereUniqueInput
    create: XOR<PaketCreateWithoutRegistrasi_indibizInput, PaketUncheckedCreateWithoutRegistrasi_indibizInput>
  }

  export type SalesCreateWithoutRegistrasi_indibizInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    agency: AgencCreateNestedOneWithoutSalesInput
    datel: DatelCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateWithoutRegistrasi_indibizInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    datel_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCreateOrConnectWithoutRegistrasi_indibizInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutRegistrasi_indibizInput, SalesUncheckedCreateWithoutRegistrasi_indibizInput>
  }

  export type DatelUpsertWithoutRegistrasi_indibizInput = {
    update: XOR<DatelUpdateWithoutRegistrasi_indibizInput, DatelUncheckedUpdateWithoutRegistrasi_indibizInput>
    create: XOR<DatelCreateWithoutRegistrasi_indibizInput, DatelUncheckedCreateWithoutRegistrasi_indibizInput>
    where?: DatelWhereInput
  }

  export type DatelUpdateToOneWithWhereWithoutRegistrasi_indibizInput = {
    where?: DatelWhereInput
    data: XOR<DatelUpdateWithoutRegistrasi_indibizInput, DatelUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type DatelUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUpdateManyWithoutDatelNestedInput
  }

  export type DatelUncheckedUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode_sto?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    categori?: EnumKategoriDatelFieldUpdateOperationsInput | $Enums.KategoriDatel
    wilayah?: StringFieldUpdateOperationsInput | string
    sub_area?: EnumSubAreaFieldUpdateOperationsInput | $Enums.SubArea
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUncheckedUpdateManyWithoutDatelNestedInput
  }

  export type PaketUpsertWithoutRegistrasi_indibizInput = {
    update: XOR<PaketUpdateWithoutRegistrasi_indibizInput, PaketUncheckedUpdateWithoutRegistrasi_indibizInput>
    create: XOR<PaketCreateWithoutRegistrasi_indibizInput, PaketUncheckedCreateWithoutRegistrasi_indibizInput>
    where?: PaketWhereInput
  }

  export type PaketUpdateToOneWithWhereWithoutRegistrasi_indibizInput = {
    where?: PaketWhereInput
    data: XOR<PaketUpdateWithoutRegistrasi_indibizInput, PaketUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type PaketUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUpdateManyWithoutPaketNestedInput
    paket_promos?: PaketPromoUpdateManyWithoutPaketNestedInput
  }

  export type PaketUncheckedUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    bandwith?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_psb?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ppn?: IntFieldUpdateOperationsInput | number
    final_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket_categories?: PaketKategoriUncheckedUpdateManyWithoutPaketNestedInput
    paket_promos?: PaketPromoUncheckedUpdateManyWithoutPaketNestedInput
  }

  export type SalesUpsertWithoutRegistrasi_indibizInput = {
    update: XOR<SalesUpdateWithoutRegistrasi_indibizInput, SalesUncheckedUpdateWithoutRegistrasi_indibizInput>
    create: XOR<SalesCreateWithoutRegistrasi_indibizInput, SalesUncheckedCreateWithoutRegistrasi_indibizInput>
    where?: SalesWhereInput
  }

  export type SalesUpdateToOneWithWhereWithoutRegistrasi_indibizInput = {
    where?: SalesWhereInput
    data: XOR<SalesUpdateWithoutRegistrasi_indibizInput, SalesUncheckedUpdateWithoutRegistrasi_indibizInput>
  }

  export type SalesUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencUpdateOneRequiredWithoutSalesNestedInput
    datel?: DatelUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateWithoutRegistrasi_indibizInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    agency_id?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriCreateManyKategoriInput = {
    id?: string
    paket_id: string
    created_at?: Date | string
  }

  export type PaketKategoriUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket?: PaketUpdateOneRequiredWithoutPaket_categoriesNestedInput
  }

  export type PaketKategoriUncheckedUpdateWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriUncheckedUpdateManyWithoutKategoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateManyAgencyInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    datel_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    datel?: DatelUpdateOneRequiredWithoutSalesNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    datel_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateManyWithoutAgencyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    datel_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateManyDatelInput = {
    id?: string
    nama: string
    kode_sales: string
    email: string
    status: $Enums.StatusSales
    agency_id: string
    kat_umur_sa: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizCreateManyDatelInput = {
    id?: string
    nama: string
    paket_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesUpdateWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    agency?: AgencUpdateOneRequiredWithoutSalesNestedInput
    registrasi_indibiz?: RegistrasiIndibizUpdateManyWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    agency_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    registrasi_indibiz?: RegistrasiIndibizUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateManyWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode_sales?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalesFieldUpdateOperationsInput | $Enums.StatusSales
    agency_id?: StringFieldUpdateOperationsInput | string
    kat_umur_sa?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUpdateWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket?: PaketUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
    sales?: SalesUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
  }

  export type RegistrasiIndibizUncheckedUpdateWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutDatelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoCreateManyPromoInput = {
    id?: string
    paket_id: string
    created_at?: Date | string
  }

  export type PaketPromoUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paket?: PaketUpdateOneRequiredWithoutPaket_promosNestedInput
  }

  export type PaketPromoUncheckedUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoUncheckedUpdateManyWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriCreateManyPaketInput = {
    id?: string
    kategori_id: string
    created_at?: Date | string
  }

  export type PaketPromoCreateManyPaketInput = {
    id?: string
    promo_id: string
    created_at?: Date | string
  }

  export type RegistrasiIndibizCreateManyPaketInput = {
    id?: string
    nama: string
    datel_id: string
    sales_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaketKategoriUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutPaket_categoriesNestedInput
  }

  export type PaketKategoriUncheckedUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategori_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketKategoriUncheckedUpdateManyWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    kategori_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    promo?: PromoUpdateOneRequiredWithoutPaket_promosNestedInput
  }

  export type PaketPromoUncheckedUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    promo_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaketPromoUncheckedUpdateManyWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    promo_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    datel?: DatelUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
    sales?: SalesUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
  }

  export type RegistrasiIndibizUncheckedUpdateWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutPaketInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    sales_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizCreateManySalesInput = {
    id?: string
    nama: string
    datel_id: string
    paket_id: string
    no_hp_1: string
    no_hp_2: string
    kordinat: string
    alamat: string
    nama_pic: string
    ttl_pic: string
    no_ktp: string
    email: string
    foto_ktp: string
    foto_selfie: string
    bukti_usaha: string
    bukti_niwp: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RegistrasiIndibizUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    datel?: DatelUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
    paket?: PaketUpdateOneRequiredWithoutRegistrasi_indibizNestedInput
  }

  export type RegistrasiIndibizUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrasiIndibizUncheckedUpdateManyWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    datel_id?: StringFieldUpdateOperationsInput | string
    paket_id?: StringFieldUpdateOperationsInput | string
    no_hp_1?: StringFieldUpdateOperationsInput | string
    no_hp_2?: StringFieldUpdateOperationsInput | string
    kordinat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    nama_pic?: StringFieldUpdateOperationsInput | string
    ttl_pic?: StringFieldUpdateOperationsInput | string
    no_ktp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    foto_ktp?: StringFieldUpdateOperationsInput | string
    foto_selfie?: StringFieldUpdateOperationsInput | string
    bukti_usaha?: StringFieldUpdateOperationsInput | string
    bukti_niwp?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model Root
 * 
 */
export type Root = $Result.DefaultSelection<Prisma.$RootPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Sense
 * 
 */
export type Sense = $Result.DefaultSelection<Prisma.$SensePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model GrammarTable
 * 
 */
export type GrammarTable = $Result.DefaultSelection<Prisma.$GrammarTablePayload>
/**
 * Model GrammarRow
 * 
 */
export type GrammarRow = $Result.DefaultSelection<Prisma.$GrammarRowPayload>
/**
 * Model GrammarCol
 * 
 */
export type GrammarCol = $Result.DefaultSelection<Prisma.$GrammarColPayload>
/**
 * Model GrammarCell
 * 
 */
export type GrammarCell = $Result.DefaultSelection<Prisma.$GrammarCellPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roots
 * const roots = await prisma.root.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Roots
   * const roots = await prisma.root.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.root`: Exposes CRUD operations for the **Root** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roots
    * const roots = await prisma.root.findMany()
    * ```
    */
  get root(): Prisma.RootDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sense`: Exposes CRUD operations for the **Sense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senses
    * const senses = await prisma.sense.findMany()
    * ```
    */
  get sense(): Prisma.SenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarTable`: Exposes CRUD operations for the **GrammarTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarTables
    * const grammarTables = await prisma.grammarTable.findMany()
    * ```
    */
  get grammarTable(): Prisma.GrammarTableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarRow`: Exposes CRUD operations for the **GrammarRow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarRows
    * const grammarRows = await prisma.grammarRow.findMany()
    * ```
    */
  get grammarRow(): Prisma.GrammarRowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarCol`: Exposes CRUD operations for the **GrammarCol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarCols
    * const grammarCols = await prisma.grammarCol.findMany()
    * ```
    */
  get grammarCol(): Prisma.GrammarColDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grammarCell`: Exposes CRUD operations for the **GrammarCell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrammarCells
    * const grammarCells = await prisma.grammarCell.findMany()
    * ```
    */
  get grammarCell(): Prisma.GrammarCellDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Root: 'Root',
    Word: 'Word',
    Sense: 'Sense',
    Category: 'Category',
    Feature: 'Feature',
    GrammarTable: 'GrammarTable',
    GrammarRow: 'GrammarRow',
    GrammarCol: 'GrammarCol',
    GrammarCell: 'GrammarCell'
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
      modelProps: "root" | "word" | "sense" | "category" | "feature" | "grammarTable" | "grammarRow" | "grammarCol" | "grammarCell"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Root: {
        payload: Prisma.$RootPayload<ExtArgs>
        fields: Prisma.RootFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RootFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RootFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          findFirst: {
            args: Prisma.RootFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RootFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          findMany: {
            args: Prisma.RootFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>[]
          }
          create: {
            args: Prisma.RootCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          createMany: {
            args: Prisma.RootCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RootCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>[]
          }
          delete: {
            args: Prisma.RootDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          update: {
            args: Prisma.RootUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          deleteMany: {
            args: Prisma.RootDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RootUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RootUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>[]
          }
          upsert: {
            args: Prisma.RootUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RootPayload>
          }
          aggregate: {
            args: Prisma.RootAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoot>
          }
          groupBy: {
            args: Prisma.RootGroupByArgs<ExtArgs>
            result: $Utils.Optional<RootGroupByOutputType>[]
          }
          count: {
            args: Prisma.RootCountArgs<ExtArgs>
            result: $Utils.Optional<RootCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Sense: {
        payload: Prisma.$SensePayload<ExtArgs>
        fields: Prisma.SenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          findFirst: {
            args: Prisma.SenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          findMany: {
            args: Prisma.SenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          create: {
            args: Prisma.SenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          createMany: {
            args: Prisma.SenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          delete: {
            args: Prisma.SenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          update: {
            args: Prisma.SenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          deleteMany: {
            args: Prisma.SenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>[]
          }
          upsert: {
            args: Prisma.SenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensePayload>
          }
          aggregate: {
            args: Prisma.SenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSense>
          }
          groupBy: {
            args: Prisma.SenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenseCountArgs<ExtArgs>
            result: $Utils.Optional<SenseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      GrammarTable: {
        payload: Prisma.$GrammarTablePayload<ExtArgs>
        fields: Prisma.GrammarTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          findFirst: {
            args: Prisma.GrammarTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          findMany: {
            args: Prisma.GrammarTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>[]
          }
          create: {
            args: Prisma.GrammarTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          createMany: {
            args: Prisma.GrammarTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>[]
          }
          delete: {
            args: Prisma.GrammarTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          update: {
            args: Prisma.GrammarTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          deleteMany: {
            args: Prisma.GrammarTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>[]
          }
          upsert: {
            args: Prisma.GrammarTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarTablePayload>
          }
          aggregate: {
            args: Prisma.GrammarTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarTable>
          }
          groupBy: {
            args: Prisma.GrammarTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarTableCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarTableCountAggregateOutputType> | number
          }
        }
      }
      GrammarRow: {
        payload: Prisma.$GrammarRowPayload<ExtArgs>
        fields: Prisma.GrammarRowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarRowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarRowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          findFirst: {
            args: Prisma.GrammarRowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarRowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          findMany: {
            args: Prisma.GrammarRowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>[]
          }
          create: {
            args: Prisma.GrammarRowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          createMany: {
            args: Prisma.GrammarRowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarRowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>[]
          }
          delete: {
            args: Prisma.GrammarRowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          update: {
            args: Prisma.GrammarRowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          deleteMany: {
            args: Prisma.GrammarRowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarRowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarRowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>[]
          }
          upsert: {
            args: Prisma.GrammarRowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarRowPayload>
          }
          aggregate: {
            args: Prisma.GrammarRowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarRow>
          }
          groupBy: {
            args: Prisma.GrammarRowGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarRowGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarRowCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarRowCountAggregateOutputType> | number
          }
        }
      }
      GrammarCol: {
        payload: Prisma.$GrammarColPayload<ExtArgs>
        fields: Prisma.GrammarColFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarColFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarColFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          findFirst: {
            args: Prisma.GrammarColFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarColFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          findMany: {
            args: Prisma.GrammarColFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>[]
          }
          create: {
            args: Prisma.GrammarColCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          createMany: {
            args: Prisma.GrammarColCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarColCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>[]
          }
          delete: {
            args: Prisma.GrammarColDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          update: {
            args: Prisma.GrammarColUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          deleteMany: {
            args: Prisma.GrammarColDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarColUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarColUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>[]
          }
          upsert: {
            args: Prisma.GrammarColUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarColPayload>
          }
          aggregate: {
            args: Prisma.GrammarColAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarCol>
          }
          groupBy: {
            args: Prisma.GrammarColGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarColGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarColCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarColCountAggregateOutputType> | number
          }
        }
      }
      GrammarCell: {
        payload: Prisma.$GrammarCellPayload<ExtArgs>
        fields: Prisma.GrammarCellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrammarCellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrammarCellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          findFirst: {
            args: Prisma.GrammarCellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrammarCellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          findMany: {
            args: Prisma.GrammarCellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>[]
          }
          create: {
            args: Prisma.GrammarCellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          createMany: {
            args: Prisma.GrammarCellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GrammarCellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>[]
          }
          delete: {
            args: Prisma.GrammarCellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          update: {
            args: Prisma.GrammarCellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          deleteMany: {
            args: Prisma.GrammarCellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GrammarCellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GrammarCellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>[]
          }
          upsert: {
            args: Prisma.GrammarCellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GrammarCellPayload>
          }
          aggregate: {
            args: Prisma.GrammarCellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrammarCell>
          }
          groupBy: {
            args: Prisma.GrammarCellGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrammarCellGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrammarCellCountArgs<ExtArgs>
            result: $Utils.Optional<GrammarCellCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    root?: RootOmit
    word?: WordOmit
    sense?: SenseOmit
    category?: CategoryOmit
    feature?: FeatureOmit
    grammarTable?: GrammarTableOmit
    grammarRow?: GrammarRowOmit
    grammarCol?: GrammarColOmit
    grammarCell?: GrammarCellOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type RootCountOutputType
   */

  export type RootCountOutputType = {
    words: number
  }

  export type RootCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | RootCountOutputTypeCountWordsArgs
  }

  // Custom InputTypes
  /**
   * RootCountOutputType without action
   */
  export type RootCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RootCountOutputType
     */
    select?: RootCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RootCountOutputType without action
   */
  export type RootCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }


  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    roots: number
    senses: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roots?: boolean | WordCountOutputTypeCountRootsArgs
    senses?: boolean | WordCountOutputTypeCountSensesArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountRootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RootWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountSensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
  }


  /**
   * Count Type SenseCountOutputType
   */

  export type SenseCountOutputType = {
    features: number
  }

  export type SenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | SenseCountOutputTypeCountFeaturesArgs
  }

  // Custom InputTypes
  /**
   * SenseCountOutputType without action
   */
  export type SenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SenseCountOutputType
     */
    select?: SenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SenseCountOutputType without action
   */
  export type SenseCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    features: number
    grammarTables: number
    senses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | CategoryCountOutputTypeCountFeaturesArgs
    grammarTables?: boolean | CategoryCountOutputTypeCountGrammarTablesArgs
    senses?: boolean | CategoryCountOutputTypeCountSensesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountGrammarTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarTableWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    categories: number
    senses: number
    rows: number
    cols: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | FeatureCountOutputTypeCountCategoriesArgs
    senses?: boolean | FeatureCountOutputTypeCountSensesArgs
    rows?: boolean | FeatureCountOutputTypeCountRowsArgs
    cols?: boolean | FeatureCountOutputTypeCountColsArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountSensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarRowWhereInput
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountColsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarColWhereInput
  }


  /**
   * Count Type GrammarTableCountOutputType
   */

  export type GrammarTableCountOutputType = {
    categories: number
    rows: number
    cols: number
  }

  export type GrammarTableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | GrammarTableCountOutputTypeCountCategoriesArgs
    rows?: boolean | GrammarTableCountOutputTypeCountRowsArgs
    cols?: boolean | GrammarTableCountOutputTypeCountColsArgs
  }

  // Custom InputTypes
  /**
   * GrammarTableCountOutputType without action
   */
  export type GrammarTableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTableCountOutputType
     */
    select?: GrammarTableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarTableCountOutputType without action
   */
  export type GrammarTableCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * GrammarTableCountOutputType without action
   */
  export type GrammarTableCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarRowWhereInput
  }

  /**
   * GrammarTableCountOutputType without action
   */
  export type GrammarTableCountOutputTypeCountColsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarColWhereInput
  }


  /**
   * Count Type GrammarRowCountOutputType
   */

  export type GrammarRowCountOutputType = {
    cells: number
  }

  export type GrammarRowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | GrammarRowCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * GrammarRowCountOutputType without action
   */
  export type GrammarRowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRowCountOutputType
     */
    select?: GrammarRowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarRowCountOutputType without action
   */
  export type GrammarRowCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarCellWhereInput
  }


  /**
   * Count Type GrammarColCountOutputType
   */

  export type GrammarColCountOutputType = {
    cells: number
  }

  export type GrammarColCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | GrammarColCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * GrammarColCountOutputType without action
   */
  export type GrammarColCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarColCountOutputType
     */
    select?: GrammarColCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GrammarColCountOutputType without action
   */
  export type GrammarColCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarCellWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Root
   */

  export type AggregateRoot = {
    _count: RootCountAggregateOutputType | null
    _avg: RootAvgAggregateOutputType | null
    _sum: RootSumAggregateOutputType | null
    _min: RootMinAggregateOutputType | null
    _max: RootMaxAggregateOutputType | null
  }

  export type RootAvgAggregateOutputType = {
    id: number | null
  }

  export type RootSumAggregateOutputType = {
    id: number | null
  }

  export type RootMinAggregateOutputType = {
    id: number | null
    phono: string | null
    ortho: string | null
    definition: string | null
    notes: string | null
    etymology: string | null
  }

  export type RootMaxAggregateOutputType = {
    id: number | null
    phono: string | null
    ortho: string | null
    definition: string | null
    notes: string | null
    etymology: string | null
  }

  export type RootCountAggregateOutputType = {
    id: number
    phono: number
    ortho: number
    definition: number
    notes: number
    etymology: number
    _all: number
  }


  export type RootAvgAggregateInputType = {
    id?: true
  }

  export type RootSumAggregateInputType = {
    id?: true
  }

  export type RootMinAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    definition?: true
    notes?: true
    etymology?: true
  }

  export type RootMaxAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    definition?: true
    notes?: true
    etymology?: true
  }

  export type RootCountAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    definition?: true
    notes?: true
    etymology?: true
    _all?: true
  }

  export type RootAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Root to aggregate.
     */
    where?: RootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roots to fetch.
     */
    orderBy?: RootOrderByWithRelationInput | RootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roots
    **/
    _count?: true | RootCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RootAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RootSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RootMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RootMaxAggregateInputType
  }

  export type GetRootAggregateType<T extends RootAggregateArgs> = {
        [P in keyof T & keyof AggregateRoot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoot[P]>
      : GetScalarType<T[P], AggregateRoot[P]>
  }




  export type RootGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RootWhereInput
    orderBy?: RootOrderByWithAggregationInput | RootOrderByWithAggregationInput[]
    by: RootScalarFieldEnum[] | RootScalarFieldEnum
    having?: RootScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RootCountAggregateInputType | true
    _avg?: RootAvgAggregateInputType
    _sum?: RootSumAggregateInputType
    _min?: RootMinAggregateInputType
    _max?: RootMaxAggregateInputType
  }

  export type RootGroupByOutputType = {
    id: number
    phono: string
    ortho: string
    definition: string | null
    notes: string | null
    etymology: string | null
    _count: RootCountAggregateOutputType | null
    _avg: RootAvgAggregateOutputType | null
    _sum: RootSumAggregateOutputType | null
    _min: RootMinAggregateOutputType | null
    _max: RootMaxAggregateOutputType | null
  }

  type GetRootGroupByPayload<T extends RootGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RootGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RootGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RootGroupByOutputType[P]>
            : GetScalarType<T[P], RootGroupByOutputType[P]>
        }
      >
    >


  export type RootSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    definition?: boolean
    notes?: boolean
    etymology?: boolean
    words?: boolean | Root$wordsArgs<ExtArgs>
    _count?: boolean | RootCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["root"]>

  export type RootSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    definition?: boolean
    notes?: boolean
    etymology?: boolean
  }, ExtArgs["result"]["root"]>

  export type RootSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    definition?: boolean
    notes?: boolean
    etymology?: boolean
  }, ExtArgs["result"]["root"]>

  export type RootSelectScalar = {
    id?: boolean
    phono?: boolean
    ortho?: boolean
    definition?: boolean
    notes?: boolean
    etymology?: boolean
  }

  export type RootOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phono" | "ortho" | "definition" | "notes" | "etymology", ExtArgs["result"]["root"]>
  export type RootInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | Root$wordsArgs<ExtArgs>
    _count?: boolean | RootCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RootIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RootIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RootPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Root"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phono: string
      ortho: string
      definition: string | null
      notes: string | null
      etymology: string | null
    }, ExtArgs["result"]["root"]>
    composites: {}
  }

  type RootGetPayload<S extends boolean | null | undefined | RootDefaultArgs> = $Result.GetResult<Prisma.$RootPayload, S>

  type RootCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RootFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RootCountAggregateInputType | true
    }

  export interface RootDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Root'], meta: { name: 'Root' } }
    /**
     * Find zero or one Root that matches the filter.
     * @param {RootFindUniqueArgs} args - Arguments to find a Root
     * @example
     * // Get one Root
     * const root = await prisma.root.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RootFindUniqueArgs>(args: SelectSubset<T, RootFindUniqueArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Root that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RootFindUniqueOrThrowArgs} args - Arguments to find a Root
     * @example
     * // Get one Root
     * const root = await prisma.root.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RootFindUniqueOrThrowArgs>(args: SelectSubset<T, RootFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Root that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFindFirstArgs} args - Arguments to find a Root
     * @example
     * // Get one Root
     * const root = await prisma.root.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RootFindFirstArgs>(args?: SelectSubset<T, RootFindFirstArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Root that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFindFirstOrThrowArgs} args - Arguments to find a Root
     * @example
     * // Get one Root
     * const root = await prisma.root.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RootFindFirstOrThrowArgs>(args?: SelectSubset<T, RootFindFirstOrThrowArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roots
     * const roots = await prisma.root.findMany()
     * 
     * // Get first 10 Roots
     * const roots = await prisma.root.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rootWithIdOnly = await prisma.root.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RootFindManyArgs>(args?: SelectSubset<T, RootFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Root.
     * @param {RootCreateArgs} args - Arguments to create a Root.
     * @example
     * // Create one Root
     * const Root = await prisma.root.create({
     *   data: {
     *     // ... data to create a Root
     *   }
     * })
     * 
     */
    create<T extends RootCreateArgs>(args: SelectSubset<T, RootCreateArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roots.
     * @param {RootCreateManyArgs} args - Arguments to create many Roots.
     * @example
     * // Create many Roots
     * const root = await prisma.root.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RootCreateManyArgs>(args?: SelectSubset<T, RootCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roots and returns the data saved in the database.
     * @param {RootCreateManyAndReturnArgs} args - Arguments to create many Roots.
     * @example
     * // Create many Roots
     * const root = await prisma.root.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roots and only return the `id`
     * const rootWithIdOnly = await prisma.root.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RootCreateManyAndReturnArgs>(args?: SelectSubset<T, RootCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Root.
     * @param {RootDeleteArgs} args - Arguments to delete one Root.
     * @example
     * // Delete one Root
     * const Root = await prisma.root.delete({
     *   where: {
     *     // ... filter to delete one Root
     *   }
     * })
     * 
     */
    delete<T extends RootDeleteArgs>(args: SelectSubset<T, RootDeleteArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Root.
     * @param {RootUpdateArgs} args - Arguments to update one Root.
     * @example
     * // Update one Root
     * const root = await prisma.root.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RootUpdateArgs>(args: SelectSubset<T, RootUpdateArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roots.
     * @param {RootDeleteManyArgs} args - Arguments to filter Roots to delete.
     * @example
     * // Delete a few Roots
     * const { count } = await prisma.root.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RootDeleteManyArgs>(args?: SelectSubset<T, RootDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roots
     * const root = await prisma.root.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RootUpdateManyArgs>(args: SelectSubset<T, RootUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roots and returns the data updated in the database.
     * @param {RootUpdateManyAndReturnArgs} args - Arguments to update many Roots.
     * @example
     * // Update many Roots
     * const root = await prisma.root.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roots and only return the `id`
     * const rootWithIdOnly = await prisma.root.updateManyAndReturn({
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
    updateManyAndReturn<T extends RootUpdateManyAndReturnArgs>(args: SelectSubset<T, RootUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Root.
     * @param {RootUpsertArgs} args - Arguments to update or create a Root.
     * @example
     * // Update or create a Root
     * const root = await prisma.root.upsert({
     *   create: {
     *     // ... data to create a Root
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Root we want to update
     *   }
     * })
     */
    upsert<T extends RootUpsertArgs>(args: SelectSubset<T, RootUpsertArgs<ExtArgs>>): Prisma__RootClient<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootCountArgs} args - Arguments to filter Roots to count.
     * @example
     * // Count the number of Roots
     * const count = await prisma.root.count({
     *   where: {
     *     // ... the filter for the Roots we want to count
     *   }
     * })
    **/
    count<T extends RootCountArgs>(
      args?: Subset<T, RootCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RootCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Root.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RootAggregateArgs>(args: Subset<T, RootAggregateArgs>): Prisma.PrismaPromise<GetRootAggregateType<T>>

    /**
     * Group by Root.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RootGroupByArgs} args - Group by arguments.
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
      T extends RootGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RootGroupByArgs['orderBy'] }
        : { orderBy?: RootGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RootGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRootGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Root model
   */
  readonly fields: RootFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Root.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RootClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    words<T extends Root$wordsArgs<ExtArgs> = {}>(args?: Subset<T, Root$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Root model
   */
  interface RootFieldRefs {
    readonly id: FieldRef<"Root", 'Int'>
    readonly phono: FieldRef<"Root", 'String'>
    readonly ortho: FieldRef<"Root", 'String'>
    readonly definition: FieldRef<"Root", 'String'>
    readonly notes: FieldRef<"Root", 'String'>
    readonly etymology: FieldRef<"Root", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Root findUnique
   */
  export type RootFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter, which Root to fetch.
     */
    where: RootWhereUniqueInput
  }

  /**
   * Root findUniqueOrThrow
   */
  export type RootFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter, which Root to fetch.
     */
    where: RootWhereUniqueInput
  }

  /**
   * Root findFirst
   */
  export type RootFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter, which Root to fetch.
     */
    where?: RootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roots to fetch.
     */
    orderBy?: RootOrderByWithRelationInput | RootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roots.
     */
    cursor?: RootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roots.
     */
    distinct?: RootScalarFieldEnum | RootScalarFieldEnum[]
  }

  /**
   * Root findFirstOrThrow
   */
  export type RootFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter, which Root to fetch.
     */
    where?: RootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roots to fetch.
     */
    orderBy?: RootOrderByWithRelationInput | RootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roots.
     */
    cursor?: RootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roots.
     */
    distinct?: RootScalarFieldEnum | RootScalarFieldEnum[]
  }

  /**
   * Root findMany
   */
  export type RootFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter, which Roots to fetch.
     */
    where?: RootWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roots to fetch.
     */
    orderBy?: RootOrderByWithRelationInput | RootOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roots.
     */
    cursor?: RootWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roots.
     */
    skip?: number
    distinct?: RootScalarFieldEnum | RootScalarFieldEnum[]
  }

  /**
   * Root create
   */
  export type RootCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * The data needed to create a Root.
     */
    data: XOR<RootCreateInput, RootUncheckedCreateInput>
  }

  /**
   * Root createMany
   */
  export type RootCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roots.
     */
    data: RootCreateManyInput | RootCreateManyInput[]
  }

  /**
   * Root createManyAndReturn
   */
  export type RootCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * The data used to create many Roots.
     */
    data: RootCreateManyInput | RootCreateManyInput[]
  }

  /**
   * Root update
   */
  export type RootUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * The data needed to update a Root.
     */
    data: XOR<RootUpdateInput, RootUncheckedUpdateInput>
    /**
     * Choose, which Root to update.
     */
    where: RootWhereUniqueInput
  }

  /**
   * Root updateMany
   */
  export type RootUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roots.
     */
    data: XOR<RootUpdateManyMutationInput, RootUncheckedUpdateManyInput>
    /**
     * Filter which Roots to update
     */
    where?: RootWhereInput
    /**
     * Limit how many Roots to update.
     */
    limit?: number
  }

  /**
   * Root updateManyAndReturn
   */
  export type RootUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * The data used to update Roots.
     */
    data: XOR<RootUpdateManyMutationInput, RootUncheckedUpdateManyInput>
    /**
     * Filter which Roots to update
     */
    where?: RootWhereInput
    /**
     * Limit how many Roots to update.
     */
    limit?: number
  }

  /**
   * Root upsert
   */
  export type RootUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * The filter to search for the Root to update in case it exists.
     */
    where: RootWhereUniqueInput
    /**
     * In case the Root found by the `where` argument doesn't exist, create a new Root with this data.
     */
    create: XOR<RootCreateInput, RootUncheckedCreateInput>
    /**
     * In case the Root was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RootUpdateInput, RootUncheckedUpdateInput>
  }

  /**
   * Root delete
   */
  export type RootDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    /**
     * Filter which Root to delete.
     */
    where: RootWhereUniqueInput
  }

  /**
   * Root deleteMany
   */
  export type RootDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roots to delete
     */
    where?: RootWhereInput
    /**
     * Limit how many Roots to delete.
     */
    limit?: number
  }

  /**
   * Root.words
   */
  export type Root$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Root without action
   */
  export type RootDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    phono: string | null
    ortho: string | null
    type: string | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    phono: string | null
    ortho: string | null
    type: string | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    phono: number
    ortho: number
    type: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    type?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    type?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    phono?: true
    ortho?: true
    type?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: number
    phono: string
    ortho: string
    type: string
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    type?: boolean
    roots?: boolean | Word$rootsArgs<ExtArgs>
    senses?: boolean | Word$sensesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    type?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phono?: boolean
    ortho?: boolean
    type?: boolean
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    phono?: boolean
    ortho?: boolean
    type?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phono" | "ortho" | "type", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roots?: boolean | Word$rootsArgs<ExtArgs>
    senses?: boolean | Word$sensesArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      roots: Prisma.$RootPayload<ExtArgs>[]
      senses: Prisma.$SensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phono: string
      ortho: string
      type: string
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `id`
     * const wordWithIdOnly = await prisma.word.updateManyAndReturn({
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
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roots<T extends Word$rootsArgs<ExtArgs> = {}>(args?: Subset<T, Word$rootsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RootPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senses<T extends Word$sensesArgs<ExtArgs> = {}>(args?: Subset<T, Word$sensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'Int'>
    readonly phono: FieldRef<"Word", 'String'>
    readonly ortho: FieldRef<"Word", 'String'>
    readonly type: FieldRef<"Word", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.roots
   */
  export type Word$rootsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Root
     */
    select?: RootSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Root
     */
    omit?: RootOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RootInclude<ExtArgs> | null
    where?: RootWhereInput
    orderBy?: RootOrderByWithRelationInput | RootOrderByWithRelationInput[]
    cursor?: RootWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RootScalarFieldEnum | RootScalarFieldEnum[]
  }

  /**
   * Word.senses
   */
  export type Word$sensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    cursor?: SenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
  }


  /**
   * Model Sense
   */

  export type AggregateSense = {
    _count: SenseCountAggregateOutputType | null
    _avg: SenseAvgAggregateOutputType | null
    _sum: SenseSumAggregateOutputType | null
    _min: SenseMinAggregateOutputType | null
    _max: SenseMaxAggregateOutputType | null
  }

  export type SenseAvgAggregateOutputType = {
    id: number | null
    wordId: number | null
    categoryId: number | null
  }

  export type SenseSumAggregateOutputType = {
    id: number | null
    wordId: number | null
    categoryId: number | null
  }

  export type SenseMinAggregateOutputType = {
    id: number | null
    gloss: string | null
    definition: string | null
    notes: string | null
    wordId: number | null
    categoryId: number | null
  }

  export type SenseMaxAggregateOutputType = {
    id: number | null
    gloss: string | null
    definition: string | null
    notes: string | null
    wordId: number | null
    categoryId: number | null
  }

  export type SenseCountAggregateOutputType = {
    id: number
    gloss: number
    definition: number
    notes: number
    wordId: number
    categoryId: number
    _all: number
  }


  export type SenseAvgAggregateInputType = {
    id?: true
    wordId?: true
    categoryId?: true
  }

  export type SenseSumAggregateInputType = {
    id?: true
    wordId?: true
    categoryId?: true
  }

  export type SenseMinAggregateInputType = {
    id?: true
    gloss?: true
    definition?: true
    notes?: true
    wordId?: true
    categoryId?: true
  }

  export type SenseMaxAggregateInputType = {
    id?: true
    gloss?: true
    definition?: true
    notes?: true
    wordId?: true
    categoryId?: true
  }

  export type SenseCountAggregateInputType = {
    id?: true
    gloss?: true
    definition?: true
    notes?: true
    wordId?: true
    categoryId?: true
    _all?: true
  }

  export type SenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sense to aggregate.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Senses
    **/
    _count?: true | SenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenseMaxAggregateInputType
  }

  export type GetSenseAggregateType<T extends SenseAggregateArgs> = {
        [P in keyof T & keyof AggregateSense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSense[P]>
      : GetScalarType<T[P], AggregateSense[P]>
  }




  export type SenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithAggregationInput | SenseOrderByWithAggregationInput[]
    by: SenseScalarFieldEnum[] | SenseScalarFieldEnum
    having?: SenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenseCountAggregateInputType | true
    _avg?: SenseAvgAggregateInputType
    _sum?: SenseSumAggregateInputType
    _min?: SenseMinAggregateInputType
    _max?: SenseMaxAggregateInputType
  }

  export type SenseGroupByOutputType = {
    id: number
    gloss: string
    definition: string | null
    notes: string | null
    wordId: number
    categoryId: number
    _count: SenseCountAggregateOutputType | null
    _avg: SenseAvgAggregateOutputType | null
    _sum: SenseSumAggregateOutputType | null
    _min: SenseMinAggregateOutputType | null
    _max: SenseMaxAggregateOutputType | null
  }

  type GetSenseGroupByPayload<T extends SenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenseGroupByOutputType[P]>
            : GetScalarType<T[P], SenseGroupByOutputType[P]>
        }
      >
    >


  export type SenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gloss?: boolean
    definition?: boolean
    notes?: boolean
    wordId?: boolean
    categoryId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    features?: boolean | Sense$featuresArgs<ExtArgs>
    _count?: boolean | SenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gloss?: boolean
    definition?: boolean
    notes?: boolean
    wordId?: boolean
    categoryId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gloss?: boolean
    definition?: boolean
    notes?: boolean
    wordId?: boolean
    categoryId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sense"]>

  export type SenseSelectScalar = {
    id?: boolean
    gloss?: boolean
    definition?: boolean
    notes?: boolean
    wordId?: boolean
    categoryId?: boolean
  }

  export type SenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gloss" | "definition" | "notes" | "wordId" | "categoryId", ExtArgs["result"]["sense"]>
  export type SenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    features?: boolean | Sense$featuresArgs<ExtArgs>
    _count?: boolean | SenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sense"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      features: Prisma.$FeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gloss: string
      definition: string | null
      notes: string | null
      wordId: number
      categoryId: number
    }, ExtArgs["result"]["sense"]>
    composites: {}
  }

  type SenseGetPayload<S extends boolean | null | undefined | SenseDefaultArgs> = $Result.GetResult<Prisma.$SensePayload, S>

  type SenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenseCountAggregateInputType | true
    }

  export interface SenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sense'], meta: { name: 'Sense' } }
    /**
     * Find zero or one Sense that matches the filter.
     * @param {SenseFindUniqueArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenseFindUniqueArgs>(args: SelectSubset<T, SenseFindUniqueArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenseFindUniqueOrThrowArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenseFindUniqueOrThrowArgs>(args: SelectSubset<T, SenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindFirstArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenseFindFirstArgs>(args?: SelectSubset<T, SenseFindFirstArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindFirstOrThrowArgs} args - Arguments to find a Sense
     * @example
     * // Get one Sense
     * const sense = await prisma.sense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenseFindFirstOrThrowArgs>(args?: SelectSubset<T, SenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Senses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senses
     * const senses = await prisma.sense.findMany()
     * 
     * // Get first 10 Senses
     * const senses = await prisma.sense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senseWithIdOnly = await prisma.sense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenseFindManyArgs>(args?: SelectSubset<T, SenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sense.
     * @param {SenseCreateArgs} args - Arguments to create a Sense.
     * @example
     * // Create one Sense
     * const Sense = await prisma.sense.create({
     *   data: {
     *     // ... data to create a Sense
     *   }
     * })
     * 
     */
    create<T extends SenseCreateArgs>(args: SelectSubset<T, SenseCreateArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Senses.
     * @param {SenseCreateManyArgs} args - Arguments to create many Senses.
     * @example
     * // Create many Senses
     * const sense = await prisma.sense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenseCreateManyArgs>(args?: SelectSubset<T, SenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Senses and returns the data saved in the database.
     * @param {SenseCreateManyAndReturnArgs} args - Arguments to create many Senses.
     * @example
     * // Create many Senses
     * const sense = await prisma.sense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Senses and only return the `id`
     * const senseWithIdOnly = await prisma.sense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenseCreateManyAndReturnArgs>(args?: SelectSubset<T, SenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sense.
     * @param {SenseDeleteArgs} args - Arguments to delete one Sense.
     * @example
     * // Delete one Sense
     * const Sense = await prisma.sense.delete({
     *   where: {
     *     // ... filter to delete one Sense
     *   }
     * })
     * 
     */
    delete<T extends SenseDeleteArgs>(args: SelectSubset<T, SenseDeleteArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sense.
     * @param {SenseUpdateArgs} args - Arguments to update one Sense.
     * @example
     * // Update one Sense
     * const sense = await prisma.sense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenseUpdateArgs>(args: SelectSubset<T, SenseUpdateArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Senses.
     * @param {SenseDeleteManyArgs} args - Arguments to filter Senses to delete.
     * @example
     * // Delete a few Senses
     * const { count } = await prisma.sense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenseDeleteManyArgs>(args?: SelectSubset<T, SenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senses
     * const sense = await prisma.sense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenseUpdateManyArgs>(args: SelectSubset<T, SenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senses and returns the data updated in the database.
     * @param {SenseUpdateManyAndReturnArgs} args - Arguments to update many Senses.
     * @example
     * // Update many Senses
     * const sense = await prisma.sense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Senses and only return the `id`
     * const senseWithIdOnly = await prisma.sense.updateManyAndReturn({
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
    updateManyAndReturn<T extends SenseUpdateManyAndReturnArgs>(args: SelectSubset<T, SenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sense.
     * @param {SenseUpsertArgs} args - Arguments to update or create a Sense.
     * @example
     * // Update or create a Sense
     * const sense = await prisma.sense.upsert({
     *   create: {
     *     // ... data to create a Sense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sense we want to update
     *   }
     * })
     */
    upsert<T extends SenseUpsertArgs>(args: SelectSubset<T, SenseUpsertArgs<ExtArgs>>): Prisma__SenseClient<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Senses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseCountArgs} args - Arguments to filter Senses to count.
     * @example
     * // Count the number of Senses
     * const count = await prisma.sense.count({
     *   where: {
     *     // ... the filter for the Senses we want to count
     *   }
     * })
    **/
    count<T extends SenseCountArgs>(
      args?: Subset<T, SenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SenseAggregateArgs>(args: Subset<T, SenseAggregateArgs>): Prisma.PrismaPromise<GetSenseAggregateType<T>>

    /**
     * Group by Sense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenseGroupByArgs} args - Group by arguments.
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
      T extends SenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenseGroupByArgs['orderBy'] }
        : { orderBy?: SenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sense model
   */
  readonly fields: SenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    features<T extends Sense$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Sense$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sense model
   */
  interface SenseFieldRefs {
    readonly id: FieldRef<"Sense", 'Int'>
    readonly gloss: FieldRef<"Sense", 'String'>
    readonly definition: FieldRef<"Sense", 'String'>
    readonly notes: FieldRef<"Sense", 'String'>
    readonly wordId: FieldRef<"Sense", 'Int'>
    readonly categoryId: FieldRef<"Sense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sense findUnique
   */
  export type SenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense findUniqueOrThrow
   */
  export type SenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense findFirst
   */
  export type SenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senses.
     */
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense findFirstOrThrow
   */
  export type SenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Sense to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senses.
     */
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense findMany
   */
  export type SenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter, which Senses to fetch.
     */
    where?: SenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senses to fetch.
     */
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Senses.
     */
    cursor?: SenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senses.
     */
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Sense create
   */
  export type SenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Sense.
     */
    data: XOR<SenseCreateInput, SenseUncheckedCreateInput>
  }

  /**
   * Sense createMany
   */
  export type SenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Senses.
     */
    data: SenseCreateManyInput | SenseCreateManyInput[]
  }

  /**
   * Sense createManyAndReturn
   */
  export type SenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * The data used to create many Senses.
     */
    data: SenseCreateManyInput | SenseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sense update
   */
  export type SenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Sense.
     */
    data: XOR<SenseUpdateInput, SenseUncheckedUpdateInput>
    /**
     * Choose, which Sense to update.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense updateMany
   */
  export type SenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Senses.
     */
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyInput>
    /**
     * Filter which Senses to update
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to update.
     */
    limit?: number
  }

  /**
   * Sense updateManyAndReturn
   */
  export type SenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * The data used to update Senses.
     */
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyInput>
    /**
     * Filter which Senses to update
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sense upsert
   */
  export type SenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Sense to update in case it exists.
     */
    where: SenseWhereUniqueInput
    /**
     * In case the Sense found by the `where` argument doesn't exist, create a new Sense with this data.
     */
    create: XOR<SenseCreateInput, SenseUncheckedCreateInput>
    /**
     * In case the Sense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenseUpdateInput, SenseUncheckedUpdateInput>
  }

  /**
   * Sense delete
   */
  export type SenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    /**
     * Filter which Sense to delete.
     */
    where: SenseWhereUniqueInput
  }

  /**
   * Sense deleteMany
   */
  export type SenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senses to delete
     */
    where?: SenseWhereInput
    /**
     * Limit how many Senses to delete.
     */
    limit?: number
  }

  /**
   * Sense.features
   */
  export type Sense$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Sense without action
   */
  export type SenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    features?: boolean | Category$featuresArgs<ExtArgs>
    grammarTables?: boolean | Category$grammarTablesArgs<ExtArgs>
    senses?: boolean | Category$sensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    features?: boolean | Category$featuresArgs<ExtArgs>
    grammarTables?: boolean | Category$grammarTablesArgs<ExtArgs>
    senses?: boolean | Category$sensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      features: Prisma.$FeaturePayload<ExtArgs>[]
      grammarTables: Prisma.$GrammarTablePayload<ExtArgs>[]
      senses: Prisma.$SensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    features<T extends Category$featuresArgs<ExtArgs> = {}>(args?: Subset<T, Category$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grammarTables<T extends Category$grammarTablesArgs<ExtArgs> = {}>(args?: Subset<T, Category$grammarTablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senses<T extends Category$sensesArgs<ExtArgs> = {}>(args?: Subset<T, Category$sensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.features
   */
  export type Category$featuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Category.grammarTables
   */
  export type Category$grammarTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    where?: GrammarTableWhereInput
    orderBy?: GrammarTableOrderByWithRelationInput | GrammarTableOrderByWithRelationInput[]
    cursor?: GrammarTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarTableScalarFieldEnum | GrammarTableScalarFieldEnum[]
  }

  /**
   * Category.senses
   */
  export type Category$sensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    cursor?: SenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureAvgAggregateOutputType = {
    id: number | null
  }

  export type FeatureSumAggregateOutputType = {
    id: number | null
  }

  export type FeatureMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FeatureAvgAggregateInputType = {
    id?: true
  }

  export type FeatureSumAggregateInputType = {
    id?: true
  }

  export type FeatureMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _avg?: FeatureAvgAggregateInputType
    _sum?: FeatureSumAggregateInputType
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: number
    name: string
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean | Feature$categoriesArgs<ExtArgs>
    senses?: boolean | Feature$sensesArgs<ExtArgs>
    rows?: boolean | Feature$rowsArgs<ExtArgs>
    cols?: boolean | Feature$colsArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Feature$categoriesArgs<ExtArgs>
    senses?: boolean | Feature$sensesArgs<ExtArgs>
    rows?: boolean | Feature$rowsArgs<ExtArgs>
    cols?: boolean | Feature$colsArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      senses: Prisma.$SensePayload<ExtArgs>[]
      rows: Prisma.$GrammarRowPayload<ExtArgs>[]
      cols: Prisma.$GrammarColPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Feature$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senses<T extends Feature$sensesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$sensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rows<T extends Feature$rowsArgs<ExtArgs> = {}>(args?: Subset<T, Feature$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cols<T extends Feature$colsArgs<ExtArgs> = {}>(args?: Subset<T, Feature$colsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'Int'>
    readonly name: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.categories
   */
  export type Feature$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Feature.senses
   */
  export type Feature$sensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sense
     */
    select?: SenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sense
     */
    omit?: SenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SenseInclude<ExtArgs> | null
    where?: SenseWhereInput
    orderBy?: SenseOrderByWithRelationInput | SenseOrderByWithRelationInput[]
    cursor?: SenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SenseScalarFieldEnum | SenseScalarFieldEnum[]
  }

  /**
   * Feature.rows
   */
  export type Feature$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    where?: GrammarRowWhereInput
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    cursor?: GrammarRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarRowScalarFieldEnum | GrammarRowScalarFieldEnum[]
  }

  /**
   * Feature.cols
   */
  export type Feature$colsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    where?: GrammarColWhereInput
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    cursor?: GrammarColWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarColScalarFieldEnum | GrammarColScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model GrammarTable
   */

  export type AggregateGrammarTable = {
    _count: GrammarTableCountAggregateOutputType | null
    _avg: GrammarTableAvgAggregateOutputType | null
    _sum: GrammarTableSumAggregateOutputType | null
    _min: GrammarTableMinAggregateOutputType | null
    _max: GrammarTableMaxAggregateOutputType | null
  }

  export type GrammarTableAvgAggregateOutputType = {
    id: number | null
  }

  export type GrammarTableSumAggregateOutputType = {
    id: number | null
  }

  export type GrammarTableMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GrammarTableMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GrammarTableCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GrammarTableAvgAggregateInputType = {
    id?: true
  }

  export type GrammarTableSumAggregateInputType = {
    id?: true
  }

  export type GrammarTableMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GrammarTableMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GrammarTableCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GrammarTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarTable to aggregate.
     */
    where?: GrammarTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTables to fetch.
     */
    orderBy?: GrammarTableOrderByWithRelationInput | GrammarTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarTables
    **/
    _count?: true | GrammarTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarTableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarTableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarTableMaxAggregateInputType
  }

  export type GetGrammarTableAggregateType<T extends GrammarTableAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarTable[P]>
      : GetScalarType<T[P], AggregateGrammarTable[P]>
  }




  export type GrammarTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarTableWhereInput
    orderBy?: GrammarTableOrderByWithAggregationInput | GrammarTableOrderByWithAggregationInput[]
    by: GrammarTableScalarFieldEnum[] | GrammarTableScalarFieldEnum
    having?: GrammarTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarTableCountAggregateInputType | true
    _avg?: GrammarTableAvgAggregateInputType
    _sum?: GrammarTableSumAggregateInputType
    _min?: GrammarTableMinAggregateInputType
    _max?: GrammarTableMaxAggregateInputType
  }

  export type GrammarTableGroupByOutputType = {
    id: number
    name: string
    _count: GrammarTableCountAggregateOutputType | null
    _avg: GrammarTableAvgAggregateOutputType | null
    _sum: GrammarTableSumAggregateOutputType | null
    _min: GrammarTableMinAggregateOutputType | null
    _max: GrammarTableMaxAggregateOutputType | null
  }

  type GetGrammarTableGroupByPayload<T extends GrammarTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarTableGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarTableGroupByOutputType[P]>
        }
      >
    >


  export type GrammarTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categories?: boolean | GrammarTable$categoriesArgs<ExtArgs>
    rows?: boolean | GrammarTable$rowsArgs<ExtArgs>
    cols?: boolean | GrammarTable$colsArgs<ExtArgs>
    _count?: boolean | GrammarTableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarTable"]>

  export type GrammarTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["grammarTable"]>

  export type GrammarTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["grammarTable"]>

  export type GrammarTableSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GrammarTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["grammarTable"]>
  export type GrammarTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | GrammarTable$categoriesArgs<ExtArgs>
    rows?: boolean | GrammarTable$rowsArgs<ExtArgs>
    cols?: boolean | GrammarTable$colsArgs<ExtArgs>
    _count?: boolean | GrammarTableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarTableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GrammarTableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GrammarTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarTable"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      rows: Prisma.$GrammarRowPayload<ExtArgs>[]
      cols: Prisma.$GrammarColPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["grammarTable"]>
    composites: {}
  }

  type GrammarTableGetPayload<S extends boolean | null | undefined | GrammarTableDefaultArgs> = $Result.GetResult<Prisma.$GrammarTablePayload, S>

  type GrammarTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarTableCountAggregateInputType | true
    }

  export interface GrammarTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarTable'], meta: { name: 'GrammarTable' } }
    /**
     * Find zero or one GrammarTable that matches the filter.
     * @param {GrammarTableFindUniqueArgs} args - Arguments to find a GrammarTable
     * @example
     * // Get one GrammarTable
     * const grammarTable = await prisma.grammarTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarTableFindUniqueArgs>(args: SelectSubset<T, GrammarTableFindUniqueArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarTableFindUniqueOrThrowArgs} args - Arguments to find a GrammarTable
     * @example
     * // Get one GrammarTable
     * const grammarTable = await prisma.grammarTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarTableFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableFindFirstArgs} args - Arguments to find a GrammarTable
     * @example
     * // Get one GrammarTable
     * const grammarTable = await prisma.grammarTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarTableFindFirstArgs>(args?: SelectSubset<T, GrammarTableFindFirstArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableFindFirstOrThrowArgs} args - Arguments to find a GrammarTable
     * @example
     * // Get one GrammarTable
     * const grammarTable = await prisma.grammarTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarTableFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarTables
     * const grammarTables = await prisma.grammarTable.findMany()
     * 
     * // Get first 10 GrammarTables
     * const grammarTables = await prisma.grammarTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarTableWithIdOnly = await prisma.grammarTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarTableFindManyArgs>(args?: SelectSubset<T, GrammarTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarTable.
     * @param {GrammarTableCreateArgs} args - Arguments to create a GrammarTable.
     * @example
     * // Create one GrammarTable
     * const GrammarTable = await prisma.grammarTable.create({
     *   data: {
     *     // ... data to create a GrammarTable
     *   }
     * })
     * 
     */
    create<T extends GrammarTableCreateArgs>(args: SelectSubset<T, GrammarTableCreateArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarTables.
     * @param {GrammarTableCreateManyArgs} args - Arguments to create many GrammarTables.
     * @example
     * // Create many GrammarTables
     * const grammarTable = await prisma.grammarTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarTableCreateManyArgs>(args?: SelectSubset<T, GrammarTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarTables and returns the data saved in the database.
     * @param {GrammarTableCreateManyAndReturnArgs} args - Arguments to create many GrammarTables.
     * @example
     * // Create many GrammarTables
     * const grammarTable = await prisma.grammarTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarTables and only return the `id`
     * const grammarTableWithIdOnly = await prisma.grammarTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarTableCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarTable.
     * @param {GrammarTableDeleteArgs} args - Arguments to delete one GrammarTable.
     * @example
     * // Delete one GrammarTable
     * const GrammarTable = await prisma.grammarTable.delete({
     *   where: {
     *     // ... filter to delete one GrammarTable
     *   }
     * })
     * 
     */
    delete<T extends GrammarTableDeleteArgs>(args: SelectSubset<T, GrammarTableDeleteArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarTable.
     * @param {GrammarTableUpdateArgs} args - Arguments to update one GrammarTable.
     * @example
     * // Update one GrammarTable
     * const grammarTable = await prisma.grammarTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarTableUpdateArgs>(args: SelectSubset<T, GrammarTableUpdateArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarTables.
     * @param {GrammarTableDeleteManyArgs} args - Arguments to filter GrammarTables to delete.
     * @example
     * // Delete a few GrammarTables
     * const { count } = await prisma.grammarTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarTableDeleteManyArgs>(args?: SelectSubset<T, GrammarTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarTables
     * const grammarTable = await prisma.grammarTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarTableUpdateManyArgs>(args: SelectSubset<T, GrammarTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarTables and returns the data updated in the database.
     * @param {GrammarTableUpdateManyAndReturnArgs} args - Arguments to update many GrammarTables.
     * @example
     * // Update many GrammarTables
     * const grammarTable = await prisma.grammarTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarTables and only return the `id`
     * const grammarTableWithIdOnly = await prisma.grammarTable.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarTableUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarTable.
     * @param {GrammarTableUpsertArgs} args - Arguments to update or create a GrammarTable.
     * @example
     * // Update or create a GrammarTable
     * const grammarTable = await prisma.grammarTable.upsert({
     *   create: {
     *     // ... data to create a GrammarTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarTable we want to update
     *   }
     * })
     */
    upsert<T extends GrammarTableUpsertArgs>(args: SelectSubset<T, GrammarTableUpsertArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableCountArgs} args - Arguments to filter GrammarTables to count.
     * @example
     * // Count the number of GrammarTables
     * const count = await prisma.grammarTable.count({
     *   where: {
     *     // ... the filter for the GrammarTables we want to count
     *   }
     * })
    **/
    count<T extends GrammarTableCountArgs>(
      args?: Subset<T, GrammarTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarTableAggregateArgs>(args: Subset<T, GrammarTableAggregateArgs>): Prisma.PrismaPromise<GetGrammarTableAggregateType<T>>

    /**
     * Group by GrammarTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarTableGroupByArgs} args - Group by arguments.
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
      T extends GrammarTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarTableGroupByArgs['orderBy'] }
        : { orderBy?: GrammarTableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarTable model
   */
  readonly fields: GrammarTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends GrammarTable$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTable$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rows<T extends GrammarTable$rowsArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTable$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cols<T extends GrammarTable$colsArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTable$colsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GrammarTable model
   */
  interface GrammarTableFieldRefs {
    readonly id: FieldRef<"GrammarTable", 'Int'>
    readonly name: FieldRef<"GrammarTable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarTable findUnique
   */
  export type GrammarTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTable to fetch.
     */
    where: GrammarTableWhereUniqueInput
  }

  /**
   * GrammarTable findUniqueOrThrow
   */
  export type GrammarTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTable to fetch.
     */
    where: GrammarTableWhereUniqueInput
  }

  /**
   * GrammarTable findFirst
   */
  export type GrammarTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTable to fetch.
     */
    where?: GrammarTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTables to fetch.
     */
    orderBy?: GrammarTableOrderByWithRelationInput | GrammarTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarTables.
     */
    cursor?: GrammarTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarTables.
     */
    distinct?: GrammarTableScalarFieldEnum | GrammarTableScalarFieldEnum[]
  }

  /**
   * GrammarTable findFirstOrThrow
   */
  export type GrammarTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTable to fetch.
     */
    where?: GrammarTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTables to fetch.
     */
    orderBy?: GrammarTableOrderByWithRelationInput | GrammarTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarTables.
     */
    cursor?: GrammarTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarTables.
     */
    distinct?: GrammarTableScalarFieldEnum | GrammarTableScalarFieldEnum[]
  }

  /**
   * GrammarTable findMany
   */
  export type GrammarTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter, which GrammarTables to fetch.
     */
    where?: GrammarTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarTables to fetch.
     */
    orderBy?: GrammarTableOrderByWithRelationInput | GrammarTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarTables.
     */
    cursor?: GrammarTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarTables.
     */
    skip?: number
    distinct?: GrammarTableScalarFieldEnum | GrammarTableScalarFieldEnum[]
  }

  /**
   * GrammarTable create
   */
  export type GrammarTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarTable.
     */
    data: XOR<GrammarTableCreateInput, GrammarTableUncheckedCreateInput>
  }

  /**
   * GrammarTable createMany
   */
  export type GrammarTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarTables.
     */
    data: GrammarTableCreateManyInput | GrammarTableCreateManyInput[]
  }

  /**
   * GrammarTable createManyAndReturn
   */
  export type GrammarTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarTables.
     */
    data: GrammarTableCreateManyInput | GrammarTableCreateManyInput[]
  }

  /**
   * GrammarTable update
   */
  export type GrammarTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarTable.
     */
    data: XOR<GrammarTableUpdateInput, GrammarTableUncheckedUpdateInput>
    /**
     * Choose, which GrammarTable to update.
     */
    where: GrammarTableWhereUniqueInput
  }

  /**
   * GrammarTable updateMany
   */
  export type GrammarTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarTables.
     */
    data: XOR<GrammarTableUpdateManyMutationInput, GrammarTableUncheckedUpdateManyInput>
    /**
     * Filter which GrammarTables to update
     */
    where?: GrammarTableWhereInput
    /**
     * Limit how many GrammarTables to update.
     */
    limit?: number
  }

  /**
   * GrammarTable updateManyAndReturn
   */
  export type GrammarTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * The data used to update GrammarTables.
     */
    data: XOR<GrammarTableUpdateManyMutationInput, GrammarTableUncheckedUpdateManyInput>
    /**
     * Filter which GrammarTables to update
     */
    where?: GrammarTableWhereInput
    /**
     * Limit how many GrammarTables to update.
     */
    limit?: number
  }

  /**
   * GrammarTable upsert
   */
  export type GrammarTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarTable to update in case it exists.
     */
    where: GrammarTableWhereUniqueInput
    /**
     * In case the GrammarTable found by the `where` argument doesn't exist, create a new GrammarTable with this data.
     */
    create: XOR<GrammarTableCreateInput, GrammarTableUncheckedCreateInput>
    /**
     * In case the GrammarTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarTableUpdateInput, GrammarTableUncheckedUpdateInput>
  }

  /**
   * GrammarTable delete
   */
  export type GrammarTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
    /**
     * Filter which GrammarTable to delete.
     */
    where: GrammarTableWhereUniqueInput
  }

  /**
   * GrammarTable deleteMany
   */
  export type GrammarTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarTables to delete
     */
    where?: GrammarTableWhereInput
    /**
     * Limit how many GrammarTables to delete.
     */
    limit?: number
  }

  /**
   * GrammarTable.categories
   */
  export type GrammarTable$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * GrammarTable.rows
   */
  export type GrammarTable$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    where?: GrammarRowWhereInput
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    cursor?: GrammarRowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarRowScalarFieldEnum | GrammarRowScalarFieldEnum[]
  }

  /**
   * GrammarTable.cols
   */
  export type GrammarTable$colsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    where?: GrammarColWhereInput
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    cursor?: GrammarColWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarColScalarFieldEnum | GrammarColScalarFieldEnum[]
  }

  /**
   * GrammarTable without action
   */
  export type GrammarTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarTable
     */
    select?: GrammarTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarTable
     */
    omit?: GrammarTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarTableInclude<ExtArgs> | null
  }


  /**
   * Model GrammarRow
   */

  export type AggregateGrammarRow = {
    _count: GrammarRowCountAggregateOutputType | null
    _avg: GrammarRowAvgAggregateOutputType | null
    _sum: GrammarRowSumAggregateOutputType | null
    _min: GrammarRowMinAggregateOutputType | null
    _max: GrammarRowMaxAggregateOutputType | null
  }

  export type GrammarRowAvgAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarRowSumAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarRowMinAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarRowMaxAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarRowCountAggregateOutputType = {
    id: number
    grammarTableId: number
    featureId: number
    _all: number
  }


  export type GrammarRowAvgAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarRowSumAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarRowMinAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarRowMaxAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarRowCountAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
    _all?: true
  }

  export type GrammarRowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarRow to aggregate.
     */
    where?: GrammarRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRows to fetch.
     */
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarRows
    **/
    _count?: true | GrammarRowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarRowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarRowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarRowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarRowMaxAggregateInputType
  }

  export type GetGrammarRowAggregateType<T extends GrammarRowAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarRow[P]>
      : GetScalarType<T[P], AggregateGrammarRow[P]>
  }




  export type GrammarRowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarRowWhereInput
    orderBy?: GrammarRowOrderByWithAggregationInput | GrammarRowOrderByWithAggregationInput[]
    by: GrammarRowScalarFieldEnum[] | GrammarRowScalarFieldEnum
    having?: GrammarRowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarRowCountAggregateInputType | true
    _avg?: GrammarRowAvgAggregateInputType
    _sum?: GrammarRowSumAggregateInputType
    _min?: GrammarRowMinAggregateInputType
    _max?: GrammarRowMaxAggregateInputType
  }

  export type GrammarRowGroupByOutputType = {
    id: number
    grammarTableId: number
    featureId: number
    _count: GrammarRowCountAggregateOutputType | null
    _avg: GrammarRowAvgAggregateOutputType | null
    _sum: GrammarRowSumAggregateOutputType | null
    _min: GrammarRowMinAggregateOutputType | null
    _max: GrammarRowMaxAggregateOutputType | null
  }

  type GetGrammarRowGroupByPayload<T extends GrammarRowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarRowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarRowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarRowGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarRowGroupByOutputType[P]>
        }
      >
    >


  export type GrammarRowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    cells?: boolean | GrammarRow$cellsArgs<ExtArgs>
    _count?: boolean | GrammarRowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRow"]>

  export type GrammarRowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRow"]>

  export type GrammarRowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarRow"]>

  export type GrammarRowSelectScalar = {
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
  }

  export type GrammarRowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grammarTableId" | "featureId", ExtArgs["result"]["grammarRow"]>
  export type GrammarRowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    cells?: boolean | GrammarRow$cellsArgs<ExtArgs>
    _count?: boolean | GrammarRowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarRowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type GrammarRowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $GrammarRowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarRow"
    objects: {
      grammarTable: Prisma.$GrammarTablePayload<ExtArgs>
      feature: Prisma.$FeaturePayload<ExtArgs>
      cells: Prisma.$GrammarCellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grammarTableId: number
      featureId: number
    }, ExtArgs["result"]["grammarRow"]>
    composites: {}
  }

  type GrammarRowGetPayload<S extends boolean | null | undefined | GrammarRowDefaultArgs> = $Result.GetResult<Prisma.$GrammarRowPayload, S>

  type GrammarRowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarRowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarRowCountAggregateInputType | true
    }

  export interface GrammarRowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarRow'], meta: { name: 'GrammarRow' } }
    /**
     * Find zero or one GrammarRow that matches the filter.
     * @param {GrammarRowFindUniqueArgs} args - Arguments to find a GrammarRow
     * @example
     * // Get one GrammarRow
     * const grammarRow = await prisma.grammarRow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarRowFindUniqueArgs>(args: SelectSubset<T, GrammarRowFindUniqueArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarRow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarRowFindUniqueOrThrowArgs} args - Arguments to find a GrammarRow
     * @example
     * // Get one GrammarRow
     * const grammarRow = await prisma.grammarRow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarRowFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarRowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarRow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowFindFirstArgs} args - Arguments to find a GrammarRow
     * @example
     * // Get one GrammarRow
     * const grammarRow = await prisma.grammarRow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarRowFindFirstArgs>(args?: SelectSubset<T, GrammarRowFindFirstArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarRow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowFindFirstOrThrowArgs} args - Arguments to find a GrammarRow
     * @example
     * // Get one GrammarRow
     * const grammarRow = await prisma.grammarRow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarRowFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarRowFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarRows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarRows
     * const grammarRows = await prisma.grammarRow.findMany()
     * 
     * // Get first 10 GrammarRows
     * const grammarRows = await prisma.grammarRow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarRowWithIdOnly = await prisma.grammarRow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarRowFindManyArgs>(args?: SelectSubset<T, GrammarRowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarRow.
     * @param {GrammarRowCreateArgs} args - Arguments to create a GrammarRow.
     * @example
     * // Create one GrammarRow
     * const GrammarRow = await prisma.grammarRow.create({
     *   data: {
     *     // ... data to create a GrammarRow
     *   }
     * })
     * 
     */
    create<T extends GrammarRowCreateArgs>(args: SelectSubset<T, GrammarRowCreateArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarRows.
     * @param {GrammarRowCreateManyArgs} args - Arguments to create many GrammarRows.
     * @example
     * // Create many GrammarRows
     * const grammarRow = await prisma.grammarRow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarRowCreateManyArgs>(args?: SelectSubset<T, GrammarRowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarRows and returns the data saved in the database.
     * @param {GrammarRowCreateManyAndReturnArgs} args - Arguments to create many GrammarRows.
     * @example
     * // Create many GrammarRows
     * const grammarRow = await prisma.grammarRow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarRows and only return the `id`
     * const grammarRowWithIdOnly = await prisma.grammarRow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarRowCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarRowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarRow.
     * @param {GrammarRowDeleteArgs} args - Arguments to delete one GrammarRow.
     * @example
     * // Delete one GrammarRow
     * const GrammarRow = await prisma.grammarRow.delete({
     *   where: {
     *     // ... filter to delete one GrammarRow
     *   }
     * })
     * 
     */
    delete<T extends GrammarRowDeleteArgs>(args: SelectSubset<T, GrammarRowDeleteArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarRow.
     * @param {GrammarRowUpdateArgs} args - Arguments to update one GrammarRow.
     * @example
     * // Update one GrammarRow
     * const grammarRow = await prisma.grammarRow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarRowUpdateArgs>(args: SelectSubset<T, GrammarRowUpdateArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarRows.
     * @param {GrammarRowDeleteManyArgs} args - Arguments to filter GrammarRows to delete.
     * @example
     * // Delete a few GrammarRows
     * const { count } = await prisma.grammarRow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarRowDeleteManyArgs>(args?: SelectSubset<T, GrammarRowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarRows
     * const grammarRow = await prisma.grammarRow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarRowUpdateManyArgs>(args: SelectSubset<T, GrammarRowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarRows and returns the data updated in the database.
     * @param {GrammarRowUpdateManyAndReturnArgs} args - Arguments to update many GrammarRows.
     * @example
     * // Update many GrammarRows
     * const grammarRow = await prisma.grammarRow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarRows and only return the `id`
     * const grammarRowWithIdOnly = await prisma.grammarRow.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarRowUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarRowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarRow.
     * @param {GrammarRowUpsertArgs} args - Arguments to update or create a GrammarRow.
     * @example
     * // Update or create a GrammarRow
     * const grammarRow = await prisma.grammarRow.upsert({
     *   create: {
     *     // ... data to create a GrammarRow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarRow we want to update
     *   }
     * })
     */
    upsert<T extends GrammarRowUpsertArgs>(args: SelectSubset<T, GrammarRowUpsertArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarRows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowCountArgs} args - Arguments to filter GrammarRows to count.
     * @example
     * // Count the number of GrammarRows
     * const count = await prisma.grammarRow.count({
     *   where: {
     *     // ... the filter for the GrammarRows we want to count
     *   }
     * })
    **/
    count<T extends GrammarRowCountArgs>(
      args?: Subset<T, GrammarRowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarRowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarRowAggregateArgs>(args: Subset<T, GrammarRowAggregateArgs>): Prisma.PrismaPromise<GetGrammarRowAggregateType<T>>

    /**
     * Group by GrammarRow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarRowGroupByArgs} args - Group by arguments.
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
      T extends GrammarRowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarRowGroupByArgs['orderBy'] }
        : { orderBy?: GrammarRowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarRowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarRow model
   */
  readonly fields: GrammarRowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarRow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarRowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammarTable<T extends GrammarTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTableDefaultArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends GrammarRow$cellsArgs<ExtArgs> = {}>(args?: Subset<T, GrammarRow$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GrammarRow model
   */
  interface GrammarRowFieldRefs {
    readonly id: FieldRef<"GrammarRow", 'Int'>
    readonly grammarTableId: FieldRef<"GrammarRow", 'Int'>
    readonly featureId: FieldRef<"GrammarRow", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GrammarRow findUnique
   */
  export type GrammarRowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRow to fetch.
     */
    where: GrammarRowWhereUniqueInput
  }

  /**
   * GrammarRow findUniqueOrThrow
   */
  export type GrammarRowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRow to fetch.
     */
    where: GrammarRowWhereUniqueInput
  }

  /**
   * GrammarRow findFirst
   */
  export type GrammarRowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRow to fetch.
     */
    where?: GrammarRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRows to fetch.
     */
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarRows.
     */
    cursor?: GrammarRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarRows.
     */
    distinct?: GrammarRowScalarFieldEnum | GrammarRowScalarFieldEnum[]
  }

  /**
   * GrammarRow findFirstOrThrow
   */
  export type GrammarRowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRow to fetch.
     */
    where?: GrammarRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRows to fetch.
     */
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarRows.
     */
    cursor?: GrammarRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarRows.
     */
    distinct?: GrammarRowScalarFieldEnum | GrammarRowScalarFieldEnum[]
  }

  /**
   * GrammarRow findMany
   */
  export type GrammarRowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter, which GrammarRows to fetch.
     */
    where?: GrammarRowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarRows to fetch.
     */
    orderBy?: GrammarRowOrderByWithRelationInput | GrammarRowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarRows.
     */
    cursor?: GrammarRowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarRows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarRows.
     */
    skip?: number
    distinct?: GrammarRowScalarFieldEnum | GrammarRowScalarFieldEnum[]
  }

  /**
   * GrammarRow create
   */
  export type GrammarRowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarRow.
     */
    data: XOR<GrammarRowCreateInput, GrammarRowUncheckedCreateInput>
  }

  /**
   * GrammarRow createMany
   */
  export type GrammarRowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarRows.
     */
    data: GrammarRowCreateManyInput | GrammarRowCreateManyInput[]
  }

  /**
   * GrammarRow createManyAndReturn
   */
  export type GrammarRowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarRows.
     */
    data: GrammarRowCreateManyInput | GrammarRowCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarRow update
   */
  export type GrammarRowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarRow.
     */
    data: XOR<GrammarRowUpdateInput, GrammarRowUncheckedUpdateInput>
    /**
     * Choose, which GrammarRow to update.
     */
    where: GrammarRowWhereUniqueInput
  }

  /**
   * GrammarRow updateMany
   */
  export type GrammarRowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarRows.
     */
    data: XOR<GrammarRowUpdateManyMutationInput, GrammarRowUncheckedUpdateManyInput>
    /**
     * Filter which GrammarRows to update
     */
    where?: GrammarRowWhereInput
    /**
     * Limit how many GrammarRows to update.
     */
    limit?: number
  }

  /**
   * GrammarRow updateManyAndReturn
   */
  export type GrammarRowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * The data used to update GrammarRows.
     */
    data: XOR<GrammarRowUpdateManyMutationInput, GrammarRowUncheckedUpdateManyInput>
    /**
     * Filter which GrammarRows to update
     */
    where?: GrammarRowWhereInput
    /**
     * Limit how many GrammarRows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarRow upsert
   */
  export type GrammarRowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarRow to update in case it exists.
     */
    where: GrammarRowWhereUniqueInput
    /**
     * In case the GrammarRow found by the `where` argument doesn't exist, create a new GrammarRow with this data.
     */
    create: XOR<GrammarRowCreateInput, GrammarRowUncheckedCreateInput>
    /**
     * In case the GrammarRow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarRowUpdateInput, GrammarRowUncheckedUpdateInput>
  }

  /**
   * GrammarRow delete
   */
  export type GrammarRowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
    /**
     * Filter which GrammarRow to delete.
     */
    where: GrammarRowWhereUniqueInput
  }

  /**
   * GrammarRow deleteMany
   */
  export type GrammarRowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarRows to delete
     */
    where?: GrammarRowWhereInput
    /**
     * Limit how many GrammarRows to delete.
     */
    limit?: number
  }

  /**
   * GrammarRow.cells
   */
  export type GrammarRow$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    where?: GrammarCellWhereInput
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    cursor?: GrammarCellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarCellScalarFieldEnum | GrammarCellScalarFieldEnum[]
  }

  /**
   * GrammarRow without action
   */
  export type GrammarRowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarRow
     */
    select?: GrammarRowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarRow
     */
    omit?: GrammarRowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarRowInclude<ExtArgs> | null
  }


  /**
   * Model GrammarCol
   */

  export type AggregateGrammarCol = {
    _count: GrammarColCountAggregateOutputType | null
    _avg: GrammarColAvgAggregateOutputType | null
    _sum: GrammarColSumAggregateOutputType | null
    _min: GrammarColMinAggregateOutputType | null
    _max: GrammarColMaxAggregateOutputType | null
  }

  export type GrammarColAvgAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarColSumAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarColMinAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarColMaxAggregateOutputType = {
    id: number | null
    grammarTableId: number | null
    featureId: number | null
  }

  export type GrammarColCountAggregateOutputType = {
    id: number
    grammarTableId: number
    featureId: number
    _all: number
  }


  export type GrammarColAvgAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarColSumAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarColMinAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarColMaxAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
  }

  export type GrammarColCountAggregateInputType = {
    id?: true
    grammarTableId?: true
    featureId?: true
    _all?: true
  }

  export type GrammarColAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarCol to aggregate.
     */
    where?: GrammarColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCols to fetch.
     */
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarCols
    **/
    _count?: true | GrammarColCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarColAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarColSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarColMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarColMaxAggregateInputType
  }

  export type GetGrammarColAggregateType<T extends GrammarColAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarCol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarCol[P]>
      : GetScalarType<T[P], AggregateGrammarCol[P]>
  }




  export type GrammarColGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarColWhereInput
    orderBy?: GrammarColOrderByWithAggregationInput | GrammarColOrderByWithAggregationInput[]
    by: GrammarColScalarFieldEnum[] | GrammarColScalarFieldEnum
    having?: GrammarColScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarColCountAggregateInputType | true
    _avg?: GrammarColAvgAggregateInputType
    _sum?: GrammarColSumAggregateInputType
    _min?: GrammarColMinAggregateInputType
    _max?: GrammarColMaxAggregateInputType
  }

  export type GrammarColGroupByOutputType = {
    id: number
    grammarTableId: number
    featureId: number
    _count: GrammarColCountAggregateOutputType | null
    _avg: GrammarColAvgAggregateOutputType | null
    _sum: GrammarColSumAggregateOutputType | null
    _min: GrammarColMinAggregateOutputType | null
    _max: GrammarColMaxAggregateOutputType | null
  }

  type GetGrammarColGroupByPayload<T extends GrammarColGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarColGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarColGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarColGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarColGroupByOutputType[P]>
        }
      >
    >


  export type GrammarColSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    cells?: boolean | GrammarCol$cellsArgs<ExtArgs>
    _count?: boolean | GrammarColCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCol"]>

  export type GrammarColSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCol"]>

  export type GrammarColSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCol"]>

  export type GrammarColSelectScalar = {
    id?: boolean
    grammarTableId?: boolean
    featureId?: boolean
  }

  export type GrammarColOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grammarTableId" | "featureId", ExtArgs["result"]["grammarCol"]>
  export type GrammarColInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    cells?: boolean | GrammarCol$cellsArgs<ExtArgs>
    _count?: boolean | GrammarColCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GrammarColIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type GrammarColIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grammarTable?: boolean | GrammarTableDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $GrammarColPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarCol"
    objects: {
      grammarTable: Prisma.$GrammarTablePayload<ExtArgs>
      feature: Prisma.$FeaturePayload<ExtArgs>
      cells: Prisma.$GrammarCellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grammarTableId: number
      featureId: number
    }, ExtArgs["result"]["grammarCol"]>
    composites: {}
  }

  type GrammarColGetPayload<S extends boolean | null | undefined | GrammarColDefaultArgs> = $Result.GetResult<Prisma.$GrammarColPayload, S>

  type GrammarColCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarColFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarColCountAggregateInputType | true
    }

  export interface GrammarColDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarCol'], meta: { name: 'GrammarCol' } }
    /**
     * Find zero or one GrammarCol that matches the filter.
     * @param {GrammarColFindUniqueArgs} args - Arguments to find a GrammarCol
     * @example
     * // Get one GrammarCol
     * const grammarCol = await prisma.grammarCol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarColFindUniqueArgs>(args: SelectSubset<T, GrammarColFindUniqueArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarCol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarColFindUniqueOrThrowArgs} args - Arguments to find a GrammarCol
     * @example
     * // Get one GrammarCol
     * const grammarCol = await prisma.grammarCol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarColFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarColFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarCol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColFindFirstArgs} args - Arguments to find a GrammarCol
     * @example
     * // Get one GrammarCol
     * const grammarCol = await prisma.grammarCol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarColFindFirstArgs>(args?: SelectSubset<T, GrammarColFindFirstArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarCol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColFindFirstOrThrowArgs} args - Arguments to find a GrammarCol
     * @example
     * // Get one GrammarCol
     * const grammarCol = await prisma.grammarCol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarColFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarColFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarCols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarCols
     * const grammarCols = await prisma.grammarCol.findMany()
     * 
     * // Get first 10 GrammarCols
     * const grammarCols = await prisma.grammarCol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const grammarColWithIdOnly = await prisma.grammarCol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GrammarColFindManyArgs>(args?: SelectSubset<T, GrammarColFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarCol.
     * @param {GrammarColCreateArgs} args - Arguments to create a GrammarCol.
     * @example
     * // Create one GrammarCol
     * const GrammarCol = await prisma.grammarCol.create({
     *   data: {
     *     // ... data to create a GrammarCol
     *   }
     * })
     * 
     */
    create<T extends GrammarColCreateArgs>(args: SelectSubset<T, GrammarColCreateArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarCols.
     * @param {GrammarColCreateManyArgs} args - Arguments to create many GrammarCols.
     * @example
     * // Create many GrammarCols
     * const grammarCol = await prisma.grammarCol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarColCreateManyArgs>(args?: SelectSubset<T, GrammarColCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarCols and returns the data saved in the database.
     * @param {GrammarColCreateManyAndReturnArgs} args - Arguments to create many GrammarCols.
     * @example
     * // Create many GrammarCols
     * const grammarCol = await prisma.grammarCol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarCols and only return the `id`
     * const grammarColWithIdOnly = await prisma.grammarCol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarColCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarColCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarCol.
     * @param {GrammarColDeleteArgs} args - Arguments to delete one GrammarCol.
     * @example
     * // Delete one GrammarCol
     * const GrammarCol = await prisma.grammarCol.delete({
     *   where: {
     *     // ... filter to delete one GrammarCol
     *   }
     * })
     * 
     */
    delete<T extends GrammarColDeleteArgs>(args: SelectSubset<T, GrammarColDeleteArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarCol.
     * @param {GrammarColUpdateArgs} args - Arguments to update one GrammarCol.
     * @example
     * // Update one GrammarCol
     * const grammarCol = await prisma.grammarCol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarColUpdateArgs>(args: SelectSubset<T, GrammarColUpdateArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarCols.
     * @param {GrammarColDeleteManyArgs} args - Arguments to filter GrammarCols to delete.
     * @example
     * // Delete a few GrammarCols
     * const { count } = await prisma.grammarCol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarColDeleteManyArgs>(args?: SelectSubset<T, GrammarColDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarCols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarCols
     * const grammarCol = await prisma.grammarCol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarColUpdateManyArgs>(args: SelectSubset<T, GrammarColUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarCols and returns the data updated in the database.
     * @param {GrammarColUpdateManyAndReturnArgs} args - Arguments to update many GrammarCols.
     * @example
     * // Update many GrammarCols
     * const grammarCol = await prisma.grammarCol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarCols and only return the `id`
     * const grammarColWithIdOnly = await prisma.grammarCol.updateManyAndReturn({
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
    updateManyAndReturn<T extends GrammarColUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarColUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarCol.
     * @param {GrammarColUpsertArgs} args - Arguments to update or create a GrammarCol.
     * @example
     * // Update or create a GrammarCol
     * const grammarCol = await prisma.grammarCol.upsert({
     *   create: {
     *     // ... data to create a GrammarCol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarCol we want to update
     *   }
     * })
     */
    upsert<T extends GrammarColUpsertArgs>(args: SelectSubset<T, GrammarColUpsertArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarCols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColCountArgs} args - Arguments to filter GrammarCols to count.
     * @example
     * // Count the number of GrammarCols
     * const count = await prisma.grammarCol.count({
     *   where: {
     *     // ... the filter for the GrammarCols we want to count
     *   }
     * })
    **/
    count<T extends GrammarColCountArgs>(
      args?: Subset<T, GrammarColCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarColCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarCol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarColAggregateArgs>(args: Subset<T, GrammarColAggregateArgs>): Prisma.PrismaPromise<GetGrammarColAggregateType<T>>

    /**
     * Group by GrammarCol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarColGroupByArgs} args - Group by arguments.
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
      T extends GrammarColGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarColGroupByArgs['orderBy'] }
        : { orderBy?: GrammarColGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarColGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarColGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarCol model
   */
  readonly fields: GrammarColFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarCol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarColClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grammarTable<T extends GrammarTableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarTableDefaultArgs<ExtArgs>>): Prisma__GrammarTableClient<$Result.GetResult<Prisma.$GrammarTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends GrammarCol$cellsArgs<ExtArgs> = {}>(args?: Subset<T, GrammarCol$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GrammarCol model
   */
  interface GrammarColFieldRefs {
    readonly id: FieldRef<"GrammarCol", 'Int'>
    readonly grammarTableId: FieldRef<"GrammarCol", 'Int'>
    readonly featureId: FieldRef<"GrammarCol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GrammarCol findUnique
   */
  export type GrammarColFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCol to fetch.
     */
    where: GrammarColWhereUniqueInput
  }

  /**
   * GrammarCol findUniqueOrThrow
   */
  export type GrammarColFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCol to fetch.
     */
    where: GrammarColWhereUniqueInput
  }

  /**
   * GrammarCol findFirst
   */
  export type GrammarColFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCol to fetch.
     */
    where?: GrammarColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCols to fetch.
     */
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarCols.
     */
    cursor?: GrammarColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarCols.
     */
    distinct?: GrammarColScalarFieldEnum | GrammarColScalarFieldEnum[]
  }

  /**
   * GrammarCol findFirstOrThrow
   */
  export type GrammarColFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCol to fetch.
     */
    where?: GrammarColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCols to fetch.
     */
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarCols.
     */
    cursor?: GrammarColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarCols.
     */
    distinct?: GrammarColScalarFieldEnum | GrammarColScalarFieldEnum[]
  }

  /**
   * GrammarCol findMany
   */
  export type GrammarColFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCols to fetch.
     */
    where?: GrammarColWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCols to fetch.
     */
    orderBy?: GrammarColOrderByWithRelationInput | GrammarColOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarCols.
     */
    cursor?: GrammarColWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCols.
     */
    skip?: number
    distinct?: GrammarColScalarFieldEnum | GrammarColScalarFieldEnum[]
  }

  /**
   * GrammarCol create
   */
  export type GrammarColCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarCol.
     */
    data: XOR<GrammarColCreateInput, GrammarColUncheckedCreateInput>
  }

  /**
   * GrammarCol createMany
   */
  export type GrammarColCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarCols.
     */
    data: GrammarColCreateManyInput | GrammarColCreateManyInput[]
  }

  /**
   * GrammarCol createManyAndReturn
   */
  export type GrammarColCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarCols.
     */
    data: GrammarColCreateManyInput | GrammarColCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarCol update
   */
  export type GrammarColUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarCol.
     */
    data: XOR<GrammarColUpdateInput, GrammarColUncheckedUpdateInput>
    /**
     * Choose, which GrammarCol to update.
     */
    where: GrammarColWhereUniqueInput
  }

  /**
   * GrammarCol updateMany
   */
  export type GrammarColUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarCols.
     */
    data: XOR<GrammarColUpdateManyMutationInput, GrammarColUncheckedUpdateManyInput>
    /**
     * Filter which GrammarCols to update
     */
    where?: GrammarColWhereInput
    /**
     * Limit how many GrammarCols to update.
     */
    limit?: number
  }

  /**
   * GrammarCol updateManyAndReturn
   */
  export type GrammarColUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * The data used to update GrammarCols.
     */
    data: XOR<GrammarColUpdateManyMutationInput, GrammarColUncheckedUpdateManyInput>
    /**
     * Filter which GrammarCols to update
     */
    where?: GrammarColWhereInput
    /**
     * Limit how many GrammarCols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarCol upsert
   */
  export type GrammarColUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarCol to update in case it exists.
     */
    where: GrammarColWhereUniqueInput
    /**
     * In case the GrammarCol found by the `where` argument doesn't exist, create a new GrammarCol with this data.
     */
    create: XOR<GrammarColCreateInput, GrammarColUncheckedCreateInput>
    /**
     * In case the GrammarCol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarColUpdateInput, GrammarColUncheckedUpdateInput>
  }

  /**
   * GrammarCol delete
   */
  export type GrammarColDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
    /**
     * Filter which GrammarCol to delete.
     */
    where: GrammarColWhereUniqueInput
  }

  /**
   * GrammarCol deleteMany
   */
  export type GrammarColDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarCols to delete
     */
    where?: GrammarColWhereInput
    /**
     * Limit how many GrammarCols to delete.
     */
    limit?: number
  }

  /**
   * GrammarCol.cells
   */
  export type GrammarCol$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    where?: GrammarCellWhereInput
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    cursor?: GrammarCellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrammarCellScalarFieldEnum | GrammarCellScalarFieldEnum[]
  }

  /**
   * GrammarCol without action
   */
  export type GrammarColDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCol
     */
    select?: GrammarColSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCol
     */
    omit?: GrammarColOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarColInclude<ExtArgs> | null
  }


  /**
   * Model GrammarCell
   */

  export type AggregateGrammarCell = {
    _count: GrammarCellCountAggregateOutputType | null
    _avg: GrammarCellAvgAggregateOutputType | null
    _sum: GrammarCellSumAggregateOutputType | null
    _min: GrammarCellMinAggregateOutputType | null
    _max: GrammarCellMaxAggregateOutputType | null
  }

  export type GrammarCellAvgAggregateOutputType = {
    rowId: number | null
    colId: number | null
  }

  export type GrammarCellSumAggregateOutputType = {
    rowId: number | null
    colId: number | null
  }

  export type GrammarCellMinAggregateOutputType = {
    rowId: number | null
    colId: number | null
    cellText: string | null
  }

  export type GrammarCellMaxAggregateOutputType = {
    rowId: number | null
    colId: number | null
    cellText: string | null
  }

  export type GrammarCellCountAggregateOutputType = {
    rowId: number
    colId: number
    cellText: number
    _all: number
  }


  export type GrammarCellAvgAggregateInputType = {
    rowId?: true
    colId?: true
  }

  export type GrammarCellSumAggregateInputType = {
    rowId?: true
    colId?: true
  }

  export type GrammarCellMinAggregateInputType = {
    rowId?: true
    colId?: true
    cellText?: true
  }

  export type GrammarCellMaxAggregateInputType = {
    rowId?: true
    colId?: true
    cellText?: true
  }

  export type GrammarCellCountAggregateInputType = {
    rowId?: true
    colId?: true
    cellText?: true
    _all?: true
  }

  export type GrammarCellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarCell to aggregate.
     */
    where?: GrammarCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCells to fetch.
     */
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrammarCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrammarCells
    **/
    _count?: true | GrammarCellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrammarCellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrammarCellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrammarCellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrammarCellMaxAggregateInputType
  }

  export type GetGrammarCellAggregateType<T extends GrammarCellAggregateArgs> = {
        [P in keyof T & keyof AggregateGrammarCell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrammarCell[P]>
      : GetScalarType<T[P], AggregateGrammarCell[P]>
  }




  export type GrammarCellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrammarCellWhereInput
    orderBy?: GrammarCellOrderByWithAggregationInput | GrammarCellOrderByWithAggregationInput[]
    by: GrammarCellScalarFieldEnum[] | GrammarCellScalarFieldEnum
    having?: GrammarCellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrammarCellCountAggregateInputType | true
    _avg?: GrammarCellAvgAggregateInputType
    _sum?: GrammarCellSumAggregateInputType
    _min?: GrammarCellMinAggregateInputType
    _max?: GrammarCellMaxAggregateInputType
  }

  export type GrammarCellGroupByOutputType = {
    rowId: number
    colId: number
    cellText: string
    _count: GrammarCellCountAggregateOutputType | null
    _avg: GrammarCellAvgAggregateOutputType | null
    _sum: GrammarCellSumAggregateOutputType | null
    _min: GrammarCellMinAggregateOutputType | null
    _max: GrammarCellMaxAggregateOutputType | null
  }

  type GetGrammarCellGroupByPayload<T extends GrammarCellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrammarCellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrammarCellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrammarCellGroupByOutputType[P]>
            : GetScalarType<T[P], GrammarCellGroupByOutputType[P]>
        }
      >
    >


  export type GrammarCellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rowId?: boolean
    colId?: boolean
    cellText?: boolean
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCell"]>

  export type GrammarCellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rowId?: boolean
    colId?: boolean
    cellText?: boolean
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCell"]>

  export type GrammarCellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rowId?: boolean
    colId?: boolean
    cellText?: boolean
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grammarCell"]>

  export type GrammarCellSelectScalar = {
    rowId?: boolean
    colId?: boolean
    cellText?: boolean
  }

  export type GrammarCellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rowId" | "colId" | "cellText", ExtArgs["result"]["grammarCell"]>
  export type GrammarCellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }
  export type GrammarCellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }
  export type GrammarCellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | GrammarRowDefaultArgs<ExtArgs>
    col?: boolean | GrammarColDefaultArgs<ExtArgs>
  }

  export type $GrammarCellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrammarCell"
    objects: {
      row: Prisma.$GrammarRowPayload<ExtArgs>
      col: Prisma.$GrammarColPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rowId: number
      colId: number
      cellText: string
    }, ExtArgs["result"]["grammarCell"]>
    composites: {}
  }

  type GrammarCellGetPayload<S extends boolean | null | undefined | GrammarCellDefaultArgs> = $Result.GetResult<Prisma.$GrammarCellPayload, S>

  type GrammarCellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GrammarCellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrammarCellCountAggregateInputType | true
    }

  export interface GrammarCellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrammarCell'], meta: { name: 'GrammarCell' } }
    /**
     * Find zero or one GrammarCell that matches the filter.
     * @param {GrammarCellFindUniqueArgs} args - Arguments to find a GrammarCell
     * @example
     * // Get one GrammarCell
     * const grammarCell = await prisma.grammarCell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GrammarCellFindUniqueArgs>(args: SelectSubset<T, GrammarCellFindUniqueArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GrammarCell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GrammarCellFindUniqueOrThrowArgs} args - Arguments to find a GrammarCell
     * @example
     * // Get one GrammarCell
     * const grammarCell = await prisma.grammarCell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GrammarCellFindUniqueOrThrowArgs>(args: SelectSubset<T, GrammarCellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarCell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellFindFirstArgs} args - Arguments to find a GrammarCell
     * @example
     * // Get one GrammarCell
     * const grammarCell = await prisma.grammarCell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GrammarCellFindFirstArgs>(args?: SelectSubset<T, GrammarCellFindFirstArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GrammarCell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellFindFirstOrThrowArgs} args - Arguments to find a GrammarCell
     * @example
     * // Get one GrammarCell
     * const grammarCell = await prisma.grammarCell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GrammarCellFindFirstOrThrowArgs>(args?: SelectSubset<T, GrammarCellFindFirstOrThrowArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GrammarCells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrammarCells
     * const grammarCells = await prisma.grammarCell.findMany()
     * 
     * // Get first 10 GrammarCells
     * const grammarCells = await prisma.grammarCell.findMany({ take: 10 })
     * 
     * // Only select the `rowId`
     * const grammarCellWithRowIdOnly = await prisma.grammarCell.findMany({ select: { rowId: true } })
     * 
     */
    findMany<T extends GrammarCellFindManyArgs>(args?: SelectSubset<T, GrammarCellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GrammarCell.
     * @param {GrammarCellCreateArgs} args - Arguments to create a GrammarCell.
     * @example
     * // Create one GrammarCell
     * const GrammarCell = await prisma.grammarCell.create({
     *   data: {
     *     // ... data to create a GrammarCell
     *   }
     * })
     * 
     */
    create<T extends GrammarCellCreateArgs>(args: SelectSubset<T, GrammarCellCreateArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GrammarCells.
     * @param {GrammarCellCreateManyArgs} args - Arguments to create many GrammarCells.
     * @example
     * // Create many GrammarCells
     * const grammarCell = await prisma.grammarCell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GrammarCellCreateManyArgs>(args?: SelectSubset<T, GrammarCellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GrammarCells and returns the data saved in the database.
     * @param {GrammarCellCreateManyAndReturnArgs} args - Arguments to create many GrammarCells.
     * @example
     * // Create many GrammarCells
     * const grammarCell = await prisma.grammarCell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GrammarCells and only return the `rowId`
     * const grammarCellWithRowIdOnly = await prisma.grammarCell.createManyAndReturn({
     *   select: { rowId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GrammarCellCreateManyAndReturnArgs>(args?: SelectSubset<T, GrammarCellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GrammarCell.
     * @param {GrammarCellDeleteArgs} args - Arguments to delete one GrammarCell.
     * @example
     * // Delete one GrammarCell
     * const GrammarCell = await prisma.grammarCell.delete({
     *   where: {
     *     // ... filter to delete one GrammarCell
     *   }
     * })
     * 
     */
    delete<T extends GrammarCellDeleteArgs>(args: SelectSubset<T, GrammarCellDeleteArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GrammarCell.
     * @param {GrammarCellUpdateArgs} args - Arguments to update one GrammarCell.
     * @example
     * // Update one GrammarCell
     * const grammarCell = await prisma.grammarCell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GrammarCellUpdateArgs>(args: SelectSubset<T, GrammarCellUpdateArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GrammarCells.
     * @param {GrammarCellDeleteManyArgs} args - Arguments to filter GrammarCells to delete.
     * @example
     * // Delete a few GrammarCells
     * const { count } = await prisma.grammarCell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GrammarCellDeleteManyArgs>(args?: SelectSubset<T, GrammarCellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarCells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrammarCells
     * const grammarCell = await prisma.grammarCell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GrammarCellUpdateManyArgs>(args: SelectSubset<T, GrammarCellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrammarCells and returns the data updated in the database.
     * @param {GrammarCellUpdateManyAndReturnArgs} args - Arguments to update many GrammarCells.
     * @example
     * // Update many GrammarCells
     * const grammarCell = await prisma.grammarCell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GrammarCells and only return the `rowId`
     * const grammarCellWithRowIdOnly = await prisma.grammarCell.updateManyAndReturn({
     *   select: { rowId: true },
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
    updateManyAndReturn<T extends GrammarCellUpdateManyAndReturnArgs>(args: SelectSubset<T, GrammarCellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GrammarCell.
     * @param {GrammarCellUpsertArgs} args - Arguments to update or create a GrammarCell.
     * @example
     * // Update or create a GrammarCell
     * const grammarCell = await prisma.grammarCell.upsert({
     *   create: {
     *     // ... data to create a GrammarCell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrammarCell we want to update
     *   }
     * })
     */
    upsert<T extends GrammarCellUpsertArgs>(args: SelectSubset<T, GrammarCellUpsertArgs<ExtArgs>>): Prisma__GrammarCellClient<$Result.GetResult<Prisma.$GrammarCellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GrammarCells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellCountArgs} args - Arguments to filter GrammarCells to count.
     * @example
     * // Count the number of GrammarCells
     * const count = await prisma.grammarCell.count({
     *   where: {
     *     // ... the filter for the GrammarCells we want to count
     *   }
     * })
    **/
    count<T extends GrammarCellCountArgs>(
      args?: Subset<T, GrammarCellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrammarCellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrammarCell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrammarCellAggregateArgs>(args: Subset<T, GrammarCellAggregateArgs>): Prisma.PrismaPromise<GetGrammarCellAggregateType<T>>

    /**
     * Group by GrammarCell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrammarCellGroupByArgs} args - Group by arguments.
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
      T extends GrammarCellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrammarCellGroupByArgs['orderBy'] }
        : { orderBy?: GrammarCellGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GrammarCellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrammarCellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrammarCell model
   */
  readonly fields: GrammarCellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrammarCell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrammarCellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    row<T extends GrammarRowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarRowDefaultArgs<ExtArgs>>): Prisma__GrammarRowClient<$Result.GetResult<Prisma.$GrammarRowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    col<T extends GrammarColDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GrammarColDefaultArgs<ExtArgs>>): Prisma__GrammarColClient<$Result.GetResult<Prisma.$GrammarColPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GrammarCell model
   */
  interface GrammarCellFieldRefs {
    readonly rowId: FieldRef<"GrammarCell", 'Int'>
    readonly colId: FieldRef<"GrammarCell", 'Int'>
    readonly cellText: FieldRef<"GrammarCell", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GrammarCell findUnique
   */
  export type GrammarCellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCell to fetch.
     */
    where: GrammarCellWhereUniqueInput
  }

  /**
   * GrammarCell findUniqueOrThrow
   */
  export type GrammarCellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCell to fetch.
     */
    where: GrammarCellWhereUniqueInput
  }

  /**
   * GrammarCell findFirst
   */
  export type GrammarCellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCell to fetch.
     */
    where?: GrammarCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCells to fetch.
     */
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarCells.
     */
    cursor?: GrammarCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarCells.
     */
    distinct?: GrammarCellScalarFieldEnum | GrammarCellScalarFieldEnum[]
  }

  /**
   * GrammarCell findFirstOrThrow
   */
  export type GrammarCellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCell to fetch.
     */
    where?: GrammarCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCells to fetch.
     */
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrammarCells.
     */
    cursor?: GrammarCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrammarCells.
     */
    distinct?: GrammarCellScalarFieldEnum | GrammarCellScalarFieldEnum[]
  }

  /**
   * GrammarCell findMany
   */
  export type GrammarCellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter, which GrammarCells to fetch.
     */
    where?: GrammarCellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrammarCells to fetch.
     */
    orderBy?: GrammarCellOrderByWithRelationInput | GrammarCellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrammarCells.
     */
    cursor?: GrammarCellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrammarCells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrammarCells.
     */
    skip?: number
    distinct?: GrammarCellScalarFieldEnum | GrammarCellScalarFieldEnum[]
  }

  /**
   * GrammarCell create
   */
  export type GrammarCellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * The data needed to create a GrammarCell.
     */
    data: XOR<GrammarCellCreateInput, GrammarCellUncheckedCreateInput>
  }

  /**
   * GrammarCell createMany
   */
  export type GrammarCellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrammarCells.
     */
    data: GrammarCellCreateManyInput | GrammarCellCreateManyInput[]
  }

  /**
   * GrammarCell createManyAndReturn
   */
  export type GrammarCellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * The data used to create many GrammarCells.
     */
    data: GrammarCellCreateManyInput | GrammarCellCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarCell update
   */
  export type GrammarCellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * The data needed to update a GrammarCell.
     */
    data: XOR<GrammarCellUpdateInput, GrammarCellUncheckedUpdateInput>
    /**
     * Choose, which GrammarCell to update.
     */
    where: GrammarCellWhereUniqueInput
  }

  /**
   * GrammarCell updateMany
   */
  export type GrammarCellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrammarCells.
     */
    data: XOR<GrammarCellUpdateManyMutationInput, GrammarCellUncheckedUpdateManyInput>
    /**
     * Filter which GrammarCells to update
     */
    where?: GrammarCellWhereInput
    /**
     * Limit how many GrammarCells to update.
     */
    limit?: number
  }

  /**
   * GrammarCell updateManyAndReturn
   */
  export type GrammarCellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * The data used to update GrammarCells.
     */
    data: XOR<GrammarCellUpdateManyMutationInput, GrammarCellUncheckedUpdateManyInput>
    /**
     * Filter which GrammarCells to update
     */
    where?: GrammarCellWhereInput
    /**
     * Limit how many GrammarCells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GrammarCell upsert
   */
  export type GrammarCellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * The filter to search for the GrammarCell to update in case it exists.
     */
    where: GrammarCellWhereUniqueInput
    /**
     * In case the GrammarCell found by the `where` argument doesn't exist, create a new GrammarCell with this data.
     */
    create: XOR<GrammarCellCreateInput, GrammarCellUncheckedCreateInput>
    /**
     * In case the GrammarCell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrammarCellUpdateInput, GrammarCellUncheckedUpdateInput>
  }

  /**
   * GrammarCell delete
   */
  export type GrammarCellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
    /**
     * Filter which GrammarCell to delete.
     */
    where: GrammarCellWhereUniqueInput
  }

  /**
   * GrammarCell deleteMany
   */
  export type GrammarCellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrammarCells to delete
     */
    where?: GrammarCellWhereInput
    /**
     * Limit how many GrammarCells to delete.
     */
    limit?: number
  }

  /**
   * GrammarCell without action
   */
  export type GrammarCellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrammarCell
     */
    select?: GrammarCellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GrammarCell
     */
    omit?: GrammarCellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GrammarCellInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RootScalarFieldEnum: {
    id: 'id',
    phono: 'phono',
    ortho: 'ortho',
    definition: 'definition',
    notes: 'notes',
    etymology: 'etymology'
  };

  export type RootScalarFieldEnum = (typeof RootScalarFieldEnum)[keyof typeof RootScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    phono: 'phono',
    ortho: 'ortho',
    type: 'type'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const SenseScalarFieldEnum: {
    id: 'id',
    gloss: 'gloss',
    definition: 'definition',
    notes: 'notes',
    wordId: 'wordId',
    categoryId: 'categoryId'
  };

  export type SenseScalarFieldEnum = (typeof SenseScalarFieldEnum)[keyof typeof SenseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const GrammarTableScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GrammarTableScalarFieldEnum = (typeof GrammarTableScalarFieldEnum)[keyof typeof GrammarTableScalarFieldEnum]


  export const GrammarRowScalarFieldEnum: {
    id: 'id',
    grammarTableId: 'grammarTableId',
    featureId: 'featureId'
  };

  export type GrammarRowScalarFieldEnum = (typeof GrammarRowScalarFieldEnum)[keyof typeof GrammarRowScalarFieldEnum]


  export const GrammarColScalarFieldEnum: {
    id: 'id',
    grammarTableId: 'grammarTableId',
    featureId: 'featureId'
  };

  export type GrammarColScalarFieldEnum = (typeof GrammarColScalarFieldEnum)[keyof typeof GrammarColScalarFieldEnum]


  export const GrammarCellScalarFieldEnum: {
    rowId: 'rowId',
    colId: 'colId',
    cellText: 'cellText'
  };

  export type GrammarCellScalarFieldEnum = (typeof GrammarCellScalarFieldEnum)[keyof typeof GrammarCellScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RootWhereInput = {
    AND?: RootWhereInput | RootWhereInput[]
    OR?: RootWhereInput[]
    NOT?: RootWhereInput | RootWhereInput[]
    id?: IntFilter<"Root"> | number
    phono?: StringFilter<"Root"> | string
    ortho?: StringFilter<"Root"> | string
    definition?: StringNullableFilter<"Root"> | string | null
    notes?: StringNullableFilter<"Root"> | string | null
    etymology?: StringNullableFilter<"Root"> | string | null
    words?: WordListRelationFilter
  }

  export type RootOrderByWithRelationInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    definition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    etymology?: SortOrderInput | SortOrder
    words?: WordOrderByRelationAggregateInput
  }

  export type RootWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RootWhereInput | RootWhereInput[]
    OR?: RootWhereInput[]
    NOT?: RootWhereInput | RootWhereInput[]
    phono?: StringFilter<"Root"> | string
    ortho?: StringFilter<"Root"> | string
    definition?: StringNullableFilter<"Root"> | string | null
    notes?: StringNullableFilter<"Root"> | string | null
    etymology?: StringNullableFilter<"Root"> | string | null
    words?: WordListRelationFilter
  }, "id">

  export type RootOrderByWithAggregationInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    definition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    etymology?: SortOrderInput | SortOrder
    _count?: RootCountOrderByAggregateInput
    _avg?: RootAvgOrderByAggregateInput
    _max?: RootMaxOrderByAggregateInput
    _min?: RootMinOrderByAggregateInput
    _sum?: RootSumOrderByAggregateInput
  }

  export type RootScalarWhereWithAggregatesInput = {
    AND?: RootScalarWhereWithAggregatesInput | RootScalarWhereWithAggregatesInput[]
    OR?: RootScalarWhereWithAggregatesInput[]
    NOT?: RootScalarWhereWithAggregatesInput | RootScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Root"> | number
    phono?: StringWithAggregatesFilter<"Root"> | string
    ortho?: StringWithAggregatesFilter<"Root"> | string
    definition?: StringNullableWithAggregatesFilter<"Root"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Root"> | string | null
    etymology?: StringNullableWithAggregatesFilter<"Root"> | string | null
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: IntFilter<"Word"> | number
    phono?: StringFilter<"Word"> | string
    ortho?: StringFilter<"Word"> | string
    type?: StringFilter<"Word"> | string
    roots?: RootListRelationFilter
    senses?: SenseListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    type?: SortOrder
    roots?: RootOrderByRelationAggregateInput
    senses?: SenseOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    phono?: StringFilter<"Word"> | string
    ortho?: StringFilter<"Word"> | string
    type?: StringFilter<"Word"> | string
    roots?: RootListRelationFilter
    senses?: SenseListRelationFilter
  }, "id">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    type?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Word"> | number
    phono?: StringWithAggregatesFilter<"Word"> | string
    ortho?: StringWithAggregatesFilter<"Word"> | string
    type?: StringWithAggregatesFilter<"Word"> | string
  }

  export type SenseWhereInput = {
    AND?: SenseWhereInput | SenseWhereInput[]
    OR?: SenseWhereInput[]
    NOT?: SenseWhereInput | SenseWhereInput[]
    id?: IntFilter<"Sense"> | number
    gloss?: StringFilter<"Sense"> | string
    definition?: StringNullableFilter<"Sense"> | string | null
    notes?: StringNullableFilter<"Sense"> | string | null
    wordId?: IntFilter<"Sense"> | number
    categoryId?: IntFilter<"Sense"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    features?: FeatureListRelationFilter
  }

  export type SenseOrderByWithRelationInput = {
    id?: SortOrder
    gloss?: SortOrder
    definition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
    word?: WordOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    features?: FeatureOrderByRelationAggregateInput
  }

  export type SenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SenseWhereInput | SenseWhereInput[]
    OR?: SenseWhereInput[]
    NOT?: SenseWhereInput | SenseWhereInput[]
    gloss?: StringFilter<"Sense"> | string
    definition?: StringNullableFilter<"Sense"> | string | null
    notes?: StringNullableFilter<"Sense"> | string | null
    wordId?: IntFilter<"Sense"> | number
    categoryId?: IntFilter<"Sense"> | number
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    features?: FeatureListRelationFilter
  }, "id">

  export type SenseOrderByWithAggregationInput = {
    id?: SortOrder
    gloss?: SortOrder
    definition?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
    _count?: SenseCountOrderByAggregateInput
    _avg?: SenseAvgOrderByAggregateInput
    _max?: SenseMaxOrderByAggregateInput
    _min?: SenseMinOrderByAggregateInput
    _sum?: SenseSumOrderByAggregateInput
  }

  export type SenseScalarWhereWithAggregatesInput = {
    AND?: SenseScalarWhereWithAggregatesInput | SenseScalarWhereWithAggregatesInput[]
    OR?: SenseScalarWhereWithAggregatesInput[]
    NOT?: SenseScalarWhereWithAggregatesInput | SenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sense"> | number
    gloss?: StringWithAggregatesFilter<"Sense"> | string
    definition?: StringNullableWithAggregatesFilter<"Sense"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Sense"> | string | null
    wordId?: IntWithAggregatesFilter<"Sense"> | number
    categoryId?: IntWithAggregatesFilter<"Sense"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    features?: FeatureListRelationFilter
    grammarTables?: GrammarTableListRelationFilter
    senses?: SenseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    features?: FeatureOrderByRelationAggregateInput
    grammarTables?: GrammarTableOrderByRelationAggregateInput
    senses?: SenseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    features?: FeatureListRelationFilter
    grammarTables?: GrammarTableListRelationFilter
    senses?: SenseListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: IntFilter<"Feature"> | number
    name?: StringFilter<"Feature"> | string
    categories?: CategoryListRelationFilter
    senses?: SenseListRelationFilter
    rows?: GrammarRowListRelationFilter
    cols?: GrammarColListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    senses?: SenseOrderByRelationAggregateInput
    rows?: GrammarRowOrderByRelationAggregateInput
    cols?: GrammarColOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    name?: StringFilter<"Feature"> | string
    categories?: CategoryListRelationFilter
    senses?: SenseListRelationFilter
    rows?: GrammarRowListRelationFilter
    cols?: GrammarColListRelationFilter
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _avg?: FeatureAvgOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
    _sum?: FeatureSumOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feature"> | number
    name?: StringWithAggregatesFilter<"Feature"> | string
  }

  export type GrammarTableWhereInput = {
    AND?: GrammarTableWhereInput | GrammarTableWhereInput[]
    OR?: GrammarTableWhereInput[]
    NOT?: GrammarTableWhereInput | GrammarTableWhereInput[]
    id?: IntFilter<"GrammarTable"> | number
    name?: StringFilter<"GrammarTable"> | string
    categories?: CategoryListRelationFilter
    rows?: GrammarRowListRelationFilter
    cols?: GrammarColListRelationFilter
  }

  export type GrammarTableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    rows?: GrammarRowOrderByRelationAggregateInput
    cols?: GrammarColOrderByRelationAggregateInput
  }

  export type GrammarTableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarTableWhereInput | GrammarTableWhereInput[]
    OR?: GrammarTableWhereInput[]
    NOT?: GrammarTableWhereInput | GrammarTableWhereInput[]
    name?: StringFilter<"GrammarTable"> | string
    categories?: CategoryListRelationFilter
    rows?: GrammarRowListRelationFilter
    cols?: GrammarColListRelationFilter
  }, "id">

  export type GrammarTableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GrammarTableCountOrderByAggregateInput
    _avg?: GrammarTableAvgOrderByAggregateInput
    _max?: GrammarTableMaxOrderByAggregateInput
    _min?: GrammarTableMinOrderByAggregateInput
    _sum?: GrammarTableSumOrderByAggregateInput
  }

  export type GrammarTableScalarWhereWithAggregatesInput = {
    AND?: GrammarTableScalarWhereWithAggregatesInput | GrammarTableScalarWhereWithAggregatesInput[]
    OR?: GrammarTableScalarWhereWithAggregatesInput[]
    NOT?: GrammarTableScalarWhereWithAggregatesInput | GrammarTableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarTable"> | number
    name?: StringWithAggregatesFilter<"GrammarTable"> | string
  }

  export type GrammarRowWhereInput = {
    AND?: GrammarRowWhereInput | GrammarRowWhereInput[]
    OR?: GrammarRowWhereInput[]
    NOT?: GrammarRowWhereInput | GrammarRowWhereInput[]
    id?: IntFilter<"GrammarRow"> | number
    grammarTableId?: IntFilter<"GrammarRow"> | number
    featureId?: IntFilter<"GrammarRow"> | number
    grammarTable?: XOR<GrammarTableScalarRelationFilter, GrammarTableWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    cells?: GrammarCellListRelationFilter
  }

  export type GrammarRowOrderByWithRelationInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
    grammarTable?: GrammarTableOrderByWithRelationInput
    feature?: FeatureOrderByWithRelationInput
    cells?: GrammarCellOrderByRelationAggregateInput
  }

  export type GrammarRowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarRowWhereInput | GrammarRowWhereInput[]
    OR?: GrammarRowWhereInput[]
    NOT?: GrammarRowWhereInput | GrammarRowWhereInput[]
    grammarTableId?: IntFilter<"GrammarRow"> | number
    featureId?: IntFilter<"GrammarRow"> | number
    grammarTable?: XOR<GrammarTableScalarRelationFilter, GrammarTableWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    cells?: GrammarCellListRelationFilter
  }, "id">

  export type GrammarRowOrderByWithAggregationInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
    _count?: GrammarRowCountOrderByAggregateInput
    _avg?: GrammarRowAvgOrderByAggregateInput
    _max?: GrammarRowMaxOrderByAggregateInput
    _min?: GrammarRowMinOrderByAggregateInput
    _sum?: GrammarRowSumOrderByAggregateInput
  }

  export type GrammarRowScalarWhereWithAggregatesInput = {
    AND?: GrammarRowScalarWhereWithAggregatesInput | GrammarRowScalarWhereWithAggregatesInput[]
    OR?: GrammarRowScalarWhereWithAggregatesInput[]
    NOT?: GrammarRowScalarWhereWithAggregatesInput | GrammarRowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarRow"> | number
    grammarTableId?: IntWithAggregatesFilter<"GrammarRow"> | number
    featureId?: IntWithAggregatesFilter<"GrammarRow"> | number
  }

  export type GrammarColWhereInput = {
    AND?: GrammarColWhereInput | GrammarColWhereInput[]
    OR?: GrammarColWhereInput[]
    NOT?: GrammarColWhereInput | GrammarColWhereInput[]
    id?: IntFilter<"GrammarCol"> | number
    grammarTableId?: IntFilter<"GrammarCol"> | number
    featureId?: IntFilter<"GrammarCol"> | number
    grammarTable?: XOR<GrammarTableScalarRelationFilter, GrammarTableWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    cells?: GrammarCellListRelationFilter
  }

  export type GrammarColOrderByWithRelationInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
    grammarTable?: GrammarTableOrderByWithRelationInput
    feature?: FeatureOrderByWithRelationInput
    cells?: GrammarCellOrderByRelationAggregateInput
  }

  export type GrammarColWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GrammarColWhereInput | GrammarColWhereInput[]
    OR?: GrammarColWhereInput[]
    NOT?: GrammarColWhereInput | GrammarColWhereInput[]
    grammarTableId?: IntFilter<"GrammarCol"> | number
    featureId?: IntFilter<"GrammarCol"> | number
    grammarTable?: XOR<GrammarTableScalarRelationFilter, GrammarTableWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
    cells?: GrammarCellListRelationFilter
  }, "id">

  export type GrammarColOrderByWithAggregationInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
    _count?: GrammarColCountOrderByAggregateInput
    _avg?: GrammarColAvgOrderByAggregateInput
    _max?: GrammarColMaxOrderByAggregateInput
    _min?: GrammarColMinOrderByAggregateInput
    _sum?: GrammarColSumOrderByAggregateInput
  }

  export type GrammarColScalarWhereWithAggregatesInput = {
    AND?: GrammarColScalarWhereWithAggregatesInput | GrammarColScalarWhereWithAggregatesInput[]
    OR?: GrammarColScalarWhereWithAggregatesInput[]
    NOT?: GrammarColScalarWhereWithAggregatesInput | GrammarColScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GrammarCol"> | number
    grammarTableId?: IntWithAggregatesFilter<"GrammarCol"> | number
    featureId?: IntWithAggregatesFilter<"GrammarCol"> | number
  }

  export type GrammarCellWhereInput = {
    AND?: GrammarCellWhereInput | GrammarCellWhereInput[]
    OR?: GrammarCellWhereInput[]
    NOT?: GrammarCellWhereInput | GrammarCellWhereInput[]
    rowId?: IntFilter<"GrammarCell"> | number
    colId?: IntFilter<"GrammarCell"> | number
    cellText?: StringFilter<"GrammarCell"> | string
    row?: XOR<GrammarRowScalarRelationFilter, GrammarRowWhereInput>
    col?: XOR<GrammarColScalarRelationFilter, GrammarColWhereInput>
  }

  export type GrammarCellOrderByWithRelationInput = {
    rowId?: SortOrder
    colId?: SortOrder
    cellText?: SortOrder
    row?: GrammarRowOrderByWithRelationInput
    col?: GrammarColOrderByWithRelationInput
  }

  export type GrammarCellWhereUniqueInput = Prisma.AtLeast<{
    rowId_colId?: GrammarCellRowIdColIdCompoundUniqueInput
    AND?: GrammarCellWhereInput | GrammarCellWhereInput[]
    OR?: GrammarCellWhereInput[]
    NOT?: GrammarCellWhereInput | GrammarCellWhereInput[]
    rowId?: IntFilter<"GrammarCell"> | number
    colId?: IntFilter<"GrammarCell"> | number
    cellText?: StringFilter<"GrammarCell"> | string
    row?: XOR<GrammarRowScalarRelationFilter, GrammarRowWhereInput>
    col?: XOR<GrammarColScalarRelationFilter, GrammarColWhereInput>
  }, "rowId_colId">

  export type GrammarCellOrderByWithAggregationInput = {
    rowId?: SortOrder
    colId?: SortOrder
    cellText?: SortOrder
    _count?: GrammarCellCountOrderByAggregateInput
    _avg?: GrammarCellAvgOrderByAggregateInput
    _max?: GrammarCellMaxOrderByAggregateInput
    _min?: GrammarCellMinOrderByAggregateInput
    _sum?: GrammarCellSumOrderByAggregateInput
  }

  export type GrammarCellScalarWhereWithAggregatesInput = {
    AND?: GrammarCellScalarWhereWithAggregatesInput | GrammarCellScalarWhereWithAggregatesInput[]
    OR?: GrammarCellScalarWhereWithAggregatesInput[]
    NOT?: GrammarCellScalarWhereWithAggregatesInput | GrammarCellScalarWhereWithAggregatesInput[]
    rowId?: IntWithAggregatesFilter<"GrammarCell"> | number
    colId?: IntWithAggregatesFilter<"GrammarCell"> | number
    cellText?: StringWithAggregatesFilter<"GrammarCell"> | string
  }

  export type RootCreateInput = {
    phono: string
    ortho: string
    definition?: string | null
    notes?: string | null
    etymology?: string | null
    words?: WordCreateNestedManyWithoutRootsInput
  }

  export type RootUncheckedCreateInput = {
    id?: number
    phono: string
    ortho: string
    definition?: string | null
    notes?: string | null
    etymology?: string | null
    words?: WordUncheckedCreateNestedManyWithoutRootsInput
  }

  export type RootUpdateInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUpdateManyWithoutRootsNestedInput
  }

  export type RootUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUncheckedUpdateManyWithoutRootsNestedInput
  }

  export type RootCreateManyInput = {
    id?: number
    phono: string
    ortho: string
    definition?: string | null
    notes?: string | null
    etymology?: string | null
  }

  export type RootUpdateManyMutationInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RootUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WordCreateInput = {
    phono: string
    ortho: string
    type: string
    roots?: RootCreateNestedManyWithoutWordsInput
    senses?: SenseCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    phono: string
    ortho: string
    type: string
    roots?: RootUncheckedCreateNestedManyWithoutWordsInput
    senses?: SenseUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    roots?: RootUpdateManyWithoutWordsNestedInput
    senses?: SenseUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    roots?: RootUncheckedUpdateManyWithoutWordsNestedInput
    senses?: SenseUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: number
    phono: string
    ortho: string
    type: string
  }

  export type WordUpdateManyMutationInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SenseCreateInput = {
    gloss: string
    definition?: string | null
    notes?: string | null
    word: WordCreateNestedOneWithoutSensesInput
    category: CategoryCreateNestedOneWithoutSensesInput
    features?: FeatureCreateNestedManyWithoutSensesInput
  }

  export type SenseUncheckedCreateInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    wordId: number
    categoryId: number
    features?: FeatureUncheckedCreateNestedManyWithoutSensesInput
  }

  export type SenseUpdateInput = {
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutSensesNestedInput
    category?: CategoryUpdateOneRequiredWithoutSensesNestedInput
    features?: FeatureUpdateManyWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    features?: FeatureUncheckedUpdateManyWithoutSensesNestedInput
  }

  export type SenseCreateManyInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    wordId: number
    categoryId: number
  }

  export type SenseUpdateManyMutationInput = {
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    features?: FeatureCreateNestedManyWithoutCategoriesInput
    grammarTables?: GrammarTableCreateNestedManyWithoutCategoriesInput
    senses?: SenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    features?: FeatureUncheckedCreateNestedManyWithoutCategoriesInput
    grammarTables?: GrammarTableUncheckedCreateNestedManyWithoutCategoriesInput
    senses?: SenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUpdateManyWithoutCategoriesNestedInput
    grammarTables?: GrammarTableUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutCategoriesNestedInput
    grammarTables?: GrammarTableUncheckedUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureCreateInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutFeaturesInput
    senses?: SenseCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowCreateNestedManyWithoutFeatureInput
    cols?: GrammarColCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutFeaturesInput
    senses?: SenseUncheckedCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutFeatureInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: number
    name: string
  }

  export type FeatureUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarTableCreateInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutGrammarTablesInput
    rows?: GrammarRowCreateNestedManyWithoutGrammarTableInput
    cols?: GrammarColCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableUncheckedCreateInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutGrammarTablesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutGrammarTableInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutGrammarTablesNestedInput
    rows?: GrammarRowUpdateManyWithoutGrammarTableNestedInput
    cols?: GrammarColUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutGrammarTablesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutGrammarTableNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableCreateManyInput = {
    id?: number
    name: string
  }

  export type GrammarTableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarTableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarRowCreateInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutRowsInput
    feature: FeatureCreateNestedOneWithoutRowsInput
    cells?: GrammarCellCreateNestedManyWithoutRowInput
  }

  export type GrammarRowUncheckedCreateInput = {
    id?: number
    grammarTableId: number
    featureId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutRowInput
  }

  export type GrammarRowUpdateInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutRowsNestedInput
    feature?: FeatureUpdateOneRequiredWithoutRowsNestedInput
    cells?: GrammarCellUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowCreateManyInput = {
    id?: number
    grammarTableId: number
    featureId: number
  }

  export type GrammarRowUpdateManyMutationInput = {

  }

  export type GrammarRowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarColCreateInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutColsInput
    feature: FeatureCreateNestedOneWithoutColsInput
    cells?: GrammarCellCreateNestedManyWithoutColInput
  }

  export type GrammarColUncheckedCreateInput = {
    id?: number
    grammarTableId: number
    featureId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutColInput
  }

  export type GrammarColUpdateInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutColsNestedInput
    feature?: FeatureUpdateOneRequiredWithoutColsNestedInput
    cells?: GrammarCellUpdateManyWithoutColNestedInput
  }

  export type GrammarColUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutColNestedInput
  }

  export type GrammarColCreateManyInput = {
    id?: number
    grammarTableId: number
    featureId: number
  }

  export type GrammarColUpdateManyMutationInput = {

  }

  export type GrammarColUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarCellCreateInput = {
    cellText: string
    row: GrammarRowCreateNestedOneWithoutCellsInput
    col: GrammarColCreateNestedOneWithoutCellsInput
  }

  export type GrammarCellUncheckedCreateInput = {
    rowId: number
    colId: number
    cellText: string
  }

  export type GrammarCellUpdateInput = {
    cellText?: StringFieldUpdateOperationsInput | string
    row?: GrammarRowUpdateOneRequiredWithoutCellsNestedInput
    col?: GrammarColUpdateOneRequiredWithoutCellsNestedInput
  }

  export type GrammarCellUncheckedUpdateInput = {
    rowId?: IntFieldUpdateOperationsInput | number
    colId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarCellCreateManyInput = {
    rowId: number
    colId: number
    cellText: string
  }

  export type GrammarCellUpdateManyMutationInput = {
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarCellUncheckedUpdateManyInput = {
    rowId?: IntFieldUpdateOperationsInput | number
    colId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RootCountOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    etymology?: SortOrder
  }

  export type RootAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RootMaxOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    etymology?: SortOrder
  }

  export type RootMinOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    etymology?: SortOrder
  }

  export type RootSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RootListRelationFilter = {
    every?: RootWhereInput
    some?: RootWhereInput
    none?: RootWhereInput
  }

  export type SenseListRelationFilter = {
    every?: SenseWhereInput
    some?: SenseWhereInput
    none?: SenseWhereInput
  }

  export type RootOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    type?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    type?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    phono?: SortOrder
    ortho?: SortOrder
    type?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SenseCountOrderByAggregateInput = {
    id?: SortOrder
    gloss?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SenseAvgOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SenseMaxOrderByAggregateInput = {
    id?: SortOrder
    gloss?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SenseMinOrderByAggregateInput = {
    id?: SortOrder
    gloss?: SortOrder
    definition?: SortOrder
    notes?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SenseSumOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type GrammarTableListRelationFilter = {
    every?: GrammarTableWhereInput
    some?: GrammarTableWhereInput
    none?: GrammarTableWhereInput
  }

  export type GrammarTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type GrammarRowListRelationFilter = {
    every?: GrammarRowWhereInput
    some?: GrammarRowWhereInput
    none?: GrammarRowWhereInput
  }

  export type GrammarColListRelationFilter = {
    every?: GrammarColWhereInput
    some?: GrammarColWhereInput
    none?: GrammarColWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarRowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarColOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FeatureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarTableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GrammarTableAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarTableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GrammarTableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GrammarTableSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GrammarTableScalarRelationFilter = {
    is?: GrammarTableWhereInput
    isNot?: GrammarTableWhereInput
  }

  export type FeatureScalarRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type GrammarCellListRelationFilter = {
    every?: GrammarCellWhereInput
    some?: GrammarCellWhereInput
    none?: GrammarCellWhereInput
  }

  export type GrammarCellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrammarRowCountOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarRowAvgOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarRowMaxOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarRowMinOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarRowSumOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarColCountOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarColAvgOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarColMaxOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarColMinOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarColSumOrderByAggregateInput = {
    id?: SortOrder
    grammarTableId?: SortOrder
    featureId?: SortOrder
  }

  export type GrammarRowScalarRelationFilter = {
    is?: GrammarRowWhereInput
    isNot?: GrammarRowWhereInput
  }

  export type GrammarColScalarRelationFilter = {
    is?: GrammarColWhereInput
    isNot?: GrammarColWhereInput
  }

  export type GrammarCellRowIdColIdCompoundUniqueInput = {
    rowId: number
    colId: number
  }

  export type GrammarCellCountOrderByAggregateInput = {
    rowId?: SortOrder
    colId?: SortOrder
    cellText?: SortOrder
  }

  export type GrammarCellAvgOrderByAggregateInput = {
    rowId?: SortOrder
    colId?: SortOrder
  }

  export type GrammarCellMaxOrderByAggregateInput = {
    rowId?: SortOrder
    colId?: SortOrder
    cellText?: SortOrder
  }

  export type GrammarCellMinOrderByAggregateInput = {
    rowId?: SortOrder
    colId?: SortOrder
    cellText?: SortOrder
  }

  export type GrammarCellSumOrderByAggregateInput = {
    rowId?: SortOrder
    colId?: SortOrder
  }

  export type WordCreateNestedManyWithoutRootsInput = {
    create?: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput> | WordCreateWithoutRootsInput[] | WordUncheckedCreateWithoutRootsInput[]
    connectOrCreate?: WordCreateOrConnectWithoutRootsInput | WordCreateOrConnectWithoutRootsInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutRootsInput = {
    create?: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput> | WordCreateWithoutRootsInput[] | WordUncheckedCreateWithoutRootsInput[]
    connectOrCreate?: WordCreateOrConnectWithoutRootsInput | WordCreateOrConnectWithoutRootsInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WordUpdateManyWithoutRootsNestedInput = {
    create?: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput> | WordCreateWithoutRootsInput[] | WordUncheckedCreateWithoutRootsInput[]
    connectOrCreate?: WordCreateOrConnectWithoutRootsInput | WordCreateOrConnectWithoutRootsInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutRootsInput | WordUpsertWithWhereUniqueWithoutRootsInput[]
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutRootsInput | WordUpdateWithWhereUniqueWithoutRootsInput[]
    updateMany?: WordUpdateManyWithWhereWithoutRootsInput | WordUpdateManyWithWhereWithoutRootsInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WordUncheckedUpdateManyWithoutRootsNestedInput = {
    create?: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput> | WordCreateWithoutRootsInput[] | WordUncheckedCreateWithoutRootsInput[]
    connectOrCreate?: WordCreateOrConnectWithoutRootsInput | WordCreateOrConnectWithoutRootsInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutRootsInput | WordUpsertWithWhereUniqueWithoutRootsInput[]
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutRootsInput | WordUpdateWithWhereUniqueWithoutRootsInput[]
    updateMany?: WordUpdateManyWithWhereWithoutRootsInput | WordUpdateManyWithWhereWithoutRootsInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type RootCreateNestedManyWithoutWordsInput = {
    create?: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput> | RootCreateWithoutWordsInput[] | RootUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: RootCreateOrConnectWithoutWordsInput | RootCreateOrConnectWithoutWordsInput[]
    connect?: RootWhereUniqueInput | RootWhereUniqueInput[]
  }

  export type SenseCreateNestedManyWithoutWordInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type RootUncheckedCreateNestedManyWithoutWordsInput = {
    create?: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput> | RootCreateWithoutWordsInput[] | RootUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: RootCreateOrConnectWithoutWordsInput | RootCreateOrConnectWithoutWordsInput[]
    connect?: RootWhereUniqueInput | RootWhereUniqueInput[]
  }

  export type SenseUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type RootUpdateManyWithoutWordsNestedInput = {
    create?: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput> | RootCreateWithoutWordsInput[] | RootUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: RootCreateOrConnectWithoutWordsInput | RootCreateOrConnectWithoutWordsInput[]
    upsert?: RootUpsertWithWhereUniqueWithoutWordsInput | RootUpsertWithWhereUniqueWithoutWordsInput[]
    set?: RootWhereUniqueInput | RootWhereUniqueInput[]
    disconnect?: RootWhereUniqueInput | RootWhereUniqueInput[]
    delete?: RootWhereUniqueInput | RootWhereUniqueInput[]
    connect?: RootWhereUniqueInput | RootWhereUniqueInput[]
    update?: RootUpdateWithWhereUniqueWithoutWordsInput | RootUpdateWithWhereUniqueWithoutWordsInput[]
    updateMany?: RootUpdateManyWithWhereWithoutWordsInput | RootUpdateManyWithWhereWithoutWordsInput[]
    deleteMany?: RootScalarWhereInput | RootScalarWhereInput[]
  }

  export type SenseUpdateManyWithoutWordNestedInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutWordInput | SenseUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutWordInput | SenseUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutWordInput | SenseUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type RootUncheckedUpdateManyWithoutWordsNestedInput = {
    create?: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput> | RootCreateWithoutWordsInput[] | RootUncheckedCreateWithoutWordsInput[]
    connectOrCreate?: RootCreateOrConnectWithoutWordsInput | RootCreateOrConnectWithoutWordsInput[]
    upsert?: RootUpsertWithWhereUniqueWithoutWordsInput | RootUpsertWithWhereUniqueWithoutWordsInput[]
    set?: RootWhereUniqueInput | RootWhereUniqueInput[]
    disconnect?: RootWhereUniqueInput | RootWhereUniqueInput[]
    delete?: RootWhereUniqueInput | RootWhereUniqueInput[]
    connect?: RootWhereUniqueInput | RootWhereUniqueInput[]
    update?: RootUpdateWithWhereUniqueWithoutWordsInput | RootUpdateWithWhereUniqueWithoutWordsInput[]
    updateMany?: RootUpdateManyWithWhereWithoutWordsInput | RootUpdateManyWithWhereWithoutWordsInput[]
    deleteMany?: RootScalarWhereInput | RootScalarWhereInput[]
  }

  export type SenseUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput> | SenseCreateWithoutWordInput[] | SenseUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutWordInput | SenseCreateOrConnectWithoutWordInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutWordInput | SenseUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SenseCreateManyWordInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutWordInput | SenseUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutWordInput | SenseUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutSensesInput = {
    create?: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSensesInput
    connect?: WordWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSensesInput = {
    create?: XOR<CategoryCreateWithoutSensesInput, CategoryUncheckedCreateWithoutSensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSensesInput
    connect?: CategoryWhereUniqueInput
  }

  export type FeatureCreateNestedManyWithoutSensesInput = {
    create?: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput> | FeatureCreateWithoutSensesInput[] | FeatureUncheckedCreateWithoutSensesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutSensesInput | FeatureCreateOrConnectWithoutSensesInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutSensesInput = {
    create?: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput> | FeatureCreateWithoutSensesInput[] | FeatureUncheckedCreateWithoutSensesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutSensesInput | FeatureCreateOrConnectWithoutSensesInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type WordUpdateOneRequiredWithoutSensesNestedInput = {
    create?: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSensesInput
    upsert?: WordUpsertWithoutSensesInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutSensesInput, WordUpdateWithoutSensesInput>, WordUncheckedUpdateWithoutSensesInput>
  }

  export type CategoryUpdateOneRequiredWithoutSensesNestedInput = {
    create?: XOR<CategoryCreateWithoutSensesInput, CategoryUncheckedCreateWithoutSensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSensesInput
    upsert?: CategoryUpsertWithoutSensesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSensesInput, CategoryUpdateWithoutSensesInput>, CategoryUncheckedUpdateWithoutSensesInput>
  }

  export type FeatureUpdateManyWithoutSensesNestedInput = {
    create?: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput> | FeatureCreateWithoutSensesInput[] | FeatureUncheckedCreateWithoutSensesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutSensesInput | FeatureCreateOrConnectWithoutSensesInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutSensesInput | FeatureUpsertWithWhereUniqueWithoutSensesInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutSensesInput | FeatureUpdateWithWhereUniqueWithoutSensesInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutSensesInput | FeatureUpdateManyWithWhereWithoutSensesInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutSensesNestedInput = {
    create?: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput> | FeatureCreateWithoutSensesInput[] | FeatureUncheckedCreateWithoutSensesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutSensesInput | FeatureCreateOrConnectWithoutSensesInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutSensesInput | FeatureUpsertWithWhereUniqueWithoutSensesInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutSensesInput | FeatureUpdateWithWhereUniqueWithoutSensesInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutSensesInput | FeatureUpdateManyWithWhereWithoutSensesInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput> | FeatureCreateWithoutCategoriesInput[] | FeatureUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput | FeatureCreateOrConnectWithoutCategoriesInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type GrammarTableCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput> | GrammarTableCreateWithoutCategoriesInput[] | GrammarTableUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: GrammarTableCreateOrConnectWithoutCategoriesInput | GrammarTableCreateOrConnectWithoutCategoriesInput[]
    connect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
  }

  export type SenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput> | SenseCreateWithoutCategoryInput[] | SenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutCategoryInput | SenseCreateOrConnectWithoutCategoryInput[]
    createMany?: SenseCreateManyCategoryInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput> | FeatureCreateWithoutCategoriesInput[] | FeatureUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput | FeatureCreateOrConnectWithoutCategoriesInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type GrammarTableUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput> | GrammarTableCreateWithoutCategoriesInput[] | GrammarTableUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: GrammarTableCreateOrConnectWithoutCategoriesInput | GrammarTableCreateOrConnectWithoutCategoriesInput[]
    connect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
  }

  export type SenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput> | SenseCreateWithoutCategoryInput[] | SenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutCategoryInput | SenseCreateOrConnectWithoutCategoryInput[]
    createMany?: SenseCreateManyCategoryInputEnvelope
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type FeatureUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput> | FeatureCreateWithoutCategoriesInput[] | FeatureUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput | FeatureCreateOrConnectWithoutCategoriesInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutCategoriesInput | FeatureUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutCategoriesInput | FeatureUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutCategoriesInput | FeatureUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type GrammarTableUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput> | GrammarTableCreateWithoutCategoriesInput[] | GrammarTableUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: GrammarTableCreateOrConnectWithoutCategoriesInput | GrammarTableCreateOrConnectWithoutCategoriesInput[]
    upsert?: GrammarTableUpsertWithWhereUniqueWithoutCategoriesInput | GrammarTableUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    disconnect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    delete?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    connect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    update?: GrammarTableUpdateWithWhereUniqueWithoutCategoriesInput | GrammarTableUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: GrammarTableUpdateManyWithWhereWithoutCategoriesInput | GrammarTableUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: GrammarTableScalarWhereInput | GrammarTableScalarWhereInput[]
  }

  export type SenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput> | SenseCreateWithoutCategoryInput[] | SenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutCategoryInput | SenseCreateOrConnectWithoutCategoryInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutCategoryInput | SenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SenseCreateManyCategoryInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutCategoryInput | SenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutCategoryInput | SenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput> | FeatureCreateWithoutCategoriesInput[] | FeatureUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCategoriesInput | FeatureCreateOrConnectWithoutCategoriesInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutCategoriesInput | FeatureUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutCategoriesInput | FeatureUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutCategoriesInput | FeatureUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type GrammarTableUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput> | GrammarTableCreateWithoutCategoriesInput[] | GrammarTableUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: GrammarTableCreateOrConnectWithoutCategoriesInput | GrammarTableCreateOrConnectWithoutCategoriesInput[]
    upsert?: GrammarTableUpsertWithWhereUniqueWithoutCategoriesInput | GrammarTableUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    disconnect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    delete?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    connect?: GrammarTableWhereUniqueInput | GrammarTableWhereUniqueInput[]
    update?: GrammarTableUpdateWithWhereUniqueWithoutCategoriesInput | GrammarTableUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: GrammarTableUpdateManyWithWhereWithoutCategoriesInput | GrammarTableUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: GrammarTableScalarWhereInput | GrammarTableScalarWhereInput[]
  }

  export type SenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput> | SenseCreateWithoutCategoryInput[] | SenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutCategoryInput | SenseCreateOrConnectWithoutCategoryInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutCategoryInput | SenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SenseCreateManyCategoryInputEnvelope
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutCategoryInput | SenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutCategoryInput | SenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput> | CategoryCreateWithoutFeaturesInput[] | CategoryUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput | CategoryCreateOrConnectWithoutFeaturesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SenseCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput> | SenseCreateWithoutFeaturesInput[] | SenseUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutFeaturesInput | SenseCreateOrConnectWithoutFeaturesInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type GrammarRowCreateNestedManyWithoutFeatureInput = {
    create?: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput> | GrammarRowCreateWithoutFeatureInput[] | GrammarRowUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutFeatureInput | GrammarRowCreateOrConnectWithoutFeatureInput[]
    createMany?: GrammarRowCreateManyFeatureInputEnvelope
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
  }

  export type GrammarColCreateNestedManyWithoutFeatureInput = {
    create?: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput> | GrammarColCreateWithoutFeatureInput[] | GrammarColUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutFeatureInput | GrammarColCreateOrConnectWithoutFeatureInput[]
    createMany?: GrammarColCreateManyFeatureInputEnvelope
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput> | CategoryCreateWithoutFeaturesInput[] | CategoryUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput | CategoryCreateOrConnectWithoutFeaturesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SenseUncheckedCreateNestedManyWithoutFeaturesInput = {
    create?: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput> | SenseCreateWithoutFeaturesInput[] | SenseUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutFeaturesInput | SenseCreateOrConnectWithoutFeaturesInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
  }

  export type GrammarRowUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput> | GrammarRowCreateWithoutFeatureInput[] | GrammarRowUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutFeatureInput | GrammarRowCreateOrConnectWithoutFeatureInput[]
    createMany?: GrammarRowCreateManyFeatureInputEnvelope
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
  }

  export type GrammarColUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput> | GrammarColCreateWithoutFeatureInput[] | GrammarColUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutFeatureInput | GrammarColCreateOrConnectWithoutFeatureInput[]
    createMany?: GrammarColCreateManyFeatureInputEnvelope
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput> | CategoryCreateWithoutFeaturesInput[] | CategoryUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput | CategoryCreateOrConnectWithoutFeaturesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFeaturesInput | CategoryUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFeaturesInput | CategoryUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFeaturesInput | CategoryUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SenseUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput> | SenseCreateWithoutFeaturesInput[] | SenseUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutFeaturesInput | SenseCreateOrConnectWithoutFeaturesInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutFeaturesInput | SenseUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutFeaturesInput | SenseUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutFeaturesInput | SenseUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type GrammarRowUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput> | GrammarRowCreateWithoutFeatureInput[] | GrammarRowUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutFeatureInput | GrammarRowCreateOrConnectWithoutFeatureInput[]
    upsert?: GrammarRowUpsertWithWhereUniqueWithoutFeatureInput | GrammarRowUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: GrammarRowCreateManyFeatureInputEnvelope
    set?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    disconnect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    delete?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    update?: GrammarRowUpdateWithWhereUniqueWithoutFeatureInput | GrammarRowUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: GrammarRowUpdateManyWithWhereWithoutFeatureInput | GrammarRowUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
  }

  export type GrammarColUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput> | GrammarColCreateWithoutFeatureInput[] | GrammarColUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutFeatureInput | GrammarColCreateOrConnectWithoutFeatureInput[]
    upsert?: GrammarColUpsertWithWhereUniqueWithoutFeatureInput | GrammarColUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: GrammarColCreateManyFeatureInputEnvelope
    set?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    disconnect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    delete?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    update?: GrammarColUpdateWithWhereUniqueWithoutFeatureInput | GrammarColUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: GrammarColUpdateManyWithWhereWithoutFeatureInput | GrammarColUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput> | CategoryCreateWithoutFeaturesInput[] | CategoryUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutFeaturesInput | CategoryCreateOrConnectWithoutFeaturesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutFeaturesInput | CategoryUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutFeaturesInput | CategoryUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutFeaturesInput | CategoryUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SenseUncheckedUpdateManyWithoutFeaturesNestedInput = {
    create?: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput> | SenseCreateWithoutFeaturesInput[] | SenseUncheckedCreateWithoutFeaturesInput[]
    connectOrCreate?: SenseCreateOrConnectWithoutFeaturesInput | SenseCreateOrConnectWithoutFeaturesInput[]
    upsert?: SenseUpsertWithWhereUniqueWithoutFeaturesInput | SenseUpsertWithWhereUniqueWithoutFeaturesInput[]
    set?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    disconnect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    delete?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    connect?: SenseWhereUniqueInput | SenseWhereUniqueInput[]
    update?: SenseUpdateWithWhereUniqueWithoutFeaturesInput | SenseUpdateWithWhereUniqueWithoutFeaturesInput[]
    updateMany?: SenseUpdateManyWithWhereWithoutFeaturesInput | SenseUpdateManyWithWhereWithoutFeaturesInput[]
    deleteMany?: SenseScalarWhereInput | SenseScalarWhereInput[]
  }

  export type GrammarRowUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput> | GrammarRowCreateWithoutFeatureInput[] | GrammarRowUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutFeatureInput | GrammarRowCreateOrConnectWithoutFeatureInput[]
    upsert?: GrammarRowUpsertWithWhereUniqueWithoutFeatureInput | GrammarRowUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: GrammarRowCreateManyFeatureInputEnvelope
    set?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    disconnect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    delete?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    update?: GrammarRowUpdateWithWhereUniqueWithoutFeatureInput | GrammarRowUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: GrammarRowUpdateManyWithWhereWithoutFeatureInput | GrammarRowUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
  }

  export type GrammarColUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput> | GrammarColCreateWithoutFeatureInput[] | GrammarColUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutFeatureInput | GrammarColCreateOrConnectWithoutFeatureInput[]
    upsert?: GrammarColUpsertWithWhereUniqueWithoutFeatureInput | GrammarColUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: GrammarColCreateManyFeatureInputEnvelope
    set?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    disconnect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    delete?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    update?: GrammarColUpdateWithWhereUniqueWithoutFeatureInput | GrammarColUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: GrammarColUpdateManyWithWhereWithoutFeatureInput | GrammarColUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutGrammarTablesInput = {
    create?: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput> | CategoryCreateWithoutGrammarTablesInput[] | CategoryUncheckedCreateWithoutGrammarTablesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGrammarTablesInput | CategoryCreateOrConnectWithoutGrammarTablesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type GrammarRowCreateNestedManyWithoutGrammarTableInput = {
    create?: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput> | GrammarRowCreateWithoutGrammarTableInput[] | GrammarRowUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutGrammarTableInput | GrammarRowCreateOrConnectWithoutGrammarTableInput[]
    createMany?: GrammarRowCreateManyGrammarTableInputEnvelope
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
  }

  export type GrammarColCreateNestedManyWithoutGrammarTableInput = {
    create?: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput> | GrammarColCreateWithoutGrammarTableInput[] | GrammarColUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutGrammarTableInput | GrammarColCreateOrConnectWithoutGrammarTableInput[]
    createMany?: GrammarColCreateManyGrammarTableInputEnvelope
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutGrammarTablesInput = {
    create?: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput> | CategoryCreateWithoutGrammarTablesInput[] | CategoryUncheckedCreateWithoutGrammarTablesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGrammarTablesInput | CategoryCreateOrConnectWithoutGrammarTablesInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type GrammarRowUncheckedCreateNestedManyWithoutGrammarTableInput = {
    create?: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput> | GrammarRowCreateWithoutGrammarTableInput[] | GrammarRowUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutGrammarTableInput | GrammarRowCreateOrConnectWithoutGrammarTableInput[]
    createMany?: GrammarRowCreateManyGrammarTableInputEnvelope
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
  }

  export type GrammarColUncheckedCreateNestedManyWithoutGrammarTableInput = {
    create?: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput> | GrammarColCreateWithoutGrammarTableInput[] | GrammarColUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutGrammarTableInput | GrammarColCreateOrConnectWithoutGrammarTableInput[]
    createMany?: GrammarColCreateManyGrammarTableInputEnvelope
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutGrammarTablesNestedInput = {
    create?: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput> | CategoryCreateWithoutGrammarTablesInput[] | CategoryUncheckedCreateWithoutGrammarTablesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGrammarTablesInput | CategoryCreateOrConnectWithoutGrammarTablesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutGrammarTablesInput | CategoryUpsertWithWhereUniqueWithoutGrammarTablesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutGrammarTablesInput | CategoryUpdateWithWhereUniqueWithoutGrammarTablesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutGrammarTablesInput | CategoryUpdateManyWithWhereWithoutGrammarTablesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type GrammarRowUpdateManyWithoutGrammarTableNestedInput = {
    create?: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput> | GrammarRowCreateWithoutGrammarTableInput[] | GrammarRowUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutGrammarTableInput | GrammarRowCreateOrConnectWithoutGrammarTableInput[]
    upsert?: GrammarRowUpsertWithWhereUniqueWithoutGrammarTableInput | GrammarRowUpsertWithWhereUniqueWithoutGrammarTableInput[]
    createMany?: GrammarRowCreateManyGrammarTableInputEnvelope
    set?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    disconnect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    delete?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    update?: GrammarRowUpdateWithWhereUniqueWithoutGrammarTableInput | GrammarRowUpdateWithWhereUniqueWithoutGrammarTableInput[]
    updateMany?: GrammarRowUpdateManyWithWhereWithoutGrammarTableInput | GrammarRowUpdateManyWithWhereWithoutGrammarTableInput[]
    deleteMany?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
  }

  export type GrammarColUpdateManyWithoutGrammarTableNestedInput = {
    create?: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput> | GrammarColCreateWithoutGrammarTableInput[] | GrammarColUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutGrammarTableInput | GrammarColCreateOrConnectWithoutGrammarTableInput[]
    upsert?: GrammarColUpsertWithWhereUniqueWithoutGrammarTableInput | GrammarColUpsertWithWhereUniqueWithoutGrammarTableInput[]
    createMany?: GrammarColCreateManyGrammarTableInputEnvelope
    set?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    disconnect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    delete?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    update?: GrammarColUpdateWithWhereUniqueWithoutGrammarTableInput | GrammarColUpdateWithWhereUniqueWithoutGrammarTableInput[]
    updateMany?: GrammarColUpdateManyWithWhereWithoutGrammarTableInput | GrammarColUpdateManyWithWhereWithoutGrammarTableInput[]
    deleteMany?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutGrammarTablesNestedInput = {
    create?: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput> | CategoryCreateWithoutGrammarTablesInput[] | CategoryUncheckedCreateWithoutGrammarTablesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutGrammarTablesInput | CategoryCreateOrConnectWithoutGrammarTablesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutGrammarTablesInput | CategoryUpsertWithWhereUniqueWithoutGrammarTablesInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutGrammarTablesInput | CategoryUpdateWithWhereUniqueWithoutGrammarTablesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutGrammarTablesInput | CategoryUpdateManyWithWhereWithoutGrammarTablesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type GrammarRowUncheckedUpdateManyWithoutGrammarTableNestedInput = {
    create?: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput> | GrammarRowCreateWithoutGrammarTableInput[] | GrammarRowUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarRowCreateOrConnectWithoutGrammarTableInput | GrammarRowCreateOrConnectWithoutGrammarTableInput[]
    upsert?: GrammarRowUpsertWithWhereUniqueWithoutGrammarTableInput | GrammarRowUpsertWithWhereUniqueWithoutGrammarTableInput[]
    createMany?: GrammarRowCreateManyGrammarTableInputEnvelope
    set?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    disconnect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    delete?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    connect?: GrammarRowWhereUniqueInput | GrammarRowWhereUniqueInput[]
    update?: GrammarRowUpdateWithWhereUniqueWithoutGrammarTableInput | GrammarRowUpdateWithWhereUniqueWithoutGrammarTableInput[]
    updateMany?: GrammarRowUpdateManyWithWhereWithoutGrammarTableInput | GrammarRowUpdateManyWithWhereWithoutGrammarTableInput[]
    deleteMany?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
  }

  export type GrammarColUncheckedUpdateManyWithoutGrammarTableNestedInput = {
    create?: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput> | GrammarColCreateWithoutGrammarTableInput[] | GrammarColUncheckedCreateWithoutGrammarTableInput[]
    connectOrCreate?: GrammarColCreateOrConnectWithoutGrammarTableInput | GrammarColCreateOrConnectWithoutGrammarTableInput[]
    upsert?: GrammarColUpsertWithWhereUniqueWithoutGrammarTableInput | GrammarColUpsertWithWhereUniqueWithoutGrammarTableInput[]
    createMany?: GrammarColCreateManyGrammarTableInputEnvelope
    set?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    disconnect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    delete?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    connect?: GrammarColWhereUniqueInput | GrammarColWhereUniqueInput[]
    update?: GrammarColUpdateWithWhereUniqueWithoutGrammarTableInput | GrammarColUpdateWithWhereUniqueWithoutGrammarTableInput[]
    updateMany?: GrammarColUpdateManyWithWhereWithoutGrammarTableInput | GrammarColUpdateManyWithWhereWithoutGrammarTableInput[]
    deleteMany?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
  }

  export type GrammarTableCreateNestedOneWithoutRowsInput = {
    create?: XOR<GrammarTableCreateWithoutRowsInput, GrammarTableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: GrammarTableCreateOrConnectWithoutRowsInput
    connect?: GrammarTableWhereUniqueInput
  }

  export type FeatureCreateNestedOneWithoutRowsInput = {
    create?: XOR<FeatureCreateWithoutRowsInput, FeatureUncheckedCreateWithoutRowsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutRowsInput
    connect?: FeatureWhereUniqueInput
  }

  export type GrammarCellCreateNestedManyWithoutRowInput = {
    create?: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput> | GrammarCellCreateWithoutRowInput[] | GrammarCellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutRowInput | GrammarCellCreateOrConnectWithoutRowInput[]
    createMany?: GrammarCellCreateManyRowInputEnvelope
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
  }

  export type GrammarCellUncheckedCreateNestedManyWithoutRowInput = {
    create?: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput> | GrammarCellCreateWithoutRowInput[] | GrammarCellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutRowInput | GrammarCellCreateOrConnectWithoutRowInput[]
    createMany?: GrammarCellCreateManyRowInputEnvelope
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
  }

  export type GrammarTableUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<GrammarTableCreateWithoutRowsInput, GrammarTableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: GrammarTableCreateOrConnectWithoutRowsInput
    upsert?: GrammarTableUpsertWithoutRowsInput
    connect?: GrammarTableWhereUniqueInput
    update?: XOR<XOR<GrammarTableUpdateToOneWithWhereWithoutRowsInput, GrammarTableUpdateWithoutRowsInput>, GrammarTableUncheckedUpdateWithoutRowsInput>
  }

  export type FeatureUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<FeatureCreateWithoutRowsInput, FeatureUncheckedCreateWithoutRowsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutRowsInput
    upsert?: FeatureUpsertWithoutRowsInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutRowsInput, FeatureUpdateWithoutRowsInput>, FeatureUncheckedUpdateWithoutRowsInput>
  }

  export type GrammarCellUpdateManyWithoutRowNestedInput = {
    create?: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput> | GrammarCellCreateWithoutRowInput[] | GrammarCellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutRowInput | GrammarCellCreateOrConnectWithoutRowInput[]
    upsert?: GrammarCellUpsertWithWhereUniqueWithoutRowInput | GrammarCellUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: GrammarCellCreateManyRowInputEnvelope
    set?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    disconnect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    delete?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    update?: GrammarCellUpdateWithWhereUniqueWithoutRowInput | GrammarCellUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: GrammarCellUpdateManyWithWhereWithoutRowInput | GrammarCellUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
  }

  export type GrammarCellUncheckedUpdateManyWithoutRowNestedInput = {
    create?: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput> | GrammarCellCreateWithoutRowInput[] | GrammarCellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutRowInput | GrammarCellCreateOrConnectWithoutRowInput[]
    upsert?: GrammarCellUpsertWithWhereUniqueWithoutRowInput | GrammarCellUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: GrammarCellCreateManyRowInputEnvelope
    set?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    disconnect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    delete?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    update?: GrammarCellUpdateWithWhereUniqueWithoutRowInput | GrammarCellUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: GrammarCellUpdateManyWithWhereWithoutRowInput | GrammarCellUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
  }

  export type GrammarTableCreateNestedOneWithoutColsInput = {
    create?: XOR<GrammarTableCreateWithoutColsInput, GrammarTableUncheckedCreateWithoutColsInput>
    connectOrCreate?: GrammarTableCreateOrConnectWithoutColsInput
    connect?: GrammarTableWhereUniqueInput
  }

  export type FeatureCreateNestedOneWithoutColsInput = {
    create?: XOR<FeatureCreateWithoutColsInput, FeatureUncheckedCreateWithoutColsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutColsInput
    connect?: FeatureWhereUniqueInput
  }

  export type GrammarCellCreateNestedManyWithoutColInput = {
    create?: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput> | GrammarCellCreateWithoutColInput[] | GrammarCellUncheckedCreateWithoutColInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutColInput | GrammarCellCreateOrConnectWithoutColInput[]
    createMany?: GrammarCellCreateManyColInputEnvelope
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
  }

  export type GrammarCellUncheckedCreateNestedManyWithoutColInput = {
    create?: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput> | GrammarCellCreateWithoutColInput[] | GrammarCellUncheckedCreateWithoutColInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutColInput | GrammarCellCreateOrConnectWithoutColInput[]
    createMany?: GrammarCellCreateManyColInputEnvelope
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
  }

  export type GrammarTableUpdateOneRequiredWithoutColsNestedInput = {
    create?: XOR<GrammarTableCreateWithoutColsInput, GrammarTableUncheckedCreateWithoutColsInput>
    connectOrCreate?: GrammarTableCreateOrConnectWithoutColsInput
    upsert?: GrammarTableUpsertWithoutColsInput
    connect?: GrammarTableWhereUniqueInput
    update?: XOR<XOR<GrammarTableUpdateToOneWithWhereWithoutColsInput, GrammarTableUpdateWithoutColsInput>, GrammarTableUncheckedUpdateWithoutColsInput>
  }

  export type FeatureUpdateOneRequiredWithoutColsNestedInput = {
    create?: XOR<FeatureCreateWithoutColsInput, FeatureUncheckedCreateWithoutColsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutColsInput
    upsert?: FeatureUpsertWithoutColsInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutColsInput, FeatureUpdateWithoutColsInput>, FeatureUncheckedUpdateWithoutColsInput>
  }

  export type GrammarCellUpdateManyWithoutColNestedInput = {
    create?: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput> | GrammarCellCreateWithoutColInput[] | GrammarCellUncheckedCreateWithoutColInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutColInput | GrammarCellCreateOrConnectWithoutColInput[]
    upsert?: GrammarCellUpsertWithWhereUniqueWithoutColInput | GrammarCellUpsertWithWhereUniqueWithoutColInput[]
    createMany?: GrammarCellCreateManyColInputEnvelope
    set?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    disconnect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    delete?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    update?: GrammarCellUpdateWithWhereUniqueWithoutColInput | GrammarCellUpdateWithWhereUniqueWithoutColInput[]
    updateMany?: GrammarCellUpdateManyWithWhereWithoutColInput | GrammarCellUpdateManyWithWhereWithoutColInput[]
    deleteMany?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
  }

  export type GrammarCellUncheckedUpdateManyWithoutColNestedInput = {
    create?: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput> | GrammarCellCreateWithoutColInput[] | GrammarCellUncheckedCreateWithoutColInput[]
    connectOrCreate?: GrammarCellCreateOrConnectWithoutColInput | GrammarCellCreateOrConnectWithoutColInput[]
    upsert?: GrammarCellUpsertWithWhereUniqueWithoutColInput | GrammarCellUpsertWithWhereUniqueWithoutColInput[]
    createMany?: GrammarCellCreateManyColInputEnvelope
    set?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    disconnect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    delete?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    connect?: GrammarCellWhereUniqueInput | GrammarCellWhereUniqueInput[]
    update?: GrammarCellUpdateWithWhereUniqueWithoutColInput | GrammarCellUpdateWithWhereUniqueWithoutColInput[]
    updateMany?: GrammarCellUpdateManyWithWhereWithoutColInput | GrammarCellUpdateManyWithWhereWithoutColInput[]
    deleteMany?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
  }

  export type GrammarRowCreateNestedOneWithoutCellsInput = {
    create?: XOR<GrammarRowCreateWithoutCellsInput, GrammarRowUncheckedCreateWithoutCellsInput>
    connectOrCreate?: GrammarRowCreateOrConnectWithoutCellsInput
    connect?: GrammarRowWhereUniqueInput
  }

  export type GrammarColCreateNestedOneWithoutCellsInput = {
    create?: XOR<GrammarColCreateWithoutCellsInput, GrammarColUncheckedCreateWithoutCellsInput>
    connectOrCreate?: GrammarColCreateOrConnectWithoutCellsInput
    connect?: GrammarColWhereUniqueInput
  }

  export type GrammarRowUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<GrammarRowCreateWithoutCellsInput, GrammarRowUncheckedCreateWithoutCellsInput>
    connectOrCreate?: GrammarRowCreateOrConnectWithoutCellsInput
    upsert?: GrammarRowUpsertWithoutCellsInput
    connect?: GrammarRowWhereUniqueInput
    update?: XOR<XOR<GrammarRowUpdateToOneWithWhereWithoutCellsInput, GrammarRowUpdateWithoutCellsInput>, GrammarRowUncheckedUpdateWithoutCellsInput>
  }

  export type GrammarColUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<GrammarColCreateWithoutCellsInput, GrammarColUncheckedCreateWithoutCellsInput>
    connectOrCreate?: GrammarColCreateOrConnectWithoutCellsInput
    upsert?: GrammarColUpsertWithoutCellsInput
    connect?: GrammarColWhereUniqueInput
    update?: XOR<XOR<GrammarColUpdateToOneWithWhereWithoutCellsInput, GrammarColUpdateWithoutCellsInput>, GrammarColUncheckedUpdateWithoutCellsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WordCreateWithoutRootsInput = {
    phono: string
    ortho: string
    type: string
    senses?: SenseCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutRootsInput = {
    id?: number
    phono: string
    ortho: string
    type: string
    senses?: SenseUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutRootsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput>
  }

  export type WordUpsertWithWhereUniqueWithoutRootsInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutRootsInput, WordUncheckedUpdateWithoutRootsInput>
    create: XOR<WordCreateWithoutRootsInput, WordUncheckedCreateWithoutRootsInput>
  }

  export type WordUpdateWithWhereUniqueWithoutRootsInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutRootsInput, WordUncheckedUpdateWithoutRootsInput>
  }

  export type WordUpdateManyWithWhereWithoutRootsInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutRootsInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    id?: IntFilter<"Word"> | number
    phono?: StringFilter<"Word"> | string
    ortho?: StringFilter<"Word"> | string
    type?: StringFilter<"Word"> | string
  }

  export type RootCreateWithoutWordsInput = {
    phono: string
    ortho: string
    definition?: string | null
    notes?: string | null
    etymology?: string | null
  }

  export type RootUncheckedCreateWithoutWordsInput = {
    id?: number
    phono: string
    ortho: string
    definition?: string | null
    notes?: string | null
    etymology?: string | null
  }

  export type RootCreateOrConnectWithoutWordsInput = {
    where: RootWhereUniqueInput
    create: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput>
  }

  export type SenseCreateWithoutWordInput = {
    gloss: string
    definition?: string | null
    notes?: string | null
    category: CategoryCreateNestedOneWithoutSensesInput
    features?: FeatureCreateNestedManyWithoutSensesInput
  }

  export type SenseUncheckedCreateWithoutWordInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    categoryId: number
    features?: FeatureUncheckedCreateNestedManyWithoutSensesInput
  }

  export type SenseCreateOrConnectWithoutWordInput = {
    where: SenseWhereUniqueInput
    create: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput>
  }

  export type SenseCreateManyWordInputEnvelope = {
    data: SenseCreateManyWordInput | SenseCreateManyWordInput[]
  }

  export type RootUpsertWithWhereUniqueWithoutWordsInput = {
    where: RootWhereUniqueInput
    update: XOR<RootUpdateWithoutWordsInput, RootUncheckedUpdateWithoutWordsInput>
    create: XOR<RootCreateWithoutWordsInput, RootUncheckedCreateWithoutWordsInput>
  }

  export type RootUpdateWithWhereUniqueWithoutWordsInput = {
    where: RootWhereUniqueInput
    data: XOR<RootUpdateWithoutWordsInput, RootUncheckedUpdateWithoutWordsInput>
  }

  export type RootUpdateManyWithWhereWithoutWordsInput = {
    where: RootScalarWhereInput
    data: XOR<RootUpdateManyMutationInput, RootUncheckedUpdateManyWithoutWordsInput>
  }

  export type RootScalarWhereInput = {
    AND?: RootScalarWhereInput | RootScalarWhereInput[]
    OR?: RootScalarWhereInput[]
    NOT?: RootScalarWhereInput | RootScalarWhereInput[]
    id?: IntFilter<"Root"> | number
    phono?: StringFilter<"Root"> | string
    ortho?: StringFilter<"Root"> | string
    definition?: StringNullableFilter<"Root"> | string | null
    notes?: StringNullableFilter<"Root"> | string | null
    etymology?: StringNullableFilter<"Root"> | string | null
  }

  export type SenseUpsertWithWhereUniqueWithoutWordInput = {
    where: SenseWhereUniqueInput
    update: XOR<SenseUpdateWithoutWordInput, SenseUncheckedUpdateWithoutWordInput>
    create: XOR<SenseCreateWithoutWordInput, SenseUncheckedCreateWithoutWordInput>
  }

  export type SenseUpdateWithWhereUniqueWithoutWordInput = {
    where: SenseWhereUniqueInput
    data: XOR<SenseUpdateWithoutWordInput, SenseUncheckedUpdateWithoutWordInput>
  }

  export type SenseUpdateManyWithWhereWithoutWordInput = {
    where: SenseScalarWhereInput
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyWithoutWordInput>
  }

  export type SenseScalarWhereInput = {
    AND?: SenseScalarWhereInput | SenseScalarWhereInput[]
    OR?: SenseScalarWhereInput[]
    NOT?: SenseScalarWhereInput | SenseScalarWhereInput[]
    id?: IntFilter<"Sense"> | number
    gloss?: StringFilter<"Sense"> | string
    definition?: StringNullableFilter<"Sense"> | string | null
    notes?: StringNullableFilter<"Sense"> | string | null
    wordId?: IntFilter<"Sense"> | number
    categoryId?: IntFilter<"Sense"> | number
  }

  export type WordCreateWithoutSensesInput = {
    phono: string
    ortho: string
    type: string
    roots?: RootCreateNestedManyWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutSensesInput = {
    id?: number
    phono: string
    ortho: string
    type: string
    roots?: RootUncheckedCreateNestedManyWithoutWordsInput
  }

  export type WordCreateOrConnectWithoutSensesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
  }

  export type CategoryCreateWithoutSensesInput = {
    name: string
    features?: FeatureCreateNestedManyWithoutCategoriesInput
    grammarTables?: GrammarTableCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutSensesInput = {
    id?: number
    name: string
    features?: FeatureUncheckedCreateNestedManyWithoutCategoriesInput
    grammarTables?: GrammarTableUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryCreateOrConnectWithoutSensesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSensesInput, CategoryUncheckedCreateWithoutSensesInput>
  }

  export type FeatureCreateWithoutSensesInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowCreateNestedManyWithoutFeatureInput
    cols?: GrammarColCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutSensesInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutFeatureInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutSensesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput>
  }

  export type WordUpsertWithoutSensesInput = {
    update: XOR<WordUpdateWithoutSensesInput, WordUncheckedUpdateWithoutSensesInput>
    create: XOR<WordCreateWithoutSensesInput, WordUncheckedCreateWithoutSensesInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutSensesInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutSensesInput, WordUncheckedUpdateWithoutSensesInput>
  }

  export type WordUpdateWithoutSensesInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    roots?: RootUpdateManyWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutSensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    roots?: RootUncheckedUpdateManyWithoutWordsNestedInput
  }

  export type CategoryUpsertWithoutSensesInput = {
    update: XOR<CategoryUpdateWithoutSensesInput, CategoryUncheckedUpdateWithoutSensesInput>
    create: XOR<CategoryCreateWithoutSensesInput, CategoryUncheckedCreateWithoutSensesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSensesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSensesInput, CategoryUncheckedUpdateWithoutSensesInput>
  }

  export type CategoryUpdateWithoutSensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUpdateManyWithoutCategoriesNestedInput
    grammarTables?: GrammarTableUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutCategoriesNestedInput
    grammarTables?: GrammarTableUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type FeatureUpsertWithWhereUniqueWithoutSensesInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutSensesInput, FeatureUncheckedUpdateWithoutSensesInput>
    create: XOR<FeatureCreateWithoutSensesInput, FeatureUncheckedCreateWithoutSensesInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutSensesInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutSensesInput, FeatureUncheckedUpdateWithoutSensesInput>
  }

  export type FeatureUpdateManyWithWhereWithoutSensesInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutSensesInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: IntFilter<"Feature"> | number
    name?: StringFilter<"Feature"> | string
  }

  export type FeatureCreateWithoutCategoriesInput = {
    name: string
    senses?: SenseCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowCreateNestedManyWithoutFeatureInput
    cols?: GrammarColCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    senses?: SenseUncheckedCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutFeatureInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutCategoriesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
  }

  export type GrammarTableCreateWithoutCategoriesInput = {
    name: string
    rows?: GrammarRowCreateNestedManyWithoutGrammarTableInput
    cols?: GrammarColCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    rows?: GrammarRowUncheckedCreateNestedManyWithoutGrammarTableInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableCreateOrConnectWithoutCategoriesInput = {
    where: GrammarTableWhereUniqueInput
    create: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput>
  }

  export type SenseCreateWithoutCategoryInput = {
    gloss: string
    definition?: string | null
    notes?: string | null
    word: WordCreateNestedOneWithoutSensesInput
    features?: FeatureCreateNestedManyWithoutSensesInput
  }

  export type SenseUncheckedCreateWithoutCategoryInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    wordId: number
    features?: FeatureUncheckedCreateNestedManyWithoutSensesInput
  }

  export type SenseCreateOrConnectWithoutCategoryInput = {
    where: SenseWhereUniqueInput
    create: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput>
  }

  export type SenseCreateManyCategoryInputEnvelope = {
    data: SenseCreateManyCategoryInput | SenseCreateManyCategoryInput[]
  }

  export type FeatureUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutCategoriesInput, FeatureUncheckedUpdateWithoutCategoriesInput>
    create: XOR<FeatureCreateWithoutCategoriesInput, FeatureUncheckedCreateWithoutCategoriesInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutCategoriesInput, FeatureUncheckedUpdateWithoutCategoriesInput>
  }

  export type FeatureUpdateManyWithWhereWithoutCategoriesInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type GrammarTableUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: GrammarTableWhereUniqueInput
    update: XOR<GrammarTableUpdateWithoutCategoriesInput, GrammarTableUncheckedUpdateWithoutCategoriesInput>
    create: XOR<GrammarTableCreateWithoutCategoriesInput, GrammarTableUncheckedCreateWithoutCategoriesInput>
  }

  export type GrammarTableUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: GrammarTableWhereUniqueInput
    data: XOR<GrammarTableUpdateWithoutCategoriesInput, GrammarTableUncheckedUpdateWithoutCategoriesInput>
  }

  export type GrammarTableUpdateManyWithWhereWithoutCategoriesInput = {
    where: GrammarTableScalarWhereInput
    data: XOR<GrammarTableUpdateManyMutationInput, GrammarTableUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type GrammarTableScalarWhereInput = {
    AND?: GrammarTableScalarWhereInput | GrammarTableScalarWhereInput[]
    OR?: GrammarTableScalarWhereInput[]
    NOT?: GrammarTableScalarWhereInput | GrammarTableScalarWhereInput[]
    id?: IntFilter<"GrammarTable"> | number
    name?: StringFilter<"GrammarTable"> | string
  }

  export type SenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SenseWhereUniqueInput
    update: XOR<SenseUpdateWithoutCategoryInput, SenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<SenseCreateWithoutCategoryInput, SenseUncheckedCreateWithoutCategoryInput>
  }

  export type SenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SenseWhereUniqueInput
    data: XOR<SenseUpdateWithoutCategoryInput, SenseUncheckedUpdateWithoutCategoryInput>
  }

  export type SenseUpdateManyWithWhereWithoutCategoryInput = {
    where: SenseScalarWhereInput
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutFeaturesInput = {
    name: string
    grammarTables?: GrammarTableCreateNestedManyWithoutCategoriesInput
    senses?: SenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutFeaturesInput = {
    id?: number
    name: string
    grammarTables?: GrammarTableUncheckedCreateNestedManyWithoutCategoriesInput
    senses?: SenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutFeaturesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
  }

  export type SenseCreateWithoutFeaturesInput = {
    gloss: string
    definition?: string | null
    notes?: string | null
    word: WordCreateNestedOneWithoutSensesInput
    category: CategoryCreateNestedOneWithoutSensesInput
  }

  export type SenseUncheckedCreateWithoutFeaturesInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    wordId: number
    categoryId: number
  }

  export type SenseCreateOrConnectWithoutFeaturesInput = {
    where: SenseWhereUniqueInput
    create: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput>
  }

  export type GrammarRowCreateWithoutFeatureInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutRowsInput
    cells?: GrammarCellCreateNestedManyWithoutRowInput
  }

  export type GrammarRowUncheckedCreateWithoutFeatureInput = {
    id?: number
    grammarTableId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutRowInput
  }

  export type GrammarRowCreateOrConnectWithoutFeatureInput = {
    where: GrammarRowWhereUniqueInput
    create: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput>
  }

  export type GrammarRowCreateManyFeatureInputEnvelope = {
    data: GrammarRowCreateManyFeatureInput | GrammarRowCreateManyFeatureInput[]
  }

  export type GrammarColCreateWithoutFeatureInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutColsInput
    cells?: GrammarCellCreateNestedManyWithoutColInput
  }

  export type GrammarColUncheckedCreateWithoutFeatureInput = {
    id?: number
    grammarTableId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutColInput
  }

  export type GrammarColCreateOrConnectWithoutFeatureInput = {
    where: GrammarColWhereUniqueInput
    create: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput>
  }

  export type GrammarColCreateManyFeatureInputEnvelope = {
    data: GrammarColCreateManyFeatureInput | GrammarColCreateManyFeatureInput[]
  }

  export type CategoryUpsertWithWhereUniqueWithoutFeaturesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutFeaturesInput, CategoryUncheckedUpdateWithoutFeaturesInput>
    create: XOR<CategoryCreateWithoutFeaturesInput, CategoryUncheckedCreateWithoutFeaturesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutFeaturesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutFeaturesInput, CategoryUncheckedUpdateWithoutFeaturesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutFeaturesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutFeaturesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
  }

  export type SenseUpsertWithWhereUniqueWithoutFeaturesInput = {
    where: SenseWhereUniqueInput
    update: XOR<SenseUpdateWithoutFeaturesInput, SenseUncheckedUpdateWithoutFeaturesInput>
    create: XOR<SenseCreateWithoutFeaturesInput, SenseUncheckedCreateWithoutFeaturesInput>
  }

  export type SenseUpdateWithWhereUniqueWithoutFeaturesInput = {
    where: SenseWhereUniqueInput
    data: XOR<SenseUpdateWithoutFeaturesInput, SenseUncheckedUpdateWithoutFeaturesInput>
  }

  export type SenseUpdateManyWithWhereWithoutFeaturesInput = {
    where: SenseScalarWhereInput
    data: XOR<SenseUpdateManyMutationInput, SenseUncheckedUpdateManyWithoutFeaturesInput>
  }

  export type GrammarRowUpsertWithWhereUniqueWithoutFeatureInput = {
    where: GrammarRowWhereUniqueInput
    update: XOR<GrammarRowUpdateWithoutFeatureInput, GrammarRowUncheckedUpdateWithoutFeatureInput>
    create: XOR<GrammarRowCreateWithoutFeatureInput, GrammarRowUncheckedCreateWithoutFeatureInput>
  }

  export type GrammarRowUpdateWithWhereUniqueWithoutFeatureInput = {
    where: GrammarRowWhereUniqueInput
    data: XOR<GrammarRowUpdateWithoutFeatureInput, GrammarRowUncheckedUpdateWithoutFeatureInput>
  }

  export type GrammarRowUpdateManyWithWhereWithoutFeatureInput = {
    where: GrammarRowScalarWhereInput
    data: XOR<GrammarRowUpdateManyMutationInput, GrammarRowUncheckedUpdateManyWithoutFeatureInput>
  }

  export type GrammarRowScalarWhereInput = {
    AND?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
    OR?: GrammarRowScalarWhereInput[]
    NOT?: GrammarRowScalarWhereInput | GrammarRowScalarWhereInput[]
    id?: IntFilter<"GrammarRow"> | number
    grammarTableId?: IntFilter<"GrammarRow"> | number
    featureId?: IntFilter<"GrammarRow"> | number
  }

  export type GrammarColUpsertWithWhereUniqueWithoutFeatureInput = {
    where: GrammarColWhereUniqueInput
    update: XOR<GrammarColUpdateWithoutFeatureInput, GrammarColUncheckedUpdateWithoutFeatureInput>
    create: XOR<GrammarColCreateWithoutFeatureInput, GrammarColUncheckedCreateWithoutFeatureInput>
  }

  export type GrammarColUpdateWithWhereUniqueWithoutFeatureInput = {
    where: GrammarColWhereUniqueInput
    data: XOR<GrammarColUpdateWithoutFeatureInput, GrammarColUncheckedUpdateWithoutFeatureInput>
  }

  export type GrammarColUpdateManyWithWhereWithoutFeatureInput = {
    where: GrammarColScalarWhereInput
    data: XOR<GrammarColUpdateManyMutationInput, GrammarColUncheckedUpdateManyWithoutFeatureInput>
  }

  export type GrammarColScalarWhereInput = {
    AND?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
    OR?: GrammarColScalarWhereInput[]
    NOT?: GrammarColScalarWhereInput | GrammarColScalarWhereInput[]
    id?: IntFilter<"GrammarCol"> | number
    grammarTableId?: IntFilter<"GrammarCol"> | number
    featureId?: IntFilter<"GrammarCol"> | number
  }

  export type CategoryCreateWithoutGrammarTablesInput = {
    name: string
    features?: FeatureCreateNestedManyWithoutCategoriesInput
    senses?: SenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutGrammarTablesInput = {
    id?: number
    name: string
    features?: FeatureUncheckedCreateNestedManyWithoutCategoriesInput
    senses?: SenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutGrammarTablesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput>
  }

  export type GrammarRowCreateWithoutGrammarTableInput = {
    feature: FeatureCreateNestedOneWithoutRowsInput
    cells?: GrammarCellCreateNestedManyWithoutRowInput
  }

  export type GrammarRowUncheckedCreateWithoutGrammarTableInput = {
    id?: number
    featureId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutRowInput
  }

  export type GrammarRowCreateOrConnectWithoutGrammarTableInput = {
    where: GrammarRowWhereUniqueInput
    create: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput>
  }

  export type GrammarRowCreateManyGrammarTableInputEnvelope = {
    data: GrammarRowCreateManyGrammarTableInput | GrammarRowCreateManyGrammarTableInput[]
  }

  export type GrammarColCreateWithoutGrammarTableInput = {
    feature: FeatureCreateNestedOneWithoutColsInput
    cells?: GrammarCellCreateNestedManyWithoutColInput
  }

  export type GrammarColUncheckedCreateWithoutGrammarTableInput = {
    id?: number
    featureId: number
    cells?: GrammarCellUncheckedCreateNestedManyWithoutColInput
  }

  export type GrammarColCreateOrConnectWithoutGrammarTableInput = {
    where: GrammarColWhereUniqueInput
    create: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput>
  }

  export type GrammarColCreateManyGrammarTableInputEnvelope = {
    data: GrammarColCreateManyGrammarTableInput | GrammarColCreateManyGrammarTableInput[]
  }

  export type CategoryUpsertWithWhereUniqueWithoutGrammarTablesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutGrammarTablesInput, CategoryUncheckedUpdateWithoutGrammarTablesInput>
    create: XOR<CategoryCreateWithoutGrammarTablesInput, CategoryUncheckedCreateWithoutGrammarTablesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutGrammarTablesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutGrammarTablesInput, CategoryUncheckedUpdateWithoutGrammarTablesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutGrammarTablesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutGrammarTablesInput>
  }

  export type GrammarRowUpsertWithWhereUniqueWithoutGrammarTableInput = {
    where: GrammarRowWhereUniqueInput
    update: XOR<GrammarRowUpdateWithoutGrammarTableInput, GrammarRowUncheckedUpdateWithoutGrammarTableInput>
    create: XOR<GrammarRowCreateWithoutGrammarTableInput, GrammarRowUncheckedCreateWithoutGrammarTableInput>
  }

  export type GrammarRowUpdateWithWhereUniqueWithoutGrammarTableInput = {
    where: GrammarRowWhereUniqueInput
    data: XOR<GrammarRowUpdateWithoutGrammarTableInput, GrammarRowUncheckedUpdateWithoutGrammarTableInput>
  }

  export type GrammarRowUpdateManyWithWhereWithoutGrammarTableInput = {
    where: GrammarRowScalarWhereInput
    data: XOR<GrammarRowUpdateManyMutationInput, GrammarRowUncheckedUpdateManyWithoutGrammarTableInput>
  }

  export type GrammarColUpsertWithWhereUniqueWithoutGrammarTableInput = {
    where: GrammarColWhereUniqueInput
    update: XOR<GrammarColUpdateWithoutGrammarTableInput, GrammarColUncheckedUpdateWithoutGrammarTableInput>
    create: XOR<GrammarColCreateWithoutGrammarTableInput, GrammarColUncheckedCreateWithoutGrammarTableInput>
  }

  export type GrammarColUpdateWithWhereUniqueWithoutGrammarTableInput = {
    where: GrammarColWhereUniqueInput
    data: XOR<GrammarColUpdateWithoutGrammarTableInput, GrammarColUncheckedUpdateWithoutGrammarTableInput>
  }

  export type GrammarColUpdateManyWithWhereWithoutGrammarTableInput = {
    where: GrammarColScalarWhereInput
    data: XOR<GrammarColUpdateManyMutationInput, GrammarColUncheckedUpdateManyWithoutGrammarTableInput>
  }

  export type GrammarTableCreateWithoutRowsInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutGrammarTablesInput
    cols?: GrammarColCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableUncheckedCreateWithoutRowsInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutGrammarTablesInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableCreateOrConnectWithoutRowsInput = {
    where: GrammarTableWhereUniqueInput
    create: XOR<GrammarTableCreateWithoutRowsInput, GrammarTableUncheckedCreateWithoutRowsInput>
  }

  export type FeatureCreateWithoutRowsInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutFeaturesInput
    senses?: SenseCreateNestedManyWithoutFeaturesInput
    cols?: GrammarColCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutRowsInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutFeaturesInput
    senses?: SenseUncheckedCreateNestedManyWithoutFeaturesInput
    cols?: GrammarColUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutRowsInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutRowsInput, FeatureUncheckedCreateWithoutRowsInput>
  }

  export type GrammarCellCreateWithoutRowInput = {
    cellText: string
    col: GrammarColCreateNestedOneWithoutCellsInput
  }

  export type GrammarCellUncheckedCreateWithoutRowInput = {
    colId: number
    cellText: string
  }

  export type GrammarCellCreateOrConnectWithoutRowInput = {
    where: GrammarCellWhereUniqueInput
    create: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput>
  }

  export type GrammarCellCreateManyRowInputEnvelope = {
    data: GrammarCellCreateManyRowInput | GrammarCellCreateManyRowInput[]
  }

  export type GrammarTableUpsertWithoutRowsInput = {
    update: XOR<GrammarTableUpdateWithoutRowsInput, GrammarTableUncheckedUpdateWithoutRowsInput>
    create: XOR<GrammarTableCreateWithoutRowsInput, GrammarTableUncheckedCreateWithoutRowsInput>
    where?: GrammarTableWhereInput
  }

  export type GrammarTableUpdateToOneWithWhereWithoutRowsInput = {
    where?: GrammarTableWhereInput
    data: XOR<GrammarTableUpdateWithoutRowsInput, GrammarTableUncheckedUpdateWithoutRowsInput>
  }

  export type GrammarTableUpdateWithoutRowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutGrammarTablesNestedInput
    cols?: GrammarColUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableUncheckedUpdateWithoutRowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutGrammarTablesNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutGrammarTableNestedInput
  }

  export type FeatureUpsertWithoutRowsInput = {
    update: XOR<FeatureUpdateWithoutRowsInput, FeatureUncheckedUpdateWithoutRowsInput>
    create: XOR<FeatureCreateWithoutRowsInput, FeatureUncheckedCreateWithoutRowsInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutRowsInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutRowsInput, FeatureUncheckedUpdateWithoutRowsInput>
  }

  export type FeatureUpdateWithoutRowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUpdateManyWithoutFeaturesNestedInput
    cols?: GrammarColUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutRowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutFeaturesNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type GrammarCellUpsertWithWhereUniqueWithoutRowInput = {
    where: GrammarCellWhereUniqueInput
    update: XOR<GrammarCellUpdateWithoutRowInput, GrammarCellUncheckedUpdateWithoutRowInput>
    create: XOR<GrammarCellCreateWithoutRowInput, GrammarCellUncheckedCreateWithoutRowInput>
  }

  export type GrammarCellUpdateWithWhereUniqueWithoutRowInput = {
    where: GrammarCellWhereUniqueInput
    data: XOR<GrammarCellUpdateWithoutRowInput, GrammarCellUncheckedUpdateWithoutRowInput>
  }

  export type GrammarCellUpdateManyWithWhereWithoutRowInput = {
    where: GrammarCellScalarWhereInput
    data: XOR<GrammarCellUpdateManyMutationInput, GrammarCellUncheckedUpdateManyWithoutRowInput>
  }

  export type GrammarCellScalarWhereInput = {
    AND?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
    OR?: GrammarCellScalarWhereInput[]
    NOT?: GrammarCellScalarWhereInput | GrammarCellScalarWhereInput[]
    rowId?: IntFilter<"GrammarCell"> | number
    colId?: IntFilter<"GrammarCell"> | number
    cellText?: StringFilter<"GrammarCell"> | string
  }

  export type GrammarTableCreateWithoutColsInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutGrammarTablesInput
    rows?: GrammarRowCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableUncheckedCreateWithoutColsInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutGrammarTablesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutGrammarTableInput
  }

  export type GrammarTableCreateOrConnectWithoutColsInput = {
    where: GrammarTableWhereUniqueInput
    create: XOR<GrammarTableCreateWithoutColsInput, GrammarTableUncheckedCreateWithoutColsInput>
  }

  export type FeatureCreateWithoutColsInput = {
    name: string
    categories?: CategoryCreateNestedManyWithoutFeaturesInput
    senses?: SenseCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutColsInput = {
    id?: number
    name: string
    categories?: CategoryUncheckedCreateNestedManyWithoutFeaturesInput
    senses?: SenseUncheckedCreateNestedManyWithoutFeaturesInput
    rows?: GrammarRowUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutColsInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutColsInput, FeatureUncheckedCreateWithoutColsInput>
  }

  export type GrammarCellCreateWithoutColInput = {
    cellText: string
    row: GrammarRowCreateNestedOneWithoutCellsInput
  }

  export type GrammarCellUncheckedCreateWithoutColInput = {
    rowId: number
    cellText: string
  }

  export type GrammarCellCreateOrConnectWithoutColInput = {
    where: GrammarCellWhereUniqueInput
    create: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput>
  }

  export type GrammarCellCreateManyColInputEnvelope = {
    data: GrammarCellCreateManyColInput | GrammarCellCreateManyColInput[]
  }

  export type GrammarTableUpsertWithoutColsInput = {
    update: XOR<GrammarTableUpdateWithoutColsInput, GrammarTableUncheckedUpdateWithoutColsInput>
    create: XOR<GrammarTableCreateWithoutColsInput, GrammarTableUncheckedCreateWithoutColsInput>
    where?: GrammarTableWhereInput
  }

  export type GrammarTableUpdateToOneWithWhereWithoutColsInput = {
    where?: GrammarTableWhereInput
    data: XOR<GrammarTableUpdateWithoutColsInput, GrammarTableUncheckedUpdateWithoutColsInput>
  }

  export type GrammarTableUpdateWithoutColsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutGrammarTablesNestedInput
    rows?: GrammarRowUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableUncheckedUpdateWithoutColsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutGrammarTablesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutGrammarTableNestedInput
  }

  export type FeatureUpsertWithoutColsInput = {
    update: XOR<FeatureUpdateWithoutColsInput, FeatureUncheckedUpdateWithoutColsInput>
    create: XOR<FeatureCreateWithoutColsInput, FeatureUncheckedCreateWithoutColsInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutColsInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutColsInput, FeatureUncheckedUpdateWithoutColsInput>
  }

  export type FeatureUpdateWithoutColsInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutColsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutFeaturesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type GrammarCellUpsertWithWhereUniqueWithoutColInput = {
    where: GrammarCellWhereUniqueInput
    update: XOR<GrammarCellUpdateWithoutColInput, GrammarCellUncheckedUpdateWithoutColInput>
    create: XOR<GrammarCellCreateWithoutColInput, GrammarCellUncheckedCreateWithoutColInput>
  }

  export type GrammarCellUpdateWithWhereUniqueWithoutColInput = {
    where: GrammarCellWhereUniqueInput
    data: XOR<GrammarCellUpdateWithoutColInput, GrammarCellUncheckedUpdateWithoutColInput>
  }

  export type GrammarCellUpdateManyWithWhereWithoutColInput = {
    where: GrammarCellScalarWhereInput
    data: XOR<GrammarCellUpdateManyMutationInput, GrammarCellUncheckedUpdateManyWithoutColInput>
  }

  export type GrammarRowCreateWithoutCellsInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutRowsInput
    feature: FeatureCreateNestedOneWithoutRowsInput
  }

  export type GrammarRowUncheckedCreateWithoutCellsInput = {
    id?: number
    grammarTableId: number
    featureId: number
  }

  export type GrammarRowCreateOrConnectWithoutCellsInput = {
    where: GrammarRowWhereUniqueInput
    create: XOR<GrammarRowCreateWithoutCellsInput, GrammarRowUncheckedCreateWithoutCellsInput>
  }

  export type GrammarColCreateWithoutCellsInput = {
    grammarTable: GrammarTableCreateNestedOneWithoutColsInput
    feature: FeatureCreateNestedOneWithoutColsInput
  }

  export type GrammarColUncheckedCreateWithoutCellsInput = {
    id?: number
    grammarTableId: number
    featureId: number
  }

  export type GrammarColCreateOrConnectWithoutCellsInput = {
    where: GrammarColWhereUniqueInput
    create: XOR<GrammarColCreateWithoutCellsInput, GrammarColUncheckedCreateWithoutCellsInput>
  }

  export type GrammarRowUpsertWithoutCellsInput = {
    update: XOR<GrammarRowUpdateWithoutCellsInput, GrammarRowUncheckedUpdateWithoutCellsInput>
    create: XOR<GrammarRowCreateWithoutCellsInput, GrammarRowUncheckedCreateWithoutCellsInput>
    where?: GrammarRowWhereInput
  }

  export type GrammarRowUpdateToOneWithWhereWithoutCellsInput = {
    where?: GrammarRowWhereInput
    data: XOR<GrammarRowUpdateWithoutCellsInput, GrammarRowUncheckedUpdateWithoutCellsInput>
  }

  export type GrammarRowUpdateWithoutCellsInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutRowsNestedInput
    feature?: FeatureUpdateOneRequiredWithoutRowsNestedInput
  }

  export type GrammarRowUncheckedUpdateWithoutCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarColUpsertWithoutCellsInput = {
    update: XOR<GrammarColUpdateWithoutCellsInput, GrammarColUncheckedUpdateWithoutCellsInput>
    create: XOR<GrammarColCreateWithoutCellsInput, GrammarColUncheckedCreateWithoutCellsInput>
    where?: GrammarColWhereInput
  }

  export type GrammarColUpdateToOneWithWhereWithoutCellsInput = {
    where?: GrammarColWhereInput
    data: XOR<GrammarColUpdateWithoutCellsInput, GrammarColUncheckedUpdateWithoutCellsInput>
  }

  export type GrammarColUpdateWithoutCellsInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutColsNestedInput
    feature?: FeatureUpdateOneRequiredWithoutColsNestedInput
  }

  export type GrammarColUncheckedUpdateWithoutCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type WordUpdateWithoutRootsInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senses?: SenseUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutRootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senses?: SenseUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutRootsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type SenseCreateManyWordInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    categoryId: number
  }

  export type RootUpdateWithoutWordsInput = {
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RootUncheckedUpdateWithoutWordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RootUncheckedUpdateManyWithoutWordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phono?: StringFieldUpdateOperationsInput | string
    ortho?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    etymology?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SenseUpdateWithoutWordInput = {
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutSensesNestedInput
    features?: FeatureUpdateManyWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    features?: FeatureUncheckedUpdateManyWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateManyWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type FeatureUpdateWithoutSensesInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutSensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutSensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenseCreateManyCategoryInput = {
    id?: number
    gloss: string
    definition?: string | null
    notes?: string | null
    wordId: number
  }

  export type FeatureUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    senses?: SenseUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    senses?: SenseUncheckedUpdateManyWithoutFeaturesNestedInput
    rows?: GrammarRowUncheckedUpdateManyWithoutFeatureNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarTableUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    rows?: GrammarRowUpdateManyWithoutGrammarTableNestedInput
    cols?: GrammarColUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rows?: GrammarRowUncheckedUpdateManyWithoutGrammarTableNestedInput
    cols?: GrammarColUncheckedUpdateManyWithoutGrammarTableNestedInput
  }

  export type GrammarTableUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenseUpdateWithoutCategoryInput = {
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutSensesNestedInput
    features?: FeatureUpdateManyWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
    features?: FeatureUncheckedUpdateManyWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarRowCreateManyFeatureInput = {
    id?: number
    grammarTableId: number
  }

  export type GrammarColCreateManyFeatureInput = {
    id?: number
    grammarTableId: number
  }

  export type CategoryUpdateWithoutFeaturesInput = {
    name?: StringFieldUpdateOperationsInput | string
    grammarTables?: GrammarTableUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    grammarTables?: GrammarTableUncheckedUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SenseUpdateWithoutFeaturesInput = {
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutSensesNestedInput
    category?: CategoryUpdateOneRequiredWithoutSensesNestedInput
  }

  export type SenseUncheckedUpdateWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type SenseUncheckedUpdateManyWithoutFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    gloss?: StringFieldUpdateOperationsInput | string
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarRowUpdateWithoutFeatureInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutRowsNestedInput
    cells?: GrammarCellUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowUncheckedUpdateWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowUncheckedUpdateManyWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarColUpdateWithoutFeatureInput = {
    grammarTable?: GrammarTableUpdateOneRequiredWithoutColsNestedInput
    cells?: GrammarCellUpdateManyWithoutColNestedInput
  }

  export type GrammarColUncheckedUpdateWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutColNestedInput
  }

  export type GrammarColUncheckedUpdateManyWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    grammarTableId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarRowCreateManyGrammarTableInput = {
    id?: number
    featureId: number
  }

  export type GrammarColCreateManyGrammarTableInput = {
    id?: number
    featureId: number
  }

  export type CategoryUpdateWithoutGrammarTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutGrammarTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    features?: FeatureUncheckedUpdateManyWithoutCategoriesNestedInput
    senses?: SenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutGrammarTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarRowUpdateWithoutGrammarTableInput = {
    feature?: FeatureUpdateOneRequiredWithoutRowsNestedInput
    cells?: GrammarCellUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowUncheckedUpdateWithoutGrammarTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutRowNestedInput
  }

  export type GrammarRowUncheckedUpdateManyWithoutGrammarTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarColUpdateWithoutGrammarTableInput = {
    feature?: FeatureUpdateOneRequiredWithoutColsNestedInput
    cells?: GrammarCellUpdateManyWithoutColNestedInput
  }

  export type GrammarColUncheckedUpdateWithoutGrammarTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    cells?: GrammarCellUncheckedUpdateManyWithoutColNestedInput
  }

  export type GrammarColUncheckedUpdateManyWithoutGrammarTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
  }

  export type GrammarCellCreateManyRowInput = {
    colId: number
    cellText: string
  }

  export type GrammarCellUpdateWithoutRowInput = {
    cellText?: StringFieldUpdateOperationsInput | string
    col?: GrammarColUpdateOneRequiredWithoutCellsNestedInput
  }

  export type GrammarCellUncheckedUpdateWithoutRowInput = {
    colId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarCellUncheckedUpdateManyWithoutRowInput = {
    colId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarCellCreateManyColInput = {
    rowId: number
    cellText: string
  }

  export type GrammarCellUpdateWithoutColInput = {
    cellText?: StringFieldUpdateOperationsInput | string
    row?: GrammarRowUpdateOneRequiredWithoutCellsNestedInput
  }

  export type GrammarCellUncheckedUpdateWithoutColInput = {
    rowId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
  }

  export type GrammarCellUncheckedUpdateManyWithoutColInput = {
    rowId?: IntFieldUpdateOperationsInput | number
    cellText?: StringFieldUpdateOperationsInput | string
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
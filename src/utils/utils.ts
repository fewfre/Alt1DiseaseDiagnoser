export const isNotNullish = <T>(value: T | null | undefined): value is T => value !== undefined && value !== null;

/**
 * Type casted Object.keys() - don't cast if it could have keys that don't belong to expected type (from inheritance, merging objects, etc)
 * */
export const objectKeysCast = <K extends string | number | symbol, V>(obj: Record<K, V>) => Object.keys(obj) as K[];
/**
 * Type casted Object.entries() - don't cast if it could have keys that don't belong to expected type (from inheritance, merging objects, etc)
 * */
export const objectEntriesCast = <K extends string | number | symbol, V>(obj: Record<K, V>) =>
  Object.entries(obj) as [K, V][];
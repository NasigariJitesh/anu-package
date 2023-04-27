// used to persist position on web
/**
 *
 */
export const createCache = () => {
  const c: { [k: string]: number } = {};
  const set = (k: string, index: number) => {
    c[k] = index;
  };
  const get = (key: string) => c[key];
  return {
    set,
    get,
  };
};

/**
 *
 * @param defaultIndex
 * @param persistKey
 */
export const getDefaultIndex = (defaultIndex?: number, persistKey?: string) => {
  const cache = createCache();

  if (persistKey) {
    return cache.get(persistKey) || defaultIndex || 0;
  }
  return defaultIndex || 0;
};

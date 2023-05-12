/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-module */

import { AnuLocalizationProviderProps } from '../types';

/**
 * Method that returns the translation in the given language
 *
 * @param key - localization key to search for translations
 * @param locale - current locale
 * @param directory - directory where the translation files are located
 * @returns localized string
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLocalizedTranslation = (
  key: string,
  locale: string,
  locales: AnuLocalizationProviderProps['locales'],
) => {
  try {
    const file = locales[locale];

    if (!file) {
      console.warn(`The file ${locale}.json is not found in the list of directories`);
      if (process.env.NODE_ENV === 'development') return 'LOCALE_FILE_NOT_FOUND';
      return '';
    }

    if (!file[key]) {
      console.warn(`No Translation in place for ${key} in ${locale}.json`);

      if (process.env.NODE_ENV === 'development') return 'NO_TRANSLATION';
    }

    return file[key] as string;
  } catch {
    return '';
  }
};

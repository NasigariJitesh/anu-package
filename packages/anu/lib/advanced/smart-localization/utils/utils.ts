/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Method that returns the translation in the given language
 *
 * @param key - localization key to search for translations
 * @param locale - current locale
 * @returns localized string
 */
export const getLocalizedTranslation = (key: string, locale: string) => {
  try {
    // TODO: Change this directory when placing in node_modules
    const file = require(`../../../../../../apps/docs/services/locale/${locale}.json` as const);

    if (!file[key]) {
      console.error(`No Translation in place for ${key} in ${locale}.json`);

      if (process.env.NODE_ENV === 'dev') return 'NO_TRANSLATION';
    }

    return file[key];
  } catch {
    console.error(`The file ${locale}.json is not found in the services/locale directory.`);

    if (process.env.NODE_ENV === 'dev') return 'LOCALE_FILE_NOT_FOUND';

    return '';
  }
};

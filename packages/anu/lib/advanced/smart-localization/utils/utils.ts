/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Method that returns the translation in the given language
 *
 * @param key - localization key to search for translations
 * @param locale - current locale
 * @param directory - directory where the translation files are located
 * @returns localized string
 */
export const getLocalizedTranslation = (key: string, locale: string, directory: string) => {
  try {
    const file = require(`../../../../../../${directory}/${locale}.json` as const);

    if (!file[key]) {
      console.error(`No Translation in place for ${key} in ${locale}.json`);

      if (process.env.NODE_ENV === 'development') return 'NO_TRANSLATION';
    }

    return file[key] as string;
  } catch {
    console.error(`The file ${locale}.json is not found in the ${directory} directory.`);

    if (process.env.NODE_ENV === 'development') return 'LOCALE_FILE_NOT_FOUND';

    return '';
  }
};

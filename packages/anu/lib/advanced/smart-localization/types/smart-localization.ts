import { ReactChildren } from 'anu/common/types';
import {
  BodyProps,
  DisplayProps,
  HeadlineProps,
  LabelProps,
  TitleProps,
  TypographyProps,
} from 'anu/lib/primitives/typography/types';

/**
 * Props for the localized typography component
 */
export type LocalizedTypographyProps = Omit<TypographyProps, 'children'> & {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
};

/**
 * Props for the localized display component
 */
export interface LocalizedDisplayProps extends Omit<DisplayProps, 'children'> {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
}

/**
 * Props for the localized headline component
 */
export interface LocalizedHeadlineProps extends Omit<HeadlineProps, 'children'> {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
}

/**
 * Props for the localized title component
 */
export interface LocalizedTitleProps extends Omit<TitleProps, 'children'> {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
}

/**
 * Props for the localized label component
 */
export interface LocalizedLabelProps extends Omit<LabelProps, 'children'> {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
}

/**
 * Props for the localized body component
 */
export interface LocalizedBodyProps extends Omit<BodyProps, 'children'> {
  /**
   * This key will be used to find the correct translation based on the user's language
   */
  localeKey: string;
}

/**
 * Interface for the localization context
 */
export interface AnuLocalizationContext {
  /**
   * The default language that needs to be assumed for the application.
   */
  defaultLocale: string;

  /**
   * The current locale that is selected.
   *
   * @default defaultLocale
   * @see {@link defaultLocale }
   */
  currentLocale: string;

  /**
   * Function that will trigger locale switch throughout the application
   *
   * @param selectedLanguage - the new language that is selected
   * @returns nothing! :P
   */
  switchLocale: (selectedLocale: string) => void;

  /**
   * Fetch the localized string based on the current locale for a key
   *
   * @param key - unique key to identify the translation in the file.
   * @param locale - locale which you want to fetch the translation from.
   * @returns translated string from the correct file
   */
  getTranslation: (key: string, locale?: string) => string;
}

export interface AnuLocalizationProviderProps {
  children: ReactChildren;
  default: string;
}
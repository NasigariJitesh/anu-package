import { createContext, FC, useContext, useState } from 'react';

import { AnuLocalizationContext, AnuLocalizationProviderProps } from '../types';
import { getLocalizedTranslation } from '../utils';

/**
 * Context to make localization work through out the application
 */
export const LocalizationContext = createContext<AnuLocalizationContext>({
  defaultLocale: 'en',
  currentLocale: 'en',
  switchLocale: () => {},
  getTranslation: () => '',
});

export const useAnuLocalization = () => {
  return useContext(LocalizationContext);
};

const AnuLocalizationProvider: FC<AnuLocalizationProviderProps> = (props) => {
  const [currentLocale, setCurrentLocale] = useState(props.default);

  const switchLocale = (selectedLocale: string) => {
    setCurrentLocale(selectedLocale);
  };

  const getTranslation = (key: string, value = currentLocale) => {
    const locales = props.locales || {};

    return getLocalizedTranslation(key, value, locales);
  };

  return (
    <LocalizationContext.Provider
      value={{
        defaultLocale: props.default,
        currentLocale,
        switchLocale,
        getTranslation,
      }}
    >
      {props.children}
    </LocalizationContext.Provider>
  );
};

export default AnuLocalizationProvider;

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
  directory: '',
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
    console.log(props.directory);

    return getLocalizedTranslation(key, value, props.directory);
  };

  return (
    <LocalizationContext.Provider
      value={{ defaultLocale: props.default, currentLocale, switchLocale, getTranslation, directory: props.directory }}
    >
      {props.children}
    </LocalizationContext.Provider>
  );
};

export default AnuLocalizationProvider;

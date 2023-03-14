import { createContext, FC, useContext, useState } from 'react';

import { AnuLocalizationContext, AnuLocalizationProviderProps } from '../types';

/**
 * Context to make localization work through out the application
 */
export const LocalizationContext = createContext<AnuLocalizationContext>({
  defaultLocale: 'en',
  currentLocale: 'en',
  switchLocale: () => {},
});

export const useAnuLocalization = () => {
  return useContext(LocalizationContext);
};

const AnuLocalizationProvider: FC<AnuLocalizationProviderProps> = (props) => {
  const [currentLocale, setCurrentLocale] = useState(props.default);

  const switchLocale = (selectedLocale: string) => {
    setCurrentLocale(selectedLocale);
  };

  return (
    <LocalizationContext.Provider value={{ defaultLocale: props.default, currentLocale, switchLocale }}>
      {props.children}
    </LocalizationContext.Provider>
  );
};

export default AnuLocalizationProvider;

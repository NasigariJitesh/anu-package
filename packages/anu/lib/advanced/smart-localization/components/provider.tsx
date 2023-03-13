import { createContext, FC, useContext, useState } from 'react';

import { AnuLocalizationContext, AnuLocalizationProviderProps } from '../types';

/**
 * Context to make localization work through out the application
 */
const LocalizationContext = createContext<AnuLocalizationContext>({
  defaultLocale: 'en',
  currentLocale: 'en',
  onLocaleSwitch: () => {},
});

export const useAnuLocalization = () => {
  return useContext(LocalizationContext);
};

const AnuLocalizationProvider: FC<AnuLocalizationProviderProps> = (props) => {
  const [currentLocale, setCurrentLocale] = useState(props.default);

  const onLocaleSwitch = (selectedLocale: string) => {
    setCurrentLocale(selectedLocale);
  };

  return (
    <LocalizationContext.Provider value={{ defaultLocale: props.default, currentLocale, onLocaleSwitch }}>
      {props.children}
    </LocalizationContext.Provider>
  );
};

export default AnuLocalizationProvider;

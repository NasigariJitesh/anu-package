import { AnuProvider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { generateTheme, PortalProvider } from 'anu/config';
import { AnuSnackbarProvider } from 'anu/lib';
import { AnuLocalizationProvider } from 'anu/lib/advanced/smart-localization';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme, View } from 'react-native';

import Locales from '../../services/locale';

const MenuContent = createContext({
  isOpen: false,
  toggleMenu: () => {},
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const useMenuContext = () => useContext(MenuContent);

/**
 *
 * @param props
 * @param props.children
 * @param props.backgroundColor
 * @param props.setBackgroundColor
 */
export default function RootLayout(props: {
  children: ReactChildren;
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
}) {
  const colorScheme = useColorScheme();

  const [isOpen, toggleIsOpen] = useState(true);
  const [isDarkTheme, toggleDarkTheme] = useState(colorScheme === 'dark');
  const [isAdjustedToResize, toggleIsAdjustedToResize] = useState(false);

  const { width } = useWindowDimensions();
  const { pathname, locale } = useRouter();
  const { backgroundColor, setBackgroundColor, children } = props;

  useEffect(() => {
    setBackgroundColor(isDarkTheme ? '#1B1B1F' : '#fffbff');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (width <= 0) return;

    if (width >= 900) {
      toggleIsOpen(true);
      toggleIsAdjustedToResize(false);
    } else if (width < 900 && !isAdjustedToResize) {
      toggleIsOpen(false);
      toggleIsAdjustedToResize(true);
    } else {
      toggleIsOpen(false);
    }
  }, [isAdjustedToResize, width]);

  useEffect(() => {
    if (width >= 900 || width <= 0) return;

    toggleIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleMenu = () => {
    toggleIsOpen((previousState) => !previousState);
  };

  const toggleTheme = () => {
    toggleDarkTheme((previousState) => !previousState);

    setBackgroundColor(isDarkTheme ? '#fffbff' : '#1B1B1F');
  };

  const MyTheme = generateTheme({
    theme: {},
    color: { primary: '#090C7D', secondary: '#7D0946', tertiary: '#7D7A09', neutral: '#929094' },
    colorScheme: isDarkTheme ? 'dark' : 'light',
    extendDefaultTheme: true,
  });

  return (
    <AnuProvider ssr theme={MyTheme}>
      <AnuLocalizationProvider locales={Locales} default={locale?.includes('fr') ? 'fr' : 'en'}>
        <PortalProvider>
          <AnuSnackbarProvider>
            <View style={{ backgroundColor: backgroundColor }}>
              <MenuContent.Provider value={{ isOpen, toggleMenu, isDarkTheme, toggleTheme }}>
                {children}
              </MenuContent.Provider>
            </View>
          </AnuSnackbarProvider>
        </PortalProvider>
      </AnuLocalizationProvider>
    </AnuProvider>
  );
}

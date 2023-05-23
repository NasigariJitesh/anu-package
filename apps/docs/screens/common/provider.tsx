import { AnuProvider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { makeTheme, PortalProvider } from 'anu/config';
import { AnuSnackbarProvider, SideSheet, SideSheetReferenceProps } from 'anu/lib';
import { AnuLocalizationProvider } from 'anu/lib/advanced/smart-localization';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useColorScheme, View } from 'react-native';

import Locales from '../../services/locale';

const MenuContent = createContext({
  isOpen: false,
  toggleMenu: () => {},
  isDarkTheme: true,
  toggleTheme: () => {},
  toggleSidebar: () => {},
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

  const reference = useRef<SideSheetReferenceProps | null>(null);

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

  const toggleSidebar = () => {
    if (reference.current?.isActive()) {
      reference.current?.scrollTo(0);
    } else reference.current?.scrollTo(300);
  };

  return (
    <AnuProvider ssr theme={makeTheme({})} mode={isDarkTheme ? 'dark' : 'light'}>
      <AnuLocalizationProvider locales={Locales} default={locale?.includes('fr') ? 'fr' : 'en'}>
        <PortalProvider>
          <AnuSnackbarProvider>
            <View style={{ backgroundColor: backgroundColor }}>
              <MenuContent.Provider value={{ isOpen, toggleMenu, isDarkTheme, toggleTheme, toggleSidebar }}>
                {children}
                <SideSheet ref={reference} width={300} headline='Title' startCoordinate={0} align='left' divider />
              </MenuContent.Provider>
            </View>
          </AnuSnackbarProvider>
        </PortalProvider>
      </AnuLocalizationProvider>
    </AnuProvider>
  );
}

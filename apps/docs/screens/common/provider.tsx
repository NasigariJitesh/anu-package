import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { makeTheme } from 'anu/config';
import { AnuLocalizationProvider } from 'anu/lib/advanced';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';

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
  const [isOpen, toggleIsOpen] = useState(true);
  const [isDarkTheme, toggleDarkTheme] = useState(true);
  const [isAdjustedToResize, toggleIsAdjustedToResize] = useState(false);

  const { width } = useWindowDimensions();
  const { pathname } = useRouter();
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

  return (
    <Provider theme={makeTheme({}, isDarkTheme ? 'dark' : 'light')}>
      <AnuLocalizationProvider default='en'>
        <View style={{ backgroundColor: backgroundColor }}>
          <MenuContent.Provider value={{ isOpen, toggleMenu, isDarkTheme, toggleTheme }}>
            {children}
          </MenuContent.Provider>
        </View>
      </AnuLocalizationProvider>
    </Provider>
  );
}

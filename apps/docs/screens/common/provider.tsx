import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const MenuContent = createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export const useMenuContext = () => useContext(MenuContent);

/**
 *
 * @param props
 * @param props.children
 */
export default function RootLayout(props: { children: ReactChildren }) {
  const [isOpen, toggleIsOpen] = useState(true);
  const [isAdjustedToResize, toggleIsAdjustedToResize] = useState(false);

  const { width } = useWindowDimensions();
  const { pathname } = useRouter();

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

  const { children } = props;

  return (
    <Provider theme={{}}>
      <MenuContent.Provider value={{ isOpen, toggleMenu }}>{children}</MenuContent.Provider>
    </Provider>
  );
}

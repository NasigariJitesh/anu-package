import { Provider } from 'anu/common/context';
import { ReactChildren } from 'anu/common/types';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
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

  useEffect(() => {
    toggleIsOpen(width >= 768);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (width > 768) {
      toggleIsOpen(true);
      toggleIsAdjustedToResize(false);
    } else if (width <= 768 && !isAdjustedToResize) {
      toggleIsOpen(false);
      toggleIsAdjustedToResize(true);
    } else {
      toggleIsOpen(false);
    }
  }, [isAdjustedToResize, width]);

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

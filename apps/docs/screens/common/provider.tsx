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

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 768) toggleIsOpen(true);
    else toggleIsOpen(false);
  }, [width]);

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

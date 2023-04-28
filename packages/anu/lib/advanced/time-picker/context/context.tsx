import { createContext, useContext, useState } from 'react';

import { DisplayModeContextData } from '../types';

const DisplayModeContext = createContext<DisplayModeContextData>({ mode: 'AM', setMode: () => {} });

/**
 *
 */
export function useDisplayModeContext() {
  return useContext(DisplayModeContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.defaultDisplayMode
 */
function DisplayModeProvider({
  children,
  defaultDisplayMode,
}: {
  children: React.ReactNode;
  defaultDisplayMode?: 'AM' | 'PM';
}) {
  const [displayMode, setDisplayMode] = useState<'AM' | 'PM' | undefined>(defaultDisplayMode);

  return (
    <DisplayModeContext.Provider
      value={{
        mode: displayMode,
        setMode: setDisplayMode,
      }}
    >
      {children}
    </DisplayModeContext.Provider>
  );
}

export { DisplayModeContext, DisplayModeProvider };

import { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{
  active: number;
  setActive: (value: number) => void;
}>({
  setActive: () => null,
  active: 0,
});

/**
 *
 */
export function useTabsContext() {
  return useContext(TabsContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.defaultActiveTab
 * @param root0.onChange
 */
function TabsProvider({
  children,
  defaultActiveTab,
  onChange,
}: {
  children: React.ReactNode;
  defaultActiveTab?: number;
  onChange?: (value: number) => void;
}) {
  const [active, updateActive] = useState(defaultActiveTab ?? 0);

  const setActive = (activeTab: number) => {
    updateActive(activeTab);
    if (onChange) onChange(activeTab);
  };

  return (
    <TabsContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export { TabsContext, TabsProvider };

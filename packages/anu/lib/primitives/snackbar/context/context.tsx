/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import { SnackbarHost } from '../components';
import { SnackbarContextData, SnackbarProps } from '../types';

const SnackbarContext = createContext<SnackbarContextData>({
  add: () => null,
  close: () => null,
  remove: () => null,
  currentSnackBar: undefined,
  defaultSnackbarConfiguration: {
    numberOfLines: 1,
    content: '',
    align: 'center',
    duration: 5000,
  },
});

/**
 *
 */
export function useSnackbarContext() {
  return useContext(SnackbarContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.defaultSnackbarConfiguration
 */
function SnackbarProvider({
  children,
  defaultSnackbarConfiguration,
}: {
  children: React.ReactNode;
  defaultSnackbarConfiguration?: SnackbarProps;
}) {
  const [snackbarQueue, setSnackbarQueue] = useState<SnackbarProps[]>([]);
  const [currentSnackBar, setCurrentSnackBar] = useState<SnackbarProps>();

  const add = (snackbar: SnackbarProps) => {
    setSnackbarQueue((previous: SnackbarProps[]) => {
      return [...previous, snackbar];
    });
  };

  const remove = (snackbar: SnackbarProps) => {
    setSnackbarQueue((previous: SnackbarProps[]) => previous.filter((item) => item === snackbar));
  };

  const close = () => {
    setSnackbarQueue((previous) => {
      const queue = [...previous];
      queue.splice(0, 1);
      return queue;
    });
  };

  useEffect(() => {
    setCurrentSnackBar(snackbarQueue.length > 0 ? snackbarQueue[0] : undefined);
  }, [snackbarQueue]);

  return (
    <SnackbarContext.Provider
      value={{
        add,
        close,
        remove,
        currentSnackBar,
        defaultSnackbarConfiguration,
      }}
    >
      {children}
      <SnackbarHost />
    </SnackbarContext.Provider>
  );
}

export { SnackbarProvider as AnuSnackbarProvider, SnackbarContext };

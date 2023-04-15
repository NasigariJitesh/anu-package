/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import { TextInput } from 'react-native';

import { Options } from '../../types';

interface AutoCompleteContextData {
  isOpen: boolean;
  displayResults: () => void;
  hideResults: () => void;
  focus: () => void;
  blur: () => void;
  results: Options[];
  setResults: (results: Options[]) => void;
  textInputReference: React.MutableRefObject<TextInput | null>;
}

const AutoCompleteContext = createContext<AutoCompleteContextData>({
  isOpen: false,
  displayResults: () => null,
  hideResults: () => null,
  focus: () => null,
  blur: () => null,
  results: [],
  setResults: (results: Options[]) => null,
  textInputReference: { current: null },
});

/**
 *
 */
export function useAutoCompleteContext() {
  return useContext(AutoCompleteContext);
}

/**
 *
 * @param root0
 * @param root0.children
 * @param root0.data
 */
function AutoCompleteProvider({ children, data }: { children: React.ReactNode; data: Options[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Options[]>(data);

  const displayResults = () => {
    setIsOpen(true);
  };
  const hideResults = () => {
    setIsOpen(false);
  };
  const textInputReference = useRef<TextInput | null>(null);

  const focus = useCallback(() => {
    textInputReference.current?.focus();
  }, [textInputReference]);

  const blur = useCallback(() => {
    textInputReference.current?.blur();
  }, [textInputReference]);

  return (
    <AutoCompleteContext.Provider
      value={{
        isOpen,
        displayResults,
        hideResults,
        results,
        setResults,
        focus,
        blur,
        textInputReference,
      }}
    >
      {children}
    </AutoCompleteContext.Provider>
  );
}

export { AutoCompleteContext, AutoCompleteProvider };

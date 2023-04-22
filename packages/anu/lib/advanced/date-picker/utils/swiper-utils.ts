/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import { useLatest } from '../hooks';
import { addMonths, differenceInMonths, getRealIndex, startAtIndex } from './date-utils';

/**
 *
 * @param onChange
 * @param root0
 * @param root0.currentIndexRef
 * @param root0.selectedYear
 */
export function useYearChange(
  onChange: (index: number | undefined) => void,
  {
    selectedYear,
    currentIndexRef,
  }: {
    currentIndexRef: MutableRefObject<number>;
    selectedYear: number | undefined;
  },
) {
  const onChangeReference = useLatest(onChange);
  useEffect(() => {
    if (selectedYear) {
      const currentIndex = currentIndexRef.current || 0;
      const currentDate = addMonths(new Date(), getRealIndex(currentIndex));
      currentDate.setFullYear(selectedYear);

      const today = new Date();
      const months = differenceInMonths(today, currentDate);

      const newIndex = startAtIndex + months;
      if (currentIndex !== newIndex) {
        onChangeReference.current(newIndex);
      }
    }
  }, [currentIndexRef, onChangeReference, selectedYear]);
}

/**
 *
 * @param callback
 */
export function useDebouncedCallback(callback: any): any {
  const mounted = useRef<boolean>(true);
  const latest = useLatest(callback);
  const timerId = useRef<any>(null);

  useEffect(() => {
    return () => {
      mounted.current = false;
      if (timerId.current) {
        window.cancelAnimationFrame(timerId.current);
      }
    };
  }, [mounted, timerId]);

  return useCallback(
    (arguments_: any) => {
      if (timerId.current) {
        window.cancelAnimationFrame(timerId.current);
      }
      timerId.current = window.requestAnimationFrame(function () {
        if (mounted.current) {
          latest.current(arguments_);
        }
      });
    },
    [mounted, timerId, latest],
  );
}

export const getSwiperStyles = () => {
  const flex1 = {
    flex: 1,
  };
  return { flex1 };
};

export const getAutoSizerStyles = () => {
  const autoSizer = {
    flex: 1,
    overflow: 'hidden',
  } as const;
  return { autoSizer };
};

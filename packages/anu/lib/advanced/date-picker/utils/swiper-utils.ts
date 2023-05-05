/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useEffect } from 'react';

import { useLatest } from '../hooks';
import { addMonths, differenceInMonths, getRealIndex, startAtIndex } from './date-utils';

/**
 * Function to change index of the date in calendar on year change
 *
 * @param onChange
 * @param root0
 * @param root0.currentIndexRef
 * @param root0.selectedYear
 */
export const useYearChange = (
  onChange: (index: number | undefined) => void,
  {
    selectedYear,
    currentIndexRef,
  }: {
    currentIndexRef: MutableRefObject<number>;
    selectedYear: number | undefined;
  },
) => {
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
};

export const getSwiperStylesWeb = () => {
  const flex1 = {
    flex: 1,
    width: '100%',
  };
  return { flex1 };
};

export const getAutoSizerStyles = () => {
  const autoSizer = {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  } as const;
  return { autoSizer };
};

export const getSwiperStyles = () => {
  const inner = {
    position: 'relative',
  } as const;
  const viewPager = {
    flex: 1,
  };

  return { inner, viewPager };
};

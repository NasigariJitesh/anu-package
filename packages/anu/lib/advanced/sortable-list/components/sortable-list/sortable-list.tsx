/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { SortableListProps } from '../../types';
import { convertToDataWithId } from '../../utils';
import HorizontalList from '../horizontal-list/horizontal-list';
import List from '../list';
import { defaultProps } from './default';

/**
 *
 * @param props
 */
export default function SortableList<T>(props: SortableListProps<T>) {
  const finalProps = { ...defaultProps, ...props };

  const { containerHeight = 330, containerWidth = 350, horizontal, data, keyExtractor } = finalProps;

  const [dataWithId, setDataWithId] = useState(convertToDataWithId(data, keyExtractor));

  useEffect(() => {
    setDataWithId(convertToDataWithId(data, keyExtractor));
  }, [data]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {horizontal ? (
            <HorizontalList
              {...finalProps}
              data={dataWithId}
              containerHeight={containerHeight}
              containerWidth={containerWidth}
            />
          ) : (
            <List {...finalProps} data={dataWithId} containerHeight={containerHeight} containerWidth={containerWidth} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

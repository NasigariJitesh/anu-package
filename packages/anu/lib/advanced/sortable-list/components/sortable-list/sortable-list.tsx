/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

  const dataWithId = convertToDataWithId(data, keyExtractor);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {horizontal ? (
            <HorizontalList {...finalProps} data={dataWithId} containerWidth={containerWidth} />
          ) : (
            <List {...finalProps} data={dataWithId} containerHeight={containerHeight} />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

import * as React from 'react';
import { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

import { TabsContext } from '../../context';
import { SwiperProps, TabScreenProps } from '../../types';
import { TabHeader } from '../tabs';

/**
 *
 * @param props
 */
const Swiper = (props: SwiperProps) => {
  const { style, defaultIndex, onChangeIndex, mode, type } = props;
  const [index, setIndex] = React.useState<number>(defaultIndex || 0);
  const goTo = React.useCallback(
    (ind: number) => {
      setIndex(ind);
      onChangeIndex(ind);
    },
    [setIndex, onChangeIndex],
  );

  const children: ReactElement<TabScreenProps>[] = props.children;

  const currentScreen = children[index];
  if (!currentScreen) {
    return null;
  }
  const renderProps = {
    index,
    goTo,
    children,

    style,
    offset: undefined,
    position: undefined,

    mode,
    type,
  };

  return (
    <View style={styles.root}>
      <TabHeader {...renderProps} />
      <TabsContext.Provider value={{ goTo, index }}>{currentScreen}</TabsContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Swiper;

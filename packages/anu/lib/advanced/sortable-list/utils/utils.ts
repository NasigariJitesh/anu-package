import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { runOnJS, SharedValue } from 'react-native-reanimated';

import { ItemProps, ScrollDirection, ScrollDirectionHorizontal } from '../types';
/**
 *
 * @param value
 * @param lowerBound
 * @param upperBound
 */
export function clamp(value: number, lowerBound: number, upperBound: number) {
  'worklet';
  return Math.max(lowerBound, Math.min(value, upperBound));
}

/**
 *
 * @param array
 */
export function shuffle<T>(array: ItemProps<T>[]) {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temporary = array[counter];
    array[counter] = array[index];
    array[index] = temporary;
  }

  return array;
}

/**
 *
 * @param object
 * @param from
 * @param to
 * @returns - new Object map
 */
export function objectMove(object: { [id: string]: number }, from: number, to: number) {
  'worklet';
  const newObject = Object.assign({}, object);

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to;
    }

    if (object[id] === to) {
      newObject[id] = from;
    }
  }

  return newObject;
}

/**
 *
 * @param list
 */
export function listToObject<T>(list: ItemProps<T>[]) {
  const values = Object.values(list);
  const object: { [id: string]: number } = {};

  for (const [index, value] of values.entries()) {
    object[value.id] = index;
  }

  return object;
}

/**
 *
 * @param positionY
 * @param itemsCount
 * @param positions
 * @param id
 * @param itemHeight
 */
export function setPosition(
  positionY: number,
  itemsCount: number,
  positions: SharedValue<{ [id: string]: number }>,
  id: string,
  itemHeight: number,
) {
  'worklet';
  const newPosition = clamp(Math.floor(positionY / itemHeight), 0, itemsCount - 1);

  if (newPosition !== positions.value[id]) {
    positions.value = objectMove(positions.value, positions.value[id], newPosition);

    if (Platform.OS === 'ios') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
    }
  }
}

/**
 *
 * @param positionX
 * @param itemsCount
 * @param positions
 * @param id
 * @param itemWidth
 */
export function setPositionHorizontal(
  positionX: number,
  itemsCount: number,
  positions: SharedValue<{ [id: string]: number }>,
  id: string,
  itemWidth: number,
) {
  'worklet';
  const newPosition = clamp(Math.floor(positionX / itemWidth), 0, itemsCount - 1);

  if (newPosition !== positions.value[id]) {
    positions.value = objectMove(positions.value, positions.value[id], newPosition);

    if (Platform.OS === 'ios') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
    }
  }
}

/**
 *
 * @param positionY
 * @param lowerBound
 * @param upperBound
 * @param scrollThreshold
 * @param autoScroll
 */
export function setAutoScroll(
  positionY: number,
  lowerBound: number,
  upperBound: number,
  scrollThreshold: number,
  autoScroll: SharedValue<ScrollDirection>,
) {
  'worklet';
  if (positionY <= lowerBound + scrollThreshold) {
    autoScroll.value = ScrollDirection.Up;
  } else if (positionY >= upperBound - scrollThreshold) {
    autoScroll.value = ScrollDirection.Down;
  } else {
    autoScroll.value = ScrollDirection.None;
  }
}

/**
 *
 * @param positionX
 * @param lowerBound
 * @param upperBound
 * @param scrollThreshold
 * @param autoScroll
 */
export function setAutoScrollHorizontal(
  positionX: number,
  lowerBound: number,
  upperBound: number,
  scrollThreshold: number,
  autoScroll: SharedValue<ScrollDirectionHorizontal>,
) {
  'worklet';
  if (positionX <= lowerBound + scrollThreshold) {
    autoScroll.value = ScrollDirectionHorizontal.Left;
  } else if (positionX >= upperBound - scrollThreshold) {
    autoScroll.value = ScrollDirectionHorizontal.Right;
  } else {
    autoScroll.value = ScrollDirectionHorizontal.None;
  }
}

/**
 *
 * @param data
 */
export function convertToDataWithId<T>(data: Array<T>, keyExtractor: { (item: T, index: number): string }) {
  const newArray: ItemProps<T>[] = [];

  data.map((item: T, index: number) => newArray.push({ id: keyExtractor(item, index), value: item }));

  return newArray;
}

export const getMovableItemComponentStyle = (height: number) => {
  const style = {
    flexDirection: 'row',
    alignItems: 'center',
    height,
    width: '100%',
  } as const;

  const animatedViewStyle = { width: '100%' };

  return { style, animatedViewStyle };
};

import { SliderProps as RNSliderProps } from '@miblanchard/react-native-slider';
import { StyleProp, ViewStyle } from 'react-native';

export interface CommonSliderProps
  extends Partial<
    Omit<
      RNSliderProps,
      | 'maximumTrackStyle'
      | 'trackStyle'
      | 'minimumTrackStyle'
      | 'onValueChange'
      | 'maximumTrackTintColor'
      | 'minimumTrackTintColor'
      | 'renderAboveThumbComponent'
      | 'renderBelowThumbComponent'
      | 'renderThumbComponent'
      | 'renderMaximumTrackComponent'
      | 'renderMinimumTrackComponent'
      | 'onSlidingStart'
      | 'onSlidingComplete'
      | 'thumbImage'
      | 'thumbStyle'
      | 'containerStyle'
    >
  > {
  /**
   * test id for the slider component
   */
  testId?: string;
  /**
   * The color of the active region of slider
   */
  activeTrackTintColor?: string;
  /**
   * The styles for the active region of slider.
   */
  activeTrackStyle?: StyleProp<ViewStyle>;
  renderActiveTrackComponent?: () => React.ReactNode;
  /**
   * The color of markers on the active region of slider
   */
  activeTrackMarksColor?: string;
  /**
   * The color of the inactive region of slider
   */
  inactiveTrackTintColor?: string;
  /**
   * The styles for the inactive region of slider.
   */
  inactiveTrackStyle?: StyleProp<ViewStyle>;
  renderInactiveTrackComponent?: () => React.ReactNode;
  /**
   * The color of markers on the inactive region of slider
   */
  inactiveTrackMarksColor?: string;
  /**
   * The size of the thumb
   */
  thumbSize?: number;

  containerStyle?: StyleProp<ViewStyle>;
}

interface RegularSliderProps extends CommonSliderProps {
  /**
   * The value of the slider
   */
  value: number;
  /**
   * The callback when there is a change in value of slider
   *
   * @param value - value of slider
   */
  onValueChange?: (value: number) => void;
  /**
   * The callback when the sliding action is started
   *
   * @param value - value of slider
   */
  onSlidingStart?: (value: number) => void;
  /**
   * The callback when the sliding action is completed
   *
   * @param value - value of slider
   */
  onSlidingComplete?: (value: number) => void;
}

interface RangeSliderProps extends CommonSliderProps {
  /**
   * The value of the slider
   */
  value: Array<number>;
  /**
   * The callback when there is a change in value of slider
   *
   * @param value - value of slider
   */
  onValueChange?: (value: Array<number>) => void;
  /**
   * The callback when the sliding action is started
   *
   * @param value - value of slider
   */
  onSlidingStart?: (value: Array<number>) => void;
  /**
   * The callback when the sliding action is completed
   *
   * @param value - value of slider
   */
  onSlidingComplete?: (value: Array<number>) => void;
}

export type SliderProps = RegularSliderProps | RangeSliderProps;

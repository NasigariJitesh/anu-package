import { StyleProp, SwitchProps as RNSwitchProps, ViewStyle } from 'react-native';

type RNSwitchType = Omit<RNSwitchProps, 'ios_backgroundColor' | 'onChange' | 'style'>;

/**
 * Interface for the switch component
 */
export interface SwitchProps extends RNSwitchType {
  iconOn?: React.ReactElement | null | undefined;
  iconOff?: React.ReactElement | null | undefined;
  onChange?: (() => Promise<void> | void) | null | undefined;
  /**
   * Use this to adjust the size of the component, else might misbehave during switching
   */
  size: number;
  /**
   * Styles for the thumb part of the switch
   */
  thumbStyle?: StyleProp<ViewStyle> | undefined;
  /**
   * Styles for the track part of the switch
   */
  trackStyle?: StyleProp<ViewStyle> | undefined;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TextStyle as HTMLTextStyle,
  WebTextStyle as HTMLWebTextStyle,
} from '@expo/html-elements/build/primitives/Text';
import { DripsyFinalTheme, StyledProps } from 'dripsy';
import React from 'react';
import * as ReactNative from 'react-native';

interface DefaultTextProps {
  testID?: string | undefined;
  style?: ReactNative.StyleProp<HTMLTextStyle>;
  ref?: React.LegacyRef<typeof ReactNative.Text> | undefined;
  key?: React.Key | null | undefined;
  onLayout?: ((event: ReactNative.LayoutChangeEvent) => void) | undefined;
  nativeID?: string | undefined;
  accessible?: boolean | undefined;
  accessibilityActions?:
    | readonly Readonly<{
        name: string;
        label?: string | undefined;
      }>[]
    | undefined;
  accessibilityLabel?: string | undefined;
  accessibilityRole?: 'listitem' | ReactNative.AccessibilityRole | undefined;
  accessibilityState?: ReactNative.AccessibilityState | undefined;
  accessibilityHint?: string | undefined;
  accessibilityValue?: ReactNative.AccessibilityValue | undefined;
  onAccessibilityAction?: ((event: ReactNative.AccessibilityActionEvent) => void) | undefined;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive' | undefined;
  importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants' | undefined;
  accessibilityElementsHidden?: boolean | undefined;
  accessibilityViewIsModal?: boolean | undefined;
  onAccessibilityEscape?: (() => void) | undefined;
  onAccessibilityTap?: (() => void) | undefined;
  onMagicTap?: (() => void) | undefined;
  accessibilityIgnoresInvertColors?: boolean | undefined;
  onPress?: ((event: ReactNative.GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: ReactNative.GestureResponderEvent) => void) | undefined;
  allowFontScaling?: boolean | undefined;
  ellipsizeMode?: 'clip' | 'middle' | 'head' | 'tail' | undefined;
  lineBreakMode?: 'clip' | 'middle' | 'head' | 'tail' | undefined;
  numberOfLines?: number | undefined;
  onTextLayout?: ((event: ReactNative.NativeSyntheticEvent<ReactNative.TextLayoutEventData>) => void) | undefined;
  maxFontSizeMultiplier?: number | null | undefined;
  adjustsFontSizeToFit?: boolean | undefined;
  minimumFontScale?: number | undefined;
  suppressHighlighting?: boolean | undefined;
  selectable?: boolean | undefined;
  selectionColor?: ReactNative.ColorValue | undefined;
  textBreakStrategy?: 'simple' | 'highQuality' | 'balanced' | undefined;
  dataDetectorType?: 'all' | 'link' | 'none' | 'phoneNumber' | 'email' | null | undefined;
  tabIndex?: number | undefined;
}

// This to let developers use the HTML specific props for web
type HTMLProps = React.HTMLAttributes<any>;

export type TextProps = Pick<
  React.PropsWithChildren<
    Omit<DefaultTextProps, keyof StyledProps<keyof DripsyFinalTheme>> & StyledProps<'text'> & HTMLWebTextStyle
  >,
  | 'testID'
  | 'children'
  | 'key'
  | 'onLayout'
  | 'nativeID'
  | 'accessible'
  | 'accessibilityActions'
  | 'accessibilityLabel'
  | 'accessibilityState'
  | 'accessibilityHint'
  | 'accessibilityValue'
  | 'onAccessibilityAction'
  | 'accessibilityLiveRegion'
  | 'importantForAccessibility'
  | 'accessibilityElementsHidden'
  | 'accessibilityViewIsModal'
  | 'onAccessibilityEscape'
  | 'onAccessibilityTap'
  | 'onMagicTap'
  | 'accessibilityIgnoresInvertColors'
  | 'onPress'
  | 'onLongPress'
  | 'allowFontScaling'
  | 'ellipsizeMode'
  | 'lineBreakMode'
  | 'numberOfLines'
  | 'onTextLayout'
  | 'maxFontSizeMultiplier'
  | 'adjustsFontSizeToFit'
  | 'minimumFontScale'
  | 'suppressHighlighting'
  | 'selectable'
  | 'selectionColor'
  | 'textBreakStrategy'
  | 'dataDetectorType'
  | keyof HTMLWebTextStyle
  | keyof StyledProps<'text'>
> &
  React.RefAttributes<typeof ReactNative.Text | React.Component<HTMLTextStyle, any, any>> &
  HTMLProps;

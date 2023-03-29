import { useTheme } from 'config/dripsy';
import { Pressable } from 'dripsy';
import { useRef, useState } from 'react';
import { Animated, PressableStateCallbackType, Switch as RNSwitch } from 'react-native';

import { SwitchProps } from '../../types';
import { getSwitchStyles } from '../../utils';
import { defaultProps } from './default';

const TRANSITION_DURATION = 200;
const DELAY_DURATION = 50;

/**
 * Update the toggle states if the components are pressed/ focused
 *
 * @param state - pressable states
 * @param updateState - method to update React state
 * @param value - value of the boolean state
 */
const getFocus = (state: PressableStateCallbackType, updateState: (value: boolean) => void, value: boolean) => {
  if (!value && (state.focused || state.pressed)) {
    updateState(true);
  } else if (value && !state.focused) {
    updateState(false);
  }

  return {};
};

const Switch = (props: Partial<SwitchProps>) => {
  const finalProps = { ...defaultProps, ...props };

  const [isOn, toggleIsOn] = useState(finalProps.value);
  const [isTrackFocused, toggleIsTrackFocused] = useState(false);
  const [isThumbFocused, toggleIsThumbFocused] = useState(false);

  const transitionTop = useRef(
    new Animated.Value(finalProps.value ? finalProps.size * 0.125 : finalProps.size * 0.25),
  ).current;
  const transitionLeft = useRef(new Animated.Value(finalProps.value ? finalProps.size : finalProps.size * 0.2)).current;
  const transitionSize = useRef(
    new Animated.Value(finalProps.value ? finalProps.size * 0.75 : finalProps.size / 2),
  ).current;

  const theme = useTheme();

  const styles = getSwitchStyles(finalProps, isOn, theme);
  const hiddenInputStyle = { display: 'none' } as const;

  const onChangeHandler = (currentValue: boolean) => {
    if (finalProps.onValueChange) finalProps.onValueChange(!currentValue);

    // if on, user is switching it off hence, off transition
    if (currentValue) transitionOff();
    else transitionOn();

    toggleIsOn((previous) => !previous);
    toggleIsThumbFocused(false);
    toggleIsTrackFocused(false);
  };

  /**
   *  switch transitioning to on position
   */
  const transitionOn = () => {
    Animated.timing(transitionTop, {
      toValue: finalProps.size * 0.125,
      duration: TRANSITION_DURATION,
      useNativeDriver: false,
      delay: DELAY_DURATION,
    }).start();

    Animated.timing(transitionLeft, {
      toValue: finalProps.size,
      duration: TRANSITION_DURATION,
      useNativeDriver: false,
      delay: DELAY_DURATION,
    }).start();

    Animated.timing(transitionSize, {
      toValue: finalProps.size * 0.75,
      duration: TRANSITION_DURATION,
      delay: DELAY_DURATION,
      useNativeDriver: false,
    }).start();
  };

  /**
  /**
   * switch transitioning back to off position
   */
  const transitionOff = () => {
    Animated.timing(transitionTop, {
      toValue: finalProps.size * 0.25,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: false,
    }).start();

    Animated.timing(transitionLeft, {
      toValue: finalProps.size * 0.2,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: false,
    }).start();

    Animated.timing(transitionSize, {
      toValue: finalProps.size / 2,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable accessibilityRole='switch' {...finalProps} sx={{ position: 'relative' }}>
      {/* Track Component */}
      <Pressable
        style={(states) => getFocus(states, toggleIsTrackFocused, isTrackFocused)}
        onPress={() => onChangeHandler(isOn)}
      >
        <Animated.View style={styles.track} />
      </Pressable>
      {/* Thumb Component */}
      <Pressable
        style={(states) => getFocus(states, toggleIsThumbFocused, isThumbFocused)}
        sx={{ position: 'absolute' }}
        onPress={() => onChangeHandler(isOn)}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              top: transitionTop,
              left: transitionLeft,
              height: transitionSize,
              width: transitionSize,
              backgroundColor:
                isThumbFocused || isTrackFocused
                  ? `${styles.thumb.backgroundColor?.toString()}90`
                  : styles.thumb.backgroundColor,
            },
          ]}
        >
          {isOn ? finalProps.icon.true : finalProps.icon.false}
        </Animated.View>
      </Pressable>
      <RNSwitch {...finalProps} style={hiddenInputStyle} value={isOn} onValueChange={onChangeHandler} />
    </Pressable>
  );
};

export default Switch;

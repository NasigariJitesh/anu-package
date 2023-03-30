import { useTheme } from 'config/dripsy';
import { Pressable } from 'dripsy';
import { useEffect, useRef, useState } from 'react';
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

  const transitionTop = useRef(new Animated.Value(finalProps.size * 0.25)).current;
  const transitionLeft = useRef(new Animated.Value(finalProps.size * 0.2)).current;
  const transitionSize = useRef(new Animated.Value(finalProps.size / 2)).current;

  const [, setValue] = useState(0);

  const theme = useTheme();

  const styles = getSwitchStyles(finalProps, isOn, theme);
  const hiddenInputStyle = { display: 'none' } as const;

  useEffect(() => {
    transitionSize.addListener((arguments_) => setValue(arguments_.value));

    if (finalProps.value) transitionOn();
    else transitionOff();

    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      transitionSize.removeAllListeners();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeHandler = () => {
    if (finalProps.onValueChange) finalProps.onValueChange(!isOn);

    // if on, user is switching it off hence, off transition
    if (isOn) transitionOff();
    else transitionOn();

    toggleIsOn((previous) => !previous);
    toggleIsThumbFocused(false);
    toggleIsTrackFocused(false);
  };

  /**
   *  switch transitioning to on position
   */
  const transitionOn = () => {
    console.log('triggered transitionOn');

    Animated.timing(transitionTop, {
      toValue: finalProps.size * 0.125,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
      delay: DELAY_DURATION,
    }).start();

    Animated.timing(transitionLeft, {
      toValue: finalProps.size,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
      delay: DELAY_DURATION,
    }).start();

    Animated.timing(transitionSize, {
      toValue: finalProps.size * 0.75,
      duration: TRANSITION_DURATION,
      delay: DELAY_DURATION,
      useNativeDriver: true,
    }).start();
  };

  /**
  /**
   * switch transitioning back to off position
   */
  const transitionOff = () => {
    console.log('triggered transitionOff');

    Animated.timing(transitionTop, {
      toValue: finalProps.size * 0.25,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();

    Animated.timing(transitionLeft, {
      toValue: finalProps.size * 0.2,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();

    Animated.timing(transitionSize, {
      toValue: finalProps.size / 2,
      delay: DELAY_DURATION,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable accessibilityRole='switch' {...finalProps} sx={{ position: 'relative' }}>
      {/* Track Component */}
      <Pressable style={(states) => getFocus(states, toggleIsTrackFocused, isTrackFocused)} onPress={onChangeHandler}>
        <Animated.View style={styles.track} />
      </Pressable>
      {/* Thumb Component */}
      <Pressable
        style={(states) => getFocus(states, toggleIsThumbFocused, isThumbFocused)}
        sx={{ position: 'absolute' }}
        onPress={onChangeHandler}
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
          {isOn ? finalProps.iconOn : finalProps.iconOff}
        </Animated.View>
      </Pressable>
      <RNSwitch {...finalProps} style={hiddenInputStyle} value={isOn} onValueChange={onChangeHandler} />
    </Pressable>
  );
};

export default Switch;

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
 * @param updateHover - method to update hover state
 */
const getFocus = (
  state: PressableStateCallbackType,
  updateState: (value: boolean) => void,
  value: boolean,
  updateHover: (value: boolean) => void,
) => {
  if (!value && (state.focused || state.pressed)) {
    updateState(true);
  } else if (value && !state.focused) {
    updateState(false);
  }
  if (state.hovered) updateHover(true);
  else updateHover(false);

  return {};
};

const Switch = (props: Partial<SwitchProps>) => {
  const finalProps = { ...defaultProps, ...props };

  const isOn = finalProps.value;
  const [isTrackFocused, toggleIsTrackFocused] = useState(false);
  const [isThumbFocused, toggleIsThumbFocused] = useState(false);
  const [isTrackHovered, toggleIsTrackHovered] = useState(false);
  const [isThumbHovered, toggleIsThumbHovered] = useState(false);

  const transitionTop = useRef(new Animated.Value(finalProps.size * 0.25)).current;
  const transitionLeft = useRef(new Animated.Value(finalProps.size * 0.2)).current;
  const transitionSize = useRef(new Animated.Value(finalProps.size / 2)).current;

  const [, setValue] = useState(0);

  const theme = useTheme();

  const styles = getSwitchStyles(finalProps, isOn, theme);
  const hiddenInputStyle = { display: 'none' } as const;

  useEffect(() => {
    transitionSize.addListener((arguments_) => setValue(arguments_.value));

    // if on, user just switched it on hence, on transition
    if (finalProps.value) transitionOn();
    else transitionOff();

    return () => {
      transitionSize.removeAllListeners();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalProps.value]);

  const onChangeHandler = () => {
    if (finalProps.onValueChange) finalProps.onValueChange(!isOn);

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

    toggleIsThumbFocused(false);
    toggleIsTrackFocused(false);
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
      <Pressable
        style={(states) => getFocus(states, toggleIsTrackFocused, isTrackFocused, toggleIsTrackHovered)}
        onPress={onChangeHandler}
      >
        <Animated.View style={styles.track} />
      </Pressable>
      {/* Thumb Component */}
      <Pressable
        style={(states) => getFocus(states, toggleIsThumbFocused, isThumbFocused, toggleIsThumbHovered)}
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
                isThumbFocused || isTrackFocused || isTrackHovered || isThumbHovered
                  ? // eslint-disable-next-line unicorn/no-nested-ternary
                    isOn
                    ? theme.colors.$primaryContainer
                    : theme.colors.$onSurfaceVariant
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

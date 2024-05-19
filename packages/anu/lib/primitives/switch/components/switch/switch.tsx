import { useTheme } from 'anu/config';
import { Pressable } from 'dripsy';
import { useAnimationState, View } from 'moti';
import { useEffect, useState } from 'react';
import { AccessibilityRole, PressableStateCallbackType, Switch as RNSwitch } from 'react-native';

import { SwitchProps } from '../../types';
import { getSwitchStyles } from '../../utils';
import { defaultProps } from './default';

const DELAY_DURATION = 50;

/**
 * Update the toggle states if the components are pressed/ focused
 *
 * @param state - pressable states
 * @param updateHover - method to update hover state
 */
const getFocus = (state: PressableStateCallbackType, updateHover: (value: boolean) => void) => {
  if (state.hovered) updateHover(true);
  else updateHover(false);

  return {};
};

const Switch = (props: Partial<SwitchProps>) => {
  const finalProps = { ...defaultProps, ...props };

  const isOn = finalProps.value;

  const [isTrackHovered, toggleIsTrackHovered] = useState(false);
  const [isThumbHovered, toggleIsThumbHovered] = useState(false);

  const theme = useTheme();

  const styles = getSwitchStyles(finalProps, isOn, theme);
  const hiddenInputStyle = { display: 'none' } as const;

  useEffect(() => {
    // if on, user just switched it on hence, on transition
    if (finalProps.value) transitionOn();
    else transitionOff();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalProps.value]);

  const onChangeHandler = () => {
    if (props.disabled) return;
    if (finalProps.onValueChange) finalProps.onValueChange(!isOn);
  };

  /**
   *  switch transitioning to on position
   */
  const transitionOn = () => {
    switchAnimationState.transitionTo('on');
  };

  /**
  /**
   * switch transitioning back to off position
   */
  const transitionOff = () => {
    switchAnimationState.transitionTo('off');
  };

  const switchAnimationState = useAnimationState({
    on: {
      scale: 0.75,
      transform: [{ translateX: finalProps.size * 1.1 }],
    },
    off: {
      scale: 0.5,
      transform: [{ translateX: 0 }],
    },
  });

  return (
    //@ts-ignore
    <Pressable accessibilityRole={'switch' as AccessibilityRole} {...finalProps} sx={{ position: 'relative' }}>
      {/* Track Component */}
      <Pressable style={(states) => getFocus(states, toggleIsTrackHovered)} onPress={onChangeHandler}>
        <View style={styles.track}>
          {/* Thumb Component */}

          <Pressable style={(states) => getFocus(states, toggleIsThumbHovered)} onPress={onChangeHandler}>
            <View
              transition={{
                type: 'spring',
              }}
              delay={DELAY_DURATION}
              state={switchAnimationState}
              style={[
                styles.thumb,
                {
                  width: finalProps.size,
                  height: finalProps.size,
                  backgroundColor:
                    isTrackHovered || isThumbHovered
                      ? // eslint-disable-next-line unicorn/no-nested-ternary
                        isOn
                        ? theme.colors.$primaryContainer
                        : theme.colors.$onSurfaceVariant
                      : styles?.thumb?.backgroundColor,
                },
              ]}
            >
              {isOn ? finalProps.iconOn : finalProps.iconOff}
            </View>
          </Pressable>
        </View>
      </Pressable>

      <RNSwitch {...finalProps} style={hiddenInputStyle} value={isOn} onValueChange={onChangeHandler} />
    </Pressable>
  );
};

export default Switch;

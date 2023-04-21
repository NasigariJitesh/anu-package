import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import * as React from 'react';
import { Pressable } from 'react-native';

import { TouchableRippleWebProps } from '../../types';
import { getTouchableRippleColors, getTouchableRippleStyles, hasTouchHandler } from '../../utils';
import { defaultPropsWeb } from './default';

/**
 * A wrapper for views that should respond to touches.
 *
 * @param props - props for touchable ripple
 */
const TouchableRipple = (props: TouchableRippleWebProps) => {
  const finalProps = { ...defaultPropsWeb, ...props };

  const {
    style,
    background,
    borderless = false,
    disabled: disabledProp,
    rippleColor,
    underlayColor,
    children,
    ...rest
  } = finalProps;

  const theme = useTheme();
  const { borderlessStyle, touchableStyle } = getTouchableRippleStyles();

  const { onPress, onLongPress, onPressIn, onPressOut } = rest;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePressIn = (event: any) => {
    const { centered } = rest;

    onPressIn?.(event);

    const { calculatedRippleColor } = getTouchableRippleColors(theme, rippleColor);

    const button = event.currentTarget;
    const buttonStyle = window.getComputedStyle(button);
    const dimensions = button.getBoundingClientRect();

    let touchX;
    let touchY;

    const { changedTouches, touches } = event.nativeEvent;
    const touch = touches?.[0] ?? changedTouches?.[0];

    // If centered or it was pressed using keyboard - enter or space
    if (centered || !touch) {
      touchX = dimensions.width / 2;
      touchY = dimensions.height / 2;
    } else {
      touchX = touch.locationX ?? event.pageX;
      touchY = touch.locationY ?? event.pageY;
    }

    // Get the size of the button to determine how big the ripple should be
    const size = centered
      ? // If ripple is always centered, we don't need to make it too big
        Math.min(dimensions.width, dimensions.height) * 1.25
      : // Otherwise make it twice as big so clicking on one end spreads ripple to other
        Math.max(dimensions.width, dimensions.height) * 2;

    // Create a container for our ripple effect so we don't need to change the parent's style
    const container = document.createElement('span');

    container.dataset.anuRipple = '';

    Object.assign(container.style, {
      position: 'absolute',
      pointerEvents: 'none',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      borderTopLeftRadius: buttonStyle.borderTopLeftRadius,
      borderTopRightRadius: buttonStyle.borderTopRightRadius,
      borderBottomRightRadius: buttonStyle.borderBottomRightRadius,
      borderBottomLeftRadius: buttonStyle.borderBottomLeftRadius,
      overflow: centered ? 'visible' : 'hidden',
    });

    // Create span to show the ripple effect
    const ripple = document.createElement('span');

    Object.assign(ripple.style, {
      position: 'absolute',
      pointerEvents: 'none',
      backgroundColor: calculatedRippleColor,
      borderRadius: '50%',

      /* Transition configuration */
      transitionProperty: 'transform opacity',
      transitionDuration: `${Math.min(size * 1.5, 350)}ms`,
      transitionTimingFunction: 'linear',
      transformOrigin: 'center',

      /* We'll animate these properties */
      transform: 'translate3d(-50%, -50%, 0) scale3d(0.1, 0.1, 0.1)',
      opacity: '0.5',

      // Position the ripple where cursor was
      left: `${touchX}px`,
      top: `${touchY}px`,
      width: `${size}px`,
      height: `${size}px`,
    });

    // Finally, append it to DOM
    container.append(ripple);
    button.append(container);

    // rAF runs in the same frame as the event handler
    // Use double rAF to ensure the transition class is added in next frame
    // This will make sure that the transition animation is triggered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.assign(ripple.style, {
          transform: 'translate3d(-50%, -50%, 0) scale3d(1, 1, 1)',
          opacity: '1',
        });
      });
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePressOut = (event: any) => {
    onPressOut?.(event);

    const containers = event.currentTarget.querySelectorAll('[data-anu-ripple]') as HTMLElement[];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        for (const container of containers) {
          const ripple = container.firstChild as HTMLSpanElement;

          Object.assign(ripple.style, {
            transitionDuration: '250ms',
            opacity: 0,
          });

          // Finally remove the span after the transition
          setTimeout(() => {
            const { parentNode } = container;

            if (parentNode) {
              container.remove();
            }
          }, 500);
        }
      });
    });
  };

  const hasPassedTouchHandler = hasTouchHandler({
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
  });

  const disabled = disabledProp || !hasPassedTouchHandler;

  return (
    <Pressable
      {...rest}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={getCombinedStylesForView({ ...touchableStyle, ...(borderless ? borderlessStyle : {}) }, style)}
    >
      {React.Children.only(children)}
    </Pressable>
  );
};

export default TouchableRipple;

/* eslint-disable react-hooks/exhaustive-deps */
import { getCombinedStylesForText, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Button, Container, IconButton, Typography } from 'anu/lib';
import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { useSnackbarContext } from '../../context';
import { SnackbarProps } from '../../types';
import { getSnackbarStyle } from '../../utils';
import { defaultProps } from './default';

const DURATION = 300;
const DELAY = 0;

const Snackbar = () => {
  const { close, currentSnackBar, defaultSnackbarConfiguration } = useSnackbarContext();

  const [finalProps, setFinalProps] = useState<SnackbarProps | undefined>({
    ...defaultProps,
    ...defaultSnackbarConfiguration,
    ...currentSnackBar,
  });

  const [, setValue] = useState(0);

  const theme = useTheme();
  const opacity = useRef(new Animated.Value(0)).current;

  const { containerStyle, snackbarStyle, textStyle, actionStyle, actionLabelStyle, iconStyle, textContainerStyle } =
    getSnackbarStyle(theme, finalProps);

  useEffect(() => {
    opacity.addListener((arguments_) => setValue(arguments_.value));

    return () => {
      opacity.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (currentSnackBar)
      setFinalProps({
        ...defaultProps,
        ...defaultSnackbarConfiguration,
        ...currentSnackBar,
      });
    // eslint-disable-next-line unicorn/no-useless-undefined
    else setFinalProps(undefined);
  }, [currentSnackBar, defaultSnackbarConfiguration]);

  useEffect(() => {
    if (finalProps !== undefined) {
      fadeIn();
      const timer = setTimeout(() => {
        fadeOut();
      }, finalProps.duration);

      const closeTimer = setTimeout(() => {
        close();
      }, (finalProps.duration ?? 0) + 400);

      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }
  }, [finalProps]);

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: DURATION,
      useNativeDriver: true,
      delay: DELAY,
    }).start();
  };

  return finalProps ? (
    <Container disableGutters style={containerStyle}>
      <Container disableGutters sx={{ minWidth: [300, '80%', '80%'], maxWidth: '100%' }}>
        <Animated.View style={[{ opacity: opacity }, ...getCombinedStylesForView(snackbarStyle, finalProps.style)]}>
          <Container disableGutters style={textContainerStyle}>
            <Typography.Body style={textStyle} numberOfLines={finalProps.numberOfLines}>
              {finalProps.content}
            </Typography.Body>
          </Container>
          {finalProps.action ? (
            <Button.Text
              {...finalProps.action}
              labelStyle={getCombinedStylesForText(actionLabelStyle, finalProps.action.labelStyle)}
              style={{ ...actionStyle, ...finalProps.action.style }}
            />
          ) : null}
          {finalProps.numberOfLines !== 2 && finalProps.icon ? (
            <IconButton
              {...finalProps.icon}
              style={{ ...iconStyle, ...finalProps.icon.style }}
              type='standard'
            />
          ) : null}
        </Animated.View>
      </Container>
    </Container>
  ) : null;
};

export default Snackbar;

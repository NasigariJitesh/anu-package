import { getCombinedStylesForText, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config/dripsy/theme';
import { Container } from 'anu/lib/primitives/layout';
import Typography from 'anu/lib/primitives/typography';
import React from 'react';
import { StyleSheet } from 'react-native';

import { DividerProps } from '../types';
import { defaultTextStyle, getDividerStyle, getInnerContainerStyle } from '../utils';
import { defaultProps } from './default';

/**
 * Component for Divider
 *
 * @param {DividerProps} props - all the properties related to the divider component
 */
const Divider = (props: DividerProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };
  //@ts-expect-error
  const { style, containerStyle } = getDividerStyle(finalProps, theme);

  const { height, width, ...customStyle } = StyleSheet.flatten(finalProps.style ?? {});

  return (
    <Container disableGutters style={containerStyle}>
      <Container disableGutters style={getCombinedStylesForView(style, customStyle)}>
        {/* 
        // @ts-expect-error the finalProps will be of Divider props  */}
        <Container disableGutters style={getInnerContainerStyle(finalProps, theme)}>
          {finalProps.text ? (
            // @ts-expect-error the finalProps will be of Divider props
            <Typography.Body style={getCombinedStylesForText(defaultTextStyle(finalProps, theme), props.textStyle)}>
              {finalProps.text}
            </Typography.Body>
          ) : null}

          {finalProps.children}
        </Container>
      </Container>
    </Container>
  );
};

export default Divider;

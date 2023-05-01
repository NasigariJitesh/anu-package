import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config/dripsy/theme';
import { Container } from 'anu/lib/primitives/layout';
import Typography from 'anu/lib/primitives/typography';
import React from 'react';

import { DividerProps } from '../types';
import { childrenContainerStyle, defaultTextStyle, getDividerStyle } from '../utils';
import { defaultProps } from './default';

/**
 * Component for Divider
 *
 * @param {DividerProps} props - all the properties related to the divider component
 */
const Divider = (props: DividerProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };
  const { sx, style } = getDividerStyle(finalProps, theme);

  return (
    <Container disableGutters style={style} sx={sx}>
      {finalProps.text ? (
        <Typography.Body style={getCombinedStylesForText(defaultTextStyle(theme), props.textStyle)}>
          {finalProps.text}
        </Typography.Body>
      ) : null}

      {finalProps.children ? (
        <Container disableGutters sx={childrenContainerStyle(theme)}>
          {finalProps.children}
        </Container>
      ) : null}
    </Container>
  );
};

export default Divider;

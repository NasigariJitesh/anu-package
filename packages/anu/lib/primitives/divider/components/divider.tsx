import { getCombinedStylesForText } from 'common/utils';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
import React from 'react';

import { DividerProps } from '../types';
import { getDividerStyle } from '../utils';
import { defaultProps, defaultTextStyle } from './default';

/**
 * Component for Divider
 *
 * @param {Partial<DividerProps>} props - all the properties related to the divider component
 */
const Divider = (props: Partial<DividerProps>) => {
  const finalProps = { ...defaultProps, ...props };
  const { sx, style } = getDividerStyle(finalProps);

  return (
    <Container style={style} sx={sx}>
      {finalProps.text ? (
        <Typography.Body style={getCombinedStylesForText(defaultTextStyle, props.textStyle)}>
          {finalProps.text}
        </Typography.Body>
      ) : null}
    </Container>
  );
};

export default Divider;

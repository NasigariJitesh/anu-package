import React from 'react';

import { getCombinedStylesForText } from '../../../../common/utils';
import { TextField } from '../../../primitives';
import { TextAreaProps } from '../types/text-area';
import { getTextAreaStyles } from '../utils';
import { defaultProps } from './default';

const TextArea = (props: TextAreaProps) => {
  const finalProps = { ...defaultProps, ...props };

  const styles = getTextAreaStyles();
  return (
    <TextField
      {...finalProps}
      style={{ ...styles.style, ...finalProps.style }}
      textStyle={getCombinedStylesForText(styles.textStyle, finalProps.textStyle)}
      multiline={true}
      hideClearButton
    />
  );
};

export default TextArea;

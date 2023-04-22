/* eslint-disable react/display-name */
import { TextField, TextFieldReferenceProps } from 'anu/lib/primitives';
import { forwardRef, useEffect, useState } from 'react';

import { TextFieldWithMaskProps } from '../../types';
import { enhanceTextWithMask } from '../../utils';

/**
 *
 * @param props
 * @param reference
 */
const TextFieldWithMask = forwardRef<TextFieldReferenceProps, TextFieldWithMaskProps>((props, reference) => {
  const { value, onChangeText, onChange, mask, disabled, ...restOfTheProps } = props;

  const [controlledValue, setControlledValue] = useState<string>(value || '');

  const onInnerChange = (text: string) => {
    if (text.length === mask.length && onChangeText) onChangeText(text);
    setControlledValue(text);
  };

  const onInnerBlur = () => {
    const enhancedText = enhanceTextWithMask(value, mask, controlledValue);
    setControlledValue(enhancedText);
  };

  useEffect(() => {
    setControlledValue(value || '');
  }, [value]);

  return (
    <TextField
      ref={reference}
      {...restOfTheProps}
      disabled={disabled}
      value={controlledValue}
      onChangeText={onInnerChange}
      onChange={(event) => {
        if (onChange) onChange(event);
      }}
      onBlur={onInnerBlur}
    />
  );
});

export default TextFieldWithMask;

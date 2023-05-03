/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, TouchableRipple } from 'anu/lib';
import React, { forwardRef, useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { useInputColors } from '../../hooks';
import { inputTypes, TimeInputProps } from '../../types';
import { getTimeInputStyles } from '../../utils';

/**
 *
 * @param props
 * @param reference
 */
const TimeInput = forwardRef<TextInput, TimeInputProps>((props, reference) => {
  const { value, clockType, pressed, onPress, onChanged, inputType, inputStyle, ...rest } = props;

  const [controlledValue, setControlledValue] = React.useState<string>(value.toString());

  const onInnerChange = (text: string) => {
    setControlledValue(text);
    if (text !== '' && text !== '0') {
      onChanged(Number(text));
    }
  };

  useEffect(() => {
    setControlledValue(value.toString());
  }, [value]);

  const [inputFocused, setInputFocused] = React.useState<boolean>(false);

  const highlighted = inputType === inputTypes.picker ? pressed : inputFocused;

  const { color, backgroundColor } = useInputColors(highlighted);

  const theme = useTheme();
  const styles = getTimeInputStyles(theme, color, backgroundColor, highlighted, inputType);

  let formattedValue = controlledValue;

  if (!inputFocused) {
    formattedValue = controlledValue.length === 1 ? '0' + controlledValue.toString() : controlledValue.toString();
  }

  return (
    <Container disableGutters style={styles.root}>
      <TextInput
        ref={reference}
        style={getCombinedStylesForText(styles.input, inputStyle)}
        value={formattedValue}
        maxLength={2}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        keyboardType='number-pad'
        onChangeText={onInnerChange}
        {...rest}
      />
      {onPress && inputType === inputTypes.picker ? (
        <TouchableRipple style={[StyleSheet.absoluteFill, styles.buttonOverlay]} onPress={() => onPress(clockType)}>
          <Container disableGutters />
        </TouchableRipple>
      ) : null}
    </Container>
  );
});

export default TimeInput;

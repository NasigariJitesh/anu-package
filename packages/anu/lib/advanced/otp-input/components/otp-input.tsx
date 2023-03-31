/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, TextField, TextFieldReferenceProps, Typography } from 'lib';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { OTPInputProps } from '../types';
import { getErrorStyle, getOTPFieldStyle, getOTPTextInputStyle } from '../utils';
import { defaultProps } from './default';

interface IndividualOTPFieldProps {
  inputProps: OTPInputProps;
  references: React.MutableRefObject<(TextFieldReferenceProps | null)[]>;
  value: string;
  index: number;
  textInputStyle: StyleProp<TextStyle>;
  onValueChangeHandler: (value: string, index: number) => void;
}

/**
 * The function generate initial otp value array
 *
 * @param {string}value - value given to the otp field
 * @param {number}numberOfDigits -n total number of digits in the otp
 * @returns {string[]}array of length equal to number of digits in otp containing either each digit or empty space
 */
const getInitialArray = (value: string, numberOfDigits: number) => {
  const array: string[] = Array.from({ length: numberOfDigits });
  for (const [index, char] of [...value].entries()) {
    if (index < numberOfDigits) array.splice(index, 1, char);
  }
  return array;
};

/**
 * To validate the given input
 *
 * @param {string}value - value entered into input
 * @param {'alphabetic' | 'alphanumeric' | 'numeric'}type - the type of otp
 * @returns {boolean} - whether the value is valid according to type of otp
 */
const validateValue = (value: string, type?: 'alphabetic' | 'alphanumeric' | 'numeric') => {
  if (value === '') return true;

  switch (type) {
    case 'alphanumeric': {
      return /\b[\dA-Za-z]\b/.test(value);
    }
    case 'alphabetic': {
      return /\b[A-Za-z]\b/.test(value);
    }
    case 'numeric': {
      return /\b\d\b/.test(value);
    }
  }
};

/**
 * Individual OTP Field
 *
 * @param param0 - parameters for each otp field
 * @param param0.inputProps - properties of the otp input component
 * @param param0.references - references of the text fields used in the otp input
 * @param param0.value - the value of the otp digit
 * @param param0.index - index of the digit in otp value
 * @param param0.textInputStyle - style for the text input field
 * @param param0.onValueChangeHandler - the handle for the callback when any value is changed in text field
 */
const IndividualOTPField = ({
  inputProps,
  references,
  value,
  index,
  textInputStyle,
  onValueChangeHandler,
}: IndividualOTPFieldProps) => {
  const style = getOTPFieldStyle(inputProps.numberOfDigits, index);

  return (
    <TextField
      testID={inputProps.testID ? inputProps.testID + '-field-' + (index + 1) : undefined}
      ref={(element) => references.current.push(element)}
      key={index}
      value={value}
      secureTextEntry={inputProps.hideValue ?? false}
      variant={inputProps.variant}
      style={{ ...style, ...inputProps.style }}
      textInputStyle={textInputStyle}
      label=''
      onChangeText={(text) => onValueChangeHandler(text, index)}
      error={inputProps.error}
      noDefaultErrorMessage={true}
    />
  );
};

/**
 * OTP input component
 *
 * @param props - properties for the OTP Input
 */
const OTPInput = forwardRef<TextFieldReferenceProps, OTPInputProps>((props, reference) => {
  const finalProps = { ...defaultProps, ...props };
  const theme = useTheme();
  const [otpValue, setOTPValue] = useState<Array<string>>(getInitialArray(finalProps.value, finalProps.numberOfDigits));

  const references = useRef<(TextFieldReferenceProps | null)[]>([]);
  const textInputStyle = getOTPTextInputStyle();
  const errorStyle = getErrorStyle(theme);

  const focus = useCallback(() => {
    references.current[0]?.focus();
  }, [references]);

  const blur = useCallback(() => {
    for (const [index] of otpValue.entries()) {
      references.current[index]?.blur();
    }
  }, [references, otpValue]);

  useImperativeHandle(reference, () => ({ focus, blur }), [focus, blur]);

  const onValueChangeHandler = (value: string, index: number) => {
    const recentValue = value.slice(-1);
    const array = [...otpValue];

    if (validateValue(recentValue, finalProps.type)) {
      if (recentValue == '') {
        if (index === 0) references.current[0]?.focus();
        else references.current[index - 1]?.focus();
      } else {
        if (index === finalProps.numberOfDigits - 1) references.current[index]?.blur();
        else references.current[index + 1]?.focus();
      }

      array.splice(index, 1, recentValue);

      setOTPValue([...array]);

      if (finalProps.onValueChange) finalProps.onValueChange(array.join(''));
    }
  };

  return (
    <Container disableGutters testID={props.testID} style={props.containerStyle}>
      <Container disableGutters flexDirection='row'>
        {otpValue.map((value, index) => (
          <IndividualOTPField
            index={index}
            inputProps={finalProps}
            onValueChangeHandler={onValueChangeHandler}
            references={references}
            textInputStyle={textInputStyle}
            value={value}
            key={index}
          />
        ))}
      </Container>
      {props.error &&
        props.errorMessage?.map((error, index) => (
          <Typography.Body key={index} style={getCombinedStylesForText(errorStyle, props.errorMessageStyle)}>
            {error}
          </Typography.Body>
        ))}
    </Container>
  );
});

export default OTPInput;

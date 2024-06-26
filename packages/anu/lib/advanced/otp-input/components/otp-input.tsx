/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import { getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, TextField, TextFieldReferenceProps, Typography } from 'anu/lib';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { NativeSyntheticEvent, StyleProp, TextInputKeyPressEventData, TextStyle } from 'react-native';

import { OTPInputProps } from '../types';
import { getErrorStyle, getOTPTextInputStyle } from '../utils';
import { defaultProps } from './default';

interface IndividualOTPFieldProps {
  inputProps: OTPInputProps;
  references: React.MutableRefObject<(TextFieldReferenceProps | null)[]>;
  value: string;
  index: number;
  textInputStyle: StyleProp<TextStyle>;
  onValueChangeHandler: (value: string, index: number) => void;
  onSubmitHandler: () => void;
}

/**
 * The function generate initial otp value array
 *
 * @param {string}value - value given to the otp field
 * @param {number}numberOfDigits - total number of digits in the otp
 * @param {'alphabetic' | 'alphanumeric' | 'numeric'}type - type of the otp field
 * @returns {string[]}array of length equal to number of digits in otp containing either each digit or empty space
 */
const getInitialArray = (value: string, numberOfDigits: number, type?: 'alphabetic' | 'alphanumeric' | 'numeric') => {
  const array: string[] = Array.from({ length: numberOfDigits });

  const newArray = [...array];

  for (const [index, char] of newArray.entries()) {
    array.splice(index, 1, char ?? '');
  }

  for (const [index, char] of [...value].entries()) {
    if (index < numberOfDigits && validateValue(char, type)) array.splice(index, 1, char);
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
 * To validate the given input
 *
 * @param {string}value - value entered into input
 * @param {'alphabetic' | 'alphanumeric' | 'numeric'}type - the type of otp
 * @returns {boolean} - whether the value is valid according to type of otp
 */
const validateString = (value: string, type?: 'alphabetic' | 'alphanumeric' | 'numeric') => {
  switch (type) {
    case 'alphanumeric': {
      return /^[\dA-Za-z]*$/.test(value);
    }
    case 'alphabetic': {
      return /^[A-Za-z]*$/.test(value);
    }
    case 'numeric': {
      // eslint-disable-next-line unicorn/better-regex
      return /^[0-9]*$/.test(value);
    }
  }
};

const getKeyboardType = (type?: 'alphabetic' | 'alphanumeric' | 'numeric') => {
  if (type === 'alphabetic') return 'default';
  else if (type === 'alphanumeric') return 'default';
  else return 'number-pad';
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
 * @param param0.onSubmitHandler
 */
const IndividualOTPField = ({
  inputProps,
  references,
  value,
  index,
  textInputStyle,
  onValueChangeHandler,
  onSubmitHandler,
}: IndividualOTPFieldProps) => {
  const onKeyPressHandler = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, digit: string) => {
    if (digit === '' && event.nativeEvent.key == 'Backspace') {
      if (index === 0) references.current[0]?.focus();
      else references.current[index - 1]?.focus();
    } else if (event.nativeEvent.key == 'Enter') onSubmitHandler();
  };
  return (
    <Container
      disableGutters
      flexDirection='row'
      key={index}
      maxWidth={(inputProps.size ?? 40) + (inputProps.spacing ?? 0)}
    >
      <TextField
        testID={inputProps.testID ? inputProps.testID + '-field-' + (index + 1) : undefined}
        ref={(element) => references.current.push(element)}
        key={index}
        value={value}
        secureTextEntry={inputProps.hideValue ?? false}
        variant={inputProps.variant}
        style={{ ...inputProps.style, height: inputProps.size ?? 40, width: inputProps.size ?? 40 }}
        textStyle={getCombinedStylesForText(textInputStyle, inputProps.textStyle)}
        label=''
        disableLabelAnimation
        onChangeText={(text) => onValueChangeHandler(text, index)}
        error={inputProps.error}
        noDefaultErrorMessage={true}
        onKeyPress={(event) => onKeyPressHandler(event, value)}
        disabled={inputProps.disabled}
        hideClearButton
        textContentType={inputProps.textContentType || 'oneTimeCode'}
        keyboardType={inputProps.keyboardType || getKeyboardType(inputProps.type)}
      />
      {inputProps.spacing !== undefined && index < inputProps.numberOfDigits - 1 ? (
        <Container disableGutters width={inputProps.spacing} style={{ height: inputProps.size ?? 40 }} />
      ) : null}
    </Container>
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

  const [otpValue, setOTPValue] = useState<Array<string>>(
    getInitialArray(finalProps.value, finalProps.numberOfDigits, finalProps.type),
  );

  const references = useRef<(TextFieldReferenceProps | null)[]>([]);
  const textInputStyle = getOTPTextInputStyle();
  const errorStyle = getErrorStyle(theme);

  useEffect(() => {
    setOTPValue(getInitialArray(finalProps.value, finalProps.numberOfDigits, finalProps.type));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalProps.value]);

  const focus = useCallback(() => {
    references.current[0]?.focus();
  }, [references]);

  const blur = useCallback(() => {
    for (const [index] of otpValue.entries()) {
      references.current[index]?.blur();
    }
  }, [references, otpValue]);

  useImperativeHandle(reference, () => ({ focus, blur }), [focus, blur]);

  const onValueChangeHandler = async (value: string, index: number) => {
    const array = [...otpValue];

    if (value.length <= 1) {
      //check if a digit is being deleted or a new digit is being entered or a digit is entered to replace in already existing digits place

      const recentValue = value.slice(-1);

      if (validateValue(recentValue, finalProps.type)) {
        if (recentValue !== '') {
          if (index === finalProps.numberOfDigits - 1) references.current[index]?.blur();
          else references.current[index + 1]?.focus();
        }

        array.splice(index, 1, recentValue);
        setOTPValue([...array]);
      }
      if (finalProps.onValueChange) finalProps.onValueChange(array.join(''));
    } else {
      //trim the already existing digit form the value
      if (otpValue[index] !== '')
        if (otpValue[index] === value[0]) value = value.slice(1);
        else if (otpValue[index] === value[value.length - 1]) value = value.slice(0, -1);

      value = value.slice(0, finalProps.numberOfDigits);

      if (validateString(value, finalProps.type)) {
        array.splice(index, value.length, ...value);
        if (index + value.length === finalProps.numberOfDigits) references.current[index]?.blur();
        else references.current[index + value.length]?.focus();
      }
    }

    setOTPValue([...array]);

    if (finalProps.onValueChange) finalProps.onValueChange(array.join(''));
  };

  const onSubmitHandler = () => {
    if (finalProps.onSubmit) finalProps.onSubmit(otpValue.join(''));
  };

  return (
    <Container disableGutters testID={finalProps.testID} width={finalProps.width}>
      <Container
        disableGutters
        flexDirection='row'
        justify={finalProps.spacing === undefined ? 'space-between' : 'flex-start'}
        align='center'
        width={finalProps.width}
      >
        {otpValue.map((value, index) => (
          <IndividualOTPField
            index={index}
            inputProps={finalProps}
            onValueChangeHandler={onValueChangeHandler}
            references={references}
            textInputStyle={textInputStyle}
            value={value}
            key={index}
            onSubmitHandler={onSubmitHandler}
          />
        ))}
      </Container>
      {finalProps.error &&
        finalProps.errorMessage?.map((error, index) => (
          <Typography.Body
            //@ts-ignore
            dataSet={finalProps.dataSets?.errorText}
            key={index}
            style={getCombinedStylesForText(errorStyle, finalProps.errorMessageStyle)}
          >
            {error}
          </Typography.Body>
        ))}
    </Container>
  );
});

export default OTPInput;

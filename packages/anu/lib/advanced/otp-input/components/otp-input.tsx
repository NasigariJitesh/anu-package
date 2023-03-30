import { Container, TextField, TextFieldReferenceProps } from 'lib';
import { useEffect, useRef, useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { OTPInputProps } from '../types';
import { getOTPFieldStyle, getOTPTextInputStyle } from '../utils';
import { defaultProps } from './default';

interface IndividualOTPFieldProps {
  inputProps: OTPInputProps;
  references: React.MutableRefObject<(TextFieldReferenceProps | null)[]>;
  value: string;
  index: number;
  textInputStyle: StyleProp<TextStyle>;
  onValueChangeHandler: (value: string, index: number) => void;
}

const getInitialArray = (value: string, numberOfDigits: number) => {
  const array: string[] = Array.from({ length: numberOfDigits });
  for (const [index, char] of [...value].entries()) {
    if (index < numberOfDigits) array.splice(index, 1, char);
  }
  return array;
};

const validateValue = (value: string, type?: 'alphabetic' | 'alphanumeric' | 'numeric') => {
  switch (type) {
    case 'alphanumeric': {
      return /[\da-z]?$/gi.test(value);
    }
    case 'alphabetic': {
      return /[a-z]?$/gi.test(value);
    }
    case 'numeric': {
      return /\d?$/.test(value);
    }
    default: {
      return false;
    }
  }
};

const IndividualOTPField = ({
  inputProps,
  references,
  value,
  index,
  textInputStyle,
  onValueChangeHandler,
}: IndividualOTPFieldProps) => {
  const style = getOTPFieldStyle(inputProps.numberOfDigits, index);
  const [char, setChar] = useState(value);
  useEffect(() => {
    setChar(value);
  }, [value]);
  console.log(char);
  return (
    <TextField
      ref={(element) => references.current.push(element)}
      key={index}
      value={char}
      variant={inputProps.variant}
      style={{ ...style, ...inputProps.style }}
      textInputStyle={textInputStyle}
      label=''
      onChangeText={(text) => onValueChangeHandler(text, index)}
    />
  );
};

const OTPInput = (props: OTPInputProps) => {
  const finalProps = { ...defaultProps, ...props };
  const [otpValue, setOTPValue] = useState<Array<string>>(getInitialArray(finalProps.value, finalProps.numberOfDigits));

  const references = useRef<(TextFieldReferenceProps | null)[]>([]);
  const textInputStyle = getOTPTextInputStyle();

  const onValueChangeHandler = (value: string, index: number) => {
    const recentValue = value.slice(-1);
    const array = [...otpValue];

    if (validateValue(recentValue, finalProps.type)) {
      if (recentValue == '') {
        if (index === 0) references.current[0]?.focus();
        else references.current[index - 1]?.focus();
      } else if (recentValue != '') {
        if (index === finalProps.numberOfDigits - 1) references.current[index]?.blur();
        else references.current[index + 1]?.focus();
      }

      array.splice(index, 1, recentValue);

      setOTPValue([...array]);

      if (finalProps.onValueChange) finalProps.onValueChange(array.join(''));
    } else {
      array.splice(index, 1, '');
      setOTPValue([...array]);
    }
  };

  return (
    <Container disableGutters style={props.containerStyle}>
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
    </Container>
  );
};

export default OTPInput;

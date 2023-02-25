import { generateHoverStyles } from 'common/utils';
import { Pressable, TextInput, useSx } from 'dripsy';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
import { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  PressableStateCallbackType,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import { TextFieldProps } from '../../types';
import {
  getErrors,
  getErrorStyle,
  getLeadingContainerStyle,
  getSupportingTextStyle,
  getTextFieldContainerStyle,
  getTextFieldStyles,
  getTrailingContainerStyle,
} from '../../utils';
import { defaultProps } from './default';
import TextFieldLabel from './label';

/**
 * the text field component
 *
 * @param {Partial<TextFieldProps>} props - the properties of the text field component
 */
const TextField = (props: Partial<TextFieldProps>) => {
  const [focus, setOnFocus] = useState<PressableStateCallbackType>();
  const [height, setHeight] = useState(56);
  const [value, setValue] = useState(props.value);

  const pressableReference = useRef<View | null>(null);
  const textInputReference = useRef<RNTextInput | null>(null);

  const finalProps = { ...defaultProps, ...props };
  const { variant, sx, ...componentProps } = finalProps;

  const style = getTextFieldStyles();
  const containerStyle = getTextFieldContainerStyle(finalProps);
  const leadingIconContainerStyle = getLeadingContainerStyle();
  const trailingIconContainerStyle = getTrailingContainerStyle();
  const errorStyle = getErrorStyle();
  const supportingTextStyle = getSupportingTextStyle();

  const errors = getErrors(props.errorMessage);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, containerStyle, useSx);
  };

  const onTextChangeHandler = (input: string) => {
    setValue(input);
    if (props.onChangeText) props.onChangeText(input);
  };

  const onTextInputFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setOnFocus(() => ({ focused: true, pressed: true }));
    if (props.onFocus) props.onFocus(event);
  };

  const onTextInputBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setOnFocus(() => ({ focused: false, pressed: false }));
    if (props.onBlur) props.onBlur(event);
  };

  useEffect(() => {
    pressableReference.current?.measure((x, y, width, h) => {
      setHeight(h);
    });
  }, []);

  return (
    <>
      <Pressable
        ref={pressableReference}
        accessibilityRole='button'
        style={generateStyles}
        {...props.pressableProps}
        disabled={props.disabled}
      >
        <Container disableGutters flex='row' sx={{ backgroundColor: 'inherit', position: 'relative' }}>
          {/* TODO: Put the icon components in another file */}
          {props.leadingIcon ? (
            <Container disableGutters style={leadingIconContainerStyle}>
              {props.leadingIcon}
            </Container>
          ) : null}
          <TextFieldLabel
            {...finalProps}
            textInputRef={textInputReference}
            height={height}
            states={focus}
            value={value}
          />
          <TextInput
            ref={textInputReference}
            onChangeText={onTextChangeHandler}
            onFocus={onTextInputFocus}
            onBlur={onTextInputBlur}
            {...componentProps}
            placeholder={undefined}
            style={[style, props.style]}
          />
          {props.trailingIcon ? (
            <Container disableGutters style={trailingIconContainerStyle}>
              {props.trailingIcon}
            </Container>
          ) : null}
        </Container>
      </Pressable>
      {props?.supportingText ? (
        <Typography.Body style={[supportingTextStyle, props.supportingTextStyle]}>
          {props?.supportingText}
        </Typography.Body>
      ) : null}
      {errors?.map((error, index) => (
        <Typography.Body key={index} style={[errorStyle, props.errorMessageStyle]}>
          {error}
        </Typography.Body>
      ))}
    </>
  );
};

export default TextField;

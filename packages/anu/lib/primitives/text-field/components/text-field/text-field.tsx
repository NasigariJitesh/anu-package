import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { useTheme } from 'config/dripsy';
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
  getErrorIcon,
  getErrors,
  getErrorStyle,
  getInnerContainerStyle,
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
  const [focus, setOnFocus] = useState<PressableStateCallbackType>({ pressed: false });

  const pressableReference = useRef<View | null>(null);
  const textInputReference = useRef<RNTextInput | null>(null);

  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };
  const { variant, sx, ...componentProps } = finalProps;

  const [value, setValue] = useState(finalProps.value);
  const [isTextFieldVisible, toggleTextFieldVisible] = useState(!!value && !props.disabled);

  const style = getTextFieldStyles(theme, finalProps);
  const containerStyle = getTextFieldContainerStyle(finalProps, theme);

  const leadingIconContainerStyle = getLeadingContainerStyle(finalProps);
  const trailingIconContainerStyle = getTrailingContainerStyle(finalProps);
  const innerContainerStyle = getInnerContainerStyle();
  const errorStyle = getErrorStyle(theme);
  const supportingTextStyle = getSupportingTextStyle(theme);
  const onFocusStyles =
    isTextFieldVisible || value ? ({ paddingTop: variant === 'filled' ? 8 : 0 } as const) : ({ height: 0 } as const);

  const [height, setHeight] = useState(containerStyle.height as number);
  const [errors, setErrors] = useState(getErrors(props.errorMessage));

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
    toggleTextFieldVisible(false);
  };

  const onTextInputPressedHandler = () => {
    if (!isTextFieldVisible) {
      toggleTextFieldVisible(true);
      setOnFocus(() => ({ focused: true, pressed: true }));

      textInputReference.current?.focus();
    }
  };

  useEffect(() => {
    pressableReference.current?.measure((x, y, w, h) => {
      setHeight(h);
    });
  }, []);

  useEffect(() => {
    if (errors?.length <= 0) {
      const errorArray = [...errors];
      errorArray.push('Please provide a valid input');

      setErrors([...errorArray]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.error]);

  return (
    <Container disableGutters style={finalProps.containerStyle}>
      <Pressable
        ref={pressableReference}
        accessibilityRole='none'
        style={(state) => generateStyles({ ...focus, hovered: state.hovered })}
        {...finalProps.pressableProps}
        disabled={finalProps.disabled}
        onPress={onTextInputPressedHandler}
      >
        <Container disableGutters flexDirection='row' sx={innerContainerStyle}>
          {/* TODO: Put the icon components in another file */}
          {finalProps.leadingIcon ? (
            <Container disableGutters style={leadingIconContainerStyle}>
              {finalProps.leadingIcon}
            </Container>
          ) : null}
          <Container disableGutters flexDirection='column' justify='center' sx={innerContainerStyle}>
            <TextFieldLabel
              {...finalProps}
              height={height}
              textInputRef={textInputReference}
              states={focus}
              value={value}
              isFocused={isTextFieldVisible}
              toggleIsFocused={toggleTextFieldVisible}
            />
            <TextInput
              ref={textInputReference}
              {...componentProps}
              value={value}
              onChangeText={onTextChangeHandler}
              onFocus={onTextInputFocus}
              onBlur={onTextInputBlur}
              placeholder={undefined}
              style={[onFocusStyles, getCombinedStylesForText(style, finalProps.textInputStyle)]}
            />
          </Container>
          {finalProps.error ? (
            <Container disableGutters style={trailingIconContainerStyle}>
              {getErrorIcon()}
            </Container>
          ) : null}
          {finalProps.trailingIcon && !finalProps.error ? (
            <Container disableGutters style={trailingIconContainerStyle}>
              {finalProps.trailingIcon}
            </Container>
          ) : null}
        </Container>
      </Pressable>
      {finalProps?.supportingText && !finalProps.error ? (
        <Typography.Body style={getCombinedStylesForText(supportingTextStyle, props.supportingTextStyle)}>
          {finalProps?.supportingText}
        </Typography.Body>
      ) : null}
      {props.error &&
        errors?.map((error, index) => (
          <Typography.Body key={index} style={getCombinedStylesForText(errorStyle, props.errorMessageStyle)}>
            {error}
          </Typography.Body>
        ))}
    </Container>
  );
};

export default TextField;

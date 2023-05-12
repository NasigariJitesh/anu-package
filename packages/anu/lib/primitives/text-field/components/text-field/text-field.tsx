/* eslint-disable react/display-name */
import { generateHoverStyles, getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { IconButton } from 'anu/lib';
import { Container } from 'anu/lib/primitives/layout';
import Typography from 'anu/lib/primitives/typography';
import { Pressable, TextInput, useSx } from 'dripsy';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  PressableStateCallbackType,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

import { TextFieldProps, TextFieldReferenceProps } from '../../types';
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
  getUnanimatedLabelStyles,
} from '../../utils';
import { defaultProps } from './default';
import TextFieldLabel from './label';

const toggleTextFieldVisibility = (props: Partial<TextFieldProps>) => {
  if (props.autoFocus) return true;
  if (props.disabled && props.value) return true;
  if (props.value) return true;

  return false;
};

/**
 * the text field component
 *
 * @param {Partial<TextFieldProps>} props - the properties of the text field component
 */
const TextField = forwardRef<TextFieldReferenceProps, Partial<TextFieldProps> & { value: string }>(
  (props, reference) => {
    const [focusState, setOnFocus] = useState<PressableStateCallbackType>({ pressed: false });

    const pressableReference = useRef<View | null>(null);
    const textInputReference = useRef<RNTextInput | null>(null);

    const theme = useTheme();

    const finalProps = { ...defaultProps, ...props };
    const { variant, sx, value, ...componentProps } = finalProps;

    const [isTextFieldVisible, toggleTextFieldVisible] = useState(toggleTextFieldVisibility(props));

    const style = getTextFieldStyles(theme, finalProps);
    const containerStyle = getTextFieldContainerStyle(finalProps, theme);

    const leadingIconContainerStyle = getLeadingContainerStyle(finalProps);
    const trailingIconContainerStyle = getTrailingContainerStyle(finalProps);
    const innerContainerStyle = getInnerContainerStyle();
    const errorStyle = getErrorStyle(theme);
    const supportingTextStyle = getSupportingTextStyle(theme);
    const { labelContainerStyle, labelTextStyle } = getUnanimatedLabelStyles();

    const onFocusStyles =
      isTextFieldVisible || value !== '' || props.label !== ''
        ? ({ paddingTop: variant === 'filled' && props.label && !props.disableLabelAnimation ? 14 : 0 } as const)
        : ({ height: 0 } as const);

    const [height, setHeight] = useState(containerStyle.height as number);
    const [errors, setErrors] = useState(getErrors(props.errorMessage));

    const focus = useCallback(() => {
      textInputReference.current?.focus();
      toggleTextFieldVisible(true);
      setOnFocus(() => ({ focused: true, pressed: true }));
    }, [textInputReference]);

    const blur = useCallback(() => {
      textInputReference.current?.blur();
      toggleTextFieldVisible(false);
      setOnFocus(() => ({ focused: false, pressed: false }));
    }, [textInputReference]);

    useImperativeHandle(reference, () => ({ focus, blur }), [focus, blur]);

    useEffect(() => {
      pressableReference.current?.measure((_x, _y, _w, h) => {
        setHeight(h);
      });
    }, []);

    useEffect(() => {
      if (errors?.length <= 0 && !finalProps.noDefaultErrorMessage) {
        const errorArray = [...errors];
        errorArray.push('Please provide a valid input');

        setErrors([...errorArray]);
      } else setErrors(getErrors(props.errorMessage));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.error, props.errorMessage]);

    const generateStyles = (state: PressableStateCallbackType) => {
      return generateHoverStyles(state, containerStyle, useSx);
    };

    const onTextInputFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setOnFocus(() => ({ focused: true, pressed: true }));
      if (props.onFocus) props.onFocus(event);
      toggleTextFieldVisible(true);
    };

    const onTextInputBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setOnFocus(() => ({ focused: false, pressed: false }));
      if (props.onBlur) props.onBlur(event);
      toggleTextFieldVisible(false);
    };

    const onTextInputPressedHandler = (event: GestureResponderEvent) => {
      event?.preventDefault();
      if (!isTextFieldVisible) {
        toggleTextFieldVisible(true);
        setOnFocus(() => ({ focused: true, pressed: true }));
        textInputReference.current?.focus();
      }
    };

    return (
      <Container dataSet={finalProps.dataSets?.container} disableGutters style={finalProps.containerStyle}>
        <Pressable
          ref={pressableReference}
          accessibilityRole='none'
          style={(state) => generateStyles({ ...focusState, hovered: state.hovered })}
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
              {finalProps.disableLabelAnimation ? (
                value ? null : (
                  <Container disableGutters style={labelContainerStyle}>
                    <Typography.Body
                      numberOfLines={1}
                      ellipsizeMode='tail'
                      dataSet={finalProps.dataSets?.label}
                      style={getCombinedStylesForText(labelTextStyle, finalProps.labelStyle)}
                    >
                      {finalProps.label}
                    </Typography.Body>
                  </Container>
                )
              ) : (
                <TextFieldLabel
                  {...finalProps}
                  style={finalProps.labelStyle}
                  labelStyle={getCombinedStylesForText(labelTextStyle, finalProps.labelStyle)}
                  height={height}
                  textInputRef={textInputReference}
                  states={focusState}
                  value={value}
                  isFocused={isTextFieldVisible}
                  toggleIsFocused={toggleTextFieldVisible}
                  backgroundColor={finalProps.labelBackgroundColor}
                />
              )}
              <TextInput
                ref={textInputReference}
                {...componentProps}
                value={value}
                // @ts-ignore
                dataSet={finalProps.dataSets?.textInput}
                onFocus={onTextInputFocus}
                onBlur={onTextInputBlur}
                style={[onFocusStyles, getCombinedStylesForText(style, finalProps.textInputStyle)]}
              />
            </Container>
            {(!finalProps.noDefaultErrorMessage && finalProps.error) ||
            finalProps.showClearButton ||
            finalProps.trailingIcon ? (
              <Container disableGutters style={trailingIconContainerStyle}>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Container disableGutters style={{ minWidth: 40 }}>
                  {value && finalProps.showClearButton ? (
                    <IconButton
                      type='standard'
                      icon={{ name: 'clear', props: { size: 16 } }}
                      disabled={finalProps.disabled}
                      onPress={(event) => {
                        if (componentProps.onChangeText) componentProps.onChangeText('');
                        onTextInputPressedHandler(event);
                      }}
                    />
                  ) : null}
                </Container>
                {finalProps.error && !finalProps.noDefaultErrorMessage ? getErrorIcon() : finalProps.trailingIcon}
              </Container>
            ) : null}
          </Container>
        </Pressable>
        {finalProps?.supportingText && !finalProps.error ? (
          <Typography.Body
            dataSet={finalProps.dataSets?.supportingText}
            style={getCombinedStylesForText(supportingTextStyle, props.supportingTextStyle)}
          >
            {finalProps?.supportingText}
          </Typography.Body>
        ) : null}
        {finalProps.error &&
          errors?.map((error, index) => (
            <Typography.Body
              dataSet={finalProps.dataSets?.errorMessage}
              key={index}
              style={getCombinedStylesForText(errorStyle, props.errorMessageStyle)}
            >
              {error}
            </Typography.Body>
          ))}
      </Container>
    );
  },
);

export default TextField;

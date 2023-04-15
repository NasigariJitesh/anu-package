/* eslint-disable react/display-name */
import { IconButton } from 'anu/lib';
import { generateHoverStyles, getCombinedStylesForText } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { Pressable, TextInput, useSx } from 'dripsy';
import Container from 'lib/primitives/layout';
import Typography from 'lib/primitives/typography';
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
} from '../../utils';
import { defaultProps } from './default';
import TextFieldLabel from './label';

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
    const [isTextFieldVisible, toggleTextFieldVisible] = useState(props.autoFocus ?? (!!value && !props.disabled));

    const style = getTextFieldStyles(theme, finalProps);
    const containerStyle = getTextFieldContainerStyle(finalProps, theme);

    const leadingIconContainerStyle = getLeadingContainerStyle(finalProps);
    const trailingIconContainerStyle = getTrailingContainerStyle(finalProps);
    const innerContainerStyle = getInnerContainerStyle();
    const errorStyle = getErrorStyle(theme);
    const supportingTextStyle = getSupportingTextStyle(theme);
    const onFocusStyles =
      isTextFieldVisible || value !== ''
        ? ({ paddingTop: variant === 'filled' ? 14 : 0 } as const)
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

    const generateStyles = (state: PressableStateCallbackType) => {
      return generateHoverStyles(state, containerStyle, useSx);
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

    const onTextInputPressedHandler = (event: GestureResponderEvent) => {
      event?.preventDefault();
      if (!isTextFieldVisible) {
        toggleTextFieldVisible(true);
        setOnFocus(() => ({ focused: true, pressed: true }));

        textInputReference.current?.focus();
      }
    };

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

    return (
      <Container disableGutters style={finalProps.containerStyle}>
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
              {finalProps.label == '' ? null : (
                <TextFieldLabel
                  {...finalProps}
                  height={height}
                  textInputRef={textInputReference}
                  states={focusState}
                  value={value}
                  isFocused={isTextFieldVisible}
                  toggleIsFocused={toggleTextFieldVisible}
                />
              )}
              <TextInput
                ref={textInputReference}
                {...componentProps}
                value={value}
                onFocus={onTextInputFocus}
                onBlur={onTextInputBlur}
                placeholder={finalProps.label === '' ? componentProps.placeholder : undefined}
                style={[onFocusStyles, getCombinedStylesForText(style, finalProps.textInputStyle)]}
              />
            </Container>
            {finalProps.error || finalProps.showClearButton || finalProps.trailingIcon ? (
              <Container disableGutters style={trailingIconContainerStyle}>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Container disableGutters style={{ minWidth: 40 }}>
                  {value && finalProps.showClearButton ? (
                    <IconButton
                      type='standard'
                      icon={{ name: 'clear', props: { size: 16 } }}
                      onPress={(event) => {
                        textInputReference.current?.clear();
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
          <Typography.Body style={getCombinedStylesForText(supportingTextStyle, props.supportingTextStyle)}>
            {finalProps?.supportingText}
          </Typography.Body>
        ) : null}
        {finalProps.error &&
          errors?.map((error, index) => (
            <Typography.Body key={index} style={getCombinedStylesForText(errorStyle, props.errorMessageStyle)}>
              {error}
            </Typography.Body>
          ))}
      </Container>
    );
  },
);

export default TextField;

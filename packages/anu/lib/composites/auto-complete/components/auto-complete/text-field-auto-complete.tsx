/* eslint-disable jsdoc/check-param-names */
import { useTheme } from 'anu/config';
import { Container, IconButton, TextField } from 'anu/lib/primitives';
import React from 'react';

import { AutoCompleteProps } from '../../types';
import { getDropDownButtonStyle, getOverridingStyleForBaseVariant } from '../../utils';
import { useAutoCompleteContext } from '../context/context';

const TextFieldAutoComplete = (props: AutoCompleteProps) => {
  const { isOpen, displayResults, hideResults, textInputReference } = useAutoCompleteContext();

  const theme = useTheme();

  const overrideStyle = getOverridingStyleForBaseVariant();

  const {
    resultContainerStyle,
    autoCompleteContainerStyle,
    data,
    caseSensitive,
    filterOnChange,
    debounce,
    debounceDuration,
    disabled,
    direction,
    hideDropDownButton,
    placeholderTextColor,
    trailingIcon,
    leadingIcon,
    showResults,
    variant,
    ...textFieldProps
  } = props;

  const dropDownButtonStyle = getDropDownButtonStyle();

  /**
   * component for the dropdown button of the auto-complete field
   *
   * @param showButton.showButton
   * @param showButton - if true, displays the button
   */
  const DropDownButton = ({ showButton }: { showButton: boolean }) => {
    return showButton ? (
      <IconButton
        icon={{
          name: showResults ?? isOpen ? 'arrow-drop-up' : 'arrow-drop-down',
          props: { style: { color: theme.colors.$onSurfaceVariant } },
        }}
        type='standard'
        containerStyle={dropDownButtonStyle}
        pressableProps={{
          style: {
            padding: 1,
          },
        }}
        onPress={(event) => {
          event?.preventDefault();
          if (showResults ?? isOpen) hideResults();
          else displayResults();
          if (props.toggleShowResults) props.toggleShowResults((previous) => !previous);
        }}
      />
    ) : null;
  };

  const getStyle = () => {
    let style = { ...textFieldProps.style, position: 'relative' as const };

    if (variant === 'base') style = { ...overrideStyle, ...style };

    return style;
  };

  return (
    <TextField
      {...textFieldProps}
      // eslint-disable-next-line react-native/no-inline-styles
      style={getStyle()}
      variant={variant === 'base' ? 'outlined' : variant}
      ref={textInputReference}
      placeholderTextColor={placeholderTextColor ?? theme.colors.$onSurfaceVariant}
      leadingIcon={
        leadingIcon || (direction === 'rtl' && hideDropDownButton !== true) ? (
          <Container disableGutters flexDirection='row' align='center' justify='center'>
            {leadingIcon}
            <DropDownButton showButton={direction === 'rtl' && hideDropDownButton !== true} />
          </Container>
        ) : null
      }
      trailingIcon={
        trailingIcon || (direction !== 'rtl' && hideDropDownButton !== true) ? (
          <Container disableGutters flexDirection='row' align='center' justify='center'>
            <DropDownButton showButton={direction !== 'rtl' && hideDropDownButton !== true} />
            {trailingIcon}
          </Container>
        ) : null
      }
    />
  );
};

export default TextFieldAutoComplete;

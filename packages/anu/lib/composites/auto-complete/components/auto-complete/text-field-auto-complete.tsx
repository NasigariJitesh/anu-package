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
    data,
    caseSensitive,
    filterOnChange,
    debounce,
    debounceDuration,
    disabled,
    direction,
    hideDropDownButton,
    trailingIcon,
    leadingIcon,
    showResults,
    variant,
    ...textFieldProps
  } = props;

  /**
   * component for the dropdown button of the auto-complete field
   *
   * @param showButton.showButton
   * @param showButton - if true, displays the button
   */
  const DropDownButton = ({ showButton }: { showButton: boolean }) => {
    const style = getDropDownButtonStyle(theme, props);
    return showButton ? (
      <IconButton
        icon={{
          name: showResults ?? isOpen ? 'arrow-drop-up' : 'arrow-drop-down',
          props: {
            style,
          },
        }}
        disabled={disabled}
        variant='standard'
        pressableProps={{
          style: {
            padding: 0,
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
    let style = { width: 280, position: 'relative' as const };

    if (variant === 'base') style = { ...overrideStyle, ...style };

    return style;
  };

  return (
    <TextField
      {...textFieldProps}
      disabled={disabled}
      style={{ ...getStyle(), ...textFieldProps.style }}
      variant={variant === 'base' ? 'outlined' : variant}
      ref={textInputReference}
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
      labelBackgroundColor={variant == 'base' ? 'transparent' : undefined}
    />
  );
};

export default TextFieldAutoComplete;

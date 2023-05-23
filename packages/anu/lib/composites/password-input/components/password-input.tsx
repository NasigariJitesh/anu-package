import { useTheme } from 'anu/config';
import { Container, IconButton, TextField } from 'anu/lib';
import React, { useState } from 'react';

import { PasswordInputProps } from '../types';
import { getIconStyles } from '../utils';
import { defaultProps } from './default';

const PasswordInput = (props: PasswordInputProps) => {
  const finalProps = { ...defaultProps, ...props };

  const [showPassword, toggleShowPassword] = useState(false);
  const theme = useTheme();
  const iconStyle = getIconStyles(finalProps, theme);

  const TrailingIcon = (
    <Container disableGutters>
      {finalProps.trailingIcon}
      {finalProps.value ? (
        <IconButton
          disabled={finalProps.disabled}
          icon={{ name: showPassword ? 'visibility-off' : 'visibility', props: { style: iconStyle } }}
          variant='standard'
          onPress={() => toggleShowPassword((previous) => !previous)}
        />
      ) : null}
    </Container>
  );

  return (
    <TextField
      autoComplete='current-password'
      hideClearButton
      {...finalProps}
      multiline={false}
      secureTextEntry={!showPassword}
      trailingIcon={TrailingIcon}
      noDefaultErrorMessage={!!finalProps.value}
    />
  );
};

export default PasswordInput;

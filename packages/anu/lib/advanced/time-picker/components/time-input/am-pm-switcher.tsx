import { useTheme } from 'anu/config';
import { Container, TouchableRipple, Typography } from 'anu/lib/primitives';
import React from 'react';

import { useDisplayModeContext } from '../../context';
import { useSwitchColors } from '../../hooks';
import { AmPmSwitcherProps, SwitchButtonProps } from '../../types';
import { getSwitcherStyles } from '../../utils';

/**
 *
 * @param props
 */
const SwitchButton = (props: SwitchButtonProps) => {
  const { label, onPress, selected, disabled, inputType } = props;

  const { backgroundColor, color } = useSwitchColors(selected);

  const theme = useTheme();
  const styles = getSwitcherStyles(theme, inputType, color, backgroundColor);

  return (
    <TouchableRipple
      onPress={onPress}
      style={styles.switchButton}
      accessibilityLabel={label}
      accessibilityRole='button'
      accessibilityState={{ disabled }}
      disabled={disabled}
    >
      <Container disableGutters style={styles.switchButtonInner}>
        <Typography.Body selectable={false} style={styles.switchText}>
          {label}
        </Typography.Body>
      </Container>
    </TouchableRipple>
  );
};

/**
 *
 * @param props
 */
const AmPmSwitcher = (props: AmPmSwitcherProps) => {
  const { onChange, hours, inputType, horizontal } = props;
  const { setMode, mode } = useDisplayModeContext();

  const theme = useTheme();
  const styles = getSwitcherStyles(theme, inputType, '', '', horizontal && inputType === 'picker');

  const isAM = mode === 'AM';

  return (
    <Container disableGutters style={styles.root}>
      <SwitchButton
        label='AM'
        onPress={() => {
          setMode('AM');
          if (hours - 12 >= 0) {
            onChange(hours - 12);
          }
        }}
        selected={isAM}
        disabled={isAM}
        inputType={inputType}
      />
      <Container disableGutters style={styles.switchSeparator} />
      <SwitchButton
        label='PM'
        onPress={() => {
          setMode('PM');
          if (hours + 12 <= 24) {
            onChange(hours + 12);
          }
        }}
        selected={!isAM}
        disabled={!isAM}
        inputType={inputType}
      />
    </Container>
  );
};
export default AmPmSwitcher;

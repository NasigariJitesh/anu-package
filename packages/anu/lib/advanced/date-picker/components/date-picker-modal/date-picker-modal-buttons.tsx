import { useTheme } from 'anu/config';
import { Button, Container } from 'anu/lib';
import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DatePickerModalButtonProps } from '../../types';
import { getDatePickerModalButtonsStyles } from '../../utils';

/**
 *
 * @param props
 */
const DatePickerModalButtons = (props: DatePickerModalButtonProps) => {
  const { onDismiss, okLabelDisabled, cancelLabelDisabled, onSave } = props;

  const okLabel = props.okLabel ?? 'Ok';
  const cancelLabel = props.cancelLabel ?? 'Cancel';

  const theme = useTheme();
  const styles = getDatePickerModalButtonsStyles(theme);
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Container disableGutters style={styles.container}>
        <Button.Text
          labelStyle={cancelLabel ? {} : { color: theme.colors.$primary }}
          onPress={onDismiss}
          disabled={cancelLabelDisabled ?? false}
          testID='anu-dates-cancel'
          title={cancelLabel}
        />
        <Button.Text
          labelStyle={okLabelDisabled ? {} : { color: theme.colors.$primary }}
          onPress={onSave}
          disabled={okLabelDisabled ?? false}
          testID='anu-dates-ok'
          title={okLabel}
        />
      </Container>
    </Animated.View>
  );
};

export default DatePickerModalButtons;

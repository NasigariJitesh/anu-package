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
  const { onDismiss, okLabelDisabled, cancelLabelDisabled, onSave, uppercase } = props;
  const okLabel = props.okLabel ?? 'Ok';
  const cancelLabel = props.cancelLabel ?? 'Cancel';

  const theme = useTheme();
  const styles = getDatePickerModalButtonsStyles(theme);
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        styles.animated,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Container disableGutters style={styles.container}>
        <Button.Text
          labelStyle={{ color: theme.colors.$primary }}
          onPress={onDismiss}
          disabled={cancelLabelDisabled ?? false}
          testID='anu-dates-cancel'
          title={uppercase ? cancelLabel.toLocaleUpperCase() : cancelLabel}
        />
        <Button.Text
          labelStyle={{ color: theme.colors.$primary }}
          onPress={onSave}
          disabled={okLabelDisabled ?? false}
          testID='anu-dates-ok'
          title={uppercase ? okLabel.toLocaleUpperCase() : okLabel}
        />
      </Container>
    </Animated.View>
  );
};

export default DatePickerModalButtons;

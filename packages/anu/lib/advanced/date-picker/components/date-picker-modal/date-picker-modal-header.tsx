import { useTheme } from 'anu/config';
import { Button, Container, IconButton } from 'anu/lib';
import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DatePickerModalHeaderProps } from '../../types';
import { getDatePickerModalHeaderStyles } from '../../utils';

/**
 *
 * @param props
 */
const DatePickerModalHeader = (props: DatePickerModalHeaderProps) => {
  const theme = useTheme();
  const { disableSafeTop, closeIcon = 'close', onDismiss, saveLabelDisabled, onSave } = props;
  const saveLabel = props.saveLabel ?? 'Save';
  const styles = getDatePickerModalHeaderStyles();
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        styles.animated,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          paddingTop: disableSafeTop ? 0 : insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Container disableGutters style={styles.header}>
        <IconButton
          icon={{ name: closeIcon, props: { color: theme.colors.$onSurfaceVariant } }}
          accessibilityLabel={'close'}
          onPress={onDismiss}
          variant='standard'
          testID='anu-dates-close'
        />

        <Button.Text
          labelStyle={saveLabelDisabled ? {} : { color: theme.colors.$primary }}
          onPress={onSave}
          disabled={saveLabelDisabled ?? false}
          testID='anu-dates-save'
          title={saveLabel}
        />
      </Container>
    </Animated.View>
  );
};

export default DatePickerModalHeader;

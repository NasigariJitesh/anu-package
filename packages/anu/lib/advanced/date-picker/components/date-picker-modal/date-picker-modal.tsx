import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import * as React from 'react';
import { memo } from 'react';
import { Modal, Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

import { DatePickerModalProps, SupportedOrientationsType } from '../../types';
import { getDatePickerModalStyles } from '../../utils';
import DatePickerModalContent from './date-picker-modal-content';

const supportedOrientations: SupportedOrientationsType[] = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

/**
 *
 * @param props
 */
export const DatePickerModal = (props: DatePickerModalProps) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const { visible, animationType, disableStatusBar, disableStatusBarPadding, inputEnabled, ...rest } = props;
  const animationTypeCalculated =
    animationType ||
    Platform.select({
      web: 'none',
      default: 'slide',
    });

  const styles = getDatePickerModalStyles();

  return (
    <Container disableGutters style={StyleSheet.absoluteFill} pointerEvents='box-none'>
      <Modal
        animationType={animationTypeCalculated}
        transparent={true}
        visible={visible}
        onRequestClose={rest.onDismiss}
        presentationStyle='overFullScreen'
        supportedOrientations={supportedOrientations}
        //@ts-ignore
        statusBarTranslucent={true}
      >
        <>
          <TouchableWithoutFeedback onPress={rest.onDismiss}>
            <Container
              disableGutters
              style={[StyleSheet.absoluteFill, styles.modalBackground, { backgroundColor: theme.colors.$background }]}
            />
          </TouchableWithoutFeedback>
          <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalRoot]} pointerEvents='box-none'>
            <Container
              disableGutters
              style={[
                styles.modalContent,
                { backgroundColor: theme.colors.$surface },
                dimensions.width > 650 ? styles.modalContentBig : null,
              ]}
            >
              {disableStatusBar ? null : <StatusBar translucent={true} />}
              {disableStatusBarPadding ? null : (
                <Container
                  disableGutters
                  style={{
                    height: StatusBar.currentHeight,
                    backgroundColor: theme.colors.$surface,
                  }}
                />
              )}
              <DatePickerModalContent {...rest} inputEnabled={inputEnabled} disableSafeTop={disableStatusBar} />
            </Container>
          </Container>
        </>
      </Modal>
    </Container>
  );
};

export default memo(DatePickerModal);

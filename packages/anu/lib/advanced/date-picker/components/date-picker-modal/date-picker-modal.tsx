import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import * as React from 'react';
import { memo, useCallback, useState } from 'react';
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
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const {
    visible,
    animationType,
    disableStatusBar = props.mode === 'single' ? true : false,
    inputEnabled,
    style,
    ...rest
  } = props;
  const animationTypeCalculated =
    animationType ||
    Platform.select({
      web: 'fade',
      default: 'slide',
    });

  const styles = getDatePickerModalStyles(theme, props.mode, collapsed);

  const onToggleCollapse = useCallback(() => {
    setCollapsed((previous) => !previous);
    if (rest.onToggle) rest.onToggle();
  }, [setCollapsed, rest]);

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
            <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalBackground]} />
          </TouchableWithoutFeedback>

          <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalRoot]} pointerEvents='box-none'>
            <Container
              disableGutters
              style={[styles.modalContent, dimensions.width > 650 ? styles.modalContentBig : null, style]}
            >
              {disableStatusBar ? null : <StatusBar translucent={false} />}

              <DatePickerModalContent
                {...rest}
                inputEnabled={inputEnabled}
                disableSafeTop={disableStatusBar}
                collapsed={collapsed}
                onToggle={onToggleCollapse}
              />
            </Container>
          </Container>
        </>
      </Modal>
    </Container>
  );
};

export default memo(DatePickerModal);

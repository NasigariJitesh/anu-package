import { getColorInRGBA } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import * as React from 'react';
import { memo, useCallback, useState } from 'react';
import { Modal, Platform, StatusBar, StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
  const { visible, animationType, disableStatusBar, disableStatusBarPadding, inputEnabled, ...rest } = props;
  const animationTypeCalculated =
    animationType ||
    Platform.select({
      web: 'none',
      default: 'slide',
    });

  const styles = getDatePickerModalStyles(theme, props.mode, collapsed);

  const onToggleCollapse = useCallback(() => {
    setCollapsed((previous) => !previous);
  }, [setCollapsed]);

  return (
    <SafeAreaProvider>
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
                style={[styles.modalContent, dimensions.width > 650 ? styles.modalContentBig : null]}
              >
                {disableStatusBar ? null : <StatusBar translucent={true} />}
                {disableStatusBarPadding ? null : (
                  <Container
                    disableGutters
                    style={{
                      height: StatusBar.currentHeight,
                      backgroundColor: getColorInRGBA(theme.colors.$primary, 24),
                    }}
                  />
                )}
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
    </SafeAreaProvider>
  );
};

export default memo(DatePickerModal);

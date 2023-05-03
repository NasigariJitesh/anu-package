import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config/dripsy/theme';
import { Container } from 'anu/lib/primitives';
import { Animated, Modal, StyleSheet, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';

import { DialogProps } from '../../types';
import { getDialogStyles } from '../../utils';
import { defaultProps } from './default';

/**
 * Component for Container
 *
 * @param {DialogProps} props - all the properties related to the dialog component
 */
const Dialog = (props: DialogProps) => {
  const theme = useTheme();

  const finalProps = { ...defaultProps, ...props };

  const dimensions = useWindowDimensions();

  const styles = getDialogStyles(theme, finalProps, dimensions);
  const { type, visible, onDismiss, ...componentProps } = finalProps;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={visible}
      onRequestClose={onDismiss}
      presentationStyle='overFullScreen'
      statusBarTranslucent={true}
    >
      <>
        <TouchableWithoutFeedback onPress={onDismiss}>
          <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalBackground]} />
        </TouchableWithoutFeedback>
        <Container disableGutters style={[StyleSheet.absoluteFill, styles.modalRoot]} pointerEvents='box-none'>
          <Animated.View>
            <Container
              disableGutters
              {...componentProps}
              style={getCombinedStylesForView(styles.dialog, finalProps.style)}
            >
              {finalProps.children}
            </Container>
          </Animated.View>
        </Container>
      </>
    </Modal>
  );
};

export default Dialog;

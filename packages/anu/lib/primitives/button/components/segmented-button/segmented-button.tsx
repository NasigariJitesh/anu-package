/* eslint-disable react-hooks/exhaustive-deps */
import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Container, Icon, Typography } from 'lib/primitives';
import { useEffect, useState } from 'react';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { SegmentedButtonProps } from '../../types/segmented-button';
import { getSegmentedButtonStyles, isSelected } from '../../utils/segmented-button';
import { defaultProps } from './default';

/**
 * Radio button styles
 *
 *  @param props - the properties of the radio button component
 */
export const SegmentedButton = (props: SegmentedButtonProps) => {
  const [selected, setSelected] = useState(isSelected(props));
  const finalProps = { ...defaultProps, ...props };

  useEffect(() => {
    setSelected(isSelected(props));
  }, [props.selected]);

  // eslint-disable-next-line prefer-const
  let { buttonStyles, layerStyles, iconStyles, labelStyles, segmentedFirstButtonTheme, segmentedLastButtonTheme } =
    getSegmentedButtonStyles(finalProps, selected);

  if (props.isFirst) {
    buttonStyles = { ...buttonStyles, ...segmentedFirstButtonTheme };
    layerStyles = { ...layerStyles, ...segmentedFirstButtonTheme };
  }

  if (props.isLast) {
    buttonStyles = { ...buttonStyles, ...segmentedLastButtonTheme };
    layerStyles = { ...layerStyles, ...segmentedLastButtonTheme };
  }

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, layerStyles, useSx);
  };

  const onPressHandler = (event: GestureResponderEvent) => {
    if (finalProps.disabled) return;
    if (finalProps.onSelect) finalProps.onSelect(finalProps.id);
    if (finalProps.onPress) finalProps.onPress(event);
  };

  const RenderSelected = () => {
    const { icon } = finalProps;
    let { size } = iconStyles;
    const { ...otherIconStyles } = iconStyles;

    if (icon?.props) size = icon?.props.size;

    if (selected) return <Icon size={size} name='check' style={otherIconStyles} />;
    else if (icon)
      return 'name' in icon ? (
        <Icon size={size} name={icon.name as never} {...icon.props} style={[otherIconStyles, icon.props?.style]} />
      ) : (
        icon
      );
    else return null;
  };

  return (
    <Container disableGutters style={buttonStyles}>
      <Pressable disabled={finalProps.disabled} onPress={onPressHandler} style={generateStyles}>
        <Container flexDirection='row' align='center' justify='center' disableGutters maxWidth={88}>
          <RenderSelected />

          <Typography.Body numberOfLines={1} ellipsizeMode='tail' style={labelStyles}>
            {finalProps.title}
          </Typography.Body>
        </Container>
      </Pressable>
    </Container>
  );
};

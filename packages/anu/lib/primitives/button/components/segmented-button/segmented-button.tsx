import { generateHoverStyles } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple, Typography } from 'anu/lib/primitives';
import { useSx } from 'dripsy';
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

  const theme = useTheme();

  // eslint-disable-next-line prefer-const
  let { buttonStyles, layerStyles, iconStyles, labelStyles, segmentedFirstButtonTheme, segmentedLastButtonTheme } =
    getSegmentedButtonStyles(finalProps, selected, theme);

  if (props.isFirst) {
    buttonStyles = { ...buttonStyles, ...segmentedFirstButtonTheme };
    layerStyles = { ...layerStyles, ...segmentedFirstButtonTheme };
  }

  if (props.isLast) {
    buttonStyles = { ...buttonStyles, ...segmentedLastButtonTheme };
    layerStyles = { ...layerStyles, ...segmentedLastButtonTheme };
  }

  useEffect(() => {
    setSelected(isSelected(props));
  }, [props]);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, layerStyles, useSx);
  };

  const onPressHandler = (event: GestureResponderEvent) => {
    if (finalProps.disabled) return;
    if (finalProps.onSelect) finalProps.onSelect(finalProps.id);
    if (finalProps.onPress) finalProps.onPress(event);
  };

  const RenderSelected = () => {
    const { icon, dataSets } = finalProps;
    const { fontSize, ...otherIconStyles } = iconStyles;
    let size = fontSize;

    if (icon?.props) size = icon?.props.size;

    if (selected) return <Icon size={size} name='check' style={otherIconStyles} />;
    else if (icon)
      return 'name' in icon ? (
        <Icon
          size={size}
          name={icon.name as never}
          {...icon.props}
          style={[iconStyles, icon.props?.style]}
          dataSet={dataSets?.iconDataSet}
        />
      ) : (
        icon
      );
    else return null;
  };

  return (
    <Container disableGutters style={buttonStyles} dataSet={finalProps.dataSets?.containerDataSet}>
      <TouchableRipple
        disabled={finalProps.disabled}
        onPress={onPressHandler}
        style={generateStyles}
        dataSet={finalProps.dataSets?.containerDataSet}
      >
        <>
          <RenderSelected />

          <Typography.Body
            numberOfLines={1}
            ellipsizeMode='tail'
            style={labelStyles}
            dataSet={finalProps.dataSets?.labelDataSet}
          >
            {finalProps.title}
          </Typography.Body>
        </>
      </TouchableRipple>
    </Container>
  );
};

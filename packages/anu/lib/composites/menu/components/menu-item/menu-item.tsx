import { generateHoverStyles, getCombinedStylesForText } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple, Typography } from 'anu/lib/primitives';
import { useSx } from 'dripsy';
import React from 'react';
import { GestureResponderEvent, PressableStateCallbackType } from 'react-native';

import { MenuItemProps } from '../../types';
import { getMenuItemStyle } from '../../utils';
import { defaultProps } from './default';

const MenuItem = (props: MenuItemProps) => {
  const finalProps = { ...defaultProps, ...props };
  const { leadingIcon, trailingIcon, trailingText, ...otherPressableProps } = finalProps;

  const theme = useTheme();

  const { pressableStyle, childContainerStyle, iconStyle, textStyle } = getMenuItemStyle(
    theme,
    finalProps.disabled ?? false,
    finalProps.inset,
  );

  const leadingIconStyle = { ...iconStyle, marginRight: 12 };

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, pressableStyle, useSx);
  };

  return (
    <TouchableRipple
      {...otherPressableProps}
      onPress={(event: GestureResponderEvent) => {
        if (otherPressableProps.onPress) otherPressableProps.onPress(event);
      }}
      style={generateStyles}
    >
      <>
        <Container disableGutters>
          {leadingIcon && 'name' in leadingIcon ? (
            <Icon
              size={24}
              name={leadingIcon.name as never}
              {...leadingIcon.props}
              //@ts-expect-error reason: the style type will always be text style only
              style={getCombinedStylesForText(leadingIconStyle, leadingIcon.props?.style)}
            />
          ) : (
            leadingIcon
          )}
        </Container>
        <Container disableGutters style={childContainerStyle}>
          {finalProps.children}
        </Container>

        <Container disableGutters flexDirection='row' align='center'>
          {trailingIcon && 'name' in trailingIcon ? (
            <Icon
              size={24}
              name={trailingIcon.name as never}
              {...trailingIcon.props}
              //@ts-expect-error reason: the style type will always be text style only
              style={getCombinedStylesForText(iconStyle, trailingIcon.props?.style)}
            />
          ) : (
            trailingIcon
          )}
          <Typography.Body style={textStyle}>{trailingText}</Typography.Body>
        </Container>
      </>
    </TouchableRipple>
  );
};

export default MenuItem;

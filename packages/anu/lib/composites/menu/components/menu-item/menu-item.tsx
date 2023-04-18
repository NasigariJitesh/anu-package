import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, Typography } from 'anu/lib/primitives';
import React from 'react';
import { Pressable } from 'react-native';

import { MenuItemProps } from '../../types';
import { getMenuItemStyle } from '../../utils';
import { defaultProps } from './default';

const MenuItem = (props: MenuItemProps) => {
  const finalProps = { ...defaultProps, ...props };
  const { leadingIcon, trailingIcon, trailingText, ...otherPressableProps } = finalProps;

  const theme = useTheme();

  const { pressableStyle, childContainerStyle, iconStyle, textStyle } = getMenuItemStyle(theme);

  return (
    <Pressable {...otherPressableProps} style={pressableStyle}>
      <Container disableGutters width={24}>
        {leadingIcon && 'name' in leadingIcon ? (
          <Icon
            size={24}
            name={leadingIcon.name as never}
            {...leadingIcon.props}
            //@ts-expect-error reason: the style type will always be text style only
            style={getCombinedStylesForText(iconStyle, icon.props?.style)}
          />
        ) : (
          leadingIcon
        )}
      </Container>
      <Container disableGutters style={childContainerStyle}>
        {finalProps.children}
      </Container>

      <Container disableGutters flexDirection='row'>
        {trailingIcon && 'name' in trailingIcon ? (
          <Icon
            size={24}
            name={trailingIcon.name as never}
            {...trailingIcon.props}
            //@ts-expect-error reason: the style type will always be text style only
            style={getCombinedStylesForText(iconStyle, icon.props?.style)}
          />
        ) : (
          trailingIcon
        )}
        <Typography.Body style={textStyle}>{trailingText}</Typography.Body>
      </Container>
    </Pressable>
  );
};

export default MenuItem;

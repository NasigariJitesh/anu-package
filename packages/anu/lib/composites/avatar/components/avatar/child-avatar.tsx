import { getCombinedStylesForView } from 'common/utils';
import { useTheme } from 'config/dripsy';
import { Container } from 'lib';
import React from 'react';

import { ChildrenAvatarProps } from '../../types';
import { getChildrenAvatarStyle } from '../../utils';
import { defaultChildrenProps } from './default';

/**
 * Component for Children Avatar
 *
 * @param {ChildrenAvatarProps} props - all the properties related to the children avatar component
 */
const ChildrenAvatar = (props: ChildrenAvatarProps) => {
  const theme = useTheme();
  const finalProps = { ...defaultChildrenProps, ...props };

  const { size, variant, children, ...otherProps } = finalProps;
  const { containerStyle, containerSx } = getChildrenAvatarStyle(finalProps, theme);

  return (
    <Container
      disableGutters
      {...otherProps}
      style={getCombinedStylesForView(containerStyle, otherProps.style)}
      sx={{ ...containerSx, ...otherProps.sx }}
    >
      <>{children}</>
    </Container>
  );
};

export default ChildrenAvatar;

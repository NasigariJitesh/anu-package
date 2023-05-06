import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import { ReactElement } from 'react';

import { AvatarGroupProps } from '../../types';
import { getAvatarContainerStyle, getAvatarGroupStyle } from '../../utils';
import Avatar from '.';

//Function to make every avatar circular in avatar group
const addStylesToAvatar = (avatar: ReactElement, size: string) => {
  const avatarProps = { ...avatar.props, variant: 'circle', size: size };

  return { ...avatar, props: avatarProps };
};

/**
 * To get Avatar group Component
 *
 * @param props - the props required for avatar group component
 */
const AvatarGroup = (props: AvatarGroupProps) => {
  const theme = useTheme();

  //@ts-expect-error total and max cant exists together
  const { excessAvatarStyle, excessAvatarSx, children, spacing, total, max, ...otherProps } = props;
  const totalChildren = children.length;

  const size = (children[0] as ReactElement).props.size ?? 'medium';

  let avatars = [...children];

  const {
    excessAvatarStyle: defaultExcessAvatarStyle,
    excessAvatarSx: defaultExcessAvatarSx,
    groupStyle,
    baseZIndex,
    marginRight,
  } = getAvatarGroupStyle(props, theme);

  let style = getAvatarContainerStyle(avatars[0]!, baseZIndex + totalChildren, marginRight, size);

  let remaining = 0;

  if (max != undefined) {
    avatars = children.slice(0, max);
    remaining = totalChildren - max;
  }

  if (total != undefined) remaining = total - totalChildren;

  return (
    <Container
      disableGutters
      {...otherProps}
      style={getCombinedStylesForView(groupStyle, otherProps.style)}
      flexDirection='row'
    >
      {avatars.map((avatar, id) => {
        style = { ...style, zIndex: baseZIndex + id };
        return (
          <Container key={id} disableGutters style={style}>
            {addStylesToAvatar(avatar, size)}
          </Container>
        );
      })}
      {remaining > 0 ? (
        <Container disableGutters style={style}>
          <Avatar
            variant='circle'
            size={size}
            style={getCombinedStylesForView(defaultExcessAvatarStyle, excessAvatarStyle)}
            sx={{ ...defaultExcessAvatarSx, ...excessAvatarSx }}
          >{`+${remaining}`}</Avatar>
        </Container>
      ) : null}
    </Container>
  );
};

export default AvatarGroup;

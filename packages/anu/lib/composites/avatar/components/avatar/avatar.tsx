import React from 'react';

import { AvatarProps, ImageAvatarProps, LetterAvatarProps } from '../../types';
import ChildrenAvatar from './child-avatar';
import ImageAvatar from './image-avatar';
import LetterAvatar from './letter-avatar';

/**
 * Component for Container
 *
 * @param {AvatarProps} props - all the properties related to the container component
 */
const Avatar = (props: AvatarProps) => {
  return 'source' in props ? (
    <ImageAvatar {...(props as ImageAvatarProps)} />
  ) : 'name' in props ? (
    <LetterAvatar {...(props as LetterAvatarProps)} />
  ) : (
    <ChildrenAvatar {...props} />
  );
};

export default Avatar;

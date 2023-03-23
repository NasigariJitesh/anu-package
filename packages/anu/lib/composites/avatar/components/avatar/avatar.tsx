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
  if ('source' in props) return <ImageAvatar {...(props as ImageAvatarProps)} />;

  if ('children' in props) return <ChildrenAvatar {...props} />;

  return <LetterAvatar {...(props as LetterAvatarProps)} />;
};

export default Avatar;

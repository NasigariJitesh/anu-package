import React from 'react';

import { AvatarProps } from '../../types';
import ChildrenAvatar from './child-avatar';
import ImageAvatar from './image-avatar';
import LetterAvatar from './letter-avatar';

/**
 * Component for Container
 *
 * @param {AvatarProps} props - all the properties related to the container component
 */
const Avatar = (props: AvatarProps) => {
  if ('source' in props) return <ImageAvatar {...props} />;

  if ('name' in props) return <LetterAvatar {...props} />;

  return <ChildrenAvatar {...props} />;
};

export default Avatar;

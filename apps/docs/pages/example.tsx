/* eslint-disable no-secrets/no-secrets */
/* eslint-disable unicorn/prefer-module */
import { Icon, Image, LocalizedTypography } from 'anu/lib';
import Avatar from 'anu/lib/composites/avatar/';
import AvatarGroup from 'anu/lib/composites/avatar/components/avatar/avatar-group';

/**
 *
 */
export default function Example() {
  return (
    <AvatarGroup max={5}>
      <Avatar name='Jitesh' size='large' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
      <Avatar name='Jitesh' />
    </AvatarGroup>
  );
}

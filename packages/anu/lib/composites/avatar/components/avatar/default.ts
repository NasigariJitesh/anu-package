/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ChildrenAvatarProps, ImageAvatarProps, LetterAvatarProps } from './../../types/avatar';

const Placeholder = require('../../utils/placeholder.png');

export const defaultImageProps: ImageAvatarProps = {
  source: Placeholder,
  alt: 'avatar',
};

export const defaultLetterProps: LetterAvatarProps = {
  name: 'Anu',
};

export const defaultChildrenProps: ChildrenAvatarProps = {
  children: 'AN',
};

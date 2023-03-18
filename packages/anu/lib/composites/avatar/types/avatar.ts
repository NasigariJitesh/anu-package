import { ContainerProps, Icon, Image, ImageProps } from 'lib';
import { ReactElement } from 'react';

type IconType = ReactElement<typeof Icon>;
type ImageType = ReactElement<typeof Image>;

interface CommonAvatarProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'circle' | 'rounded';
}

export interface LetterAvatarProps extends Omit<ContainerProps, 'children' | 'variant'>, CommonAvatarProps {
  name: string;
  lastName?: string;
}

export interface ImageAvatarProps extends Omit<ImageProps, 'children' | 'variant'>, CommonAvatarProps {}

export interface ChildrenAvatarProps extends Omit<ContainerProps, 'children' | 'variant'>, CommonAvatarProps {
  children: string | IconType | ImageType;
}

export type AvatarProps = LetterAvatarProps | ImageAvatarProps | ChildrenAvatarProps;

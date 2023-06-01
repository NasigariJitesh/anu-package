import { ContainerProps, Icon, Image, ImageProps } from 'anu/lib';
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native';

import Avatar from '../components/avatar';

type IconType = ReactElement<typeof Icon>;
type ImageType = ReactElement<typeof Image>;

interface CommonAvatarProps {
  /**
   * The size of the avatar
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant of avatar, whether circular or rounded
   */
  variant?: 'circle' | 'rounded';
}

export interface LetterAvatarProps extends Omit<ContainerProps, 'children' | 'variant'>, CommonAvatarProps {
  /**
   * The name of the user for letter avatar
   */
  name: string;
  /**
   * The last name of the user for letter avatar.
   */
  lastName?: string;

  /**
   * Styles for the text
   */
  textStyle?: StyleProp<TextStyle>;
}

export interface ImageAvatarProps extends Omit<ImageProps, 'children' | 'variant'>, CommonAvatarProps {}

export interface ChildrenAvatarProps extends Omit<ContainerProps, 'children' | 'variant'>, CommonAvatarProps {
  /**
   * The children component for avatar
   */
  children: string | IconType | ImageType;
}

export type AvatarProps = LetterAvatarProps | ImageAvatarProps | ChildrenAvatarProps;

interface CommonAvatarGroupProps extends Omit<ContainerProps, 'children'> {
  children: ReactElement<typeof Avatar>[];
  /**
   * The styles for the avatar that displays number of remaining avatar in avatar group
   */
  excessAvatarStyle?: StyleProp<ViewStyle>;
  /**
   * Styles for text of the avatar that displays number of remaining avatar in avatar group.
   */
  excessTextStyle?: StyleProp<TextStyle>;

  /**
   * The space between each avatar in group
   */
  spacing?: number;
}

interface MaxAvatarGroupProps extends CommonAvatarGroupProps {
  /**
   * the maximum number of avatars to be displayed in avatar group
   */
  max: number;
}

interface TotalAvatarGroupProps extends CommonAvatarGroupProps {
  /**
   * The total number of avatars in avatar group
   */
  total: number;
}

export type AvatarGroupProps = MaxAvatarGroupProps | TotalAvatarGroupProps;

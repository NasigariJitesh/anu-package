import { MaterialIconProps } from 'lib/primitives/icon/types/icon';
import { ContainerProps } from 'lib/primitives/layout/types';
import { TitleProps } from 'lib/primitives/typography/types';
import React from 'react';

export interface AccordionProps {
  collapse?: boolean;
  style?: ContainerProps['style'];
  sx?: ContainerProps['sx'];
  onPress?: () => void;
  title: React.ReactElement;
  iconProps?: MaterialIconProps;
  icon?: {
    open?: (props: MaterialIconProps) => JSX.Element;
    collapsed?: (props: MaterialIconProps) => JSX.Element;
  };
  children: React.ReactElement;
  containerProps?: Partial<Omit<ContainerProps, 'children' | 'style' | 'sx'>>;
}

export interface AccordionHeaderProps extends Partial<TitleProps> {
  iconProps?: Omit<MaterialIconProps, 'name'>;
}

export interface AccordionChildrenProps extends Partial<ContainerProps> {
  children: React.ReactNode;
}

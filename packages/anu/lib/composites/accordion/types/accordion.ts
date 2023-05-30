import { MaterialIconProps } from 'anu/lib/primitives/icon/types/icon';
import { ContainerProps } from 'anu/lib/primitives/layout/types';
import { TitleProps } from 'anu/lib/primitives/typography/types';
import React from 'react';

export interface AccordionProps {
  /**
   * If true, the accordion will be collapsed. Open otherwise
   */
  collapse?: boolean;
  /**
   * Styles for the parent component
   */
  style?: ContainerProps['style'];
  /**
   * Sx styles for the parent component
   */
  sx?: ContainerProps['sx'];

  /**
   * Spacing between Accordion title and Accordion children
   */
  spacing?: number;

  /**
   * Executes when the header is pressed
   */
  onPress?: () => void;

  /**
   * React element to render the header
   */
  title: React.ReactElement;

  /**
   * Component to render when the accordion is open
   */
  children: React.ReactElement;

  /**
   * properties that will be sent to the container component
   */
  containerProps?: Partial<Omit<ContainerProps, 'children' | 'style' | 'sx'>>;
}

export interface AccordionHeaderProps extends Partial<TitleProps> {
  /**
   * Icon props to provide styles for the icon used.
   * NOTE: Will not be applied for custom icons. Provide it along with styles
   */
  iconProps?: Omit<MaterialIconProps, 'name'>;

  /**
   * Custom Icon components that you can provide. for both open and collapsed states
   */
  icon?: {
    open?: (props: MaterialIconProps) => JSX.Element;
    collapsed?: (props: MaterialIconProps) => JSX.Element;
  };

  supportingText?: string;
}

export interface AccordionChildrenProps extends Partial<ContainerProps> {
  children: React.ReactNode;
}

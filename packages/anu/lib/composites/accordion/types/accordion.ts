import { MaterialIconProps } from 'anu/lib/primitives/icon/types/icon';
import { ContainerProps } from 'anu/lib/primitives/layout/types';
import { TitleProps } from 'anu/lib/primitives/typography/types';
import React from 'react';

export interface AccordionProps extends ContainerProps {
  /**
   * If true, the accordion will be collapsed. Open otherwise
   */
  collapse?: boolean;

  /**
   * Space between Accordion title and Accordion children
   */
  spacing?: number;

  /**
   * Callback when the header is pressed
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
}

export interface AccordionHeaderProps extends Partial<TitleProps> {
  /**
   * Icon props to provide styles for the icon used.
   * NOTE: Will not be applied for custom icons. Provide it along with styles
   */
  iconProps?: Omit<MaterialIconProps, 'name'>;

  /**
   * Custom Icon component that you can provide. for accordion header
   */
  icon?: (props: MaterialIconProps) => JSX.Element;

  /**
   * Supporting Text for the accordion Header
   */
  supportingText?: string;
}

export interface AccordionChildrenProps extends Partial<ContainerProps> {
  children: React.ReactNode;
}

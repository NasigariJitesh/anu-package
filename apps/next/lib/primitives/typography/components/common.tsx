import { H1, H2, H3, H4, H5, H6, P } from 'dripsy';

import { HTMLType, TypographyProps } from '../types';
import Label from './label/label-component';

type RenderComponentProps = TypographyProps & { component: HTMLType };

/**
 * Function to render the relevant HTML tag based on the component prop
 *
 * @param {RenderComponentProps} props - all the props related to the component
 */
export const RenderComponent = (props: RenderComponentProps) => {
  const { component, children } = props;

  switch (component) {
    case 'h1': {
      return <H1 {...props}>{children}</H1>;
    }

    case 'h2': {
      return <H2 {...props}>{children}</H2>;
    }

    case 'h3': {
      return <H3 {...props}>{children}</H3>;
    }

    case 'h4': {
      return <H4 {...props}>{children}</H4>;
    }

    case 'h5': {
      return <H5 {...props}>{children}</H5>;
    }

    case 'h6': {
      return <H6 {...props}>{children}</H6>;
    }

    case 'p': {
      return <P {...props}>{children}</P>;
    }

    case 'label': {
      return (
        <Label {...props} scale='label' component={component}>
          {children}
        </Label>
      );
    }

    default: {
      return <P {...props}>{children}</P>;
    }
  }
};

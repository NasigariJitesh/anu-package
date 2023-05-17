import { RegularButtonProps } from '../../../types';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

type ButtonProps = Partial<RegularButtonProps> & { title: string };

/**
 * Component for Button text variant
 *
 * @param props - Button props
 */
const Text = (props: ButtonProps & { variant?: 'text' }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  return <RenderComponent {...restOfTheProps} />;
};

export default Text;

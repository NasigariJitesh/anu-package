import { RegularButtonProps } from '../../../types';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

type ButtonProps = Partial<RegularButtonProps> & { title: string };

/**
 * Component for Button elevated variant
 *
 * @param props - Button props
 */
const Elevated = (props: ButtonProps & { variant?: 'elevated' }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  return <RenderComponent {...restOfTheProps} />;
};

export default Elevated;

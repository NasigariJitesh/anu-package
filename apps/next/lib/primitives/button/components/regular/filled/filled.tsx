import { RegularButtonProps } from '../../../types';
import { RenderComponent } from '../../common';
import { defaultProps } from './default';

type ButtonProps = Partial<RegularButtonProps> & { title: string };

/**
 * Component for Button filled variant
 *
 * @param props - Button props
 */
const Filled = (props: ButtonProps & { type?: 'filled' }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  return <RenderComponent {...restOfTheProps} />;
};

export default Filled;

import { RegularButtonProps } from '../../../types';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

type ButtonProps = Partial<RegularButtonProps> & { title: string };

/**
 * Component for Button outlined variant
 *
 * @param props - Button props
 */
const Outlined = (props: ButtonProps & { variant?: 'outlined' }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  return <RenderComponent {...restOfTheProps} />;
};

export default Outlined;

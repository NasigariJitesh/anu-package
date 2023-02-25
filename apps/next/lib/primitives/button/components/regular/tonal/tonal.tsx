import { RegularButtonProps } from '../../../types';
import { RenderComponent } from '../../common';
import { defaultProps } from './default';

type ButtonProps = Partial<RegularButtonProps> & { title: string };

/**
 * Component for Button tonal variant
 *
 * @param props - Button props
 */
const Tonal = (props: ButtonProps & { type?: 'tonal' }) => {
  const restOfTheProps = { ...defaultProps, ...props };

  return <RenderComponent {...restOfTheProps} />;
};

export default Tonal;

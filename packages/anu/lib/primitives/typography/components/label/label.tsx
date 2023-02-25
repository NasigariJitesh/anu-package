import { LabelProps } from '../../types';
import { getFontStyles } from '../../utils';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

/**
 * Component for Typography Label variant
 *
 * @param {Partial<LabelProps>} props - all the props related to the component
 */
const Label = (props: Partial<LabelProps>) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const styles = getFontStyles(restOfTheProps);

  return (
    <RenderComponent {...restOfTheProps} style={[styles, restOfTheProps.style]}>
      {props.children}
    </RenderComponent>
  );
};

export default Label;

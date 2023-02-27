import { DisplayProps } from '../../types';
import { getFontStyles } from '../../utils';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

/**
 * Component for Typography Display variant
 *
 * @param {Partial<DisplayProps>} props - all the props related to the component
 */
const Display = (props: Partial<DisplayProps>) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const styles = getFontStyles(restOfTheProps);

  return (
    <RenderComponent {...restOfTheProps} style={[styles, restOfTheProps.style]}>
      {props.children}
    </RenderComponent>
  );
};

export default Display;

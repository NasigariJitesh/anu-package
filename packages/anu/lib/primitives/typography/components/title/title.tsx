import { TitleProps } from '../../types';
import { getFontStyles } from '../../utils';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

/**
 * Component for Typography Title variant
 *
 * @param {Partial<TitleProps>} props - all the props related to the component
 */
const Title = (props: Partial<TitleProps>) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const styles = getFontStyles(restOfTheProps);

  return (
    <RenderComponent {...restOfTheProps} style={[styles, restOfTheProps.style]}>
      {props.children}
    </RenderComponent>
  );
};

export default Title;

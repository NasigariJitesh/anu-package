import { BodyProps } from '../../types';
import { getFontStyles } from '../../utils';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

/**
 * Component for Typography Body variant
 *
 * @param {Partial<BodyProps>} props - all the props related to the component
 */
const Body = (props: Partial<BodyProps>) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const styles = getFontStyles(restOfTheProps);

  return (
    <RenderComponent {...restOfTheProps} sx={styles}>
      {props.children}
    </RenderComponent>
  );
};

export default Body;

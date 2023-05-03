import { getCombinedStylesForText } from '../../../../../common/utils';
import { useTheme } from '../../../../../config';
import { HeadlineProps } from '../../types';
import { getFontStyles } from '../../utils';
import { RenderComponent } from '../common';
import { defaultProps } from './default';

/**
 * Component for Typography Headline variant
 *
 * @param {Partial<HeadlineProps>} props - all the props related to the component
 */
const Headline = (props: Partial<HeadlineProps>) => {
  const restOfTheProps = { ...defaultProps, ...props };

  const styles = getFontStyles(restOfTheProps, useTheme());

  return (
    <RenderComponent {...restOfTheProps} style={getCombinedStylesForText(styles, restOfTheProps.style)}>
      {props.children}
    </RenderComponent>
  );
};

export default Headline;

import Typography from 'anu/lib/primitives/typography';

import { LocalizedHeadlineProps } from '../types';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Headline variant
 *
 * @param {Partial<LocalizedHeadlineProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedHeadline: React.FC<Partial<LocalizedHeadlineProps> & { localeKey: string }> = (props) => {
  const { getTranslation } = useAnuLocalization();

  return <Typography.Headline {...props}>{getTranslation(props.localeKey)}</Typography.Headline>;
};

export default LocalizedHeadline;

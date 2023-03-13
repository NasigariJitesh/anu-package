import Typography from 'anu/lib/primitives/typography';

import { LocalizedHeadlineProps } from '../types';
import { getLocalizedTranslation } from '../utils/utils';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Headline variant
 *
 * @param {Partial<LocalizedHeadlineProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedHeadline: React.FC<Partial<LocalizedHeadlineProps> & { localeKey: string }> = (props) => {
  const { currentLocale } = useAnuLocalization();

  return (
    <Typography.Headline {...props}>{getLocalizedTranslation(props.localeKey, currentLocale)}</Typography.Headline>
  );
};

export default LocalizedHeadline;

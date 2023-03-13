import Typography from 'anu/lib/primitives/typography';

import { LocalizedTitleProps } from '../types';
import { getLocalizedTranslation } from '../utils/utils';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Title variant
 *
 * @param {Partial<LocalizedTitleProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedTitle: React.FC<Partial<LocalizedTitleProps> & { localeKey: string }> = (props) => {
  const { currentLocale } = useAnuLocalization();

  return <Typography.Title {...props}>{getLocalizedTranslation(props.localeKey, currentLocale)}</Typography.Title>;
};

export default LocalizedTitle;

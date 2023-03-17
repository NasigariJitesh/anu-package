import Typography from 'anu/lib/primitives/typography';

import { LocalizedBodyProps } from '../types';
import { getLocalizedTranslation } from '../utils/utils';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography body variant
 *
 * @param {Partial<LocalizedBodyProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedDisplay: React.FC<Partial<LocalizedBodyProps> & { localeKey: string }> = (props) => {
  const { currentLocale } = useAnuLocalization();

  return <Typography.Body {...props}>{getLocalizedTranslation(props.localeKey, currentLocale)}</Typography.Body>;
};

export default LocalizedDisplay;

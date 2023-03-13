import Typography from 'anu/lib/primitives/typography';

import { LocalizedLabelProps } from '../types';
import { getLocalizedTranslation } from '../utils/utils';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Label variant
 *
 * @param {Partial<LocalizedLabelProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedLabel: React.FC<Partial<LocalizedLabelProps> & { localeKey: string }> = (props) => {
  const { currentLocale } = useAnuLocalization();

  return <Typography.Label {...props}>{getLocalizedTranslation(props.localeKey, currentLocale)}</Typography.Label>;
};

export default LocalizedLabel;

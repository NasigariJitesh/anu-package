import Typography from 'anu/lib/primitives/typography';

import { LocalizedDisplayProps } from '../types';
import { getLocalizedTranslation } from '../utils/utils';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Display variant
 *
 * @param {Partial<LocalizedDisplayProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedDisplay: React.FC<Partial<LocalizedDisplayProps> & { localeKey: string }> = (props) => {
  const { currentLocale } = useAnuLocalization();

  return <Typography.Display {...props}>{getLocalizedTranslation(props.localeKey, currentLocale)}</Typography.Display>;
};

export default LocalizedDisplay;

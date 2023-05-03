import Typography from 'anu/lib/primitives/typography';

import { LocalizedDisplayProps } from '../types';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography Display variant
 *
 * @param {Partial<LocalizedDisplayProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedDisplay: React.FC<Partial<LocalizedDisplayProps> & { localeKey: string }> = (props) => {
  const { getTranslation } = useAnuLocalization();

  return <Typography.Display {...props}>{getTranslation(props.localeKey)}</Typography.Display>;
};

export default LocalizedDisplay;

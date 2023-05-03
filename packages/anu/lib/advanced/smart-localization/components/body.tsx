import Typography from 'anu/lib/primitives/typography';

import { LocalizedBodyProps } from '../types';
import { useAnuLocalization } from './provider';

/**
 * Component for Localized Typography body variant
 *
 * @param {Partial<LocalizedBodyProps> & { localeKey: string }} props - all the props related to the component
 */
const LocalizedDisplay: React.FC<Partial<LocalizedBodyProps> & { localeKey: string }> = (props) => {
  const { getTranslation } = useAnuLocalization();

  return <Typography.Body {...props}>{getTranslation(props.localeKey)}</Typography.Body>;
};

export default LocalizedDisplay;

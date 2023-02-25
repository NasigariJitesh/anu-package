import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { MaterialIconProps } from '../types';
import { defaultProps } from './default';

const Icon = (props: MaterialIconProps) => {
  const restOfTheProps = { ...defaultProps, ...props };
  return <MaterialIcons {...restOfTheProps} />;
};

export default Icon;

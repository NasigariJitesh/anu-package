import { useTheme } from 'config/dripsy';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { MaterialIconProps } from '../types';
import { getIconStyles } from '../utils';
import { defaultProps } from './default';

const Icon = (props: MaterialIconProps) => {
  const theme = useTheme();
  const finalProps = { ...defaultProps, ...props };

  const style = getIconStyles(finalProps, theme);

  return <MaterialIcons {...finalProps} style={[style, props.style]} />;
};

export default Icon;

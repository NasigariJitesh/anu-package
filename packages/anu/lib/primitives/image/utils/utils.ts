import { ImageStyle, StyleProp } from 'react-native';
export const getImageStyle = () => {
  const style: StyleProp<ImageStyle> = {
    height: 200,
    width: 250,
  };
  return style;
};

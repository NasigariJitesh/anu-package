import { TextStyle } from 'react-native';

const getMargin = (index: number, length: number) => {
  if (index === 0) return { marginRight: 12 };
  else if (index === length - 1) return { marginLeft: 12 };
  else return { marginHorizontal: 12 };
};

export const getOTPFieldStyle = (numberOfDigits: number, index: number) => {
  const style = { height: 40, width: 40, ...getMargin(index, numberOfDigits) };

  return style;
};

export const getOTPTextInputStyle = () => {
  const textInputStyle: TextStyle = {
    height: '100%',
    width: '100%',
    paddingHorizontal: 0,
    paddingTop: 0,
    textAlign: 'center',
  };
  return textInputStyle;
};

import { ComponentType, forwardRef } from 'react';
import { Text } from 'react-native';

import { LabelProps } from '../../types';

// eslint-disable-next-line react/display-name, @typescript-eslint/no-shadow
const Label = forwardRef(({ ...props }: LabelProps, reference) => {
  // @ts-ignore
  return <Text {...props} ref={reference} />;
}) as ComponentType<LabelProps>;

export default Label;

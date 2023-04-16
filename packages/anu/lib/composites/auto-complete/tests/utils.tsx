import { Typography } from 'anu/lib/primitives';

import { Options } from '../types';

export const data = [
  { id: 'hello', value: 'Hello' },
  { id: 'abcd', value: 'Abcd' },
  { id: 'efgh', value: 'Efgh' },
  { id: 'ijkl', value: 'Ijkl' },
  { id: 'lmno', value: 'LMNO' },
  { id: 'pqrs', value: 'PQRS' },
];

export const ListRenderItem = ({ item }: { item: Options }) => {
  return <Typography.Body>{item.value as string} </Typography.Body>;
};

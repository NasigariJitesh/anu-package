/* eslint-disable no-secrets/no-secrets */
import { CardMediaProps } from './../../types/card';

/**
 * Default Properties of the card component
 */
export const defaultProps: CardMediaProps = {
  source: {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
  },
  cardOrientation: 'vertical' as const,
  height: '100%',
};

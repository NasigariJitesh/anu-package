import { Image as DripsyImage } from 'dripsy';

import { ImageProps } from '../../types';

const Image = (props: ImageProps) => {
  return <DripsyImage {...props} />;
};

export default Image;

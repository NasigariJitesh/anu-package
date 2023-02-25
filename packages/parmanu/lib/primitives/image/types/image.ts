import { Image as DripsyImage } from 'dripsy';

export type DripsyImageProps = Omit<React.ComponentProps<typeof DripsyImage>, 'height' | 'width'>;

export interface ImageProps extends DripsyImageProps {
  alt?: string;
}

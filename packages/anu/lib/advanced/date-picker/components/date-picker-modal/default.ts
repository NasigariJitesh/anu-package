import { HeaderContentProps } from '../../types';

export const defaultHeaderContentSingleProps: Partial<HeaderContentProps> = {
  emptyLabel: ' ',
};

export const defaultHeaderContentMultiProps: Partial<HeaderContentProps & { moreLabel: string | undefined }> = {
  emptyLabel: ' ',
  moreLabel: 'more',
};

export const defaultHeaderContentRangeProps: Partial<HeaderContentProps> = {
  headerSeparator: '-',
  startLabel: 'Start',
  endLabel: 'End',
};

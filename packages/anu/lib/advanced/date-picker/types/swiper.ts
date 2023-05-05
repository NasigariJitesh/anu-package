import { ReactChildren } from 'anu/common/types';

export interface RenderProps {
  index: number;
  onNext: () => void;
  onPrev: () => void;
}

export interface SwiperProps {
  initialIndex: number;
  scrollMode: 'horizontal' | 'vertical';
  renderItem: (renderProps: RenderProps) => ReactChildren;
  renderHeader?: (renderProps: RenderProps) => ReactChildren;
  renderFooter?: (renderProps: RenderProps) => ReactChildren;
  selectedYear?: number;
}

export interface VerticalScrollProps {
  renderItem: (renderProps: RenderProps) => ReactChildren;
  width: number;
  height: number;
  initialIndex: number;
  estimatedHeight: number;
}

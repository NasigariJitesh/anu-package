import { ReactChildren } from 'anu/common/types';
import { Container } from 'anu/lib/primitives';
import * as React from 'react';
import { LayoutChangeEvent } from 'react-native';

import { getAutoSizerStyles } from '../../utils';

type WidthAndHeight = {
  width: number;
  height: number;
};

const AutoSizer = ({ children }: { children: ({ width, height }: WidthAndHeight) => ReactChildren }) => {
  const [layout, setLayout] = React.useState<WidthAndHeight | null>(null);

  const onLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      const nativeLayout = event.nativeEvent.layout;

      // https://github.com/necolas/react-native-web/issues/1704
      if (!layout || layout.width !== nativeLayout.width || layout.height !== nativeLayout.height) {
        setLayout({ width: nativeLayout.width, height: nativeLayout.height });
      }
    },
    [layout, setLayout],
  );

  const styles = getAutoSizerStyles();

  return (
    <Container disableGutters style={[styles.autoSizer, layout && layout]} onLayout={onLayout}>
      {layout ? children(layout) : null}
    </Container>
  );
};

export default AutoSizer;

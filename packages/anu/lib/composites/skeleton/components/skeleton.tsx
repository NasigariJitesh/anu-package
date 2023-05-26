/* eslint-disable react-native/no-inline-styles */

import { getThemeMode, useTheme } from 'anu/config';
import { Container } from 'anu/lib';
import { Skeleton as MotiSkeleton } from 'moti/skeleton';
import React from 'react';

import { getColorInRGBA } from '../../../../common/utils';
import { SkeletonProps } from '../types';

const Skeleton = (props: SkeletonProps) => {
  const theme = useTheme();
  const mode = getThemeMode();
  const { children, style, ...otherProps } = props;

  return (
    <Container disableGutters style={style}>
      <MotiSkeleton
        colors={[theme.colors.$surfaceVariant, getColorInRGBA(theme.colors.$surface, 90)]}
        colorMode={mode}
        backgroundColor={theme.colors.$surfaceVariant}
        {...otherProps}
      >
        {children && props.height === undefined && props.width === undefined ? (
          <Container disableGutters style={{ padding: 1 }}>
            {children}
          </Container>
        ) : (
          children
        )}
      </MotiSkeleton>
    </Container>
  );
};

export default Skeleton;

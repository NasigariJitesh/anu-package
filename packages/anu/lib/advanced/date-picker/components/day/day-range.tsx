import { useTheme } from 'anu/config';
import { Container } from 'anu/lib/primitives';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { DayRangeProps } from '../../types';
import { getDayRangeStyles } from '../../utils/';

/**
 *
 * @param props
 */
const DayRange = (props: DayRangeProps) => {
  const { leftCrop, rightCrop, inRange } = props;

  const bothWays = inRange && leftCrop && rightCrop;
  const isCrop = inRange && (leftCrop || rightCrop) && !(leftCrop && rightCrop);

  const theme = useTheme();
  const styles = getDayRangeStyles();

  if (inRange || isCrop) {
    return (
      <Container
        disableGutters
        pointerEvents='none'
        style={[
          StyleSheet.absoluteFill,
          styles.rangeRoot,
          bothWays && styles.rangeRootBoth,
          inRange && !isCrop
            ? {
                backgroundColor: theme.colors.$primaryContainer,
              }
            : null,
        ]}
      >
        {isCrop && (
          <>
            <Container
              disableGutters
              style={[
                styles.flex1,
                rightCrop
                  ? {
                      backgroundColor: theme.colors.$primaryContainer,
                    }
                  : null,
              ]}
            />

            <Container
              disableGutters
              style={[
                styles.rangeItem,
                {
                  backgroundColor: theme.colors.$primaryContainer,
                },
                leftCrop ? styles.leftRadius : null,
                rightCrop ? styles.rightRadius : null,
              ]}
            />

            <Container
              disableGutters
              style={[
                styles.flex1,
                leftCrop
                  ? {
                      backgroundColor: theme.colors.$primaryContainer,
                    }
                  : null,
              ]}
            />
          </>
        )}
      </Container>
    );
  }
  return null;
};

export default memo(DayRange);

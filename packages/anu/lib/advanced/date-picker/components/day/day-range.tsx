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
  const { leftCrop, rightCrop, inRange, selectColor } = props;

  const bothWays = inRange && leftCrop && rightCrop;
  const isCrop = inRange && (leftCrop || rightCrop) && !(leftCrop && rightCrop);

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
                backgroundColor: selectColor,
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
                      backgroundColor: selectColor,
                    }
                  : null,
              ]}
            />

            <Container
              disableGutters
              style={[
                styles.rangeItem,
                {
                  backgroundColor: selectColor,
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
                      backgroundColor: selectColor,
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

import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib/primitives';
import React, { memo } from 'react';

import { AnalogClockMinutesProps } from '../../types';
import { getAnalogClockMinuteNumbers, getAnalogClockMinuteStyles } from '../../utils';

/**
 *
 * @param props
 */
const AnalogClockMinutes = (props: AnalogClockMinutesProps) => {
  const { minutes, circleSize } = props;

  const range = getAnalogClockMinuteNumbers(circleSize, 12);

  const theme = useTheme();
  const styles = getAnalogClockMinuteStyles(theme, circleSize);
  return (
    <>
      {range.map((a, index) => {
        const currentMinutes = index * 5;
        const isZero = currentMinutes === 0;
        let isCurrent = currentMinutes - 1 <= minutes && currentMinutes + 1 >= minutes;
        if (isZero) {
          isCurrent = minutes >= 59 || currentMinutes + 1 >= minutes;
        }
        return (
          <Container
            disableGutters
            key={index}
            pointerEvents='none'
            style={[
              styles.minuteRoot,
              {
                top: a[1] || 0,
                left: a[0] || 0,
              },
            ]}
          >
            <Container disableGutters style={styles.minuteInner}>
              <Typography.Body style={isCurrent ? styles.currentMinuteText : styles.minuteText} selectable={false}>
                {isZero ? '00' : currentMinutes}
              </Typography.Body>
            </Container>
          </Container>
        );
      })}
    </>
  );
};

export default memo(AnalogClockMinutes);

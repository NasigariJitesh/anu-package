import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib/primitives';
import React, { memo } from 'react';

import { AnalogClockHoursProps } from '../../types';
import { getAnalogClockHourNumbers, getAnalogClockHourStyles } from '../../utils';

/**
 *
 * @param props
 */
const AnalogClockHours = (props: AnalogClockHoursProps) => {
  const { is24Hour, hours, circleSize } = props;

  const outerRange = getAnalogClockHourNumbers(false, circleSize, 12, 12);
  const innerRange = getAnalogClockHourNumbers(true, circleSize, 12, 12);

  const theme = useTheme();
  const styles = getAnalogClockHourStyles(theme, circleSize);

  return (
    <>
      {outerRange.map((a, index) => (
        <Container
          disableGutters
          key={index}
          pointerEvents='none'
          style={[
            styles.outerHourRoot,
            {
              top: a[1] || 0,
              left: a[0] || 0,
            },
          ]}
        >
          <Container disableGutters style={styles.outerHourInner}>
            {/* Display 00 instead of 12 for AM hours */}
            <Typography.Body
              style={
                (!is24Hour && index + 1 === hours) ||
                (hours === index + 1 && hours !== 12) ||
                (index + 1 === 12 && hours === 0)
                  ? styles.currentHourText
                  : styles.hourText
              }
              selectable={false}
            >
              {is24Hour && index + 1 === 12 ? '00' : index + 1}
            </Typography.Body>
          </Container>
        </Container>
      ))}
      {is24Hour
        ? innerRange.map((a, index) => (
            <Container
              disableGutters
              key={index}
              pointerEvents='none'
              style={[
                styles.innerHourRoot,
                {
                  top: a[1] || 0,
                  left: a[0] || 0,
                },
              ]}
            >
              <Container disableGutters style={styles.innerHourInner}>
                <Typography.Body
                  selectable={false}
                  style={
                    index + 13 === hours || (index + 13 === 24 && hours === 12)
                      ? styles.currentHourText
                      : styles.hourText
                  }
                >
                  {index + 13 === 24 ? '12' : index + 13}
                </Typography.Body>
              </Container>
            </Container>
          ))
        : null}
    </>
  );
};

export default memo(AnalogClockHours);

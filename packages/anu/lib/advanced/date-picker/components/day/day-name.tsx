import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib/primitives';
import React, { memo } from 'react';

import { getDayNameStyles } from '../../utils';

/**
 *
 * @param root0
 * @param root0.label
 */
const DayName = ({ label }: { label: string }) => {
  const theme = useTheme();
  const styles = getDayNameStyles();

  return (
    <Container disableGutters style={styles.dayName}>
      <Typography.Body style={[styles.dayNameLabel, { color: theme.colors.$onSurface }]} selectable={false}>
        {label}
      </Typography.Body>
    </Container>
  );
};

export default memo(DayName);

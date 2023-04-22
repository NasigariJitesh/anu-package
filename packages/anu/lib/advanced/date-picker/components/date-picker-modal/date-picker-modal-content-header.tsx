import { useTheme } from 'anu/config';
import { Container, IconButton, Typography } from 'anu/lib/primitives';
import React from 'react';

import { HeaderContentProps } from '../../types';
import { getDatePickerModalContentHeaderStyles, getModalLabel } from '../../utils';

/**
 *
 * @param props
 */
const DatePickerModalContentHeader = (props: HeaderContentProps) => {
  const { onToggle, collapsed, mode, moreLabel, uppercase, editIcon, calendarIcon, allowEditing } = props;

  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles();

  const label = getModalLabel(mode, props.label);

  const isEditingEnabled = allowEditing && mode !== 'multiple';

  return (
    <Container disableGutters style={styles.header}>
      <Container disableGutters>
        <Typography.Title style={[styles.label, { color: theme.colors.$onSurfaceVariant }]}>
          {uppercase ? label.toUpperCase() : label}
        </Typography.Title>

        <Container disableGutters style={styles.headerContentContainer}>
          {mode === 'range' ? <HeaderContentRange {...props} /> : null}
          {mode === 'single' ? <HeaderContentSingle {...props} /> : null}
          {mode === 'multiple' ? <HeaderContentMulti {...props} moreLabel={moreLabel} /> : null}
        </Container>
      </Container>

      <Container disableGutters style={styles.fill} />

      {isEditingEnabled ? (
        <IconButton
          type='standard'
          icon={{
            name: collapsed ? editIcon ?? 'edit' : calendarIcon ?? 'calendar-today',
            props: { color: theme.colors.$onSurface },
          }}
          onPress={onToggle}
        />
      ) : null}
    </Container>
  );
};

/**
 *
 * @param props
 */
export const HeaderContentSingle = (props: HeaderContentProps) => {
  const { state, emptyLabel = ' ', locale } = props;
  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles();

  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    });
  }, [locale]);

  return (
    <Typography.Title style={[styles.singleHeaderText, { color: theme.colors.$onSurface }]}>
      {state.date ? formatter.format(state.date) : emptyLabel}
    </Typography.Title>
  );
};

/**
 *
 * @param props
 */
export const HeaderContentMulti = (props: HeaderContentProps & { moreLabel: string | undefined }) => {
  const { state, emptyLabel = ' ', moreLabel = 'more', locale } = props;
  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles();

  const dateCount = state.dates?.length || 0;

  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    });
  }, [locale]);

  let label = emptyLabel;
  if (dateCount) {
    label =
      (dateCount <= 2
        ? state.dates?.map((date) => formatter.format(date)).join(', ')
        : formatter.format(state.dates?.[0]) + ` (+ ${dateCount - 1} ${moreLabel})`) ?? '';
  }

  return (
    <Typography.Title style={[styles.singleHeaderText, { color: theme.colors.$onSurface }]}>{label}</Typography.Title>
  );
};

/**
 *
 * @param props
 */
export const HeaderContentRange = (props: HeaderContentProps) => {
  const { locale, state, headerSeparator = '-', startLabel = 'Start', endLabel = 'End' } = props;
  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles();
  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    });
  }, [locale]);

  return (
    <>
      <Typography.Title style={[styles.rangeHeaderText, { color: theme.colors.$onSurface }]}>
        {state.startDate ? formatter.format(state.startDate) : startLabel}
      </Typography.Title>
      <Typography.Title style={[styles.headerSeparator, { color: theme.colors.$onSurface }]}>
        {headerSeparator}
      </Typography.Title>
      <Typography.Title style={[styles.rangeHeaderText, { color: theme.colors.$onSurface }]}>
        {state.endDate ? formatter.format(state.endDate) : endLabel}
      </Typography.Title>
    </>
  );
};

export default DatePickerModalContentHeader;

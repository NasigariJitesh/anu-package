import { useTheme } from 'anu/config';
import { Container, IconButton, Typography } from 'anu/lib/primitives';
import React from 'react';

import { HeaderContentProps } from '../../types';
import { getDatePickerModalContentHeaderStyles, getModalLabel } from '../../utils';
import {
  defaultHeaderContentMultiProps,
  defaultHeaderContentRangeProps,
  defaultHeaderContentSingleProps,
} from './default';

/**
 *
 * @param props
 */
const DatePickerModalContentHeader = (props: HeaderContentProps) => {
  const { onToggle, collapsed, mode, moreLabel, uppercase, editIcon, calendarIcon, allowEditing } = props;

  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles(theme);

  const label = getModalLabel(mode, props.label);

  const isEditingEnabled = allowEditing && mode !== 'multiple';

  return (
    <Container disableGutters style={styles.header}>
      <Container disableGutters>
        <Typography.Body style={styles.label}>{uppercase ? label.toUpperCase() : label}</Typography.Body>

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
            props: { size: 32, color: theme.colors.$scrim },
          }}
          onPress={onToggle}
          containerStyle={styles.icon}
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
  const finalProps = { ...defaultHeaderContentSingleProps, ...props };
  const { state, emptyLabel = ' ', locale, collapsed } = finalProps;

  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles(theme);

  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    });
  }, [locale]);

  return (
    <Typography.Title style={styles.headerText}>
      {collapsed ? (state.date ? formatter.format(state.date) : emptyLabel) : 'Enter date'}
    </Typography.Title>
  );
};

/**
 *
 * @param props
 */
export const HeaderContentMulti = (props: HeaderContentProps & { moreLabel: string | undefined }) => {
  const finalProps = { ...defaultHeaderContentMultiProps, ...props };

  const { state, emptyLabel, moreLabel, locale, collapsed } = finalProps;

  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles(theme);

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

  return <Typography.Title style={styles.headerText}>{collapsed ? label : 'Enter date'}</Typography.Title>;
};

/**
 *
 * @param props
 */
export const HeaderContentRange = (props: HeaderContentProps) => {
  const finalProps = { ...defaultHeaderContentRangeProps, ...props };
  const { locale, state, headerSeparator, startLabel, endLabel, collapsed } = finalProps;
  const theme = useTheme();
  const styles = getDatePickerModalContentHeaderStyles(theme);
  const formatter = React.useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    });
  }, [locale]);

  return (
    <>
      <Typography.Title style={styles.headerText}>
        {collapsed ? (state.startDate ? formatter.format(state.startDate) : startLabel) : 'Enter date'}
      </Typography.Title>
      {collapsed ? <Typography.Title style={styles.headerSeparator}>{headerSeparator}</Typography.Title> : null}
      {collapsed ? (
        <Typography.Title style={styles.headerText}>
          {state.endDate ? formatter.format(state.endDate) : endLabel}
        </Typography.Title>
      ) : null}
    </>
  );
};

export default DatePickerModalContentHeader;

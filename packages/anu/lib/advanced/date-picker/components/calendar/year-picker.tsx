import { useTheme } from 'anu/config';
import { Container, TouchableRipple, Typography } from 'anu/lib/primitives';
import React, { memo, useEffect, useRef } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { YearPickerProps, YearProps } from '../../types';
import { getYearPickerStyles, range, YEAR_ITEM_HEIGHT } from '../../utils';

/**
 *
 * @param props
 */
const YearPicker = (props: YearPickerProps) => {
  const { selectedYear, selectingYear, onPressYear, startYear, endYear } = props;

  const flatList = useRef<FlatList<number> | null>(null);
  const years = range(Number.isNaN(startYear) ? 1900 : startYear, Number.isNaN(endYear) ? 2200 : endYear);

  const theme = useTheme();
  const styles = getYearPickerStyles(theme);

  // scroll to selected year
  useEffect(() => {
    if (flatList.current && selectedYear) {
      const indexToGo = selectedYear - startYear;
      const offset = (indexToGo / 3) * YEAR_ITEM_HEIGHT - YEAR_ITEM_HEIGHT;

      flatList.current.scrollToOffset({
        offset,
        animated: false,
      });
    }
  }, [flatList, selectedYear, startYear]);

  return (
    <Container
      disableGutters
      style={[StyleSheet.absoluteFill, styles.root, selectingYear ? styles.opacity1 : styles.opacity0]}
      pointerEvents={selectingYear ? 'auto' : 'none'}
    >
      <FlatList<number>
        ref={flatList}
        style={styles.list}
        data={years}
        renderScrollComponent={(sProps) => {
          return <ScrollView {...sProps} />;
        }}
        renderItem={({ item }) => <Year year={item} selected={selectedYear === item} onPressYear={onPressYear} />}
        keyExtractor={(item) => `${item}`}
        numColumns={3}
      />
    </Container>
  );
};

/**
 *
 * @param props
 */
const YearPure = (props: YearProps) => {
  const { year, selected, onPressYear } = props;

  const theme = useTheme();
  const styles = getYearPickerStyles(theme);

  return (
    <Container disableGutters style={styles.year}>
      <TouchableRipple
        onPress={() => onPressYear(year)}
        accessibilityRole='button'
        accessibilityLabel={String(year)}
        style={styles.yearButton}
      >
        <Container
          disableGutters
          style={[styles.yearInner, selected ? { backgroundColor: theme.colors.$primary } : null]}
        >
          <Typography.Body
            style={[
              styles.yearLabel,
              selected
                ? // eslint-disable-next-line react-native/no-inline-styles
                  { color: theme.colors.$onPrimary }
                : {
                    color: theme.colors.$onSurfaceVariant,
                  },
            ]}
            selectable={false}
          >
            {year}
          </Typography.Body>
        </Container>
      </TouchableRipple>
    </Container>
  );
};

const Year = memo(YearPure);

export default YearPicker;

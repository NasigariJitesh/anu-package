/* eslint-disable @typescript-eslint/comma-dangle */
import { getCombinedStylesForView } from 'anu/common/utils';
import { Container } from 'anu/lib';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { GridProps, RowProps } from '../../types';
import { getItemsArray, getRowStyle } from '../../utils';
import { getDefaultProps } from './default';

/**
 *
 * @param props
 */
const Row = <T,>(props: RowProps<T>) => {
  return (
    <>
      <Container disableGutters style={props.styles.rowStyle}>
        {props.items.map((item, index) => (
          <>
            <Container disableGutters key={index} style={props.styles.itemStyle}>
              {props.renderItem(item, { row: props.rowIndex, column: index })}
            </Container>
            {index < props.numberOfColumns - 1 ? (
              <Container disableGutters style={props.styles.itemSpacerStyle} />
            ) : null}
          </>
        ))}
      </Container>
      {props.rowIndex < props.numberOfRows - 1 ? <Container disableGutters style={props.styles.spacerStyle} /> : null}
    </>
  );
};

const Grid = <T,>(props: GridProps<T>) => {
  const defaultProps = getDefaultProps(props.data);
  const finalProps = { ...defaultProps, ...props };

  const { width } = useWindowDimensions();

  const [items, setItems] = useState<Array<Array<T>>>();
  const [gridWidth, setGridWidth] = useState<number>();
  const [columns, setColumns] = useState<number>();

  const {
    data,
    defaultNumberOfColumns,
    numberOfColumns,
    renderItem,
    rowHeight,
    spacing,
    showScrollIndicator,
    style,
    ...containerProps
  } = finalProps;

  const { flatListStyle, containerStyle, ...styles } = getRowStyle(rowHeight, spacing, gridWidth, columns);

  useEffect(() => {
    const { items: array, numberOfColumns: columnsCount } = getItemsArray(
      data,
      numberOfColumns,
      width,
      defaultNumberOfColumns,
    );

    setItems([...array]);
    setColumns(columnsCount);
  }, [data, numberOfColumns, width, defaultNumberOfColumns]);

  return (
    <Container
      onLayout={(event) => {
        setGridWidth(event.nativeEvent.layout.width);
      }}
      {...containerProps}
      style={getCombinedStylesForView(containerStyle, style)}
    >
      <FlatList
        data={items}
        style={flatListStyle}
        showsVerticalScrollIndicator={showScrollIndicator}
        renderItem={({ item, index }) => (
          <Row
            key={index}
            items={item}
            numberOfRows={items?.length ?? 0}
            numberOfColumns={columns ?? 0}
            rowIndex={index}
            renderItem={renderItem}
            styles={styles}
          />
        )}
      />
    </Container>
  );
};

export default Grid;

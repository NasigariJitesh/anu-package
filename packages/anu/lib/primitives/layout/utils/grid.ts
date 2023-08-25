import { NumberOfColumns } from '../types';

export const getItemsArray = <T>(data: T[], numberOfColumns: NumberOfColumns, width: number, columns = 1) => {
  if (Array.isArray(numberOfColumns)) {
    const array = [...numberOfColumns];
    array.sort((a, b) => b.minWidth - a.minWidth);
    for (const element of array) {
      if (width >= element.minWidth) {
        columns = element.columns;
        break;
      }
    }
  } else {
    let screen: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xs';
    if (width >= 1200) screen = 'xl';
    else if (width >= 992) screen = 'lg';
    else if (width >= 768) screen = 'md';
    else if (width >= 576) screen = 'sm';
    else screen = 'xs';

    columns = numberOfColumns[screen];
  }
  const result = [];
  let array = [];
  for (const datum of data) {
    array.push(datum);
    if (array.length === columns) {
      result.push(array);
      array = [];
    }
  }
  if (array.length > 0 && array.length < columns) {
    result.push(array);
    array = [];
  }

  return { items: result, numberOfColumns: columns };
};

export const getRowStyle = (height?: number, space?: number, gridWidth?: number, columns?: number) => {
  const rowStyle = {
    flexDirection: 'row',
    width: gridWidth,
    height,
  } as const;

  const spacerStyle = {
    width: gridWidth,
    height: space,
  };

  const flatListStyle = {
    flex: 1,
    width: '100%',
  };

  const containerStyle = {
    flex: 1,
  };

  const itemStyle = {
    width: gridWidth && columns && space ? (gridWidth - (columns - 1) * space) / columns : undefined,
  };
  const itemSpacerStyle = {
    width: space,
    alignSelf: 'stretch',
  } as const;
  return { containerStyle, rowStyle, spacerStyle, flatListStyle, itemSpacerStyle, itemStyle };
};

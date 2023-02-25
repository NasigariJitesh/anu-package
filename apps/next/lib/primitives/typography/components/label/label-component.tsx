// @ts-nocheck
import { ComponentType, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import createElement from 'react-native-web/dist/exports/createElement';

import { LabelProps } from '../../types';

// eslint-disable-next-line react/display-name
const Label = forwardRef((props: LabelProps, reference) => {
  return createElement('label', { ...props, style: { ...styles.reset, ...props.sx }, ref: reference });
}) as ComponentType<LabelProps>;

export default Label;

const color = '#000';

const styles = StyleSheet.create({
  reset: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color,
    display: 'inline',
    fontFamily: 'System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
});

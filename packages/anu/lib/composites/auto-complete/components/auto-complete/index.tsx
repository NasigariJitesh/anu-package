/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { AutoCompleteProps, AutoCompleteReferenceProps } from '../../types';
import { AutoCompleteProvider } from '../context';
import AutoCompleteComponent from './auto-complete';

const AutoComplete = forwardRef<AutoCompleteReferenceProps, AutoCompleteProps>((props, reference) => {
  return (
    <AutoCompleteProvider data={props.data}>
      <AutoCompleteComponent {...props} ref={reference} />
    </AutoCompleteProvider>
  );
});

export default AutoComplete;

import React from 'react';
import { segmentedButtonDocumentation } from 'services/docs/segmented-button';
import Content from 'src/sections/content';

const SegmentedButton = () => {
  return <Content values={segmentedButtonDocumentation} />;
};

export default SegmentedButton;

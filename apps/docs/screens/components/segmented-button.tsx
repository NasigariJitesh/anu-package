import Content from 'components/content';
import { segmentedButtonDocumentation } from 'services/docs/segmented-button';

const SegmentedButton = () => {
  return <Content values={segmentedButtonDocumentation} />;
};

export default SegmentedButton;

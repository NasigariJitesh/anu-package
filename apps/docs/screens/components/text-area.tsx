import Content from 'components/content';
import { textAreaDocumentation } from 'services/docs/text-area';

const TextArea = () => {
  return <Content values={textAreaDocumentation} />;
};

export default TextArea;

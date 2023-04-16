import Content from 'components/content';
import { autoCompleteDocumentation } from 'services/docs/auto-complete';

const AutoComplete = () => {
  return <Content values={autoCompleteDocumentation} />;
};

export default AutoComplete;

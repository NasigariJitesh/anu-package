import Content from 'components/content';
import { searchDocumentation } from 'services/docs/search';

const Search = () => {
  return <Content values={searchDocumentation} />;
};

export default Search;

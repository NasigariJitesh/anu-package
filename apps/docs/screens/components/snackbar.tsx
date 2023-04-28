import Content from 'components/content';
import { snackbarDocumentation } from 'services/docs/snackbar';

const Snackbar = () => {
  return <Content values={snackbarDocumentation} />;
};

export default Snackbar;

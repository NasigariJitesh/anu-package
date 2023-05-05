import Content from 'components/content';
import { dialogContentDocumentation } from 'services/docs/dialog-content';

const DialogContent = () => {
  return <Content values={dialogContentDocumentation} />;
};

export default DialogContent;

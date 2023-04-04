import Content from 'components/content';
import { cardContentDocumentation } from 'services/docs/card-content';

const CardContent = () => {
  return <Content values={cardContentDocumentation} />;
};

export default CardContent;

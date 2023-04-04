import Content from 'components/content';
import { cardHeaderDocumentation } from 'services/docs/card-header';

const CardHeader = () => {
  return <Content values={cardHeaderDocumentation} />;
};

export default CardHeader;

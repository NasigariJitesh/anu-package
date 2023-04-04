import Content from 'components/content';
import { cardDocumentation } from 'services/docs/card';

const Card = () => {
  return <Content values={cardDocumentation} />;
};

export default Card;

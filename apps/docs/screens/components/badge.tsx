import Content from 'components/content';
import { badgeDocumentation } from 'services/docs/badge';

const Badge = () => {
  return <Content values={badgeDocumentation} />;
};

export default Badge;

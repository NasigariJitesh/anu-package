import { badgeDocumentation } from 'services/docs/badge';
import Content from 'src/sections/content';

const Badge = () => {
  return <Content values={badgeDocumentation} />;
};

export default Badge;

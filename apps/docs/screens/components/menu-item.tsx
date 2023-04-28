import Content from 'components/content';
import { menuItemDocumentation } from 'services/docs/menu-item';

const MenuItem = () => {
  return <Content values={menuItemDocumentation} />;
};

export default MenuItem;

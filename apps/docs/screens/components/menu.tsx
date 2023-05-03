import Content from 'components/content';
import { menuDocumentation } from 'services/docs/menu';

const Menu = () => {
  return <Content values={menuDocumentation} />;
};

export default Menu;

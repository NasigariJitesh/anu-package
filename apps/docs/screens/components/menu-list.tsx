import Content from 'components/content';
import { menuListDocumentation } from 'services/docs/menu-list';

const MenuList = () => {
  return <Content values={menuListDocumentation} />;
};

export default MenuList;

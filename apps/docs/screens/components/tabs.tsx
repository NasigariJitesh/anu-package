import Content from 'components/content';
import { tabsDocumentation } from 'services/docs/tabs';

const Tabs = () => {
  return <Content values={tabsDocumentation} />;
};

export default Tabs;

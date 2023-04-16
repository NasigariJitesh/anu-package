import Content from 'components/content';
import { sideSheetDocumentation } from 'services/docs/side-sheet';

const SideSheet = () => {
  return <Content values={sideSheetDocumentation} />;
};

export default SideSheet;

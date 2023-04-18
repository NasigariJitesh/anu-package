import Content from 'components/content';
import { fileDropZoneDocumentation } from 'services/docs/file-drop-zone';

const FileDropZone = () => {
  return <Content values={fileDropZoneDocumentation} />;
};

export default FileDropZone;

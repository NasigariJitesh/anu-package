import Content from 'components/content';
import { fileUploadDocumentation } from 'services/docs/file-upload';

const FileUpload = () => {
  return <Content values={fileUploadDocumentation} />;
};

export default FileUpload;

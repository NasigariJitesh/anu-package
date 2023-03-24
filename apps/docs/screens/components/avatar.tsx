import Content from 'components/content';
import { avatarDocumentation } from 'services/docs/avatar';

const Avatar = () => {
  return <Content values={avatarDocumentation} />;
};

export default Avatar;

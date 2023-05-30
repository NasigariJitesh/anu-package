import Content from 'components/content';
import { skeletonDocumentation } from 'services/docs/skeleton';

const Skeleton = () => {
  return <Content values={skeletonDocumentation} />;
};

export default Skeleton;

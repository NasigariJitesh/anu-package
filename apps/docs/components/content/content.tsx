/* eslint-disable react-native/no-inline-styles */
import { Container } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { View } from 'react-native';
import { useMenuContext } from 'screens/common/provider';

import ComponentDetails from './component-details';
import ComponentExamples, { Example } from './component-examples';
import ComponentProperties, { Property } from './components-properties';

export interface ContentValues {
  mainHeading: string;
  heading?: string;
  mainDescription?: string;
  subTitle?: string;
  properties: Property[];
  examples: Example[];
  externalProperties?: {
    title: string;
    link: string;
  };
}

interface ContentProps {
  values: ContentValues;
}

const Content = ({ values }: ContentProps) => {
  const { isOpen } = useMenuContext();
  const { width } = useWindowDimensions();

  const { mainHeading, heading, subTitle, properties, examples, mainDescription, externalProperties } = values;

  const styles = getStyles();

  if (isOpen && width < 900) return null;

  return (
    <Container nativeID='root-scroll' style={styles.container as never}>
      <View nativeID='top' style={{ position: 'absolute', top: -70, height: 10, width: 10, zIndex: -10 }} />
      <ComponentDetails
        mainHeading={mainHeading}
        heading={heading}
        subTitle={subTitle}
        mainDescription={mainDescription}
      />
      <ComponentExamples examples={examples} />
      <ComponentProperties properties={properties} externalProperties={externalProperties} />
    </Container>
  );
};

const getStyles = () => {
  const styles = {
    container: {
      maxWidth: 900,
      flex: 1,
      alignSelf: 'baseline',
      zIndex: 1,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
      paddingTop: 20,
    },
  } as const;
  return styles;
};

export default Content;

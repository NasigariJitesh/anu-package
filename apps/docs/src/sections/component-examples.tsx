import { ReactChildren } from 'anu/common/types';
import { getTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { translations } from '../../services/localization';

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

export interface Example {
  code: string;
  component: ReactChildren;
  name: string;
  description?: string;
  id?: string;
}

interface ComponentExampleProps {
  examples: Example[];
}
const ComponentExamples = ({ examples }: ComponentExampleProps) => {
  const styles = getStyles();

  const renderExample = (example: Example, index: number) => {
    return (
      <Container nativeID={example.id} key={index} disableGutters style={styles.examplesContainer}>
        <Typography.Headline style={styles.name}>{example.name}</Typography.Headline>
        {example.description ? (
          <Typography.Body style={styles.description}>{example.description}</Typography.Body>
        ) : null}
        <ScrollView style={styles.examplesComponentContainer} showsHorizontalScrollIndicator={false} horizontal>
          <Container disableGutters align='flex-start' justify='center' style={styles.examplesComponentContainer}>
            {example.component}
          </Container>
        </ScrollView>
        <ScrollView horizontal style={styles.codeArea}>
          <SyntaxHighlighter style={arduinoLight} customStyle={styles.code}>
            {example.code}
          </SyntaxHighlighter>
        </ScrollView>
        {/* <Divider variant='full-width' light style={styles.divider} /> */}
      </Container>
    );
  };

  return (
    <Container disableGutters style={styles.container}>
      {/* <Typography.Headline style={styles.heading}>{translations('en', 'examples')}</Typography.Headline> */}
      {examples.map((example, index) => renderExample(example, index))}
    </Container>
  );
};

const getStyles = () => {
  const { colors } = getTheme();

  const styles = {
    container: {
      marginBottom: 30,
    },
    examplesContainer: {
      marginBottom: 20,
    },
    examplesComponentContainer: {
      marginVertical: 10,
    },
    heading: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 28,
      marginBottom: 15,
    },
    name: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
      marginBottom: 8,
    },
    description: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 8,
    },
    code: {
      fontFamily: firaCode.style.fontFamily,
      backgroundColor: 'transparent',
      fontSize: 14,
      fontWeight: '400',
    },
    divider: {
      color: colors.$onSurface,
    },
    codeArea: {
      backgroundColor: colors.$primaryContainer,
      maxWidth: 630,
      width: '90vw',
      padding: 5,
      borderRadius: 10,
    },
  } as const;
  return styles;
};

export default ComponentExamples;

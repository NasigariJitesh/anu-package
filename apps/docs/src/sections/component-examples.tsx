/* eslint-disable react-native/no-inline-styles */
import { ReactChildren } from 'anu/common/types';
import { getTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';
import { Source_Sans_Pro } from 'next/font/google';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { translations } from '../../services/localization';

const source = Source_Sans_Pro({
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
        <ScrollView style={{ width: '100%' }} showsHorizontalScrollIndicator={false} horizontal>
          <Container
            sx={{ marginVertical: 20 }}
            align='flex-start'
            justify='center'
            style={styles.examplesComponentContainer}
          >
            {example.component}
          </Container>
        </ScrollView>
        <Container style={styles.codeArea}>
          <SyntaxHighlighter showLineNumbers style={arduinoLight} customStyle={styles.code}>
            {example.code}
          </SyntaxHighlighter>
        </Container>
        {/* <Divider variant='full-width' light style={styles.divider} /> */}
      </Container>
    );
  };

  return (
    <Container nativeID='example' disableGutters style={styles.container}>
      <Typography.Headline style={styles.heading}>{translations('en', 'examples')}</Typography.Headline>
      {examples.map((example, index) => renderExample(example, index))}
    </Container>
  );
};

const getStyles = () => {
  const { colors } = getTheme();

  const styles = {
    container: {
      marginBottom: 30,
      width: '100%',
    },
    examplesContainer: {
      width: '100%',
      marginBottom: 20,
    },
    examplesComponentContainer: {
      width: '500px',
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
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      marginBottom: 8,
    },
    description: {
      color: colors.$onSurface,
      fontFamily: source.style.fontFamily,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 8,
    },
    code: {
      backgroundColor: 'transparent',
      fontSize: 16,
      fontWeight: '400',
      overflow: 'breakWord',
      width: '100%',
      maxWidth: 450,
    },
    divider: {
      color: colors.$onSurface,
    },
    codeArea: {
      backgroundColor: colors.$primaryContainer,
      width: '100%',
      maxWidth: 700,
      marginVertical: 15,
      padding: 5,
      borderRadius: 10,
      justifyContent: 'center',
    },
  } as const;
  return styles;
};

export default ComponentExamples;

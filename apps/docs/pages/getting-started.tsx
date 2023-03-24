/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Container, FlatList, Icon, LocalizedTypography, useAnuLocalization } from 'anu/lib';
import ComponentDetails from 'components/content/component-details';
import SEO from 'components/seo';
import { DripsyFinalTheme, ScrollView, useSx } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface StepProps {
  title: string;
  description?: string;
  code?: string;
  id: string;
}

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

const CodeArea = (props: { code: string }) => {
  const [isCopiedToClipboard, toggleCopyToClipboard] = useState(false);
  const [timeOut, updateTimeOut] = useState<NodeJS.Timeout | null>(null);

  const sx = useSx();
  const theme = useTheme();

  const styles = getStyles(theme);

  useEffect(() => {
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [timeOut]);

  const onPressedHandler = () => {
    if (isCopiedToClipboard) return;

    toggleCopyToClipboard(true);

    navigator.clipboard.writeText(props.code);

    updateTimeOut(
      setTimeout(() => {
        toggleCopyToClipboard(false);
      }, 3000),
    );
  };

  return (
    <Container disableGutters style={{ position: 'relative' }}>
      <Icon
        name={isCopiedToClipboard ? 'check' : 'content-copy'}
        size={18}
        onPress={onPressedHandler}
        style={sx({
          position: 'absolute',
          zIndex: 2,
          right: '5px',
          top: '19px',
          borderRadius: '8px',
          padding: '8px',
          color: isCopiedToClipboard ? 'green' : (theme.colors?.$onBackground as string),
          backgroundColor: theme?.colors?.$background as never,
        })}
      />
      <ScrollView
        horizontal
        sx={styles.codeArea as never}
        id={undefined}
        aria-label={undefined}
        aria-busy={undefined}
        aria-checked={undefined}
        aria-disabled={undefined}
        aria-expanded={undefined}
        aria-selected={undefined}
        aria-labelledby={undefined}
        aria-valuemax={undefined}
        aria-valuemin={undefined}
        aria-valuenow={undefined}
        aria-valuetext={undefined}
        aria-hidden={undefined}
        aria-live={undefined}
        aria-modal={undefined}
        role={undefined}
        stickyHeaderHiddenOnScroll={undefined}
        StickyHeaderComponent={undefined}
        onPointerEnter={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeave={undefined}
        onPointerLeaveCapture={undefined}
        onPointerMove={undefined}
        onPointerMoveCapture={undefined}
        onPointerCancel={undefined}
        onPointerCancelCapture={undefined}
        onPointerDown={undefined}
        onPointerDownCapture={undefined}
        onPointerUp={undefined}
        onPointerUpCapture={undefined}
        automaticallyAdjustKeyboardInsets={undefined}
        automaticallyAdjustsScrollIndicatorInsets={undefined}
      >
        <SyntaxHighlighter language='text' style={arduinoLight} customStyle={styles.code}>
          {props.code}
        </SyntaxHighlighter>
      </ScrollView>
    </Container>
  );
};

const Step = (props: StepProps) => {
  const theme = useTheme();
  const sx = useSx();
  const { getTranslation } = useAnuLocalization();

  const styles = getStyles(theme);

  return (
    <Container disableGutters nativeID={props.id} style={styles.examplesContainer}>
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={props.title} />
      {props.description ? (
        <div
          style={sx({ ...styles.stepDescription })}
          dangerouslySetInnerHTML={{ __html: getTranslation(props.description) }}
        />
      ) : null}
      {props.code ? <CodeArea code={props.code} /> : null}
    </Container>
  );
};

const ForNextJS = () => {
  const theme = useTheme();
  const sx = useSx();
  const { getTranslation } = useAnuLocalization();

  const styles = getStyles(theme);

  const steps = [
    {
      title: 'getting-started:step4.1:title',
      code: `const nextConfig = withExpo({
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'anu',
    'react-native-vector-icons',
    // Add more React Native / Expo packages here...
  ]
});`,
    },
    {
      title: 'getting-started:step4.2:title',
      code: `import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';
      
const theme = makeTheme({});
      
export default function App(props: AppProps) {
  return (
    <>
      {/* Add SEO tags above the provider */}
      <Provider theme={theme}>
        <props.Component {...props.pageProps} />
      </Provider>
    </>
  );
};
      
export default App;`,
    },
    {
      title: 'getting-started:step4.3:title',
      code: `@font-face {
  src: url(MaterialIcons.ttf);
  font-family: 'MaterialIcons';
}`,
    },
    {
      title: 'getting-started:step4.4:title',
    },
    {
      title: 'getting-started:step4.5:title',
      code: "import '../public/fonts/font.css';",
    },
  ];

  return (
    <Container nativeID='with-next' disableGutters style={styles.examplesContainer}>
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={'getting-started:step4:title'} />
      <div
        style={sx(styles.stepDescription)}
        dangerouslySetInnerHTML={{ __html: getTranslation('getting-started:step4:description') }}
      />

      <FlatList
        renderItem={({ item }) => {
          return (
            <Container disableGutters sx={{ marginVertical: '15px' }}>
              <div
                style={sx(styles.stepDescription)}
                dangerouslySetInnerHTML={{ __html: getTranslation(item.title) }}
              />
              {item.code ? <CodeArea code={item.code} /> : null}
            </Container>
          );
        }}
        data={steps}
      />
    </Container>
  );
};

const GettingStarted = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <SEO title='Getting Started' />
      <Container nativeID='root-scroll' sx={styles.container}>
        <Container disableGutters sx={{ maxWidth: '750px' }}>
          <ComponentDetails
            mainHeading={'getting-started:mainHeading'}
            mainDescription={'getting-started:mainDescription'}
          />
          <Step id='installation' code='npm install anu' title='getting-started:step1:title' />
          <Step
            id='provider'
            description='getting-started:step3:description'
            code={`import { Provider } from 'anu/common/context';
import { makeTheme } from 'anu/config';

const theme = makeTheme({});

const App = () => {
  return (
    <Provider theme={theme}>
      {/* Children */}
    </Provider>
  );
};

export default App;`}
            title='getting-started:step3:title'
          />
          <Step id='icons' description='getting-started:step5:description' title='getting-started:step5:title' />
          <ForNextJS />
        </Container>
      </Container>
    </>
  );
};

const getStyles = ({ colors }: DripsyFinalTheme) => {
  const styles = {
    container: {
      maxWidth: 900,
      flex: 1,
      alignSelf: 'baseline',
      zIndex: 1,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      paddingTop: 20,
      overflow: 'scroll',
    },

    examplesContainer: {
      marginVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
    },

    codeArea: {
      backgroundColor: colors?.$surfaceVariant as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      padding: '5px',
      borderRadius: 10,
      marginVertical: 15,
    },

    code: {
      fontFamily: firaCode.style.fontFamily,
      backgroundColor: 'transparent',
      fontWeight: '400',
      fontSize: 14,
      color: colors?.$onSurface as never,
    },

    stepTitle: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
      maxWidth: '750px',
      marginBottom: '15px',
    },

    stepDescription: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      fontSize: 16,
      fontWeight: '400',
      lineHeight: '20px',
    },
  } as const;
  return styles;
};

export default GettingStarted;

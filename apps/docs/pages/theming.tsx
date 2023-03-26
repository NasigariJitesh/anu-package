/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Container, FlatList, Icon, LocalizedTypography, useAnuLocalization } from 'anu/lib';
import ComponentDetails from 'components/content/component-details';
import SEO from 'components/seo';
import { DripsyFinalTheme, ScrollView, useSx } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface StepProps {
  title: string;
  description?: string[];
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

const CodeArea = (props: { code: string; customStyle?: Record<string, never> }) => {
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
        sx={{ ...styles.codeArea, ...props.customStyle }}
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
    <Container disableGutters style={styles.examplesContainer}>
      <View nativeID={props.id} style={{ position: 'absolute', top: -90, height: 10, width: 10, zIndex: -10 }} />
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={props.title} />
      {props.description ? (
        <FlatList
          data={props.description}
          renderItem={({ item }) => {
            return (
              <div
                style={sx({ ...styles.stepDescription })}
                dangerouslySetInnerHTML={{ __html: getTranslation(item) }}
              />
            );
          }}
        />
      ) : null}
      {props.code ? <CodeArea code={props.code} /> : null}
    </Container>
  );
};

const ColorModes = () => {
  const theme = useTheme();
  const sx = useSx();

  const styles = getStyles(theme);

  return (
    <Container disableGutters style={styles.examplesContainer}>
      <View
        nativeID='default-color-modes'
        style={{ position: 'absolute', top: -90, height: 10, width: 10, zIndex: -10 }}
      />
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey='theming:step-4:title' />
      <Container disableGutters>
        <View nativeID='light-theme' style={{ position: 'absolute', top: -80, height: 10, width: 10, zIndex: -10 }} />
        <LocalizedTypography.Title style={sx(styles.stepSubTitle)} localeKey='theming:step-4:sub-title-1' />
        <CodeArea
          code={`{
  $primary: “#4d53b7”, 
  $onPrimary: “#ffffff”, 
  $primaryContainer: “#e0e0ff”, 
  $onPrimaryContainer: “#00006e”, 
  $secondary: “#a63066”, 
  $onSecondary: “#ffffff”, 
  $secondaryContainer: “#ffd9e3”, 
  $onSecondaryContainer: “#3e001f”, 
  $tertiary: “#646100”, 
  $onTertiary: “#ffffff”, 
  $tertiaryContainer: “#ece76e”, 
  $onTertiaryContainer: “#1e1d00”, 
  $error: “#ba1a1a”, 
  $onError: “#ffffff”, 
  $errorContainer: “#ffdad6”, 
  $onErrorContainer: “#410002”, 
  $background: “#fffbff”, 
  $onBackground: “#1b1b1f”, 
  $surface: “#fffbff”, 
  $onSurface: “#1b1b1f”, 
  $outline: “#777680”, 
  $surfaceVariant: “#e4e1ec”, 
  $onSurfaceVariant: “#46464f”, 
  $outlineVariant: “#c7c5d0”, 
  $shadow: “#000000”, 
  $surfaceTint: “#090C7D”, 
  $inverseSurface: “#303034”, 
  $inverseOnSurface: “#f3eff4”, 
  $inversePrimary: “#bfc2ff”, 
  $scrim: “#000000” 
};`}
        />
      </Container>
      <Container disableGutters>
        <View nativeID='dark-theme' style={{ position: 'absolute', top: -80, height: 10, width: 10, zIndex: -10 }} />
        <LocalizedTypography.Title style={sx(styles.stepSubTitle)} localeKey='theming:step-4:sub-title-2' />
        <CodeArea
          code={`{
  $primary: “#BFC2FF”, 
  $onPrimary: “#1A1F88”, 
  $primaryContainer: “#343A9E”, 
  $onPrimaryContainer: “#E0E0FF”, 
  $secondary: “#FFB0CA”, 
  $onSecondary: “#640036”, 
  $secondaryContainer: “#87154E”, 
  $onSecondaryContainer: “#FFD9E3”, 
  $tertiary: “#CFCB55”, 
  $onTertiary: “#333200”, 
  $tertiaryContainer: “#4B4900”, 
  $onTertiaryContainer: “#ECE76E”, 
  $error: “#FFB4AB”, 
  $onError: “#690005”, 
  $errorContainer: “#93000A”, 
  $onErrorContainer: “#FFDAD6”, 
  $background: “#1B1B1F”, 
  $onBackground: “#E5E1E6”, 
  $surface: “#1B1B1F”, 
  $onSurface: “#E5E1E6”, 
  $outline: “#918F9A”, 
  $surfaceVariant: “#46464F”, 
  $onSurfaceVariant: “#C7C5D0”, 
  $outlineVariant: “#46464F”, 
  $shadow: “#000000”, 
  $surfaceTint: “#090C7D”, 
  $inverseSurface: “#E5E1E6”, 
  $inverseOnSurface: “#303034”, 
  $inversePrimary: “#4D53B7”, 
  $scrim: “#000000”
};`}
        />
      </Container>
      <LocalizedTypography.Body
        style={sx({ ...styles.stepDescription, marginTop: 15 })}
        localeKey='theming:step-4:description'
      />
    </Container>
  );
};

const AdditionalLinks = () => {
  const theme = useTheme();
  const sx = useSx();
  const { getTranslation } = useAnuLocalization();

  const styles = getStyles(theme);

  const links = ['theming:step-6:description-1', 'theming:step-6:description-2', 'theming:step-6:description-3'];

  return (
    <Container disableGutters style={styles.examplesContainer}>
      <View
        nativeID='additional-links'
        style={{ position: 'absolute', top: -90, height: 10, width: 10, zIndex: -10 }}
      />
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey='theming:step-6:title' />
      <ul id='additional-links-list'>
        {links.map((item) => {
          return (
            <li key={item} style={{ marginLeft: 15 }}>
              <div
                style={sx({ ...styles.stepDescription })}
                dangerouslySetInnerHTML={{ __html: getTranslation(item) }}
              />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Theming = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <>
      <SEO title='theming:mainHeading' />
      <Container nativeID='root-scroll' sx={styles.container}>
        <View nativeID='top' style={{ position: 'absolute', top: -70, height: 10, width: 10, zIndex: -10 }} />
        <Container disableGutters sx={{ maxWidth: '750px' }}>
          <ComponentDetails mainHeading={'theming:mainHeading'} mainDescription={'theming:mainDescription'} />
          <Step
            id='create-theme'
            title='theming:step-1:title'
            description={['theming:step-1:description']}
            code={`import { makeTheme } from 'anu';

const theme = makeTheme({ 
  colors: {
    $primary: ‘#4d53b7’,
    $secondary: ‘#a63066’, 
    $background: ‘#ffffff’,
  },
});`}
          />
          <Step
            id='usage'
            title='theming:step-2:title'
            code={`import { useTheme } from 'anu';

const MyComponent = () => { 
  const theme = useTheme();
  
  return (
    <Text style={{ color: theme.colors.$primary }}>
      Hello World
    </Text>
  ); 
};`}
          />
          <Step
            id='color-modes'
            title='theming:step-3:title'
            description={[
              'theming:step-3:description-1',
              'theming:step-3:description-2',
              'theming:step-3:description-3',
            ]}
          />

          <ColorModes />
          <Step
            id='custom-fonts'
            title='theming:step-5:title'
            description={['theming:step-5:description-1', 'theming:step-5:description-2']}
            code={`const theme = makeTheme({
  colors: { 
    $primary: '#4d53b7', 
    $secondary: '#a63066', 
    background: '#ffffff', 
  }, 
  fontFamily: { 
    default: 'Roboto', 
    100: 'Inter',
    … 
  }, 
});`}
          />
        </Container>
        <AdditionalLinks />
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

    listItem: {
      marginTop: 15,
    },

    examplesContainer: {
      marginVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
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

    stepSubTitle: {
      color: colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 22,
      maxWidth: '750px',
      marginTop: '15px',
    },

    stepDescription: {
      fontFamily: source.style.fontFamily,
      fontSize: 16,
      lineHeight: '24px',
      marginBottom: '15px',
      color: colors?.$onSurface as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      fontWeight: '400',
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
  } as const;
  return styles;
};

export default Theming;

/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { AnuProvider } from 'anu/common/context';
import { AnuFinalTheme, useTheme } from 'anu/config';
import { generateTheme } from 'anu/config/dripsy/theme';
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  Container,
  ExtendedFAB,
  FAB,
  FlatList,
  Grid,
  Icon,
  IconButton,
  Radio,
  Switch,
  TextField,
  Typography,
} from 'anu/lib';
import LocalizedTypography, { useAnuLocalization } from 'anu/lib/advanced/smart-localization';
import ComponentDetails from 'components/content/component-details';
import SEO from 'components/seo';
import { DripsyFinalTheme, ScrollView, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { arduinoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useMenuContext } from 'screens/common/provider';

interface StepProps {
  title: string;
  description?: string[];
  code?: string;
  id: string;
}

interface ThemeDemoProps {
  title: string;
  id: string;

  theme: AnuFinalTheme;
}

interface ColorProps {
  title: string;
  backgroundColor: string;
  color: string;
  colorCode?: string;
  customColor?: boolean;
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

const data: ColorProps[] = [
  { title: 'Primary', backgroundColor: '$primary', color: '$onPrimary', colorCode: 'Primary40' },
  { title: 'On Primary', backgroundColor: '$onPrimary', color: '$primary', colorCode: 'Primary100' },
  {
    title: 'Primary Container',
    backgroundColor: '$primaryContainer',
    color: '$onPrimaryContainer',
    colorCode: 'Primary90',
  },
  {
    title: 'On Primary Container',
    backgroundColor: '$onPrimaryContainer',
    color: '$primaryContainer',
    colorCode: 'Primary10',
  },

  { title: 'Secondary', backgroundColor: '$secondary', color: '$onSecondary', colorCode: 'Secondary40' },
  { title: 'On Secondary', backgroundColor: '$onSecondary', color: '$secondary', colorCode: 'Secondary100' },
  {
    title: 'Secondary Container',
    backgroundColor: '$secondaryContainer',
    color: '$onSecondaryContainer',
    colorCode: 'Secondary90',
  },
  {
    title: 'On Secondary Container',
    backgroundColor: '$onSecondaryContainer',
    color: '$secondaryContainer',
    colorCode: 'Secondary10',
  },

  { title: 'Tertiary', backgroundColor: '$tertiary', color: '$onTertiary', colorCode: 'Tertiary40' },
  { title: 'On Tertiary', backgroundColor: '$onTertiary', color: '$tertiary', colorCode: 'Tertiary100' },
  {
    title: 'Tertiary Container',
    backgroundColor: '$tertiaryContainer',
    color: '$onTertiaryContainer',
    colorCode: 'Tertiary90',
  },
  {
    title: 'On Tertiary Container',
    backgroundColor: '$onTertiaryContainer',
    color: '$tertiaryContainer',
    colorCode: 'Tertiary10',
  },

  { title: 'Error', backgroundColor: '$error', color: '$onError', colorCode: 'Error40' },
  { title: 'On Error', backgroundColor: '$onError', color: '$error', colorCode: 'Error100' },
  {
    title: 'Error Container',
    backgroundColor: '$errorContainer',
    color: '$onErrorContainer',
    colorCode: 'Error90',
  },
  {
    title: 'On Error Container',
    backgroundColor: '$onErrorContainer',
    color: '$errorContainer',
    colorCode: 'Error10',
  },

  {
    title: 'Surface',
    backgroundColor: '$surface',
    color: '$onSurface',
  },

  {
    title: 'Surface Dim',
    backgroundColor: '$surfaceDim',
    color: '$onSurface',
  },

  {
    title: 'Surface Bright',
    backgroundColor: '$surfaceBright',
    color: '$onSurface',
  },
  {
    title: 'Surface Container Lowest',
    backgroundColor: '$surfaceContainerLowest',
    color: '$onSurface',
  },
  {
    title: 'Surface Container Lowest',
    backgroundColor: '$surfaceContainerLowest',
    color: '$onSurface',
  },
  {
    title: 'Surface Container Low',
    backgroundColor: '$surfaceContainerLow',
    color: '$onSurface',
  },
  {
    title: 'Surface Container',
    backgroundColor: '$surfaceContainer',
    color: '$onSurface',
  },
  {
    title: 'Surface Container High',
    backgroundColor: '$surfaceContainerHigh',
    color: '$onSurface',
  },
  {
    title: 'Surface Container Highest',
    backgroundColor: '$surfaceContainerHighest',
    color: '$onSurface',
  },
  {
    title: 'On Surface',
    backgroundColor: '$onSurface',
    color: '$surface',
  },
  {
    title: 'Surface Variant',
    backgroundColor: '$surfaceVariant',
    color: '$onSurfaceVariant',
  },
  {
    title: 'On Surface Variant',
    backgroundColor: '$onSurfaceVariant',
    color: '$surfaceVariant',
  },

  {
    title: 'Inverse Surface',
    backgroundColor: '$inverseSurface',
    color: '$inverseOnSurface',
  },
  {
    title: 'Inverse On Surface',
    backgroundColor: '$inverseOnSurface',
    color: '$inverseSurface',
  },

  {
    title: 'Background',
    backgroundColor: '$background',
    color: '$onBackground',
  },
  {
    title: 'On Background',
    backgroundColor: '$onBackground',
    color: '$background',
  },

  {
    title: 'Outline',
    backgroundColor: '$outline',
    color: '$onSurface',
  },
  {
    title: 'Outline Variant',
    backgroundColor: '$outlineVariant',
    color: '$onSurface',
  },

  {
    title: 'Shadow',
    backgroundColor: '$shadow',
    color: '#fff',
    customColor: true,
  },
  {
    title: 'Surface Tint',
    backgroundColor: '$surfaceTint',
    color: '#fff',
    customColor: true,
  },
  {
    title: 'scrim',
    backgroundColor: '$scrim',
    color: '#fff',
    customColor: true,
  },
];

const getInitialTheme = (colorScheme: 'dark' | 'light') => {
  return generateTheme({
    theme: {},
    color: { primary: '#090C7D', secondary: '#7D0946', tertiary: '#7D7A09', neutral: '#929094' },
    colorScheme,
    extendDefaultTheme: true,
  });
};

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
        accessibilityLabelledBy={undefined}
        accessibilityLanguage={undefined}
        href={undefined}
        hrefAttrs={undefined}
        onClick={undefined}
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

const ColorModes = (colors: AnuFinalTheme['colors']) => {
  return (
    <CodeArea
      code={`{
  $primary: “${colors.$primary}”,
  $primaryContainer: “${colors.$primaryContainer}”,
  $onPrimary: “${colors.$onPrimary}”,
  $onPrimaryContainer: “${colors.$onPrimaryContainer}”,
  $inversePrimary: “${colors.$inversePrimary}”,

  $secondary: “${colors.$secondary}”,
  $secondaryContainer: “${colors.$secondaryContainer}”,
  $onSecondary: “${colors.$onSecondary}”,
  $onSecondaryContainer: “${colors.$onSecondaryContainer}”,

  $tertiary: “${colors.$tertiary}”,
  $tertiaryContainer: “${colors.$tertiaryContainer}”,
  $onTertiary: “${colors.$onTertiary}”,
  $onTertiaryContainer: “${colors.$onTertiaryContainer}”,

  $surface: “${colors.$surface}”,
  $surfaceDim: “${colors.$surfaceDim}”,
  $surfaceBright: “${colors.$surfaceBright}”,
  $surfaceContainerLowest: “${colors.$surfaceContainerLowest}”,
  $surfaceContainerLow: “${colors.$surfaceContainerLow}”,
  $surfaceContainer: “${colors.$surfaceContainer}”,
  $surfaceContainerHigh: “${colors.$surfaceContainerHigh}”,
  $surfaceContainerHighest: “${colors.$surfaceContainerHighest}”,
  $surfaceVariant: “${colors.$surfaceVariant}”,
  $onSurface: “${colors.$onSurface}”,
  $onSurfaceVariant: “${colors.$onSurfaceVariant}”,

  $inverseSurface: “${colors.$inverseSurface}”,
  $inverseOnSurface: “${colors.$inverseOnSurface}”,

  $background: “${colors.$background}”,
  $onBackground: “${colors.$onBackground}”,

  $error: “${colors.$error}”,
  $errorContainer: “${colors.$errorContainer}”,
  $onError: “${colors.$onError}”,
  $onErrorContainer: “${colors.$onErrorContainer}”,

  $outline: “${colors.$outline}”,
  $outlineVariant: “${colors.$outlineVariant}”,

  $shadow: “${colors.$shadow}”,
  $surfaceTint: “${colors.$surfaceTint}”,
  $scrim: “${colors.$scrim}”, 
};`}
    />
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
            <li key={item} style={{ marginLeft: 15, color: theme.colors?.$onSurface as string }}>
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

const ColorBlock = ({ item }: { item: ColorProps }) => {
  const theme = useTheme();

  const styles = getStyles(theme);

  const [active, setActive] = useState(false);
  const [isCopiedToClipboard, toggleCopyToClipboard] = useState(false);
  const [timeOut, updateTimeOut] = useState<NodeJS.Timeout | null>(null);

  const sx = useSx();

  useEffect(() => {
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [timeOut]);

  const onPressedHandler = () => {
    if (isCopiedToClipboard) return;

    toggleCopyToClipboard(true);

    navigator.clipboard.writeText(theme.colors[item.backgroundColor as keyof AnuFinalTheme['colors']]);

    updateTimeOut(
      setTimeout(() => {
        toggleCopyToClipboard(false);
      }, 3000),
    );
  };

  return (
    <Pressable style={styles.colorBlockPressable} onHoverIn={() => setActive(true)} onHoverOut={() => setActive(false)}>
      <Container
        style={[
          styles.colorBlock,
          { backgroundColor: theme.colors[item.backgroundColor as keyof AnuFinalTheme['colors']] },
        ]}
      >
        {active ? (
          <Icon
            name={isCopiedToClipboard ? 'check' : 'content-copy'}
            size={18}
            onPress={onPressedHandler}
            style={sx({
              position: 'absolute',
              zIndex: 2,
              right: '5px',
              top: '25px',
              borderRadius: '8px',
              padding: '8px',
              color: item.customColor ? item.color : theme.colors[item.color as keyof AnuFinalTheme['colors']],
            })}
          />
        ) : null}
        <Typography.Title
          style={{ color: item.customColor ? item.color : theme.colors[item.color as keyof AnuFinalTheme['colors']] }}
        >
          {item.title}
        </Typography.Title>
        {item.colorCode ? (
          <Typography.Title
            style={{
              alignSelf: 'flex-end',
              color: theme.colors[item.color as keyof AnuFinalTheme['colors']],
            }}
          >
            {item.colorCode}
          </Typography.Title>
        ) : null}
      </Container>
    </Pressable>
  );
};

const Preview = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [switchOn, toggleSwitch] = useState(true);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  return (
    <Container disableGutters sx={styles.previewComponentContainer as never}>
      <Container disableGutters style={{ alignItems: 'center', padding: 20, width: '100%', justifyContent: 'center' }}>
        <Container disableGutters style={[styles.wrapContainer, { alignItems: 'center' }]}>
          <Typography.Display style={styles.margin}>d1. Display</Typography.Display>
          <Typography.Headline style={styles.margin}>h1. Headline</Typography.Headline>
        </Container>
        <Container disableGutters style={[styles.wrapContainer, { alignItems: 'center' }]}>
          <Button.Filled title='Filled' style={{ ...styles.margin, width: 100 }} />
          <Button.Elevated title='Elevated' style={{ ...styles.margin, width: 100 }} />
          <Button.Outlined title='Outlined' style={{ ...styles.margin, width: 100 }} />
          <Button.Text title='Text' style={{ ...styles.margin, width: 100 }} />
        </Container>
        <Container disableGutters style={[styles.wrapContainer, { alignItems: 'center' }]}>
          <FAB icon={{ name: 'phone' }} style={styles.margin} />
          <ExtendedFAB icon={{ name: 'phone' }} title='Contact' style={styles.margin} />
          <IconButton icon={{ name: 'settings' }} variant='filled' style={styles.margin} />
          <Checkbox id='check-box' selected style={styles.margin} />
          <Radio id='radio' style={styles.margin} />
          <Container disableGutters style={styles.margin}>
            <Switch value={switchOn} onValueChange={toggleSwitch} />
          </Container>
        </Container>
        <Container disableGutters style={[styles.wrapContainer, { alignItems: 'center' }]}>
          <Chip value='Assist Chip' type='assist' style={{ ...styles.margin, minWidth: 100, maxWidth: 120 }} />
          <Chip
            value='Assist Chip'
            type='assist'
            leadingIcon={{ name: 'star' }}
            style={{ ...styles.margin, minWidth: 100, maxWidth: 120 }}
          />
          <Avatar variant='circle' size='large' style={styles.margin}>
            <Icon name='person' style={{ color: theme.colors.$onPrimary }} />
          </Avatar>
        </Container>
        <Container disableGutters style={[styles.wrapContainer, { alignItems: 'center' }]}>
          <Container disableGutters style={styles.margin}>
            <TextField
              variant='outlined'
              value={value}
              onChangeText={setValue}
              supportingText='Supporting text'
              style={{ minWidth: 280 }}
            />
          </Container>
          <Container disableGutters style={styles.margin}>
            <TextField
              variant='filled'
              value={value1}
              onChangeText={setValue1}
              supportingText='Supporting text'
              style={{ minWidth: 280 }}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

const ColorPalette = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <ScrollView
      horizontal
      sx={styles.colorPalette}
      contentContainerStyle={{ width: '100%' }}
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
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      href={undefined}
      hrefAttrs={undefined}
      onClick={undefined}
    >
      <Grid
        spacing={1}
        data={data}
        numberOfColumns={[{ minWidth: 100, columns: 4 }]}
        defaultNumberOfColumns={4}
        style={{ minWidth: 600 }}
        renderItem={(item) => <ColorBlock item={item} />}
      />
    </ScrollView>
  );
};

const ThemeDemo = (props: ThemeDemoProps) => {
  const theme = useTheme();
  const sx = useSx();

  const styles = getStyles(theme);
  return (
    <Container disableGutters style={sx(styles.examplesContainer)}>
      <View nativeID={props.id} style={{ position: 'absolute', top: -90, height: 10, width: 10, zIndex: -10 }} />
      <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={props.title} />
      <Container disableGutters style={sx(styles.examplesContainer)}>
        <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={'theming:preview'} />
        <AnuProvider theme={props.theme}>
          <Preview />
        </AnuProvider>
      </Container>
      <Container disableGutters style={sx(styles.examplesContainer)}>
        <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={'theming:colorPalette'} />
        <Container disableGutters style={{ width: '100%', marginVertical: 15 }}>
          <AnuProvider theme={props.theme}>
            <ColorPalette />
          </AnuProvider>
        </Container>
      </Container>
      <Container disableGutters style={sx(styles.examplesContainer)}>
        <LocalizedTypography.Headline style={sx(styles.stepTitle)} localeKey={'theming:colorMode'} />
        <Container disableGutters style={{ width: '100%', marginVertical: 15 }}>
          <ColorModes {...props.theme.colors} />
        </Container>
      </Container>
    </Container>
  );
};

const ThemeBuilder = () => {
  const [primary, setPrimary] = useState('#090C7D');
  const [secondary, setSecondary] = useState('');
  const [tertiary, setTertiary] = useState('');
  const [neutralVariant, setNeutralVariant] = useState('');
  const [neutral, setNeutral] = useState('');

  const [error, setError] = useState(false);

  const [lightTheme, setLightTheme] = useState<AnuFinalTheme>(getInitialTheme('light'));
  const [darkTheme, setDarkTheme] = useState<AnuFinalTheme>(getInitialTheme('dark'));

  const { getTranslation } = useAnuLocalization();

  const sx = useSx();
  const theme = useTheme();
  const styles = getStyles(theme);

  const makeTheme = () => {
    if (!primary) {
      setError(true);
      return;
    }

    const hasOtherColors = !!secondary || !!tertiary || !!neutral || !!neutralVariant;

    const generatedLightTheme = generateTheme({
      theme: {},
      color: hasOtherColors
        ? {
            primary,
            ...(secondary ? { secondary } : {}),
            ...(tertiary ? { tertiary } : {}),
            ...(neutral ? { neutral } : {}),
            ...(neutralVariant ? { neutralVariant } : {}),
          }
        : primary,
      colorScheme: 'light',
      extendDefaultTheme: true,
    });
    setLightTheme(generatedLightTheme);

    const generatedDarkTheme = generateTheme({
      theme: {},
      color: hasOtherColors
        ? {
            primary,
            ...(secondary ? { secondary } : {}),
            ...(tertiary ? { tertiary } : {}),
            ...(neutral ? { neutral } : {}),
            ...(neutralVariant ? { neutralVariant } : {}),
          }
        : primary,
      colorScheme: 'dark',
      extendDefaultTheme: true,
    });
    setDarkTheme(generatedDarkTheme);
  };

  return (
    <Container disableGutters style={[sx(styles.examplesContainer), { marginVertical: 0 }]}>
      <Container disableGutters style={[sx(styles.examplesContainer), { marginVertical: 0, marginBottom: 20 }]}>
        <Container disableGutters style={styles.wrapContainer}>
          <Container disableGutters style={styles.colorInput}>
            <TextField variant='outlined' label='Primary*' value={primary} onChangeText={setPrimary} />
          </Container>
          <Container disableGutters style={styles.colorInput}>
            <TextField variant='outlined' label='Secondary' value={secondary} onChangeText={setSecondary} />
          </Container>
          <Container disableGutters style={styles.colorInput}>
            <TextField variant='outlined' label='Tertiary' value={tertiary} onChangeText={setTertiary} />
          </Container>
          <Container disableGutters style={styles.colorInput}>
            <TextField variant='outlined' label='Neutral' value={neutral} onChangeText={setNeutral} />
          </Container>
          <Container disableGutters style={styles.colorInput}>
            <TextField
              variant='outlined'
              label='Neutral Variant'
              value={neutralVariant}
              onChangeText={setNeutralVariant}
            />
          </Container>
          <Container disableGutters width='100%' align='center'>
            <Button.Filled title='Generate' onPress={() => makeTheme()} style={styles.button} />
          </Container>
        </Container>

        {error ? (
          <Typography.Body style={styles.primaryError}>{getTranslation('theming:step-3:error')} </Typography.Body>
        ) : null}
      </Container>
      <ThemeDemo theme={lightTheme} title='theming:step-3:sub-title-1' id='light-theme' />
      <ThemeDemo theme={darkTheme} title='theming:step-3:sub-title-2' id='dark-theme' />
    </Container>
  );
};

const Theming = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { isOpen } = useMenuContext();
  const { width } = useWindowDimensions();

  if (isOpen && width < 900) return null;

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
            code={`import { generateTheme } from 'anu';

const theme = generateTheme({
  theme: {},
  color: { primary: '#090C7D', secondary: '#7D0946', tertiary: '#7D7A09', neutral: '#929094' },
  colorScheme: 'light',
  extendDefaultTheme: true,
});

export default function App(props: AppProps){
  <AnuProvider theme={theme}>
    //Your App
  </AnuProvider>
};`}
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
            id='theme-builder'
            title='theming:step-3:title'
            description={[
              'theming:step-3:description-1',
              'theming:step-3:description-2',
              'theming:step-3:description-3',
            ]}
          />
          <ThemeBuilder />
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

const getStyles = (theme: DripsyFinalTheme) => {
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
      overflow: 'hidden',
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
    },

    previewComponentContainer: {
      marginVertical: 20,
      paddingVertical: 20,
      width: ['90vw', '90vw', '550px', '600px', '750px'],
      borderRadius: 18,
      backgroundColor: (theme.colorScheme === 'dark' ? '#2b2b2e' : '#f3efef') as string,
      borderColor: theme.colors?.$outline as string,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
    },

    stepTitle: {
      color: theme.colors?.$onSurface as never,
      fontFamily: source.style.fontFamily,
      fontSize: 22,
      fontWeight: '600',
      lineHeight: 22,
      maxWidth: '750px',
      marginBottom: '15px',
    },

    stepSubTitle: {
      color: theme.colors?.$onSurface as never,
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
      color: theme.colors?.$onSurface as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      fontWeight: '400',
    },

    codeArea: {
      backgroundColor: theme.colors?.$surfaceVariant as never,
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      padding: '5px',
      borderRadius: 10,
      marginVertical: 15,
    },

    colorPalette: {
      width: ['90vw', '90vw', '550px', '600px', '750px'] as never,
      marginVertical: 15,
    },

    code: {
      fontFamily: firaCode.style.fontFamily,
      backgroundColor: 'transparent',
      fontWeight: '400',
      fontSize: 14,
      color: theme.colors?.$onSurface as never,
    },

    margin: {
      margin: 15,
    },

    colorInput: { minWidth: 250, flex: 1, maxWidth: 350, margin: 15 },

    primaryError: {
      fontWeight: '400',
      fontSize: 14,
      color: theme.colors?.$error as never,
      marginHorizontal: 15,
    },

    button: {
      width: 180,
      margin: 15,
    },

    colorBlockPressable: {
      width: '100%',
      marginVertical: 10,
    },

    colorBlock: {
      width: '100%',
      padding: 10,
      height: 100,
      justifyContent: 'space-between',
    },

    wrapContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  } as const;
  return styles;
};

export default Theming;

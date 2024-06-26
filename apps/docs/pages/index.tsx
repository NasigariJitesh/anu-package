/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'anu/config';
import { Button, Chip, Container, FlatList, Icon, Typography } from 'anu/lib';
import LocalizedTypography, { useAnuLocalization } from 'anu/lib/advanced/smart-localization';
import Footer from 'components/footer';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import ParticlesDark from 'screens/common/particles-dark';
import ParticlesLight from 'screens/common/particles-light';
import { useMenuContext } from 'screens/common/provider';
import { footerLinks } from 'services/docs/footer';
import { Link } from 'solito/link';

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

interface ListProps {
  heading: string;
  list: string[];
}

const List = (props: ListProps) => {
  const style = styles();
  const sx = useSx();

  const { getTranslation } = useAnuLocalization();

  return (
    <Container style={sx(style.listAndHeadingContainer)} align='center'>
      <LocalizedTypography.Title localeKey={props.heading} style={sx(style.listHeading)} />
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={style.listContainer}
        renderItem={({ item }) => {
          return <Chip value={getTranslation(item)} selected style={style.listItem} />;
        }}
      />
    </Container>
  );
};

const Installation = () => {
  const [isCopiedToClipboard, toggleCopyToClipboard] = useState(false);
  const [timeOut, updateTimeOut] = useState<NodeJS.Timeout | null>(null);

  const theme = useTheme();

  const style = styles(theme);
  const sx = useSx();

  const code = 'npm install @anu-dev/core';

  useEffect(() => {
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [timeOut]);

  const onPressedHandler = () => {
    if (isCopiedToClipboard) return;

    toggleCopyToClipboard(true);

    navigator.clipboard.writeText(code);

    updateTimeOut(
      setTimeout(() => {
        toggleCopyToClipboard(false);
      }, 3000),
    );
  };

  return (
    <Container disableGutters style={sx(style.codeArea)}>
      <Typography.Body style={style.code}>{code}</Typography.Body>
      <Icon
        name={isCopiedToClipboard ? 'check' : 'content-copy'}
        size={16}
        onPress={onPressedHandler}
        style={sx({
          marginLeft: '16px',
          borderRadius: '8px',
          padding: '8px',
          color: isCopiedToClipboard ? 'green' : (theme.colors?.$onBackground as string),
          backgroundColor: theme?.colors?.$background as never,
        })}
      />
    </Container>
  );
};

const Home = () => {
  const { isDarkTheme } = useMenuContext();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();
  const { height, width } = useWindowDimensions();
  const sx = useSx();

  const style = styles(theme, height);

  return (
    <>
      {isDarkTheme ? <ParticlesDark /> : <ParticlesLight />}
      <Container disableGutters style={style.container}>
        <View nativeID='top' style={{ position: 'absolute', top: -70, height: 1, width: 1, zIndex: -10 }} />
        <Container flexDirection='column' justify='center' align='center' style={sx(style.center)}>
          <Container disableGutters style={style.imageContainer}>
            <img
              src={isDarkTheme ? 'img/logo_dark_theme.svg' : 'img/logo_light_theme.svg'}
              alt={'Anu - ' + getTranslation('home:mainHeading')}
              style={style.image}
            />
          </Container>
          <LocalizedTypography.Display localeKey='home:mainHeading' style={sx(style.mainHeading)} />
          <Container
            disableGutters
            sx={{
              flexDirection: ['column', 'column', 'column', 'row', 'row'],
              width: width * 0.9,
              justifyContent: ['center', 'center', 'center', 'center', 'center'],
            }}
          >
            <List heading='home:list1-heading' list={['home:list1-item1', 'home:list1-item2']} />
            <List heading='home:list2-heading' list={['home:list2-item1']} />
          </Container>
          <Container disableGutters style={sx(style.codeContainer)} align='center'>
            <Installation />
            <Container>
              <Link href={'/getting-started'}>
                <Button.Filled title={getTranslation('home:button:getting-started')} />
              </Link>
            </Container>
          </Container>
          <Container disableGutters flexDirection='column' align='center' style={sx(style.footerContainer)}>
            <LocalizedTypography.Body localeKey='home:about1' style={sx(style.about)} />
            <LocalizedTypography.Body localeKey='home:about2' style={sx(style.about)} />
          </Container>
        </Container>
        <Container flexDirection='column' align='center' style={sx(style.footerContainerForLargeScreens)}>
          <LocalizedTypography.Body localeKey='home:about1' style={sx(style.about)} />
          <LocalizedTypography.Body localeKey='home:about2' style={sx(style.about)} />
        </Container>
        <Footer {...footerLinks} />
      </Container>
    </>
  );
};

const styles = (theme?: DripsyFinalTheme, height?: number) => {
  return {
    container: {
      position: 'absolute',
      width: '100%',
      height: `${(height || 0) - 70}px`,
    },

    footerContainer: {
      marginTop: 20,
      display: ['flex', 'flex', 'flex', 'none', 'none'] as never,
    },

    footerContainerForLargeScreens: {
      display: ['none', 'none', 'none', 'flex', 'flex'] as never,
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translate(-50%, 0)' as never,
    },

    center: {
      alignSelf: 'center',
      paddingVertical: 10,
      width: '100%',
      height: [undefined, undefined, '100%', '100%', '100%'] as never,
    },

    mainHeading: {
      fontSize: [28, 32, 32, 32, 32] as never,
      lineHeight: [34, undefined, undefined, undefined, undefined] as never,
      fontWeight: '600',
      fontFamily: source.style.fontFamily,
      flexWrap: 'wrap',
      textAlign: 'center',
      maxWidth: '90vw',
      marginTop: [0, 30, 30, 30, 30] as never,
      marginBottom: [20, 30, 30, 30, 30] as never,
    },

    imageContainer: {
      overflow: 'visible',
      marginBottom: 30,
    },

    image: {
      height: '100%',
      width: '70vw',
      maxWidth: 250,
    },

    listAndHeadingContainer: {
      flexDirection: ['column', 'column', 'row', 'row', 'row'] as never,
      alignSelf: 'center',
    },

    listContainer: {
      marginVertical: 5,
    },

    listHeading: {
      fontWeight: '400',
      fontFamily: source.style.fontFamily,
      marginHorizontal: 10,
      fontSize: [16, 16, 22, 22, 22] as never,
      opacity: 0.7,
      textAlign: 'center' as const,
    },

    listItem: {
      marginHorizontal: 10,
      marginVertical: 2,
      fontWeight: '600',
      fontFamily: source.style.fontFamily,
      fontSize: 14,
    },

    codeContainer: {
      flexDirection: ['column', 'column', 'row', 'row', 'row'] as never,
      marginTop: 30,
    },

    codeArea: {
      backgroundColor: theme?.colors?.$surfaceVariant as never,
      padding: 10,
      borderRadius: 10,
      marginHorizontal: [0, 0, 20, 30, 30] as never,
      marginBottom: [20, 20, 0, 0, 0] as never,
      flexDirection: 'row',
      alignItems: 'center',
    },

    code: {
      fontFamily: firaCode.style.fontFamily,
      backgroundColor: 'transparent',
      fontSize: 14,
      color: theme?.colors?.$onSurface as never,
    },

    about: {
      fontFamily: source.style.fontFamily,
      fontSize: 14,
      fontWeight: '400',
      marginVertical: [undefined, undefined, '5px', '5px', '5px'] as never,
      textAlign: 'center',
    },
  } as const;
};

export default Home;

/* eslint-disable @next/next/no-img-element */
import { useTheme } from 'anu/config';
import { Button, Chip, Container, FlatList, LocalizedTypography, Typography, useAnuLocalization } from 'anu/lib';
import { DripsyFinalTheme, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import ParticlesDark from 'screens/common/particles-dark';
import ParticlesLight from 'screens/common/particles-light';
import { useMenuContext } from 'screens/common/provider';
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

const Home = () => {
  const { isDarkTheme } = useMenuContext();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();
  const { height } = useWindowDimensions();
  const sx = useSx();

  const style = styles(theme, height);

  return (
    <>
      {isDarkTheme ? <ParticlesDark /> : <ParticlesLight />}
      <Container style={style.container}>
        <Container disableGutters flexDirection='column' justify='center' align='center' style={sx(style.center)}>
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
              width: '100%',
              justifyContent: ['center', 'center', 'center', 'center', 'center'],
            }}
          >
            <List heading='home:list1-heading' list={['home:list1-item1', 'home:list1-item2']} />
            <List heading='home:list2-heading' list={['home:list2-item1']} />
          </Container>
          <Container disableGutters style={sx(style.codeContainer)} align='center'>
            <Container disableGutters style={sx(style.codeArea)}>
              <Typography.Body style={style.code}>npm install @anu/material-ui</Typography.Body>
            </Container>
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
        <Container
          disableGutters
          flexDirection='column'
          align='center'
          style={sx(style.footerContainerForLargeScreens)}
        >
          <LocalizedTypography.Body localeKey='home:about1' style={sx(style.about)} />
          <LocalizedTypography.Body localeKey='home:about2' style={sx(style.about)} />
        </Container>
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
      overflow: 'scroll',
    },

    footerContainer: {
      marginTop: 20,
      display: ['flex', 'flex', 'flex', 'none', 'none'] as never,
    },

    footerContainerForLargeScreens: {
      display: ['none', 'none', 'none', 'flex', 'flex'] as never,
      position: 'absolute',
      bottom: 0,
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
      marginHorizontal: [0, 0, 35, 35, 35] as never,
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

import { useTheme } from 'anu/config';
import { Button, Chip, Container, FlatList, LocalizedTypography, Typography, useAnuLocalization } from 'anu/lib';
import { DripsyFinalTheme } from 'dripsy';
import { Fira_Code, Source_Sans_Pro } from 'next/font/google';
import Image from 'next/image';
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

  const { getTranslation } = useAnuLocalization();

  return (
    <Container flexDirection='row' align='center'>
      <LocalizedTypography.Title localeKey={props.heading} style={style.listHeading} />
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

  const style = styles(theme);

  return (
    <>
      {isDarkTheme ? <ParticlesDark /> : <ParticlesLight />}
      <Container style={style.container}>
        <Container flexDirection='column' align='center' style={style.center}>
          <Container disableGutters style={style.imageContainer}>
            <Image
              src={isDarkTheme ? 'img/logo_dark_theme.svg' : 'img/logo_light_theme.svg'}
              alt='Anu - Component Library for React Native + Web'
              width={300}
              height={160}
            />
          </Container>
          <LocalizedTypography.Display localeKey='home:mainHeading' style={style.mainHeading} />
          <LocalizedTypography.Headline style={style.subHeading} localeKey='home:subHeading' />
          <Container flexDirection='row'>
            <List heading='home:list1-heading' list={['home:list1-item1', 'home:list1-item2']} />
            <List heading='home:list2-heading' list={['home:list2-item1']} />
          </Container>
          <Container style={style.codeContainer} flexDirection='row' align='center'>
            <Container disableGutters style={style.codeArea}>
              <Typography.Body style={style.code}>npm install @anu/material-ui</Typography.Body>
            </Container>
            <Container>
              <Link href={'/components'}>
                <Button.Filled title={getTranslation('home:button:getting-started')} />
              </Link>
            </Container>
          </Container>
        </Container>
        <Container flexDirection='column' align='center' style={style.footerContainer}>
          <LocalizedTypography.Body localeKey='home:about1' style={style.about} />
          <LocalizedTypography.Body localeKey='home:about2' style={style.about} />
        </Container>
      </Container>
    </>
  );
};

const styles = (theme?: DripsyFinalTheme) => {
  return {
    container: {
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '85vh',
    },

    footerContainer: {
      bottom: 0,
      zIndex: 1,
      left: '50%',
      position: 'absolute',
      transform: 'translate(-50%, 0)' as never,
    },

    center: {
      zIndex: 1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, calc(-50% - 50px))' as never,
    },

    mainHeading: {
      fontSize: 36,
      fontWeight: '600',
      fontFamily: source.style.fontFamily,
    },

    subHeading: {
      fontSize: 24,
      fontWeight: '400',
      fontFamily: source.style.fontFamily,
      marginVertical: 10,
    },

    imageContainer: {
      marginBottom: 40,
    },

    listContainer: {},

    listHeading: {
      fontWeight: '400',
      fontFamily: source.style.fontFamily,
      marginHorizontal: 10,
      fontSize: 22,
      opacity: 0.7,
    },

    listItem: {
      marginHorizontal: 10,
      marginVertical: 2,
      fontWeight: '600',
      fontFamily: source.style.fontFamily,
    },

    codeContainer: {
      marginVertical: 20,
    },

    codeArea: {
      backgroundColor: theme?.colors?.$surfaceVariant as never,
      padding: 10,
      borderRadius: 10,
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
      marginVertical: 5,
    },
  } as const;
};

export default Home;

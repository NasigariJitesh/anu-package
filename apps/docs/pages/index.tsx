import { useTheme } from 'anu/config';
import { Chip, Container, FlatList, LocalizedTypography, Typography } from 'anu/lib';
import { Source_Sans_Pro } from 'next/font/google';
import Image from 'next/image';
import ParticlesDark from 'screens/common/particles-dark';
import ParticlesLight from 'screens/common/particles-light';
import { useMenuContext } from 'screens/common/provider';

const source = Source_Sans_Pro({
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

  return (
    <Container flexDirection='row' align='center'>
      <Typography.Title style={style.listHeading}>{props.heading}</Typography.Title>
      <FlatList
        data={props.list}
        horizontal
        contentContainerStyle={style.listContainer}
        renderItem={({ item }) => {
          return <Chip value={item} selected style={style.listItem} />;
        }}
      />
    </Container>
  );
};

const Home = () => {
  const { isDarkTheme } = useMenuContext();

  const style = styles();

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
          <Typography.Display style={style.mainHeading}>Component Library for React Native + Web</Typography.Display>
          <Typography.Headline style={style.subHeading}>
            Based on the Material design, support for more design systems coming soon.
          </Typography.Headline>
          <Container flexDirection='row'>
            <List heading='Supported Languages' list={['javascript', 'typescript']} />
            <List heading='Supported Design Systems' list={['Material design']} />
          </Container>
        </Container>
      </Container>
    </>
  );
};

const styles = () => {
  return {
    container: {
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      height: '80vh',
    },

    center: {
      zIndex: 1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)' as never,
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
  } as const;
};

export default Home;

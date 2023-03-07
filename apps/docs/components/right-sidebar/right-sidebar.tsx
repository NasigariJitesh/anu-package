import { getTheme } from 'anu/config';
import { Container, FlatList, Typography } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { typographyIndex } from 'services/docs/typography';
import { translations } from 'services/localization';
import { TextLink } from 'solito/link';

const theme = getTheme();

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

type Link = { title: string; link: string };

type ComponentLinks = Link;

interface SubIndex {
  title: string;
  link?: string;
  components: ComponentLinks[];
}

export interface HeadingProps {
  heading: string;
  links: SubIndex[];
}

const Group = (props: HeadingProps) => {
  return (
    <FlatList
      contentContainerStyle={style.groupList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <>
            <Typography.Title style={style.groupName}>
              <TextLink href={item.link ?? '#'}>{item.title}</TextLink>
            </Typography.Title>
            <Components links={item.components} />
          </>
        );
      }}
    />
  );
};

const Components = (props: { links: ComponentLinks[] }) => {
  const { pathname } = useRouter();

  return (
    <FlatList
      contentContainerStyle={style.componentList}
      data={props.links}
      renderItem={({ item }) => {
        return (
          <Typography.Title style={[style.componentName, pathname === item.link ? style.active : {}]}>
            <TextLink href={item.link}>{item.title}</TextLink>
          </Typography.Title>
        );
      }}
    />
  );
};

const Index = (props: HeadingProps) => {
  return (
    <>
      <Typography.Body style={style.preHeading}>{translations('en', 'onThisPage')}</Typography.Body>
      <Typography.Title style={style.heading}>{props.heading}</Typography.Title>
      <Group {...props} />
    </>
  );
};

const RenderIndex = () => {
  const { pathname } = useRouter();

  switch (pathname) {
    case '/components/typography': {
      {
        return <Index {...typographyIndex} />;
      }
    }
    default: {
      {
        return <Index {...typographyIndex} />;
      }
    }
  }
};

const RightSidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= 1024) return null;

  return (
    <Container sx={style.container}>
      <RenderIndex />
    </Container>
  );
};

const style = {
  container: {
    width: 150,
    // width: '100%',
  },
  preHeading: {
    fontFamily: source.style.fontFamily,
    fontSize: 16,
    opacity: 0.7,
    marginVertical: 10,
  },
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 24,
    fontWeight: '600',
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginTop: 10,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginTop: 5,
  },
  groupList: {
    marginVertical: 15,
  },
  componentList: {
    marginVertical: 15,
    marginLeft: 15,
  },
  active: {
    color: theme.colors.$primary,
    opacity: 1,
  },
} as const;

export default RightSidebar;

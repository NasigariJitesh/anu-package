import { getTheme } from 'anu/config';
import { Accordion, Container, FlatList, Typography } from 'anu/lib';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { useMenuContext } from 'screens/common/provider';
import { TextLink } from 'solito/link';

const theme = getTheme();

const source = Source_Sans_Pro({
  weight: ['600'],
  style: 'normal',
  subsets: ['latin'],
});

type Link = { title: string; link: string };

type ComponentLinks = Link;

interface SubIndex {
  title: string;
  components: ComponentLinks[];
}

interface HeadingProps {
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
          <Accordion.Container
            sx={{ backgroundColor: 'pink' }}
            title={
              <Accordion.Header iconProps={{ size: 18, style: { opacity: 0.7 } }} style={style.groupName}>
                {item.title}
              </Accordion.Header>
            }
          >
            <Accordion.Children>
              <Components links={item.components} />
            </Accordion.Children>
          </Accordion.Container>
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
      <Typography.Body style={style.preHeading}>{'On this page'}</Typography.Body>
      <Typography.Title style={style.heading}>{props.heading}</Typography.Title>
      <Group {...props} />
    </>
  );
};

const RightSidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= 768) return null;

  return (
    <Container sx={style.container}>
      <Index
        heading='Regular Button'
        links={[
          {
            title: 'Elevated',
            components: [
              {
                link: '/button',
                title: 'Examples',
              },
              {
                link: '/button',
                title: 'Props',
              },
            ],
          },
        ]}
      />
    </Container>
  );
};

const style = {
  container: {
    maxWidth: 200,
    width: '100%',
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
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginTop: 10,
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

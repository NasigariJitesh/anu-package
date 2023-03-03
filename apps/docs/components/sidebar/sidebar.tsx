import { getTheme } from 'anu/config';
import { Accordion, Container, FlatList, Typography } from 'anu/lib';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { useMenuContext } from 'screens/common/provider';
import { TextLink } from 'solito/link';

const theme = getTheme();

const source = Source_Sans_Pro({
  weight: ['400', '600'],
  style: 'normal',
  subsets: ['latin'],
});

type Link = { title: string; link: string };

interface ComponentLinks extends Link {
  variants: Link[];
}

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
          <>
            {item.variants.length > 0 ? (
              <Accordion.Container
                title={
                  <Accordion.Header
                    iconProps={{ size: 18, style: { opacity: 0.7 } }}
                    style={[style.componentName, pathname === item.link ? style.active : {}]}
                  >
                    {item.title}
                  </Accordion.Header>
                }
              >
                <Accordion.Children>
                  <Categories links={item.variants} />
                </Accordion.Children>
              </Accordion.Container>
            ) : (
              <Typography.Title style={[style.componentName, pathname === item.link ? style.active : {}]}>
                <TextLink href={item.link}>{item.title}</TextLink>
              </Typography.Title>
            )}
          </>
        );
      }}
    />
  );
};

const Categories = (props: { links: Link[] }) => {
  const { pathname } = useRouter();

  return (
    <FlatList
      data={props.links}
      renderItem={({ item }) => {
        return (
          <Typography.Title style={[style.categoryName, pathname === item.link ? style.active : {}]}>
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
      <Typography.Title style={style.heading}>{props.heading}</Typography.Title>
      <Group {...props} />
    </>
  );
};

const Sidebar = () => {
  const { isOpen } = useMenuContext();

  if (!isOpen) return null;

  return (
    <Container sx={style.container}>
      <Index
        heading='Components Overview'
        links={[
          {
            title: 'Display',
            components: [
              {
                link: '/components/typography',
                title: 'Typography',
                variants: [],
              },
              {
                link: '/components/badge',
                title: 'Badge',
                variants: [],
              },
              {
                link: '/components/chip',
                title: 'Chip',
                variants: [],
              },
            ],
          },
          {
            title: 'Layout',
            components: [
              {
                title: 'Container',
                link: '/components/container',
                variants: [],
              },
            ],
          },
          {
            title: 'Inputs',
            components: [
              {
                link: '/components/button',
                title: 'Button',
                variants: [
                  {
                    link: '/components/button/extended-fab',
                    title: 'Extended FAB',
                  },
                  {
                    link: '/components/button/fab',
                    title: 'FAB',
                  },

                  {
                    link: '/components/button/icon',
                    title: 'Icon',
                  },
                  {
                    link: '/components/button/regular',
                    title: 'Regular',
                  },
                  {
                    link: '/components/button/segmented',
                    title: 'Segmented',
                  },
                ],
              },
              {
                link: '/components/checkbox',
                title: 'Checkbox',
                variants: [],
              },
              {
                link: '/components/radio-button',
                title: 'Radio Button',
                variants: [],
              },
            ],
          },
        ]}
      />
    </Container>
  );
};

const style = {
  container: {},
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 18,
    fontWeight: '600',
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    fontWeight: '600',
    opacity: 0.7,
    marginVertical: 10,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 40,
    marginBottom: 10,
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

export default Sidebar;

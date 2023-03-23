/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Accordion, Container, FlatList, LocalizedTypography, Typography, useAnuLocalization } from 'anu/lib';
import { Source_Sans_Pro } from 'next/font/google';
import { useRouter } from 'next/router';
import { useMenuContext } from 'screens/common/provider';
import { TextLink } from 'solito/link';

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
  link: string;
  components: ComponentLinks[];
}

interface HeadingProps {
  heading: string;
  links: SubIndex[];
}

const Group = (props: HeadingProps) => {
  const { pathname } = useRouter();

  const { getTranslation } = useAnuLocalization();

  return (
    <FlatList
      contentContainerStyle={style.groupList}
      data={props.links}
      renderItem={({ item }) => {
        return item.components.length > 0 ? (
          <Accordion.Container
            title={
              <Accordion.Header iconProps={{ size: 18, style: { opacity: 0.7 } }} style={style.groupName}>
                {getTranslation(item.title)}
              </Accordion.Header>
            }
          >
            <Accordion.Children>
              <Components links={item.components} />
            </Accordion.Children>
          </Accordion.Container>
        ) : (
          <Typography.Title style={[style.groupName, pathname === item.link ? style.active : {}]}>
            <TextLink href={item.link}>{getTranslation(item.title)}</TextLink>
          </Typography.Title>
        );
      }}
    />
  );
};

const RenderItem = ({ item }: { item: ComponentLinks }) => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();

  return (
    <>
      {item.variants.length > 0 ? (
        <Accordion.Container
          title={
            <Accordion.Header
              iconProps={{ size: 18, style: { opacity: 0.7 } }}
              style={[
                style.componentName,
                pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
              ]}
            >
              {getTranslation(item.title)}
            </Accordion.Header>
          }
        >
          <Accordion.Children>
            <Categories links={item.variants} />
          </Accordion.Children>
        </Accordion.Container>
      ) : (
        <Typography.Title
          style={[
            style.componentName,
            pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
          ]}
        >
          <TextLink href={item.link}>{getTranslation(item.title)}</TextLink>
        </Typography.Title>
      )}
    </>
  );
};

const Components = (props: { links: ComponentLinks[] }) => {
  return (
    <FlatList
      contentContainerStyle={style.componentList}
      data={props.links}
      renderItem={({ item }) => <RenderItem item={item} />}
    />
  );
};

const Categories = (props: { links: Link[] }) => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();

  return (
    <FlatList
      data={props.links}
      renderItem={({ item }) => {
        return (
          <Typography.Title
            style={[
              style.categoryName,
              pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
            ]}
          >
            <TextLink href={item.link}>{getTranslation(item.title)}</TextLink>
          </Typography.Title>
        );
      }}
    />
  );
};

const Index = (props: HeadingProps) => {
  return (
    <>
      <LocalizedTypography.Title style={style.heading} localeKey={props.heading} />
      <Group {...props} />
    </>
  );
};

const Sidebar = () => {
  const { isOpen } = useMenuContext();
  const { pathname } = useRouter();

  if (!isOpen) return null;
  if (pathname === '/') return null;

  return (
    <div
      id='root-scroll'
      style={{
        overflowY: 'scroll',
        width: '210px',
        position: 'sticky',
        top: 70,
      }}
    >
      <Container sx={style.container}>
        <Index
          heading='leftSideBar:title'
          links={[
            {
              title: 'leftSideBar:badge',
              components: [],
              link: '/components/badge',
            },
            {
              title: 'leftSideBar:button',
              components: [
                {
                  title: 'leftSideBar:button-common',
                  link: '/components/button/common',
                  variants: [],
                },
                {
                  title: 'leftSideBar:button-fab',
                  link: '/components/button/fab',
                  variants: [],
                },
                {
                  title: 'leftSideBar:button-extended-fab',
                  link: '/components/button/extended-fab',
                  variants: [],
                },
                {
                  title: 'leftSideBar:button-icon',
                  link: '/components/button/icon',
                  variants: [],
                },
                {
                  title: 'leftSideBar:button-segmented',
                  link: '/components/button/segmented',
                  variants: [],
                },
              ],
              link: '/components/button',
            },
            {
              title: 'leftSideBar:checkbox',
              link: '/components/checkbox',
              components: [],
            },
            {
              title: 'leftSideBar:chips',
              link: '/components/chip',
              components: [],
            },
            {
              title: 'leftSideBar:container',
              link: '/components/container',
              components: [],
            },
            {
              title: 'leftSideBar:radio',
              link: '/components/radio-button',
              components: [],
            },
            {
              title: 'leftSideBar:typography',
              link: '/components/typography',
              components: [],
            },
            {
              title: 'leftSideBar:text-fields',
              link: '/components/text-field',
              components: [],
            },
          ]}
        />
      </Container>
    </div>
  );
};

const style = {
  container: {
    width: 210,
    flex: 1,
    paddingTop: 20,
  },
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 18,
    fontWeight: '600',
    flexWrap: 'wrap',
    opacity: 0.7,
  },
  groupName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    fontWeight: '400',
    opacity: 0.7,
    marginVertical: 5,
  },
  componentName: {
    fontSize: 18,
    fontFamily: source.style.fontFamily,
    opacity: 0.7,
    marginLeft: 20,
    marginVertical: 5,
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
    opacity: 1,
    fontWeight: '600',
  },
} as const;

export default Sidebar;

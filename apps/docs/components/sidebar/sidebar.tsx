/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Accordion, Container, FlatList, Typography, useAnuLocalization } from 'anu/lib';
import { ScrollView, useSx } from 'dripsy';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
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
  headingLink: string;
  links: SubIndex[];
}

const onLinkPress = () => {
  setTimeout(() => {
    document.querySelector('#top')?.scrollIntoView({
      behavior: 'smooth',
    });
  }, 1);
};

const Group = (props: HeadingProps) => {
  const { pathname } = useRouter();
  const theme = useTheme();
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
          <Typography.Title
            onPress={onLinkPress}
            style={[
              style.groupName,
              pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
            ]}
          >
            <TextLink scroll={false} href={item.link}>
              {getTranslation(item.title)}
            </TextLink>
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
          onPress={onLinkPress}
          style={[
            style.componentName,
            pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
          ]}
        >
          <TextLink scroll={false} href={item.link}>
            {getTranslation(item.title)}
          </TextLink>
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
            onPress={onLinkPress}
            style={[
              style.categoryName,
              pathname === item.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
            ]}
          >
            <TextLink scroll={false} href={item.link}>
              {getTranslation(item.title)}
            </TextLink>
          </Typography.Title>
        );
      }}
    />
  );
};

const Index = (props: HeadingProps) => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();
  return (
    <>
      <Typography.Title
        onPress={onLinkPress}
        style={[
          style.headingLink,
          pathname.includes('components') ? { ...style.active, color: theme.colors?.$primary as never } : {},
        ]}
      >
        <TextLink scroll={false} href={props.headingLink}>
          {getTranslation(props.heading)}
        </TextLink>
      </Typography.Title>

      <Group {...props} />
    </>
  );
};

const HeadingLink = (props: { link: string; title: string }) => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const { getTranslation } = useAnuLocalization();

  return (
    <Typography.Title
      onPress={onLinkPress}
      style={[
        style.headingLink,
        pathname === props.link ? { ...style.active, color: theme.colors?.$primary as never } : {},
      ]}
    >
      <TextLink scroll={false} href={props.link}>
        {getTranslation(props.title)}
      </TextLink>
    </Typography.Title>
  );
};

const Sidebar = () => {
  const { isOpen } = useMenuContext();
  const { pathname } = useRouter();
  const { height } = useWindowDimensions();
  const sx = useSx();

  if (!isOpen) return null;
  if (pathname === '/') return null;

  return (
    <div
      id='root-scroll'
      style={{
        width: '240px',
        position: 'sticky',
        top: 70,
      }}
    >
      <ScrollView
        id={undefined}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={sx({ maxHeight: height - 70 })}
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
        onPointerDown={undefined}
        onPointerDownCapture={undefined}
        onPointerMove={undefined}
        onPointerMoveCapture={undefined}
        onPointerUp={undefined}
        onPointerUpCapture={undefined}
        onPointerCancel={undefined}
        onPointerCancelCapture={undefined}
        onPointerEnter={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeave={undefined}
        onPointerLeaveCapture={undefined}
        stickyHeaderHiddenOnScroll={undefined}
        StickyHeaderComponent={undefined}
        automaticallyAdjustKeyboardInsets={undefined}
        automaticallyAdjustsScrollIndicatorInsets={undefined}
      >
        <Container sx={style.container}>
          <HeadingLink link='/getting-started' title='leftSideBar:getting-started' />
          <HeadingLink link='/theming' title='leftSideBar:theming' />
          <Index
            heading='leftSideBar:components'
            headingLink='/components/auto-complete'
            links={[
              {
                title: 'leftSideBar:auto-complete',
                components: [],
                link: '/components/auto-complete',
              },
              {
                title: 'leftSideBar:avatar',
                components: [],
                link: '/components/avatar',
              },
              {
                title: 'leftSideBar:badge',
                components: [],
                link: '/components/badge',
              },
              {
                title: 'leftSideBar:bottom-sheet',
                components: [],
                link: '/components/bottom-sheet',
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
                title: 'leftSideBar:card',
                components: [
                  {
                    title: 'leftSideBar:card',
                    link: '/components/card',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:card-header',
                    link: '/components/card/header',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:card-media',
                    link: '/components/card/media',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:card-title',
                    link: '/components/card/title',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:card-content',
                    link: '/components/card/content',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:card-actions',
                    link: '/components/card/actions',
                    variants: [],
                  },
                ],
                link: '/components/card',
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
                title: 'leftSideBar:divider',
                link: '/components/divider',
                components: [],
              },
              {
                title: 'leftSideBar:file-upload',
                components: [
                  {
                    title: 'leftSideBar:file-upload',
                    link: '/components/file-upload',
                    variants: [],
                  },
                  {
                    title: 'leftSideBar:file-drop-zone',
                    link: '/components/file-upload/file-drop-zone',
                    variants: [],
                  },
                ],
                link: '/components/card',
              },
              {
                title: 'leftSideBar:image',
                components: [],
                link: '/components/image',
              },
              {
                title: 'leftSideBar:otp-input',
                link: '/components/otp-input',
                components: [],
              },
              {
                title: 'leftSideBar:phone-input',
                link: '/components/phone-input',
                components: [],
              },
              {
                title: 'leftSideBar:radio',
                link: '/components/radio-button',
                components: [],
              },
              {
                title: 'leftSideBar:search',
                components: [],
                link: '/components/search',
              },
              {
                title: 'leftSideBar:side-sheet',
                components: [],
                link: '/components/side-sheet',
              },
              {
                title: 'leftSideBar:snackbar',
                link: '/components/snackbar',
                components: [],
              },
              {
                title: 'leftSideBar:switch',
                link: '/components/switch',
                components: [],
              },
              {
                title: 'leftSideBar:text-fields',
                link: '/components/text-field',
                components: [],
              },
              {
                title: 'leftSideBar:typography',
                link: '/components/typography',
                components: [],
              },
            ]}
          />
          <HeadingLink link='/credits' title='leftSideBar:credits' />
        </Container>
      </ScrollView>
    </div>
  );
};

const style = {
  container: {
    width: 240,
    flex: 1,
    marginVertical: 10,
    scrollBehavior: 'smooth',
  },
  heading: {
    fontFamily: source.style.fontFamily,
    fontSize: 18,
    fontWeight: '600',
    flexWrap: 'wrap',
    opacity: 0.7,
    marginTop: 10,
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
    marginTop: 15,
    marginLeft: 15,
  },
  componentList: {
    marginVertical: 15,
    marginLeft: 15,
  },
  active: {
    opacity: 1,
    fontWeight: '600',
  },

  headingLink: {
    fontFamily: source.style.fontFamily,
    fontSize: 18,
    fontWeight: '600',
    flexWrap: 'wrap',
    opacity: 0.7,
    marginTop: 10,
  },
} as const;

export default Sidebar;

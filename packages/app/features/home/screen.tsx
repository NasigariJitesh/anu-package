/* eslint-disable unicorn/no-nested-ternary */
import { useTheme } from 'anu/config';
import { Container, FlatList, Tab, Tabs, Typography } from 'anu/lib';
import { DripsyFinalTheme } from 'dripsy';
import { StyleSheet } from 'react-native';
import { MotiLink } from 'solito/moti';

interface ComponentLinks {
  title: string;
  link: string;
}

/**
 *
 */
export function HomeScreen() {
  const theme = useTheme();

  const styles = getStyles(theme);

  const components: ComponentLinks[] = [
    {
      title: 'Autocomplete',
      link: '/components/auto-complete',
    },
    {
      title: 'Common Button',
      link: '/components/common-button',
    },
    {
      title: 'Icon Button',
      link: '/components/icon-button',
    },
    {
      title: 'Floating Action Button',
      link: '/components/fab',
    },
    {
      title: 'Extended Floating Action Button',
      link: '/components/extended-fab',
    },
    {
      title: 'Segmented Button',
      link: '/components/segmented-button',
    },
    {
      title: 'Typography',
      link: '/components/typography',
    },
  ];

  const tests: ComponentLinks[] = [
    {
      title: 'Autocomplete',
      link: '/components/auto-complete-test',
    },
    {
      title: 'Common Button',
      link: '/components/common-button-test',
    },
    {
      title: 'Icon Button',
      link: '/components/icon-button-test',
    },
    {
      title: 'Floating Action Button',
      link: '/components/fab-test',
    },
    {
      title: 'Extended Floating Action Button',
      link: '/components/extended-fab-test',
    },
    {
      title: 'Segmented Button',
      link: '/components/segmented-button-test',
    },
    {
      title: 'Typography',
      link: '/components/typography-test',
    },
  ];

  const RenderItem = ({ item }: { item: ComponentLinks }) => {
    return (
      <MotiLink
        href={item.link}
        animate={({ hovered, pressed }) => {
          'worklet';

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
          };
        }}
        from={{
          scale: 0,
          rotateZ: '0deg',
        }}
        transition={{
          type: 'timing',
          duration: 150,
        }}
      >
        <Container style={styles.itemContainer}>
          <Typography.Body selectable={false} style={styles.itemTitle}>
            {item.title}
          </Typography.Body>
        </Container>
      </MotiLink>
    );
  };

  return (
    <Container disableGutters style={styles.container}>
      <Tabs type='secondary' style={styles.tab}>
        <Tab name='Test' style={styles.tab}>
          <FlatList data={tests} renderItem={RenderItem} style={styles.flatList} />
        </Tab>
        <Tab name='Snack' style={styles.tab}>
          <FlatList data={components} renderItem={RenderItem} style={styles.flatList} />
        </Tab>
      </Tabs>
    </Container>
  );
}

const getStyles = (theme: DripsyFinalTheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      width: '100%',
    },
    itemContainer: {
      backgroundColor: theme.colors.$surface,
      borderColor: theme.colors.$outline,
      borderWidth: 1,
      height: 50,
      justifyContent: 'center',
      width: '100%',
    },
    itemTitle: {
      color: theme.colors.$onSurface,
      fontSize: theme.fontSizes[7],
      fontWeight: 'bold',
    },
    tab: { width: '100%' },
  });

  return styles;
};

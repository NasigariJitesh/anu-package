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
      title: 'Accordion',
      link: '/components/accordion',
    },
    {
      title: 'Autocomplete',
      link: '/components/auto-complete',
    },

    {
      title: 'Avatar',
      link: '/components/avatar',
    },
    {
      title: 'Badge',
      link: '/components/badge',
    },
    {
      title: 'Bottom Sheet',
      link: '/components/bottom-sheet',
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
      title: 'Card',
      link: '/components/card',
    },
    {
      title: 'Checkbox',
      link: '/components/checkbox',
    },
    {
      title: 'Chip',
      link: '/components/chip',
    },
    {
      title: 'Container',
      link: '/components/container',
    },
    {
      title: 'Date Input',
      link: '/components/date-input',
    },
    {
      title: 'Date Picker',
      link: '/components/date-picker',
    },
    {
      title: 'Dialog',
      link: '/components/dialog',
    },
    {
      title: 'Divider',
      link: '/components/divider',
    },
    {
      title: 'File Drop Zone',
      link: '/components/file-dropzone',
    },
    {
      title: 'File Upload',
      link: '/components/file-upload',
    },
    {
      title: 'Grid',
      link: '/components/grid',
    },
    {
      title: 'Image',
      link: '/components/image',
    },
    {
      title: 'Menu',
      link: '/components/menu',
    },
    {
      title: 'OTP Input',
      link: '/components/otp-input',
    },
    {
      title: 'Password Input',
      link: '/components/password-input',
    },
    {
      title: 'Phone Input',
      link: '/components/phone-input',
    },
    {
      title: 'Radio Button',
      link: '/components/radio',
    },
    {
      title: 'Search',
      link: '/components/search',
    },
    {
      title: 'Side Sheet',
      link: '/components/side-sheet',
    },
    {
      title: 'Slider',
      link: '/components/slider',
    },
    {
      title: 'Snackbar',
      link: '/components/snackbar',
    },
    {
      title: 'Step Indicator',
      link: '/components/step-indicator',
    },
    {
      title: 'Switch',
      link: '/components/switch',
    },
    {
      title: 'Tabs',
      link: '/components/tabs',
    },
    {
      title: 'Time Picker',
      link: '/components/time-picker',
    },
    {
      title: 'Text Area',
      link: '/components/text-area',
    },
    {
      title: 'Text Field',
      link: '/components/text-field',
    },
    {
      title: 'Touchable Ripple',
      link: '/components/touchable-ripple',
    },
    {
      title: 'Typography',
      link: '/components/typography',
    },
  ];

  const tests: ComponentLinks[] = [
    {
      title: 'Accordion',
      link: '/components/accordion-test',
    },
    {
      title: 'Autocomplete',
      link: '/components/auto-complete-test',
    },
    {
      title: 'Avatar',
      link: '/components/avatar-test',
    },
    {
      title: 'Badge',
      link: '/components/badge-test',
    },
    {
      title: 'Bottom Sheet',
      link: '/components/bottom-sheet-test',
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
      title: 'Card',
      link: '/components/card-test',
    },
    {
      title: 'Checkbox',
      link: '/components/checkbox-test',
    },
    {
      title: 'Chip',
      link: '/components/chip-test',
    },
    {
      title: 'Container',
      link: '/components/container-test',
    },
    {
      title: 'Date Picker',
      link: '/components/date-picker-test',
    },
    {
      title: 'Dialog',
      link: '/components/dialog-test',
    },
    {
      title: 'Divider',
      link: '/components/divider-test',
    },
    {
      title: 'File Drop Zone',
      link: '/components/file-dropzone-test',
    },
    {
      title: 'File Upload',
      link: '/components/file-upload-test',
    },
    {
      title: 'Grid',
      link: '/components/grid-test',
    },
    {
      title: 'Menu',
      link: '/components/menu-test',
    },
    {
      title: 'OTP Input',
      link: '/components/otp-input-test',
    },
    {
      title: 'Password Input',
      link: '/components/password-input-test',
    },
    {
      title: 'Phone Input',
      link: '/components/phone-input-test',
    },
    {
      title: 'Radio Button',
      link: '/components/radio-test',
    },
    {
      title: 'Search',
      link: '/components/search-test',
    },
    {
      title: 'Side Sheet',
      link: '/components/side-sheet-test',
    },
    {
      title: 'Slider',
      link: '/components/slider-test',
    },
    {
      title: 'Snackbar',
      link: '/components/snackbar-test',
    },
    {
      title: 'Step Indicator',
      link: '/components/step-indicator-test',
    },
    {
      title: 'Switch',
      link: '/components/switch-test',
    },
    {
      title: 'Tabs',
      link: '/components/tabs-test',
    },
    {
      title: 'Time Picker',
      link: '/components/time-picker-test',
    },
    {
      title: 'Text Field',
      link: '/components/text-field-test',
    },
    {
      title: 'Text Area',
      link: '/components/text-area-test',
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
      <Tabs type='primary' style={styles.tab}>
        <Tab name='Snack' style={styles.tab}>
          <FlatList data={components} renderItem={RenderItem} style={styles.flatList} />
        </Tab>
        <Tab name='Test' style={styles.tab}>
          <FlatList data={tests} renderItem={RenderItem} style={styles.flatList} />
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
      flex: 1,
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
    tab: { flex: 1, width: '100%' },
  });

  return styles;
};

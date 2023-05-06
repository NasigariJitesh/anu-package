/* eslint-disable no-secrets/no-secrets */
import { Container, Tab, Tabs, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};
const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const tabsDocumentation: ContentValues = {
  mainHeading: 'tabsDocumentation:mainHeading',
  mainDescription: 'tabsDocumentation:mainDescription',
  properties: [
    {
      name: 'children',
      description: 'tabsDocumentation:property-children-description',
      type: 'Array<ReactElement<Tab>>',
    },

    {
      name: 'active',
      description: 'tabsDocumentation:property-active-description',
      type: 'number',
      optional: true,
      defaultValue: '0',
    },
    {
      name: 'onChange',
      description: 'tabsDocumentation:property-onChange-description',
      type: '(active: number) => void',
      optional: true,
    },

    {
      name: 'type',
      description: 'tabsDocumentation:property-type-description',
      type: "'primary' | 'secondary'",
      optional: true,
      defaultValue: "'primary'",
    },

    {
      name: 'children (Individual Tab Property)',
      description: 'tabsDocumentation:property-tab-children-description',
      type: 'ReactChildren',
    },
    {
      name: 'name (Individual Tab Property)',
      description: 'tabsDocumentation:property-name-description',
      type: 'string',
      optional: true,
    },
    {
      name: 'icon (Individual Tab Property)',
      description: 'tabsDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
      optional: true,
    },
    {
      name: 'contentStyle',
      description: 'tabsDocumentation:property-contentStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'tabHeaderStyle',
      description: 'tabsDocumentation:property-tabHeaderStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'activeTabHeaderStyle',
      description: 'tabsDocumentation:property-activeTabHeaderStyle-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'tabsDocumentation:example1-name',
      description: 'tabsDocumentation:example1-description',
      id: 'primary',
      code: `<Tabs type='primary' maxWidth={500} style={style}>
  <Tab name='Tab1' icon={{ name: 'home' }}>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab name='Tab2' icon={{ name: 'favorite' }}>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab name='Tab3' icon={{ name: 'notifications' }}>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>

<Tabs type='primary' maxWidth={500} style={style}>
  <Tab icon={{ name: 'home' }}>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab icon={{ name: 'favorite' }}>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab icon={{ name: 'notifications' }}>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>

<Tabs type='primary' maxWidth={500} style={style}>
  <Tab name='Tab1'>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab name='Tab2'>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab name='Tab3'>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Tabs type='primary' maxWidth={500} style={style}>
            <Tab name='Tab1' icon={{ name: 'home' }}>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab name='Tab2' icon={{ name: 'favorite' }}>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab name='Tab3' icon={{ name: 'notifications' }}>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
          </Tabs>
          <Tabs type='primary' maxWidth={500} style={style}>
            <Tab icon={{ name: 'home' }}>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab icon={{ name: 'favorite' }}>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab icon={{ name: 'notifications' }}>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
          </Tabs>
          <Tabs type='primary' maxWidth={500} style={style}>
            <Tab name='Tab1'>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab name='Tab2'>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab name='Tab3'>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
          </Tabs>
        </Container>
      ),
    },
    {
      name: 'tabsDocumentation:example2-name',
      description: 'tabsDocumentation:example2-description',
      id: 'secondary',
      code: `<Tabs type='secondary' maxWidth={500} style={style}>
  <Tab  icon={{ name: 'home' }}>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab  icon={{ name: 'favorite' }}>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab  icon={{ name: 'notifications' }}>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>
<Tabs type='secondary' maxWidth={500} style={style}>
  <Tab name='Tab1' icon={{ name: 'home' }}>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab name='Tab2' icon={{ name: 'favorite' }}>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab name='Tab3' icon={{ name: 'notifications' }}>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Tabs type='secondary' maxWidth={500} style={style}>
            <Tab icon={{ name: 'home' }}>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab icon={{ name: 'favorite' }}>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab icon={{ name: 'notifications' }}>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
          </Tabs>
          <Tabs type='secondary' maxWidth={500} style={style}>
            <Tab name='Tab1' icon={{ name: 'home' }}>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab name='Tab2' icon={{ name: 'favorite' }}>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab name='Tab3' icon={{ name: 'notifications' }}>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
          </Tabs>
        </Container>
      ),
    },
    {
      name: 'tabsDocumentation:example3-name',
      description: 'tabsDocumentation:example3-description',
      id: 'scroll',
      code: `<Tabs type='primary' maxWidth={400} style={style}>
  <Tab name='Tab1'>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab name='Tab2'>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab name='Tab3'>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
  <Tab name='Tab4'>
    <Typography.Body>This is Tab4</Typography.Body>
  </Tab>
  <Tab name='Tab5'>
    <Typography.Body>This is Tab5</Typography.Body>
  </Tab>
</Tabs>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Tabs type='primary' maxWidth={500} style={style}>
            <Tab name='Tab1'>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab name='Tab2'>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab name='Tab3'>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
            <Tab name='Tab4'>
              <Typography.Body>This is Tab4</Typography.Body>
            </Tab>
            <Tab name='Tab5'>
              <Typography.Body>This is Tab5</Typography.Body>
            </Tab>
          </Tabs>
        </Container>
      ),
    },
    {
      name: 'tabsDocumentation:example4-name',
      description: 'tabsDocumentation:example4-description',
      id: 'scroll',
      code: `<Tabs type='primary' maxWidth={500} style={style}>
  <Tab name='Tab1' icon={{ name: 'home' }}>
    <Typography.Body>This is Tab1</Typography.Body>
  </Tab>
  <Tab name='Tab2' icon={{ name: 'favorite' }}>
    <Typography.Body>This is Tab2</Typography.Body>
  </Tab>
  <Tab name='Tab3' icon={{ name: 'notifications' }}>
    <Typography.Body>This is Tab3</Typography.Body>
  </Tab>
</Tabs>`,
      component: (
        <Container flexDirection='row' sx={flexStyle as never}>
          <Tabs type='primary' maxWidth={800} style={style}>
            <Tab name='Tab1'>
              <Typography.Body>This is Tab1</Typography.Body>
            </Tab>
            <Tab name='Tab2'>
              <Typography.Body>This is Tab2</Typography.Body>
            </Tab>
            <Tab name='Tab3'>
              <Typography.Body>This is Tab3</Typography.Body>
            </Tab>
            <Tab name='Tab4'>
              <Typography.Body>This is Tab4</Typography.Body>
            </Tab>
            <Tab name='Tab5'>
              <Typography.Body>This is Tab5</Typography.Body>
            </Tab>
            <Tab name='Tab6'>
              <Typography.Body>This is Tab6</Typography.Body>
            </Tab>
          </Tabs>
        </Container>
      ),
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'tabsDocumentation:external-properties-title',
  },
};

export const tabsIndex: HeadingProps = {
  heading: 'tabsDocumentation:mainHeading',
  links: [
    {
      title: 'tabsDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'tabsDocumentation:example2-name',
      link: '#format',
    },
    {
      title: 'tabsDocumentation:example3-name',
      link: '#vertical',
    },
    {
      title: 'tabsDocumentation:example4-name',
      link: '#horizontal',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

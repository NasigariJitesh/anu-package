/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Dialog, DialogTitle, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  padding: 10,
} as const;

const style = {
  margin: 15,
};

const Example1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)} width={300}>
        <DialogTitle title='Headline' icon={{ name: 'mobile-friendly' }} />
      </Dialog>
    </Container>
  );
};

const Example2 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)} width={300}>
        <DialogTitle type='custom'>
          <Typography.Title style={{ fontSize: 24, marginVertical: 5 }}>Title</Typography.Title>
          <Typography.Title>SubTitle 1</Typography.Title>
          <Typography.Body>SubTitle 2</Typography.Body>
        </DialogTitle>
      </Dialog>
    </Container>
  );
};

const Example3 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)} type='full-screen' width={300}>
        <DialogTitle
          title='Headline'
          onDismiss={() => setVisible(false)}
          type='full-screen'
          action={<Button.Text title='Save' />}
        />
      </Dialog>
    </Container>
  );
};

export const dialogTitleDocumentation: ContentValues = {
  mainHeading: 'dialogTitleDocumentation:mainHeading',

  properties: [
    {
      name: 'type',
      type: "'default' | 'custom' | 'full-screen'",
      description: 'dialogTitleDocumentation:property-type-description',
      optional: true,
      defaultValue: "'default'",
    },
    {
      name: 'title',
      type: 'string',
      description: 'dialogTitleDocumentation:property-title-description',
    },
    {
      name: 'icon',
      type: 'IconType | ReactElement',
      description: 'dialogTitleDocumentation:property-icon-description',
      optional: true,
    },
    {
      name: 'action',
      type: 'ReactElement',
      description: 'dialogTitleDocumentation:property-action-description',
      optional: true,
    },
    {
      name: 'onDismiss',
      type: '() => void',
      description: 'dialogTitleDocumentation:property-onDismiss-description',
      optional: true,
    },
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'dialogTitleDocumentation:property-children-description',
    },
  ],

  examples: [
    {
      name: 'dialogTitleDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle title='Headline' icon={{ name: 'mobile-friendly' }} />
</Dialog>`,
    },
    {
      name: 'dialogTitleDocumentation:example2-name',
      id: 'custom',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle type='custom'>
    <Typography.Title style={{ fontSize: 24, marginVertical: 5 }}>Title</Typography.Title>
    <Typography.Title>SubTitle 1</Typography.Title>
    <Typography.Body>SubTitle 2</Typography.Body>
  </DialogTitle>
</Dialog>`,
    },
    {
      name: 'dialogTitleDocumentation:example3-name',
      id: 'custom',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)} type='full-screen'>
  <DialogTitle
    title='Headline'
    onDismiss={() => setVisible(false)}
    type='full-screen'
    action={<Button.Text title='Save' />}
  />
</Dialog>`,
    },
  ],
};

export const dialogTitleIndex: HeadingProps = {
  heading: 'dialogTitleDocumentation:mainHeading',
  links: [
    {
      title: 'dialogTitleDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'dialogTitleDocumentation:example2-name',
      link: '#custom',
    },
    {
      title: 'dialogTitleDocumentation:example3-name',
      link: '#full-screen',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

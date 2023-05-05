/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Dialog, DialogActions } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
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
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export const dialogActionsDocumentation: ContentValues = {
  mainHeading: 'dialogActionsDocumentation:mainHeading',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'dialogActionsDocumentation:property-children-description',
    },
    {
      name: 'align',
      type: "'center' | 'flex-start' | 'flex-end'",
      description: 'dialogActionsDocumentation:property-align-description',
      defaultValue: "'center'",
      optional: true,
    },
    {
      name: 'justify',
      description: 'dialogActionsDocumentation:property-justify-description',
      type: "'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'",
      optional: true,
      defaultValue: "'flex-end'",
    },
    {
      name: 'style',
      type: 'StyleProp<ViewStyle>',
      optional: true,
      description: 'dialogActionsDocumentation:property-style-description',
    },
  ],

  examples: [
    {
      name: 'dialogActionsDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)} width={300}>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
    },
  ],
};

export const dialogActionsIndex: HeadingProps = {
  heading: 'dialogActionsDocumentation:mainHeading',
  links: [
    {
      title: 'dialogActionsDocumentation:example1-name',
      link: '#default',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

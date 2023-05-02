/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
import { Button, Container, Dialog, DialogContent, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

const Example1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export const dialogContentDocumentation: ContentValues = {
  mainHeading: 'dialogContentDocumentation:mainHeading',

  properties: [
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'dialogContentDocumentation:property-children-description',
      optional: true,
    },
    {
      name: 'style',
      type: 'StyleProp<ViewStyle>',
      optional: true,
      description: 'dialogContentDocumentation:property-style-description',
    },
  ],

  examples: [
    {
      name: 'dialogContentDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Dialog variant='elevated' width={360}>
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </DialogContent>
</Dialog>`,
    },
  ],
};

export const dialogContentIndex: HeadingProps = {
  heading: 'dialogContentDocumentation:mainHeading',
  links: [
    {
      title: 'dialogContentDocumentation:example1-name',
      link: '#default',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

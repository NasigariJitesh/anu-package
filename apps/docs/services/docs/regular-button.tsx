import { Button, Container } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

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

export const regularButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
  mainDescription: 'Buttons help users navigate, interact, and engage with websites and apps.',

  heading: 'Common Buttons',
  subTitle:
    'Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.There are five types of regular buttons: elevated, filled, filled tonal, outlined, and text.',
  properties: [
    {
      name: 'title',
      type: 'string',
      description: 'The label/title for the regular button',
    },
    {
      name: 'type',
      type: "'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'",
      description: 'The type of the regular button',
    },
    {
      name: 'icon',
      description: 'The icon component or the icon props for material icons.',
      type: 'IconType | ReactElement (optional)',
    },
    {
      name: 'containerStyle',
      description: 'The styles for the regular button component.',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles (optional)',
    },
    {
      name: 'labelStyle',
      description: 'The styles for the label of the button.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'pressableProps',
      description: 'The properties of the pressable component of react native (except sx)',
      type: 'pressableProps (optional)',
    },
  ],
  examples: [
    {
      name: 'Elevated buttons',
      id: 'elevated-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Elevated title='Elevated' containerStyle={style} />
          <Button.Elevated icon={{ name: 'add' }} title='Elevated Icon' containerStyle={style} />
          <Button.Elevated title='Disabled' disabled containerStyle={style} />
          <Button.Elevated icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Elevated title='Elevated' />
<Button.Elevated icon={{ name: 'add' }} title='Elevated Icon' />
<Button.Elevated  title='Disabled' disabled />
<Button.Elevated icon={{ name: 'add' }} title='Disabled' disabled />`,
    },
    {
      name: 'Filled buttons',
      id: 'filled-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Filled title='Filled' containerStyle={style} />
          <Button.Filled icon={{ name: 'add' }} title='Filled Icon' containerStyle={style} />
          <Button.Filled title='Disabled' disabled containerStyle={style} />
          <Button.Filled icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Filled title='Filled' />
<Button.Filled icon={{ name: 'add' }} title='Filled Icon' />
<Button.Filled title='Disabled' disabled />
<Button.Filled icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'Filled tonal buttons',
      id: 'filled-tonal-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Tonal title='Tonal' containerStyle={style} />
          <Button.Tonal icon={{ name: 'add' }} title='Tonal Icon' containerStyle={style} />
          <Button.Tonal title='Disabled' disabled containerStyle={style} />
          <Button.Tonal icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Tonal title='Tonal' />
<Button.Tonal icon={{ name: 'add' }} title='Tonal Icon' />
<Button.Tonal title='Disabled' disabled />
<Button.Tonal icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'Outlined buttons',
      id: 'outlined-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Outlined title='Outlined' containerStyle={style} />
          <Button.Outlined icon={{ name: 'add' }} title='Outlined Icon' containerStyle={style} />
          <Button.Outlined title='Disabled' disabled containerStyle={style} />
          <Button.Outlined icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Outlined title='Outlined' />
<Button.Outlined icon={{ name: 'add' }} title='Outlined Icon' />
<Button.Outlined title='Disabled' disabled />
<Button.Outlined icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'Text buttons',
      id: 'text-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Text title='Text' containerStyle={style} />
          <Button.Text icon={{ name: 'add' }} title='Text Icon' containerStyle={style} />
          <Button.Text title='Disabled' disabled containerStyle={style} />
          <Button.Text icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Text title='Text' />
<Button.Text icon={{ name: 'add' }} title='Text Icon' />
<Button.Text title='Disabled' disabled />
<Button.Text icon={{ name: 'add' }} title='Disabled' disabled />`,
    },
  ],
};
export const regularButtonIndex: HeadingProps = {
  heading: 'Common Button',
  links: [
    {
      title: 'Elevated buttons',
      link: '#elevated-buttons',
    },
    {
      title: 'Filled buttons',
      link: '#filled-buttons',
    },

    {
      title: 'Filled tonal buttons',
      link: '#filled-tonal-buttons',
    },

    {
      title: 'Outlined buttons',
      link: '#outlined-buttons',
    },

    {
      title: 'Text buttons',
      link: '#text-buttons',
    },

    {
      link: '#props',
      title: 'Props',
    },
  ],
};

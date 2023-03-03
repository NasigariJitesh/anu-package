import { Button, Container } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const regularButtonDocumentation: ContentValues = {
  mainHeading: 'Button',
  heading: 'Regular Buttons',
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
      name: 'Basic',
      component: (
        <Container flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 800 }}>
          <Button.Elevated title='Elevated' />
          <Button.Filled title='Filled' />
          <Button.Outlined title='Outlined' />
          <Button.Tonal title='Tonal' />
          <Button.Text title='Text' />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
      <Button.Elevated title='Elevated' />
      <Button.Filled title='Filled' />
      <Button.Outlined title='Outlined' />
      <Button.Tonal title='Tonal' />
      <Button.Text title='Text' />
    </Container>`,
    },
    {
      name: 'Disabled',
      component: (
        <Container flexDirection='row' align='center' justify='space-around' sx={{ width: '100%', maxWidth: 800 }}>
          <Button.Elevated title='Elevated' disabled />
          <Button.Filled title='Filled' disabled />
          <Button.Outlined title='Outlined' disabled />
          <Button.Tonal title='Tonal' disabled />
          <Button.Text title='Text' disabled />
        </Container>
      ),
      code: `<Container flexDirection='row'  align='center'  justify='space-around'>
      <Button.Elevated title='Elevated' disabled />
      <Button.Filled title='Filled' disabled />
      <Button.Outlined title='Outlined' disabled />
      <Button.Tonal title='Tonal' disabled />
      <Button.Text title='Text' disabled />
    </Container>`,
    },
  ],
};
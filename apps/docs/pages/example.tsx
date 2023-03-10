import { Button, Container, TextField } from 'anu/lib';
import { useState } from 'react';

/**
 * This is an example of how the content is supposed to look
 */
export default function App() {
  const [value, setValue] = useState('abc');
  const props = [
    {
      name: 'title',
      type: 'string',
      description: 'The title on the button',
    },
    {
      name: 'onClick',
      type: 'click Event',
      description: 'The behavior of the click event',
      defaultValue: '() => void',
    },
  ];

  const examples = [
    {
      name: 'Regular Button',
      code: "<Container align='flex-end' maxWidth='sm'> \n  <Button.Elevated title='Elevated'  />\n</Container>",
      component: (
        <Container align='flex-end' maxWidth='sm'>
          <Button.Elevated title='Elevated' />
        </Container>
      ),
    },
    {
      name: 'Filled Button',
      code: `<Container align='flex-end' maxWidth='sm'>
  <Button.Filled title='Filled' />
</Container>`,
      component: (
        <Container align='flex-end' maxWidth='sm'>
          <Button.Filled title='Filled' />
        </Container>
      ),
    },
  ];
  return <TextField label='Label Text' supportingText='Supporting text' value={value} onChangeText={setValue} />;

  // return <Container maxWidth={'sm'} sx={{ backgroundColor: 'pink', height: 200, flex: 1 }}></Container>;
}

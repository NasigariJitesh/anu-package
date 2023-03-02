import { Button, Container } from 'anu/lib';
import Content from 'src/sections/content';

/**
 * This is an example of how the content is supposed to look
 */
export default function App() {
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
      code: "<Container align='flex-end' maxWidth='sm'>\n\t<Button.Elevated title='Elevated'  />\n</Container>",
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

  const values = {
    mainHeading: 'Buttons',
    heading: 'Common Buttons',
    subTitle: 'this is a test subtitle',
    properties: props,
    examples,
  };

  return (
    <Container>
      <Content values={values} />
    </Container>
  );
}

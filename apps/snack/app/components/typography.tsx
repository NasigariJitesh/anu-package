import { Container, Typography } from 'anu/lib';

const TypographyScreen = () => {
  return (
    <Container disableGutters sx={{ margin: 10, flex: 1 }}>
      <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
        <Typography.Display size='large'>d1. Display</Typography.Display>
        <Typography.Display size='medium'>d2. Display</Typography.Display>
        <Typography.Display size='small'>d3. Display</Typography.Display>
      </Container>
      <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
        <Typography.Headline size='large'>h1. Headline</Typography.Headline>
        <Typography.Headline size='medium'>h2. Headline</Typography.Headline>
        <Typography.Headline size='small'>h3. Headline</Typography.Headline>
      </Container>
      <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
        <Typography.Body size='large'>b1. Body</Typography.Body>
        <Typography.Body size='medium'>b2. Body</Typography.Body>
        <Typography.Body size='small'>b3. Body</Typography.Body>
      </Container>
      <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
        <Typography.Label size='large'>l1. Label</Typography.Label>
        <Typography.Label size='medium'>l2. Label</Typography.Label>
        <Typography.Label size='small'>l3. Label</Typography.Label>
      </Container>
    </Container>
  );
};

export default TypographyScreen;

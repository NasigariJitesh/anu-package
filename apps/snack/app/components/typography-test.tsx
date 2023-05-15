import { useTheme } from 'anu/config';
import { Container, Typography } from 'anu/lib';

const TypographyScreen = () => {
  const theme = useTheme();
  return (
    <Container disableGutters sx={{ margin: 10, flex: 1 }}>
      <Container disableGutters flexDirection='column' align='flex-start' justify='space-between'>
        <Typography.Display
          size='large'
          style={{ fontSize: theme.fontSizes[0], lineHeight: theme.lineHeights[0], color: theme.colors.$primary }}
        >
          d1. Display
        </Typography.Display>
        <Typography.Headline
          size='large'
          style={{ fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights[2], color: theme.colors.$primary }}
        >
          h1. Headline
        </Typography.Headline>
        <Typography.Body
          size='large'
          style={{ fontSize: theme.fontSizes[7], lineHeight: theme.lineHeights[7], color: theme.colors.$primary }}
        >
          b1. Body
        </Typography.Body>

        <Typography.Label
          size='large'
          style={{ fontSize: theme.fontSizes[9], lineHeight: theme.lineHeights[9], color: theme.colors.$primary }}
        >
          l1. Label
        </Typography.Label>
      </Container>
    </Container>
  );
};

export default TypographyScreen;

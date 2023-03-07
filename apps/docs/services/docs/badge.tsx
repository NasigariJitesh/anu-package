import { Badge, Container, Icon } from 'anu/lib';
import { ContentValues } from 'src/sections/content';

export const badgeDocumentation: ContentValues = {
  heading: 'Badge',
  subTitle: 'Badges convey dynamic information, such as counts or status. A badge can include labels or numbers.',
  properties: [
    {
      name: 'value',
      type: 'string | number',
      description: 'The content of the badge',
    },
    {
      name: 'showZero',
      type: 'boolean (optional)',
      description: 'whether the badge should be displayed when value is zero',
      defaultValue: 'false',
    },
    {
      name: 'maxValue',
      type: 'boolean (optional)',
      description: 'Beyond this, the content will be shown as + appended to max value ',
      defaultValue: '100',
    },

    {
      name: 'overlap',
      type: "'circular' | 'rectangular' (optional)",
      description: 'The shape of the overlaying container of the badge.',
      defaultValue: 'rectangular',
    },
    {
      name: 'position',
      description: 'The position of the badge.',
      type: " 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' (optional)",
      defaultValue: 'topRight',
    },
    {
      name: 'contentStyle',
      description: 'The styles for the badge content.',
      type: 'StyleProp<TextStyle> (optional)',
    },
    {
      name: 'style',
      description: 'The styles for the badge.',
      type: 'StyleProp<ViewStyle> (optional)',
    },
    {
      name: 'sx',
      description: 'The extended styles for the badge.',
      type: 'Sx (optional)',
    },
  ],
  examples: [
    {
      name: 'String Badge',
      component: (
        <Container disableGutters flexDirection='row' align='center' justify='space-around' sx={{ width: 200 }}>
          <Badge value='new'>
            <Icon name='airplay' />
          </Badge>
          <Badge value='New' overlap='circular'>
            <Icon name='airplay' />
          </Badge>
          <Badge value=''>
            <Icon name='airplay' />
          </Badge>
        </Container>
      ),
      code: `  <Badge value='new'>
    <Icon name='airplay' />
  </Badge>
  <Badge value='new' overlap='circular'>
    <Icon name='airplay' />
  </Badge>
  <Badge value=''>
    <Icon name='airplay' />
  </Badge>`,
    },
    {
      name: 'Number Badge',
      component: (
        <Container
          disableGutters
          flexDirection='row'
          align='center'
          justify='space-around'
          sx={{ width: 200, overflow: 'visible' }}
        >
          <Badge value={90}>
            <Icon name='airplay' />
          </Badge>
          <Badge value={90} maxValue={50}>
            <Icon name='airplay' />
          </Badge>
          <Badge value={0} showZero>
            <Icon name='airplay' />
          </Badge>
        </Container>
      ),
      code: `<Container flexDirection='row' align='center' justify='space-around' >
      <Badge value={90}>
        <Icon name='airplay' />
      </Badge>
      <Badge value={90} maxValue={50}>
        <Icon name='airplay' />
      </Badge>
      <Badge value={0} showZero>
        <Icon name='airplay' />
      </Badge>
    </Container>`,
    },
  ],
};

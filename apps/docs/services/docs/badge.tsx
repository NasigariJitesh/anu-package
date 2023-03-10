import { Badge, Container, Icon } from 'anu/lib';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ContentValues } from 'src/sections/content';

const flexStyle = {
  flexWrap: 'wrap',
  width: ['90vw', '90vw', '300px', '300px', '300px'],
} as const;

const style = {
  margin: 15,
};

export const badgeDocumentation: ContentValues = {
  mainHeading: 'Badge',
  mainDescription:
    'Badges are used to display a small amount of information, typically a number or a short status message, on top of an icon or avatar.',
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
      name: 'Notification Badge',
      id: 'notification',
      description: 'Notification badges are used to provide a visual indicator of new or updated information.',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Badge value=''>
            <Icon name='notifications' style={style} />
          </Badge>
          <Badge value='5' overlap='circular'>
            <Icon name='notifications' style={style} />
          </Badge>
          <Badge value={600} maxValue={599}>
            <Icon name='notifications' style={style} />
          </Badge>
        </Container>
      ),
      code: `<Badge value=''>
  <Icon name='notifications' style={style} />
</Badge>
<Badge value='5' overlap='circular'>
  <Icon name='notifications' style={style} />
</Badge>
<Badge value={600} maxValue={599}>
  <Icon name='notifications' style={style} />
</Badge>`,
    },
    {
      name: 'Notification Badge',
      id: 'status',
      description: 'Notification badges are used to provide a visual indicator of new or updated information.',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Badge value='new'>
            <Icon name='notifications' style={style} />
          </Badge>
        </Container>
      ),
      code: `<Badge value='new'>
  <Icon name='notifications' style={style} />
</Badge>`,
    },
  ],
};

export const badgeIndex: HeadingProps = {
  heading: 'Badge',
  links: [
    {
      title: 'Notification Badge',
      link: '#notification',
    },
    {
      title: 'Status Badge',
      link: '#status',
    },
    {
      link: '#props',
      title: 'Props',
      components: [],
    },
  ],
};

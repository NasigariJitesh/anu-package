import { Badge, Container, Icon } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  paddingHorizontal: 10,
} as const;

const style = {
  margin: 15,
};

export const badgeDocumentation: ContentValues = {
  mainHeading: 'badgeDocumentation:mainHeading',
  mainDescription: 'badgeDocumentation:mainDescription',
  properties: [
    {
      name: 'value',
      type: 'string | number',
      description: 'badgeDocumentation:property-value-description',
    },
    {
      name: 'showZero',
      type: 'boolean',
      optional: true,
      description: 'badgeDocumentation:property-showZero-description',
      defaultValue: 'false',
    },
    {
      name: 'maxValue',
      type: 'boolean',
      optional: true,
      description: 'badgeDocumentation:property-maxValue-description',
      defaultValue: '100',
    },

    {
      name: 'overlap',
      type: "'circular' | 'rectangular'",
      optional: true,
      description: 'badgeDocumentation:property-overlap-description',
      defaultValue: 'rectangular',
    },
    {
      name: 'position',
      description: 'badgeDocumentation:property-position-description',
      type: " 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'",
      defaultValue: 'topRight',
      optional: true,
    },
    {
      name: 'contentStyle',
      description: 'badgeDocumentation:property-contentStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'style',
      description: 'badgeDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'sx',
      description: 'badgeDocumentation:property-sx-description',
      type: 'Sx',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'badgeDocumentation:example1-name',
      id: 'notification',
      description: 'badgeDocumentation:example1-description',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Badge value=''>
              <Icon name='notifications' />
            </Badge>
          </Container>
          <Container disableGutters style={style}>
            <Badge value='5' overlap='circular'>
              <Icon name='notifications' />
            </Badge>
          </Container>
          <Container disableGutters style={style}>
            <Badge value={600} maxValue={599}>
              <Icon name='notifications' />
            </Badge>
          </Container>
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
      name: 'badgeDocumentation:example2-name',
      id: 'status',
      description: 'badgeDocumentation:example2-description',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Badge value='new'>
              <Icon name='notifications' />
            </Badge>
          </Container>
        </Container>
      ),
      code: `<Badge value='new'>
  <Icon name='notifications' />
</Badge>`,
    },
    {
      name: 'badgeDocumentation:example3-name',
      id: 'position',
      component: (
        <Container disableGutters flexDirection='row' align='center' sx={flexStyle as never}>
          <Container disableGutters style={style}>
            <Badge value='new' position='topLeft'>
              <Icon name='notifications' />
            </Badge>
          </Container>
          <Container disableGutters style={style}>
            <Badge value='new' position='bottomLeft'>
              <Icon name='notifications' />
            </Badge>
          </Container>
          <Container disableGutters style={style}>
            <Badge value='new' position='topRight'>
              <Icon name='notifications' />
            </Badge>
          </Container>

          <Container disableGutters style={style}>
            <Badge value='new' position='bottomRight'>
              <Icon name='notifications' />
            </Badge>
          </Container>
        </Container>
      ),
      code: `<Badge value='new' position='topLeft'>
  <Icon name='notifications' />
</Badge>
<Badge value='new' position='bottomLeft'>
  <Icon name='notifications' />
</Badge>
<Badge value='new' position='topRight'>
  <Icon name='notifications' />
</Badge>
<Badge value='new' position='bottomRight'>
  <Icon name='notifications' />
</Badge>`,
    },
  ],
};

export const badgeIndex: HeadingProps = {
  heading: 'badgeDocumentation:mainHeading',
  links: [
    {
      title: 'badgeDocumentation:example1-name',
      link: '#notification',
    },
    {
      title: 'badgeDocumentation:example2-name',
      link: '#status',
    },
    {
      title: 'badgeDocumentation:example3-name',
      link: '#position',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

import { useTheme } from 'anu/config';
import { Chip, Container, Divider, Typography } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { ReactNode } from 'react';

const style = {
  marginVertical: 15,
};
const otherStyle = {
  marginHorizontal: 30,
  marginVertical: 30,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  flexDirection: 'row',
} as const;

const DividerExampleWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const wrapperStyle = {
    backgroundColor: theme.colors.$surface,
    margin: 15,
    padding: 15,
    borderRadius: 18,
    flex: 1,
  };
  return (
    <Container disableGutters style={wrapperStyle}>
      {children}
    </Container>
  );
};

export const dividerDocumentation: ContentValues = {
  mainHeading: 'dividerDocumentation:mainHeading',
  mainDescription: 'dividerDocumentation:mainDescription',
  examples: [
    {
      name: 'dividerDocumentation:example1-name',
      id: 'orientation',
      description: 'dividerDocumentation:example1-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <DividerExampleWrapper>
            <Typography.Body>Item 1</Typography.Body>
            <Divider orientation='horizontal' variant='full-width' />
            <Typography.Body>Item 2</Typography.Body>

            <Container disableGutters flexDirection='row' sx={{ ...flexStyle, marginTop: 30 } as never}>
              <Typography.Body style={style}>Item 1</Typography.Body>
              <Divider orientation='vertical' variant='full-height' />
              <Typography.Body style={style}>Item 2</Typography.Body>
            </Container>
          </DividerExampleWrapper>
        </Container>
      ),
      code: `<Divider orientation='horizontal' variant='full-width' />

<Divider orientation='vertical' variant='full-height' />`,
    },
    {
      name: 'dividerDocumentation:example2-name',
      id: 'variants',
      description: 'dividerDocumentation:example2-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <DividerExampleWrapper>
            <Typography.Body>Item 1</Typography.Body>
            <Divider variant='full-width' orientation='horizontal' />
            <Typography.Body>Item 2</Typography.Body>
            <Divider variant='middle' orientation='horizontal' />
            <Typography.Body>Item 3</Typography.Body>
            <Divider variant='left-inset' orientation='horizontal' />
            <Typography.Body>Item 4</Typography.Body>
            <Divider variant='right-inset' orientation='horizontal' />

            <Container
              disableGutters
              align='center'
              flexDirection='row'
              sx={{ ...flexStyle, marginTop: 30, height: 100 } as never}
            >
              <Typography.Body style={style}>Item 1</Typography.Body>
              <Divider variant='full-height' orientation='vertical' />
              <Typography.Body style={style}>Item 2</Typography.Body>
              <Divider variant='middle' orientation='vertical' />
              <Typography.Body style={style}>Item 3</Typography.Body>
              <Divider variant='top-inset' orientation='vertical' />
              <Typography.Body style={style}>Item 4</Typography.Body>
              <Divider variant='bottom-inset' orientation='vertical' />
              <Typography.Body style={style}>Item 5</Typography.Body>
            </Container>
          </DividerExampleWrapper>
        </Container>
      ),
      code: `<Divider variant='full-width' orientation='horizontal' />

<Divider variant='middle' orientation='horizontal' />

<Divider variant='left-inset' orientation='horizontal' />

<Divider variant='right-inset' orientation='horizontal' />

<Divider variant='full-height' orientation='vertical' />

<Divider variant='middle' orientation='vertical' />

<Divider variant='top-inset' orientation='vertical' />

<Divider variant='bottom-inset' orientation='vertical' />`,
    },

    {
      name: 'dividerDocumentation:example3-name',
      id: 'patterns',
      description: 'dividerDocumentation:example3-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <DividerExampleWrapper>
            <Typography.Body>Item 1</Typography.Body>
            <Divider pattern='line' />
            <Typography.Body>Item 2</Typography.Body>
            <Divider pattern='dashed' />
            <Typography.Body>Item 3</Typography.Body>
            <Divider pattern='dotted' />
          </DividerExampleWrapper>
        </Container>
      ),
      code: `<Divider pattern='line' />

<Divider pattern='double-line' />

<Divider pattern='dashed' />

<Divider pattern='dotted' />`,
    },

    {
      name: 'dividerDocumentation:example4-name',
      id: 'text-children',
      description: 'dividerDocumentation:example4-description',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <DividerExampleWrapper>
            <Typography.Body>Item 1</Typography.Body>
            <Divider text='Center' />
            <Typography.Body>Item 2</Typography.Body>
            <Divider text='Start' align='start' />
            <Typography.Body>Item 3</Typography.Body>
            <Divider text='End' align='end' />
            <Typography.Body>Item 4</Typography.Body>
            <Divider>
              <Chip value='Chip' />
            </Divider>
            <Container disableGutters align='center' flexDirection='row' sx={{ ...flexStyle, marginTop: 30 } as never}>
              <Typography.Body style={[style, otherStyle]}>Item 1</Typography.Body>
              <Divider text='Center' orientation='vertical' />
              <Typography.Body style={[style, otherStyle]}>Item 2</Typography.Body>
              <Divider text='Start' orientation='vertical' align='start' />
              <Typography.Body style={[style, otherStyle]}>Item 3</Typography.Body>
              <Divider text='End' orientation='vertical' align='end' />
              <Typography.Body style={[style, otherStyle]}>Item 4</Typography.Body>
            </Container>
          </DividerExampleWrapper>
        </Container>
      ),
      code: `<Divider text='Center' orientation='vertical' />

<Divider text='Start' orientation='vertical' align='start' />

<Divider text='End' orientation='vertical' align='end' />

<Divider text='Center' />

<Divider text='Start' align='start' />

<Divider text='End' align='end' />

<Divider>
  <Chip value='Chip' />
</Divider>`,
    },
  ],
  properties: [
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      description: 'dividerDocumentation:property-orientation-description',
      defaultValue: "'horizontal'",
      optional: true,
    },
    {
      name: 'variant',
      type: "'full-width' | 'left-inset' | 'right-inset' | 'middle' | 'full-height' | 'top-inset' | 'bottom-inset'",
      description: 'dividerDocumentation:property-variant-description',
      defaultValue: "'middle'",
      optional: true,
    },
    {
      name: 'pattern',
      type: "'line'  | 'dotted' | 'dashed'",
      description: 'dividerDocumentation:property-pattern-description',
      defaultValue: "'line'",
      optional: true,
    },
    {
      name: 'thickness',
      type: 'number | string',
      description: 'dividerDocumentation:property-thickness-description',
      defaultValue: '1',
      optional: true,
    },
    {
      name: 'color',
      type: 'string',
      description: 'dividerDocumentation:property-color-description',
      optional: true,
    },

    {
      name: 'text',
      type: 'string',
      description: 'dividerDocumentation:property-text-description',
      optional: true,
    },
    {
      name: 'children',
      type: 'ReactChildren',
      description: 'dividerDocumentation:property-children-description',
      optional: true,
    },
    {
      name: 'align',
      type: "'center' | 'start' | 'end'",
      description: 'dividerDocumentation:property-align-description',
      defaultValue: "'center'",
      optional: true,
    },
    {
      name: 'style',
      type: 'StyleProp<TextStyle>',
      description: 'dividerDocumentation:property-style-description',
      optional: true,
    },
    {
      name: 'textStyle',
      type: 'StyleProp<TextStyle>',
      description: 'dividerDocumentation:property-textStyle-description',
      optional: true,
    },
  ],
};

export const dividerIndex: HeadingProps = {
  heading: 'dividerDocumentation:mainHeading',
  links: [
    {
      title: 'dividerDocumentation:example1-name',
      link: '#orientation',
    },
    {
      title: 'dividerDocumentation:example2-name',
      link: '#variants',
    },
    {
      title: 'dividerDocumentation:example3-name',
      link: '#patterns',
    },
    {
      title: 'dividerDocumentation:example4-name',
      link: '#text-children',
    },

    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

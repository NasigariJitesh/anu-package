import { Container, TextArea as TextAreaComponent, TextAreaProps } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  width: 250,
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const TextArea = (props: TextAreaProps) => {
  const [text, setText] = useState(props.value);

  return <TextAreaComponent {...props} style={style} value={text} onChangeText={setText} />;
};

export const textAreaDocumentation: ContentValues = {
  mainHeading: 'textAreaDocumentation:mainHeading',

  properties: [
    {
      name: 'value',
      type: 'string',
      description: 'textAreaDocumentation:property-value-description',
    },
    {
      name: 'variant',
      type: "'outlined' | 'filled'",
      description: 'textAreaDocumentation:property-variant-description',
      defaultValue: "'outlined'",
      optional: true,
    },
  ],
  externalProperties: {
    link: '/components/text-field',
    title: 'textAreaDocumentation:external-properties-title',
  },
  examples: [
    {
      name: 'textAreaDocumentation:example1-name',
      id: 'filled-text-area',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='' variant='filled' />
            <TextArea value='This a long string for Text Area' variant='filled' />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='' variant='filled' disabled />
            <TextArea value='This a long string for Text Area' variant='filled' disabled />
          </Container>
        </Container>
      ),
      code: `<TextArea value='' variant='filled' />
<TextArea value='This a long string for Text Area'  variant='filled' />
  
<TextArea value='' variant='filled' disabled />
<TextArea value='This a long string for Text Area'  variant='filled' disabled />`,
    },
    {
      name: 'textAreaDocumentation:example2-name',
      id: 'outlined-text-area',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='' variant='outlined' />
            <TextArea value='This a long string for Text Area' variant='outlined' />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='' variant='outlined' disabled />
            <TextArea value='This a long string for Text Area' variant='outlined' disabled />
          </Container>
        </Container>
      ),
      code: `<TextArea value='' variant='outlined' />
<TextArea value='This a long string for Text Area'  variant='outlined' />
  
<TextArea value='' variant='outlined' disabled />
<TextArea value='This a long string for Text Area'  variant='outlined' disabled />`,
    },
    {
      name: 'textAreaDocumentation:example3-name',
      id: 'error',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='' variant='filled' error />
            <TextArea value='' variant='outlined' error />
          </Container>
          <Container disableGutters flexDirection='row' sx={flexStyle as never}>
            <TextArea value='This a long string for Text Area' variant='filled' error />
            <TextArea value='This a long string for Text Area' variant='outlined' error />
          </Container>
        </Container>
      ),
      code: `<TextArea value='' variant='filled' error />
<TextArea value='' variant='outlined' error />

<TextArea value='This a long string for Text Area'  variant='filled' error />
<TextArea value='This a long string for Text Area'  variant='outlined' error />`,
    },
  ],
};

export const textAreaIndex: HeadingProps = {
  heading: 'textAreaDocumentation:mainHeading',
  links: [
    {
      title: 'textAreaDocumentation:example1-name',
      link: '#filled-text-area',
    },

    {
      title: 'textAreaDocumentation:example2-name',
      link: '#outlined-text-area',
    },

    {
      title: 'textAreaDocumentation:example3-name',
      link: '#error',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

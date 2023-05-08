import { Button, Container } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

export const regularButtonDocumentation: ContentValues = {
  mainHeading: 'regularButtonDocumentation:mainHeading',
  mainDescription: 'regularButtonDocumentation:mainDescription',

  heading: 'regularButtonDocumentation:heading',
  subTitle: 'regularButtonDocumentation:subTitle',
  properties: [
    {
      name: 'title',
      type: 'string',
      description: 'regularButtonDocumentation:property-title-description',
    },
    {
      name: 'type',
      type: "'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'",
      description: 'regularButtonDocumentation:property-type-description',
    },
    {
      name: 'icon',
      description: 'regularButtonDocumentation:property-icon-description',
      type: 'IconType | ReactElement',
      optional: true,
    },
    {
      name: 'containerStyle',
      description: 'regularButtonDocumentation:property-containerStyle-description',
      type: 'ExtendedDisabledStyles, ExtendedHoverStyles',
      optional: true,
    },
    {
      name: 'labelStyle',
      description: 'regularButtonDocumentation:property-labelStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
    {
      name: 'pressableProps',
      description: 'regularButtonDocumentation:property-pressableProps-description',
      type: 'pressableProps',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'regularButtonDocumentation:example1-name',
      id: 'elevated-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Elevated title='Elevated' containerStyle={style} />
          <Button.Elevated icon={{ name: 'add' }} title='Elevated Icon' containerStyle={style} />
          <Button.Elevated title='Disabled' disabled containerStyle={style} />
          <Button.Elevated icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Elevated title='Elevated' />
<Button.Elevated icon={{ name: 'add' }} title='Elevated Icon' />
<Button.Elevated  title='Disabled' disabled />
<Button.Elevated icon={{ name: 'add' }} title='Disabled' disabled />`,
    },
    {
      name: 'regularButtonDocumentation:example2-name',
      id: 'filled-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Filled title='Filled' containerStyle={style} />
          <Button.Filled icon={{ name: 'add' }} title='Filled Icon' containerStyle={style} />
          <Button.Filled title='Disabled' disabled containerStyle={style} />
          <Button.Filled icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Filled title='Filled' />
<Button.Filled icon={{ name: 'add' }} title='Filled Icon' />
<Button.Filled title='Disabled' disabled />
<Button.Filled icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'regularButtonDocumentation:example3-name',
      id: 'filled-tonal-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Tonal title='Tonal' containerStyle={style} />
          <Button.Tonal icon={{ name: 'add' }} title='Tonal Icon' containerStyle={style} />
          <Button.Tonal title='Disabled' disabled containerStyle={style} />
          <Button.Tonal icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Tonal title='Tonal' />
<Button.Tonal icon={{ name: 'add' }} title='Tonal Icon' />
<Button.Tonal title='Disabled' disabled />
<Button.Tonal icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'regularButtonDocumentation:example4-name',
      id: 'outlined-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Outlined title='Outlined' containerStyle={style} />
          <Button.Outlined icon={{ name: 'add' }} title='Outlined Icon' containerStyle={style} />
          <Button.Outlined title='Disabled' disabled containerStyle={style} />
          <Button.Outlined icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Outlined title='Outlined' />
<Button.Outlined icon={{ name: 'add' }} title='Outlined Icon' />
<Button.Outlined title='Disabled' disabled />
<Button.Outlined icon={{ name: 'add' }} title='Disabled' disabled />`,
    },

    {
      name: 'regularButtonDocumentation:example5-name',
      id: 'text-buttons',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <Button.Text title='Text' containerStyle={style} />
          <Button.Text icon={{ name: 'add' }} title='Text Icon' containerStyle={style} />
          <Button.Text title='Disabled' disabled containerStyle={style} />
          <Button.Text icon={{ name: 'add' }} title='Disabled' disabled containerStyle={style} />
        </Container>
      ),
      code: `<Button.Text title='Text' />
<Button.Text icon={{ name: 'add' }} title='Text Icon' />
<Button.Text title='Disabled' disabled />
<Button.Text icon={{ name: 'add' }} title='Disabled' disabled />`,
    },
  ],
};
export const regularButtonIndex: HeadingProps = {
  heading: 'regularButtonDocumentation:heading',
  links: [
    {
      title: 'regularButtonDocumentation:example1-name',
      link: '#elevated-buttons',
    },
    {
      title: 'regularButtonDocumentation:example2-name',
      link: '#filled-buttons',
    },

    {
      title: 'regularButtonDocumentation:example3-name',
      link: '#filled-tonal-buttons',
    },

    {
      title: 'regularButtonDocumentation:example4-name',
      link: '#outlined-buttons',
    },

    {
      title: 'regularButtonDocumentation:example5-name',
      link: '#text-buttons',
    },

    {
      link: '#props',
      title: 'content:props',
    },
  ],
};

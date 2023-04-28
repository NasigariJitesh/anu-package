import { Button, Container, SnackbarProps, useSnackbar } from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  // < 576 = 90vw
  // 576
  //
  // 990 px
  // > 1200px
  width: ['90vw', '90vw', '550px', '600px', '750px'],
} as const;

const SnackbarExample = (props: Partial<SnackbarProps> & { title: string }) => {
  const { add, close } = useSnackbar();

  const { title, ...snackProps } = props;

  return (
    <Button.Filled
      title={title}
      containerStyle={style}
      onPress={() =>
        add({
          ...snackProps,
          content: snackProps.content ?? '',
          ...(snackProps.numberOfLines === 1 && snackProps.icon
            ? { icon: { ...snackProps.icon, type: 'standard', onPress: () => close() } }
            : null),
        })
      }
    />
  );
};

export const snackbarDocumentation: ContentValues = {
  mainHeading: 'snackbarDocumentation:mainHeading',
  mainDescription: 'snackbarDocumentation:mainDescription',

  configurationSteps: [
    {
      id: 'provider',
      title: 'snackbarDocumentation:configuration-step1-name',
      description: 'snackbarDocumentation:configuration-step1-description',
      code: `import { SnackbarProvider } from 'anu/lib';
      
const defaultConfig = {
  /* your default snackbar configuration */
}
 
const App = () => {
  return (
    <SnackbarProvider defaultSnackbarConfiguration={{}}>
      {/* Children */}
    </SnackbarProvider>
  );
};

`,
    },
  ],
  properties: [
    {
      name: 'content',
      type: 'string',
      description: 'snackbarDocumentation:property-content-description',
    },
    {
      name: 'numberOfLines',
      type: 'number',
      description: 'snackbarDocumentation:property-numberOfLines-description',
      optional: true,
      defaultValue: '1',
    },
    {
      name: 'action',
      type: 'TextButtonProps',
      description: 'snackbarDocumentation:property-action-description',
      optional: true,
    },
    {
      name: 'icon',
      description: 'snackbarDocumentation:property-icon-description',
      type: 'IconButtonProps',
      optional: true,
    },
    {
      name: 'longerAction',
      description: 'snackbarDocumentation:property-longerAction-description',
      type: 'boolean',
      optional: true,
    },
    {
      name: 'position',
      description: 'snackbarDocumentation:property-position-description',
      type: '{ top: number } | { bottom: number }',
      optional: true,
    },
    {
      name: 'align',
      description: 'snackbarDocumentation:property-longerActalignion-description',
      type: "'left' | 'right' | 'center'",
      optional: true,
      defaultValue: "'left'",
    },
    {
      name: 'style',
      description: 'snackbarDocumentation:property-style-description',
      type: 'StyleProp<ViewStyle>',
      optional: true,
    },
    {
      name: 'contentStyle',
      description: 'snackbarDocumentation:property-contentStyle-description',
      type: 'StyleProp<TextStyle>',
      optional: true,
    },
  ],
  examples: [
    {
      name: 'snackbarDocumentation:example1-name',
      id: 'single-line',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <SnackbarExample numberOfLines={1} content='Single-line snackbar' title='Single-line snackbar' />
          <SnackbarExample
            numberOfLines={1}
            content='Single-line snackbar with action'
            title='Single-line with action'
            action={{ title: 'Action' }}
          />
          <SnackbarExample
            numberOfLines={1}
            content='Single-line snackbar with action and icon'
            title='Single-line with action & icon'
            action={{ title: 'Action' }}
            icon={{ icon: { name: 'close' } }}
          />
        </Container>
      ),
      code: `const { add, close } = useSnackbar();
      
<Button.Elevated title='Single-line snackbar' onPress={()=>{
    add({
      content: 'Single-line snackbar',
      numberOfLines: 1,
    })
  }}
/>

<Button.Elevated title='Single-line snackbar with action' onPress={()=>{
    add({
      content: 'Single-line snackbar with action',
      numberOfLines: 1,
      action:{ title: 'Action' }
    })
  }}
/>

<Button.Elevated title='Single-line snackbar with action & icon' onPress={()=>{
    add({
      content: 'Single-line snackbar with action and icon',
      numberOfLines: 1,
      action: { title: 'Action' },
      icon: { icon: { name: 'close' }, onPress: close }
    })
  }}
/>`,
    },

    {
      name: 'snackbarDocumentation:example2-name',
      id: 'double-line',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <SnackbarExample
            numberOfLines={2}
            content='This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action.'
            title='Double-line snackbar'
          />
          <SnackbarExample
            numberOfLines={2}
            content='This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action.'
            title='Double-line snackbar with action'
            action={{ title: 'Action' }}
          />
          <SnackbarExample
            numberOfLines={2}
            content='This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action.'
            title='Double-line snackbar with longer action'
            action={{ title: 'Longer action' }}
            longerAction
          />
        </Container>
      ),
      code: `const { add } = useSnackbar();
      
<Button.Elevated title='Double-line snackbar' onPress={()=>{
    add({
      content: 'This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action. This is a Double-line snackbar, without any action.',
      numberOfLines: 2,
    })
  }}
/>

<Button.Elevated title='Double-line snackbar with action' onPress={()=>{
    add({
      content: 'This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action. This is a Double-line snackbar, with action.',
      numberOfLines: 2,
      action:{ title: 'Action' }
    })
  }}
/>

<Button.Elevated title='Double-line snackbar with longer action' onPress={()=>{
    add({
      content: 'This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action. This is a Double-line snackbar, with longer action.',
      numberOfLines: 2,
      action: { title: 'Longer action' },
      longerAction: true
    })
  }}
/>`,
    },
    {
      name: 'snackbarDocumentation:example3-name',
      id: 'duration',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <SnackbarExample
            title='Snackbar with 8s Duration'
            content='This snackbar has a duration of 8 seconds'
            duration={8000}
          />
          <SnackbarExample
            title='Snackbar with 2s Duration'
            content='This snackbar has a duration of 2 seconds'
            duration={2000}
          />
        </Container>
      ),
      code: `const { add } = useSnackbar();

<Button.Elevated title='Snackbar with 8s Duration' onPress={()=>{
    add({
      content: 'This snackbar has a duration of 8 seconds',
      duration: 8000,
    })
  }}
/>

<Button.Elevated title='Snackbar with 8s Duration' onPress={()=>{
    add({
      content: 'This snackbar has a duration of 2 seconds',
      duration: 2000,
    })
  }}
/>`,
    },
    {
      name: 'snackbarDocumentation:example4-name',
      id: 'align',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <SnackbarExample content='Left Aligned snackbar' title='Left' align='left' />
          <SnackbarExample content='Center Aligned snackbar' title='Center' align='center' />
          <SnackbarExample content='Right Aligned snackbar' title='Right' align='right' />
        </Container>
      ),
      code: `const { add } = useSnackbar();
      
<Button.Elevated title='Left' onPress={()=>{
    add({
      content: 'Left Aligned snackbar',
      align: 'left'
    })
  }}
/>

<Button.Elevated title='Center' onPress={()=>{
    add({
      content: 'Center Aligned snackbar',
      align: 'center'
    })
  }}
/>

<Button.Elevated title='Right' onPress={()=>{
    add({
      content: 'Right Aligned snackbar',
      align: 'right'
    })
  }} 
/>`,
    },
    {
      name: 'snackbarDocumentation:example5-name',
      id: 'position',
      component: (
        <Container disableGutters flexDirection='row' sx={flexStyle as never}>
          <SnackbarExample content='Top positioned snackbar' title='Top' position={{ top: 10 }} />
          <SnackbarExample content='Bottom positioned snackbar' title='Bottom' position={{ bottom: 10 }} />
        </Container>
      ),
      code: `const { add } = useSnackbar();
      
<Button.Elevated title='Top' onPress={()=>{
    add({
      content: 'Top positioned snackbar',
      position: { top: 10 }
    })
  }} 
/>

<Button.Elevated title='Bottom' onPress={()=>{
    add({
      content: 'Bottom positioned snackbar',
      position: { bottom: 10 }
    })
  }}
/>`,
    },
  ],
};
export const snackbarIndex: HeadingProps = {
  heading: 'snackbarDocumentation:mainHeading',
  links: [
    {
      title: 'snackbarDocumentation:configuration-step1-name',
      link: '#provider',
    },
    {
      title: 'snackbarDocumentation:example1-name',
      link: '#single-line',
    },
    {
      title: 'snackbarDocumentation:example2-name',
      link: '#double-line',
    },

    {
      title: 'snackbarDocumentation:example3-name',
      link: '#duration',
    },

    {
      title: 'snackbarDocumentation:example4-name',
      link: '#align',
    },

    {
      title: 'snackbarDocumentation:example5-name',
      link: '#position',
    },

    {
      link: '#props',
      title: 'content:props',
    },
  ],
};

/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FlatList,
  TextField,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import { ContentValues } from 'components/content';
import { HeadingProps } from 'components/right-sidebar/right-sidebar';
import { useState } from 'react';

const style = {
  margin: 15,
};

const flexStyle = {
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
} as const;

const RenderItem = ({ item }: { item: { label: string } }) => {
  return (
    <TouchableRipple>
      <Container flexDirection='row' align='center'>
        <Avatar name='A' variant='circle' />
        <Typography.Body style={{ flex: 1, marginLeft: 16 }}>{item.label}</Typography.Body>
        <Checkbox id={item.label} selected={true} />
      </Container>
    </TouchableRipple>
  );
};

const Example1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogTitle title='Headline' />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const Example2 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogTitle title='Headline' icon={{ name: 'mobile-friendly' }} />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const Example3 = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const data = [
    {
      label: 'List item 1',
    },
    {
      label: 'List item 2',
    },
    {
      label: 'List item 3',
    },
  ];

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogTitle title='Headline' onDismiss={() => setVisible(false)} />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
          <Divider light color={theme.colors?.$onSurfaceVariant as string} />
          <FlatList data={data} keyExtractor={(item) => item.label} renderItem={RenderItem} style={{ width: '100%' }} />
          <Divider light color={theme.colors?.$onSurfaceVariant as string} />
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const Example4 = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const data = [
    {
      label: 'List item 1',
    },
    {
      label: 'List item 2',
    },
    {
      label: 'List item 3',
    },
    {
      label: 'List item 4',
    },
    {
      label: 'List item 5',
    },
    {
      label: 'List item 6',
    },
    {
      label: 'List item 7',
    },
    {
      label: 'List item 8',
    },
    {
      label: 'List item 9',
    },
    {
      label: 'List item 10',
    },
  ];

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogTitle title='Headline' onDismiss={() => setVisible(false)} />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
          <Divider light color={theme.colors?.$onSurfaceVariant as string} />
          <FlatList
            data={data}
            keyExtractor={(item) => item.label}
            renderItem={RenderItem}
            style={{ width: '100%', maxHeight: 220 }}
            showsVerticalScrollIndicator={false}
          />
          <Divider light color={theme.colors?.$onSurfaceVariant as string} style={{ marginVertical: 0 }} />
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

const Example5 = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  const theme = useTheme();

  const data = [
    {
      label: 'List item 1',
    },
    {
      label: 'List item 2',
    },
    {
      label: 'List item 3',
    },
    {
      label: 'List item 4',
    },
    {
      label: 'List item 5',
    },
    {
      label: 'List item 6',
    },
    {
      label: 'List item 7',
    },
    {
      label: 'List item 8',
    },
  ];

  return (
    <Container disableGutters style={style}>
      <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
      <Dialog visible={visible} onDismiss={() => setVisible(false)} type='full-screen'>
        <DialogTitle
          title='Headline'
          onDismiss={() => setVisible(false)}
          type='full-screen'
          action={<Button.Text title='Save' />}
        />
        <DialogContent>
          <Typography.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Typography.Body>
          <TextField
            variant='outlined'
            value={text1}
            onChangeText={setText1}
            style={{ backgroundColor: 'transparent', margin: 15, width: 250 }}
            labelBackgroundColor={theme.colors?.$surfaceContainerHigh as string}
          />
          <TextField
            variant='outlined'
            value={text}
            onChangeText={setText}
            style={{ backgroundColor: 'transparent', margin: 15, width: 250 }}
            labelBackgroundColor={theme.colors?.$surfaceContainerHigh as string}
          />
          <Typography.Body>Title</Typography.Body>
          <FlatList
            data={data}
            keyExtractor={(item) => item.label}
            renderItem={RenderItem}
            style={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
          />
        </DialogContent>
        <DialogActions justify='flex-end'>
          <Button.Text title='Action 1' />
          <Button.Text title='Action 2' />
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export const dialogDocumentation: ContentValues = {
  mainHeading: 'dialogDocumentation:mainHeading',
  mainDescription: 'dialogDocumentation:mainDescription',
  properties: [
    {
      name: 'visible',
      type: 'boolean',
      description: 'dialogDocumentation:property-visible-description',
    },
    {
      name: 'onDismiss',
      type: '() => void',
      description: 'dialogDocumentation:property-onDismiss-description',
    },
    {
      name: 'type',
      type: "'basic' | 'full-screen'",
      description: 'dialogDocumentation:property-type-description',
      defaultValue: "'basic'",
      optional: true,
    },
  ],
  externalProperties: {
    link: '/components/container',
    title: 'dialogDocumentation:external-properties-title',
  },
  examples: [
    {
      name: 'dialogDocumentation:example1-name',
      id: 'default',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example1 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle title='Headline' />
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </DialogContent>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
      description: 'dialogDocumentation:example1-description',
    },
    {
      name: 'dialogDocumentation:example2-name',
      id: 'with-hero-icon',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example2 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle title='Headline' icon={{ name: 'mobile-friendly' }} />
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
  </DialogContent>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
      description: 'dialogDocumentation:example2-description',
    },
    {
      name: 'dialogDocumentation:example3-name',
      id: 'list',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example3 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle title='Headline' onDismiss={() => setVisible(false)} />
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
    <Divider />
    <FlatList data={data} keyExtractor={(item) => item.label} renderItem={RenderItem} />
    <Divider />
  </DialogContent>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
      description: 'dialogDocumentation:example3-description',
    },

    {
      name: 'dialogDocumentation:example4-name',
      id: 'scroll-list',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example4 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)}>
  <DialogTitle title='Headline' onDismiss={() => setVisible(false)} />
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
    <Divider />
    <FlatList
      data={data}
      keyExtractor={(item) => item.label}
      renderItem={RenderItem}
    />
    <Divider />
  </DialogContent>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
      description: 'dialogDocumentation:example4-description',
    },
    {
      name: 'dialogDocumentation:example5-name',
      id: 'full-screen',
      component: (
        <Container disableGutters sx={flexStyle as never}>
          <Example5 />
        </Container>
      ),
      code: `<Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />

<Dialog visible={visible} onDismiss={() => setVisible(false)} type='full-screen'>
  <DialogTitle
    title='Headline'
    onDismiss={() => setVisible(false)}
    type='full-screen'
    action={<Button.Text title='Save' />}
  />
  <DialogContent>
    <Typography.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </Typography.Body>
    <TextField
      variant='outlined'
      value={text1}
      onChangeText={setText1}
    />
    <TextField
      variant='outlined'
      value={text}
      onChangeText={setText}
    />
    <Typography.Body>Title</Typography.Body>
    <FlatList
      data={data}
      keyExtractor={(item) => item.label}
      renderItem={RenderItem}
    />
  </DialogContent>
  <DialogActions justify='flex-end'>
    <Button.Text title='Action 1' />
    <Button.Text title='Action 2' />
  </DialogActions>
</Dialog>`,
      description: 'dialogDocumentation:example5-description',
    },
  ],
  additionalInformation: {
    title: 'dialogDocumentation:additionalInformation-title',
    isLocaleSpecific: true,
    items: [
      { info: 'dialogDocumentation:additionalInformation-info1', isLocaleSpecific: true },
      { info: 'dialogDocumentation:additionalInformation-info2', isLocaleSpecific: true },
      { info: 'dialogDocumentation:additionalInformation-info3', isLocaleSpecific: true },
    ],
    id: 'see-also',
  },
};

export const dialogIndex: HeadingProps = {
  heading: 'dialogDocumentation:mainHeading',
  links: [
    {
      title: 'dialogDocumentation:example1-name',
      link: '#default',
    },
    {
      title: 'dialogDocumentation:example2-name',
      link: '#with-hero-icon',
    },
    {
      title: 'dialogDocumentation:example3-name',
      link: '#list',
    },
    {
      title: 'dialogDocumentation:example4-name',
      link: '#scroll-list',
    },
    {
      title: 'dialogDocumentation:example5-name',
      link: '#full-screen',
    },
    {
      link: '#props',
      title: 'content:props',
      components: [],
    },
  ],
};

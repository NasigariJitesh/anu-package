/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
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
  FlatList,
  TextField,
  TouchableRipple,
  Typography,
} from 'anu/lib';
import React, { useState } from 'react';

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

const DialogScreen = () => {
  const [visible, setVisible] = useState(false);

  const [visible1, setVisible1] = useState(false);
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
    {
      label: 'List item 9',
    },
    {
      label: 'List item 10',
    },
    {
      label: 'List item 11',
    },
    {
      label: 'List item 12',
    },
  ];

  return (
    <Container style={{ flex: 1 }}>
      <Container disableGutters style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Dialog</Typography.Title>
        <Button.Outlined onPress={() => setVisible(true)} title='Open Dialog' />
        <Dialog visible={visible} onDismiss={() => setVisible(false)} style={{ maxHeight: 360 }}>
          <DialogTitle title='Headline' />
          <DialogContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </DialogContent>
          <DialogActions justify='flex-end'>
            <Button.Text title='Action 1' />
            <Button.Text title='Action 2' />
          </DialogActions>
        </Dialog>
      </Container>
      <Container disableGutters style={{ padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Dialog - Full Screen</Typography.Title>
        <Button.Outlined onPress={() => setVisible1(true)} title='Open Dialog' />
        <Dialog visible={visible1} onDismiss={() => setVisible1(false)} type='full-screen'>
          <DialogTitle
            title='Headline'
            onDismiss={() => setVisible1(false)}
            type='full-screen'
            action={<Button.Text title='Save' />}
          />
          <DialogContent style={{ width: '100%' }}>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
            <Container disableGutters style={{ height: 150 }}>
              <TextField
                variant='outlined'
                value={text1}
                onChangeText={setText1}
                style={{ backgroundColor: 'transparent', margin: 15, width: 250, height: 52 }}
                labelBackgroundColor={theme.colors?.$surfaceContainerHigh as string}
              />
              <TextField
                variant='outlined'
                value={text}
                onChangeText={setText}
                style={{ backgroundColor: 'transparent', margin: 15, width: 250, height: 52 }}
                labelBackgroundColor={theme.colors?.$surfaceContainerHigh as string}
              />
            </Container>
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
    </Container>
  );
};

export default DialogScreen;

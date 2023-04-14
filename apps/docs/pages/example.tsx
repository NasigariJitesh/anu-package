/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CardTitle,
  Container,
  IconButton,
  OTPInput,
  PhoneInput,
  SearchBar,
  TextField,
  Typography,
} from 'anu/lib';
import { AutoCompleteReferenceProps, Options } from 'anu/lib/composites/auto-complete/types';
import { useRef, useState } from 'react';
import { Pressable } from 'react-native';

/**
 *
 */
export default function Example() {
  const [text, setText] = useState('');
  const reference = useRef<AutoCompleteReferenceProps | null>(null);
  const ListRenderItem = ({ item }: { item: Options }) => {
    return (
      <Pressable onPress={() => console.log('press')}>
        <Typography.Body>{item.value as string} </Typography.Body>
      </Pressable>
    );
  };

  const data = [
    { id: 'hello', value: 'Hello' },
    { id: 'abcd', value: 'Abcd' },
    { id: 'efgh', value: 'Efgh' },
    { id: 'ijkl', value: 'Ijkl' },
    { id: 'lmno', value: 'LMNO' },
    { id: 'pqrs', value: 'PQRS' },
  ];

  return (
    <Container sx={{ width: '100%', height: '100%', marginTop: 100 }}>
      {/* <Container sx={{ margin: 10, padding: 10 }}>
        <OTPInput numberOfDigits={6} value='123456788' variant='filled' onSubmit={(a) => console.log(a)} />
      </Container>
      <Container flexDirection='row'>
        <Card variant='filled' width={300} sx={{ margin: 10 }}>
          <CardTitle type='default' title='Title' subTitle='Hellooo' />
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Outlined title='Action' containerStyle={{ marginHorizontal: 10 }} />
            <Button.Filled title='Action' />
          </CardActions>
        </Card>
        <Card variant='elevated' width={300} sx={{ margin: 10 }}>
          <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
            height={150}
          />
          <CardTitle type='default' title='Title' subTitle='Hellooo' />
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Outlined title='Action' containerStyle={{ marginHorizontal: 10 }} />
            <Button.Filled title='Action' />
          </CardActions>
        </Card>
        <Card variant='outlined' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            action={<IconButton type='standard' icon={{ name: 'more-vert' }} />}
          />
          <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
            height={150}
          />
          <CardTitle type='default' title='Title' subTitle='Hellooo' />
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Outlined title='Action' containerStyle={{ marginHorizontal: 10 }} />
            <Button.Filled title='Action' />
          </CardActions>
        </Card>
      </Container>
      <Container flexDirection='row'>
        <Card variant='elevated' orientation='horizontal' height={250} sx={{ margin: 10 }}>
          <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
            cardOrientation='horizontal'
            width={'30%'}
          />
          <Container>
            <CardHeader heading='Heading' subHeading='subHeading' />
            <CardContent>
              <Typography.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </Typography.Body>
            </CardContent>
            <CardActions justify='flex-end'>
              <Button.Outlined title='Action' containerStyle={{ marginHorizontal: 10 }} />
              <Button.Filled title='Action' />
            </CardActions>
          </Container>
        </Card>
        <Card variant='elevated' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
          />
        </Card>
        <Card variant='outlined' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
          />
        </Card>
      </Container> */}
      {/* <AutoComplete
        ref={reference}
        variant='outlined'
        direction='ltr'
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          console.log(value);
        }}
        data={[
          { id: 'hello', value: 'Hello' },
          { id: 'abcd', value: 'Abcd' },
          { id: 'efgh', value: 'Efgh' },
          { id: 'ijkl', value: 'Ijkl' },
          { id: 'lmno', value: 'LMNO' },
          { id: 'pqrs', value: 'PQRS' },
        ]}
        flatListProps={{ renderItem: ListRenderItem }}
        caseSensitive
        debounce
        autoCompleteContainerStyle={{ width: 300, height: 300 }}
        hideDropDownButton={false}
      /> */}

      {/* <TextField
        variant='outlined'
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          console.log(value);
        }}
        onFocus={() => reference.current?.focus()}
        onBlur={() => reference.current?.blur()}
      /> */}

      {/* <SearchBar
        data={data}
        flatListProps={{ renderItem: ListRenderItem }}
        value={text}
        onChangeText={(value: string) => {
          setText(value);
        }}
        filterOnChange={(key: string) => data.filter((item) => item.id.includes(key))}
        type={'docked'}
        containerStyle={{ width: '100%', backgroundColor: 'pink' }}
        debounce
        debounceDuration={1000}
      /> */}
      <PhoneInput
        value={text}
        onChangeText={(value: string) => {
          setText(value);
          console.log(value);
        }}
        defaultCountryCode={'+91'}
        variant={'outlined'}
      />
    </Container>
  );
}

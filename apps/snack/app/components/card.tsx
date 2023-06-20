/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import {
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
  Typography,
} from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const CardScreen = () => {
  return (
    <ScrollView style={{ width: '100%', flex: 1, paddingHorizontal: 10 }}>
      <Container style={{ width: '100%', padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Card</Typography.Title>

        <Card variant='elevated' width={280}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            action={<IconButton variant='standard' icon={{ name: 'more-vert' }} />}
          />
          <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
            height={200}
          />
          <CardTitle type='default' title='Title' subTitle='Sub Title' />
          <CardContent>
            <Typography.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Typography.Body>
          </CardContent>
          <CardActions>
            <Button.Outlined title='Action' style={{ marginHorizontal: 10 }} />
            <Button.Filled title='Action' />
          </CardActions>
        </Card>
      </Container>
      <Container style={{ width: '100%', padding: 10 }}>
        <Typography.Title style={{ marginBottom: 5 }}>Horizontal Card</Typography.Title>

        <Card orientation='horizontal' variant='filled' height={140} width={280}>
          <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
            width={140}
            height={140}
          />
          <Container style={{ flex: 1 }}>
            <CardTitle type='default' title='Title' subTitle='Sub Title' />

            <CardActions>
              <Button.Filled title='Action' />
            </CardActions>
          </Container>
        </Card>
      </Container>
    </ScrollView>
  );
};

export default CardScreen;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-secrets/no-secrets */
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
  Image,
  Typography,
} from 'anu/lib';

/**
 *
 */
export default function Example() {
  return (
    <Container>
      <Container flexDirection='row'>
        <Card variant='filled' width={300} sx={{ margin: 10 }}>
          {/* <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            action={<IconButton type='standard' icon={{ name: 'more-vert' }} />}
          /> */}
          {/* <CardMedia
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
            }}
          /> */}
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
        <Card variant='filled' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            image={
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
                }}
                alt='header'
                style={{ height: 80, width: 80 }}
              />
            }
          />
        </Card>
        <Card variant='elevated' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            image={
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
                }}
                alt='header'
                style={{ height: 80, width: 80 }}
              />
            }
          />
        </Card>
        <Card variant='outlined' width={300} sx={{ margin: 10 }}>
          <CardHeader
            heading='Heading'
            subHeading='subHeading'
            avatar={<Avatar name='N' variant='circle' size='large' />}
            image={
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
                }}
                alt='header'
                style={{ height: 80, width: 80 }}
              />
            }
          />
        </Card>
      </Container>
    </Container>
  );
}

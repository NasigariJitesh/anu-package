/* eslint-disable no-secrets/no-secrets */
/* eslint-disable react-native/no-inline-styles */

import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from 'anu/lib';
import React from 'react';

const CardScreen = () => {
  return (
    <Container>
      <Card variant='elevated' orientation='horizontal' width={300} height={150}>
        <Container sx={{ flex: 1 }}>
          <CardContent>
            <Typography.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography.Body>
          </CardContent>
          <CardActions justify='flex-end'>
            <Button.Filled title='Action' />
          </CardActions>
        </Container>
        <CardMedia
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png',
          }}
          cardOrientation='horizontal'
          width={'40%'}
        />
      </Card>
    </Container>
  );
};

export default CardScreen;

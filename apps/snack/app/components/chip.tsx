/* eslint-disable react-native/no-inline-styles */
import { Avatar, Chip, Container, Typography } from 'anu/lib';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const ChipScreen = () => {
  return (
    <ScrollView style={{ width: '100%', padding: 10 }}>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Assist Chips</Typography.Title>
      <Container flexDirection='row' style={{ paddingHorizontal: 10 }}>
        <Chip type='assist' value='Assist' style={{ margin: 2 }} />
        <Chip type='assist' value='Assist' elevated style={{ margin: 2 }} />
        <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' style={{ margin: 2 }} />
        <Chip
          leadingIcon={<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='small' variant='circle' />}
          elevated
          type='assist'
          value='Assist'
          style={{ margin: 2 }}
        />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Filter Chips</Typography.Title>

      <Container flexDirection='row' style={{ paddingHorizontal: 10 }}>
        <Chip type='filter' value='Filter' style={{ margin: 2 }} />
        <Chip type='filter' value='Filter' elevated style={{ margin: 2 }} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' style={{ margin: 2 }} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated style={{ margin: 2 }} />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Filter Chips - selected</Typography.Title>

      <Container flexDirection='row' style={{ paddingHorizontal: 10 }}>
        <Chip type='filter' value='Filter' selected style={{ margin: 2 }} />
        <Chip type='filter' value='Filter' selected elevated style={{ margin: 2 }} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected style={{ margin: 2 }} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          type='filter'
          value='Filter'
          selected
          elevated
          style={{ margin: 2 }}
        />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Input Chips</Typography.Title>

      <Container flexDirection='row' style={{ paddingHorizontal: 10 }}>
        <Chip type='input' value='Input' style={{ margin: 2 }} />

        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          trailingIcon={{ name: 'close' }}
          type='input'
          value='Input'
          style={{ margin: 2 }}
        />
      </Container>
      <Typography.Title style={{ marginBottom: 5, marginTop: 10 }}>Suggestion Chips</Typography.Title>

      <Container flexDirection='row' style={{ paddingHorizontal: 10 }}>
        <Chip type='suggestion' value='Suggestion' style={{ margin: 2 }} />
        <Chip type='suggestion' value='Suggestion' elevated style={{ margin: 2 }} />
      </Container>
    </ScrollView>
  );
};

export default ChipScreen;

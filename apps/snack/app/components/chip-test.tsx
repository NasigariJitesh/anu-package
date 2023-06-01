/* eslint-disable react-native/no-inline-styles */
import { Avatar, Chip, Container } from 'anu/lib';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ChipScreen = () => {
  const styles = getStyles();
  return (
    <ScrollView>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='assist' value='Assist' style={styles.style} />
        <Chip type='assist' value='Assist' elevated style={styles.style} />
        <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' style={styles.style} />
        <Chip
          leadingIcon={<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='small' variant='circle' />}
          elevated
          type='assist'
          value='Assist'
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='assist' value='Assist' disabled style={styles.style} />
        <Chip type='assist' value='Assist' elevated disabled style={styles.style} />
        <Chip leadingIcon={{ name: 'person' }} type='assist' value='Assist' disabled style={styles.style} />
        <Chip
          leadingIcon={<Avatar source={{ uri: 'https://i.pravatar.cc/' }} size='small' variant='circle' />}
          elevated
          type='assist'
          value='Assist'
          style={styles.style}
          disabled
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='filter' value='Filter' style={styles.style} />
        <Chip type='filter' value='Filter' elevated style={styles.style} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' style={styles.style} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated style={styles.style} />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='filter' value='Filter' disabled style={styles.style} />
        <Chip type='filter' value='Filter' elevated disabled style={styles.style} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' disabled style={styles.style} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          type='filter'
          value='Filter'
          elevated
          disabled
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='filter' value='Filter' selected style={styles.style} />
        <Chip type='filter' value='Filter' selected elevated style={styles.style} />
        <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected style={styles.style} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          type='filter'
          value='Filter'
          selected
          elevated
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='filter' value='Filter' selected disabled style={styles.style} />
        <Chip type='filter' value='Filter' selected elevated disabled style={styles.style} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          type='filter'
          value='Filter'
          selected
          disabled
          style={styles.style}
        />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          type='filter'
          value='Filter'
          selected
          elevated
          disabled
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='input' value='Input' style={styles.style} />
        <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' style={styles.style} />
        <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' style={styles.style} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          trailingIcon={{ name: 'close' }}
          type='input'
          value='Input'
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='input' value='Input' disabled style={styles.style} />
        <Chip leadingIcon={{ name: 'add' }} type='input' value='Input' disabled style={styles.style} />
        <Chip trailingIcon={{ name: 'close' }} type='input' value='Input' disabled style={styles.style} />
        <Chip
          leadingIcon={{ name: 'filter-alt' }}
          trailingIcon={{ name: 'close' }}
          type='input'
          value='Input'
          disabled
          style={styles.style}
        />
      </Container>
      <Container flexDirection='row' style={{ padding: 10 }}>
        <Chip type='suggestion' value='Suggestion' style={styles.style} />
        <Chip type='suggestion' value='Suggestion' elevated style={styles.style} />

        <Chip type='suggestion' value='Suggestion' disabled style={styles.style} />
        <Chip type='suggestion' value='Suggestion' elevated disabled style={styles.style} />
      </Container>
    </ScrollView>
  );
};

export default ChipScreen;

const getStyles = () => {
  const styles = StyleSheet.create({
    style: {
      margin: 2,
    },
  });
  return styles;
};

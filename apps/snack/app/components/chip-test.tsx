/* eslint-disable react-native/no-inline-styles */
import { Avatar, Chip } from 'anu/lib';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ChipScreen = () => {
  const styles = getStyles();
  return (
    <ScrollView>
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
      <Chip type='filter' value='Filter' style={styles.style} />
      <Chip type='filter' value='Filter' elevated style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated style={styles.style} />

      <Chip type='filter' value='Filter' disabled style={styles.style} />
      <Chip type='filter' value='Filter' elevated disabled style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' disabled style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' elevated disabled style={styles.style} />
      <Chip type='filter' value='Filter' selected style={styles.style} />
      <Chip type='filter' value='Filter' selected elevated style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected elevated style={styles.style} />

      <Chip type='filter' value='Filter' selected disabled style={styles.style} />
      <Chip type='filter' value='Filter' selected elevated disabled style={styles.style} />
      <Chip leadingIcon={{ name: 'filter-alt' }} type='filter' value='Filter' selected disabled style={styles.style} />
      <Chip
        leadingIcon={{ name: 'filter-alt' }}
        type='filter'
        value='Filter'
        selected
        elevated
        disabled
        style={styles.style}
      />
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
      <Chip type='suggestion' value='Suggestion' style={styles.style} />
      <Chip type='suggestion' value='Suggestion' elevated style={styles.style} />

      <Chip type='suggestion' value='Suggestion' disabled style={styles.style} />
      <Chip type='suggestion' value='Suggestion' elevated disabled style={styles.style} />
    </ScrollView>
  );
};

export default ChipScreen;

const getStyles = () => {
  const styles = StyleSheet.create({
    style: {
      margin: 15,
      width: 120,
    },
  });
  return styles;
};

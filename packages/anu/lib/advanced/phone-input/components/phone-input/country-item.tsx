/* eslint-disable react-native/no-inline-styles */
import { useTheme } from 'anu/config';
import { Container, Image, Typography } from 'anu/lib';
import { Options } from 'anu/lib/composites';
import { useState } from 'react';
import { Platform, Pressable } from 'react-native';

import { CountryCodeObject } from '../../types';
import { getItemStyles } from '../../utils';

const CountryItem = ({ item, setObject }: { item: Options; setObject: (object: CountryCodeObject) => void }) => {
  const [error, setError] = useState(false);

  const object = item.value as CountryCodeObject;

  const theme = useTheme();

  const { containerStyle, countryCodeStyle, countryNameStyle, emojiStyle, flagStyle } = getItemStyles(theme);

  return (
    <Pressable
      style={{ flexDirection: 'row', width: '100%' }}
      onPress={() => {
        setObject(object);
      }}
    >
      <Container disableGutters flexDirection='row' align='center' style={containerStyle}>
        {!error && (Platform.OS === 'web' || Platform.OS === 'windows') ? (
          <Image
            alt={object.alt}
            source={{ uri: object.flag }}
            onError={() => setError(true)}
            onPartialLoad={() => setError(true)}
            onLoad={() => setError(false)}
            style={flagStyle}
          />
        ) : (
          <Typography.Body style={emojiStyle}>{object.emoji}</Typography.Body>
        )}
        <Typography.Body style={countryNameStyle} numberOfLines={2} ellipsizeMode='tail'>
          {object.name}
        </Typography.Body>
        <Typography.Body style={countryCodeStyle}>{`(${object.countryCode})`}</Typography.Body>
      </Container>
    </Pressable>
  );
};

export default CountryItem;

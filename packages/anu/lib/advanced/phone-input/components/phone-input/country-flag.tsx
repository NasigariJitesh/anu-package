import { useTheme } from 'anu/config';
import { Icon, Image, Typography } from 'anu/lib/primitives';
import { memo, useState } from 'react';
import { Platform } from 'react-native';

import { CountryCodeObject } from '../../types';
import { getDefaultStyles } from '../../utils';

const CountryFlag = ({ currentCountry, disabled }: { currentCountry?: CountryCodeObject; disabled?: boolean }) => {
  const [flagLoadingError, setFlagLoadingError] = useState(false);

  const { defaultSelectedEmojiStyle, defaultSelectedFlagStyle } = getDefaultStyles();
  const theme = useTheme();

  const iconStyle = { color: disabled ? 'inherit' : theme.colors.$onSurfaceVariant };

  if (currentCountry === undefined) return <Icon name='language' size={25} style={iconStyle} />;

  return !flagLoadingError && (Platform.OS === 'web' || Platform.OS === 'windows') ? (
    <Image
      alt={currentCountry.alt}
      source={{ uri: currentCountry.flag }}
      onError={() => setFlagLoadingError(true)}
      onPartialLoad={() => setFlagLoadingError(true)}
      onLoad={() => setFlagLoadingError(false)}
      style={defaultSelectedFlagStyle}
    />
  ) : (
    <Typography.Body style={defaultSelectedEmojiStyle}>{currentCountry.emoji}</Typography.Body>
  );
};

export default memo(CountryFlag);

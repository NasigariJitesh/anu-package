import { useTheme } from 'anu/config';
import { Icon, Typography } from 'anu/lib/primitives';
import { memo, useState } from 'react';
import { Platform } from 'react-native';

import { getColorInRGBA } from '../../../../../common/utils';
import { CountryCodeObject } from '../../types';
import { getDefaultStyles } from '../../utils';

const CountryFlag = ({
  value,
  currentCountry,
  disabled,
}: {
  value: string;
  currentCountry?: CountryCodeObject;
  disabled?: boolean;
}) => {
  const [flagLoadingError, setFlagLoadingError] = useState(false);

  const { defaultSelectedEmojiStyle, defaultSelectedFlagStyle } = getDefaultStyles();
  const theme = useTheme();

  const iconStyle = { color: disabled ? getColorInRGBA(theme.colors.$onSurface, 38) : theme.colors.$onSurfaceVariant };

  if (currentCountry === undefined || !value.includes(currentCountry.countryCode))
    return <Icon name='language' size={25} style={iconStyle} />;

  return !flagLoadingError && (Platform.OS === 'web' || Platform.OS === 'windows') ? (
    <img
      src={currentCountry?.flag}
      alt={currentCountry?.alt}
      style={defaultSelectedFlagStyle}
      onError={() => setFlagLoadingError(true)}
      onLoad={() => setFlagLoadingError(false)}
    />
  ) : (
    <Typography.Body style={defaultSelectedEmojiStyle}>{currentCountry.emoji}</Typography.Body>
  );
};

export default memo(CountryFlag);

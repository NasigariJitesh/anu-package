import { generateHoverStyles, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple, Typography } from 'anu/lib';
import { useSx } from 'dripsy';
import React from 'react';
import { PressableStateCallbackType } from 'react-native';

import { HeaderItemProps } from '../../types';
import { getCustomStyles, getHeaderItemStyles } from '../../utils';

const ActiveIndicator = (props: HeaderItemProps) => {
  const theme = useTheme();

  const styles = getHeaderItemStyles(theme, props);

  return props.type === 'secondary' ? (
    <Container disableGutters style={styles.secondaryIndicatorStyle} />
  ) : (
    <Container disableGutters style={styles.primaryIndicatorContainerStyle}>
      <Container disableGutters style={styles.primaryIndicatorStyle} />
    </Container>
  );
};

const TabHeaderItem = (props: HeaderItemProps) => {
  const theme = useTheme();

  const styles = getHeaderItemStyles(theme, props);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, styles.RippleStyle, useSx);
  };

  return (
    <TouchableRipple onPress={() => props.onPress(props.index)} style={generateStyles}>
      <Container disableGutters style={getCombinedStylesForView(styles.containerStyle, getCustomStyles(props))}>
        <Container disableGutters style={styles.innerContainerStyle}>
          {props.icon ? (
            'name' in props.icon ? (
              <Icon
                name={props.icon.name}
                size={18}
                style={[styles.iconStyle, props.isActive ? styles.activeStyle : {}]}
                {...props.icon.props}
              />
            ) : (
              props.icon
            )
          ) : null}
          <Typography.Body style={[styles.labelStyle, props.isActive ? styles.activeStyle : {}]}>
            {props.name}
          </Typography.Body>
        </Container>

        {props.isActive ? <ActiveIndicator {...props} /> : null}
      </Container>
    </TouchableRipple>
  );
};

export default TabHeaderItem;

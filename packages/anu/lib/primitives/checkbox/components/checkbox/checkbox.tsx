/* eslint-disable react-hooks/exhaustive-deps */
import { generateHoverStyles } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, TouchableRipple, Typography } from 'anu/lib/primitives';
import { useSx } from 'dripsy';
import { useState } from 'react';
import { PressableStateCallbackType } from 'react-native';

import { CheckboxProps } from '../../types';
import { getCheckboxStyles, getLabelAlignment } from '../../utils';
import { defaultProps } from './default';

/**
 * Check box component
 *
 *  @param props - the properties of the check box component
 */
export const Checkbox = (props: CheckboxProps) => {
  const [isSelected, setIsSelected] = useState(props.selected ?? false);
  const finalProps = { ...defaultProps, ...props };

  const theme = useTheme();

  const { checkboxStyles, layerStyles, selectedIconStyles } = getCheckboxStyles(props, isSelected, theme);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, layerStyles, useSx);
  };

  const onPressHandler = () => {
    if (finalProps.disabled) return;

    if (finalProps.onPress) finalProps.onPress(finalProps.id);

    setIsSelected((previousState) => !previousState);
  };

  const getIcon = () => {
    const { size, ...otherIconStyles } = selectedIconStyles;

    const name = finalProps.indeterminate ? 'horizontal-rule' : 'check';

    return (
      <Icon size={finalProps.iconSize ?? size ?? 18} name={name} style={[otherIconStyles, finalProps.iconStyle]} />
    );
  };

  const RenderSelected = () => {
    return isSelected || finalProps.indeterminate ? getIcon() : null;
  };

  return (
    <Container disableGutters {...getLabelAlignment(finalProps.labelPlacement)}>
      <TouchableRipple disabled={finalProps.disabled} onPress={onPressHandler} style={generateStyles}>
        {/* 
        // @ts-expect-error REASON: we get ts error but react native ignores hover related styles */}
        <Container disableGutters dataSet={finalProps.dataSets?.checkbox} style={checkboxStyles}>
          <RenderSelected />
        </Container>
      </TouchableRipple>

      {finalProps.label ? (
        <Typography.Label htmlFor={finalProps.id} dataSet={finalProps.dataSets?.label} style={finalProps.labelStyle}>
          {props.label}
        </Typography.Label>
      ) : null}
    </Container>
  );
};

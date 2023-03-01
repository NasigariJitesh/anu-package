/* eslint-disable react-hooks/exhaustive-deps */
import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Container, Icon, Typography } from 'lib/primitives';
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

  const { checkboxStyles, layerStyles, selectedIconStyles } = getCheckboxStyles(props, isSelected);

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
    <Container {...getLabelAlignment(finalProps.labelPlacement)}>
      <Pressable onPress={onPressHandler} style={generateStyles}>
        {/* 
        // @ts-expect-error REASON: we get ts error but react native ignores hover related styles */}
        <Container disableGutters style={checkboxStyles}>
          <RenderSelected />
        </Container>
      </Pressable>

      {finalProps.label ? (
        <Typography.Label for={finalProps.id} style={finalProps.labelStyle}>
          {props.label}
        </Typography.Label>
      ) : null}
    </Container>
  );
};
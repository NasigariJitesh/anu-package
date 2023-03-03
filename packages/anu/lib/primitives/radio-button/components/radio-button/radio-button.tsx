/* eslint-disable react-hooks/exhaustive-deps */
import { generateHoverStyles } from 'common/utils';
import { Pressable, useSx } from 'dripsy';
import { Container, Typography } from 'lib/primitives';
import { useEffect, useState } from 'react';
import { PressableStateCallbackType } from 'react-native';

import { RadioButtonProps } from '../../types';
import { getLabelAlignment, getRadioButtonStyles, isSelected } from '../../utils';
import { defaultProps } from './default';

/**
 * Radio button component
 *
 *  @param props - the properties of the radio button component
 */
export const Radio = (props: RadioButtonProps) => {
  const [isOn, setIsOn] = useState(isSelected(props));

  const finalProps = { ...defaultProps, ...props };

  useEffect(() => {
    setIsOn(isSelected(props));
  }, [props.selected]);

  const { radioStyles, pressableStyles, selectedIconStyles } = getRadioButtonStyles(finalProps, isOn);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, pressableStyles, useSx);
  };

  const onPressHandler = () => {
    if (finalProps.disabled) return;
    if (finalProps.onPress) finalProps.onPress(finalProps.id);

    if (!finalProps.selected) setIsOn((previousState) => !previousState);
  };

  const RenderSelected = () => {
    // @ts-expect-error REASON: we get ts error but react native ignores hover related styles
    return isOn ? <Container disableGutters style={selectedIconStyles} /> : null;
  };

  return (
    <Container disableGutters {...getLabelAlignment(finalProps.labelPlacement)}>
      <Pressable onPress={onPressHandler} style={generateStyles}>
        {/* 
        // @ts-expect-error REASON: we get ts error but react native ignores hover related styles */}
        <Container disableGutters style={radioStyles}>
          <RenderSelected />
        </Container>
      </Pressable>

      {finalProps.label ? (
        <Typography.Label htmlFor={finalProps.id} style={finalProps.labelStyle}>
          {finalProps.label}
        </Typography.Label>
      ) : null}
    </Container>
  );
};

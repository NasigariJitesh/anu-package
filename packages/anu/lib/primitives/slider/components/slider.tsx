/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import { generateHoverStyles, getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Icon, Typography } from 'anu/lib';
import { Pressable, useSx } from 'dripsy';
import { useEffect, useState } from 'react';
import { PressableStateCallbackType, ViewStyle } from 'react-native';

import { SliderProps } from '../types';
import { getSliderStyle, getTrackMarkContainerStyles, getTrackMarks } from '../utils';
import { defaultProps } from './default';

/**
 * Slider Component
 *
 * @param {SliderProps}props - the props for the slider component
 */
const Slider = (props: SliderProps) => {
  const finalProps = { ...defaultProps, ...props };

  const [value, setValue] = useState(finalProps.value);
  const [isMaximumValueSelected, setIsMaximumValueSelected] = useState(false);
  const [showMinLabel, setShowMinLabel] = useState(false);
  // const [showMaxLabel, setShowMaxLabel] = useState(false);

  useEffect(() => {
    if ((Array.isArray(value) && value[1] === finalProps.maximumValue) || value === finalProps.maximumValue)
      setIsMaximumValueSelected(true);
    else setIsMaximumValueSelected(false);
  }, [value, finalProps.maximumValue]);

  const theme = useTheme();

  const {
    activeTrackStyle,
    inactiveTrackStyle,
    stateLayerStyle,
    thumbStyle,
    labelContainerStyle,
    labelStyle,
    containerStyle,
    activeTrackMarksStyle,
    inactiveTrackMarksStyle,
    sliderContainerStyle,
  } = getSliderStyle(finalProps as never, theme, isMaximumValueSelected);

  const finalTrackMarks = getTrackMarks(finalProps as never);

  const generateStyles = (state: PressableStateCallbackType) => {
    return generateHoverStyles(state, stateLayerStyle, useSx);
  };

  /**
   * To handle the change of value in slider
   *
   * @param sliderValue - the value of the slider
   */
  const handleOnValueChange = (sliderValue: number[]) => {
    if (Array.isArray(finalProps.value)) {
      setValue(sliderValue);
      if (finalProps.onValueChange) finalProps.onValueChange(sliderValue as never);
    } else {
      setValue(sliderValue[0]!);
      if (finalProps.onValueChange) finalProps.onValueChange(sliderValue[0] as never);
    }
  };

  /**
   * To handle the start of sliding in slider
   *
   * @param sliderValue - the value of the slider
   */
  const handleOnSlidingStart = (sliderValue: number[]) => {
    if (Array.isArray(finalProps.value)) {
      if (finalProps.onSlidingStart) finalProps.onSlidingStart(sliderValue as never);
    } else {
      setShowMinLabel(true);

      if (finalProps.onSlidingStart) finalProps.onSlidingStart(sliderValue[0] as never);
    }
  };

  /**
   * To handle the completion of value in slider
   *
   * @param sliderValue - the value of the slider
   */
  const handleOnSlidingComplete = (sliderValue: number[]) => {
    if (Array.isArray(finalProps.value)) {
      if (finalProps.onSlidingComplete) finalProps.onSlidingComplete(sliderValue as never);
    } else {
      setShowMinLabel(false);
      if (finalProps.onSlidingComplete) finalProps.onSlidingComplete(sliderValue[0] as never);
    }
  };

  /**
   * To render the thumb of the slider
   *
   */
  const renderThumb = () => {
    return (
      <Container
        disableGutters
        sx={{
          height: finalProps.thumbSize ?? 20,
          width: finalProps.thumbSize ?? 20,
          overflow: 'visible',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable
          style={(state) => {
            // if (index === 0) setShowMinLabel(state.focused || state.hovered || state.pressed);
            // if (index === 1) setShowMaxLabel(state.focused || state.hovered || state.pressed);
            return generateStyles(state);
          }}
        >
          <Container disableGutters style={thumbStyle} />
        </Pressable>
      </Container>
    );
  };

  /**
   * To render the value label for the slider
   *
   * @param currentValue - the current value of the respective thumb of slider
   * @param index
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderLabel = (currentValue: number, index: number) => {
    if (!(finalProps.hideValueIndicator ?? false) && showMinLabel && !(props.vertical ?? false) && !props.disabled) {
      return (
        <Container disableGutters style={labelContainerStyle}>
          <Typography.Body style={labelStyle} numberOfLines={1}>
            {finalProps.formatValueForValueIndicator
              ? finalProps.formatValueForValueIndicator(currentValue)
              : currentValue.toFixed(1).replace(/[,.]0$/, '')}
          </Typography.Body>
        </Container>
      );
    }
  };

  /**
   * To render the track mark(point) on the slider
   *
   * @param index - the index of the current point or track mark
   */
  const renderTrackMarks = (index: number) => {
    if (finalTrackMarks === undefined) return;

    let active = false;

    if (
      Array.isArray(value) &&
      finalTrackMarks &&
      value &&
      finalTrackMarks[index]! >= value[0]! &&
      finalTrackMarks[index]! <= value[1]!
    )
      active = true;
    else if (typeof value === 'number' && finalTrackMarks[index]! <= value!) active = true;

    const trackMarksStyle = active ? activeTrackMarksStyle : inactiveTrackMarksStyle;
    //@ts-expect-error beacuse finalprops will be of type Sliderprops
    const { height, width } = getTrackMarkContainerStyles(finalProps, active);

    let style: ViewStyle = { height: height, width: width };

    let align: 'center' | 'flex-start' | 'flex-end' = 'center';

    if (index === 0) {
      align = 'flex-start';
      style = { ...trackMarksStyle, paddingLeft: 8 };
    }

    if (index === finalTrackMarks.length - 1) {
      align = 'flex-end';

      style = {
        ...trackMarksStyle,
        paddingLeft: 8,
        width: finalProps.thumbSize ?? thumbStyle.width,
      };
    }

    return finalProps.trackMarks?.includes(finalTrackMarks[index]!) && finalProps.renderTrackMarkComponent ? (
      <Container disableGutters align={align} sx={{ height: height, width: width }}>
        <Container disableGutters align={align} style={style}>
          <Icon name='circle' key={index} size={trackMarksStyle.size} style={trackMarksStyle} />
        </Container>
        {finalProps.renderTrackMarkComponent(finalTrackMarks[index]!)}
      </Container>
    ) : (
      <Container disableGutters align={align} style={style}>
        <Icon name='circle' key={index} size={trackMarksStyle.size} style={trackMarksStyle} />
      </Container>
    );
  };

  return (
    <Container
      disableGutters
      testID={finalProps.testId}
      style={getCombinedStylesForView(containerStyle, finalProps.containerStyle)}
    >
      <RNSlider
        {...finalProps}
        value={value}
        onValueChange={handleOnValueChange}
        onSlidingStart={handleOnSlidingStart}
        onSlidingComplete={handleOnSlidingComplete}
        minimumValue={finalProps.minimumValue}
        maximumValue={finalProps.maximumValue}
        step={finalProps.step}
        containerStyle={sliderContainerStyle}
        minimumTrackStyle={getCombinedStylesForView(activeTrackStyle, finalProps.activeTrackStyle) as ViewStyle}
        maximumTrackStyle={getCombinedStylesForView(inactiveTrackStyle, finalProps.inactiveTrackStyle) as ViewStyle}
        trackMarks={finalTrackMarks}
        renderTrackMarkComponent={(index) => renderTrackMarks(index)}
        trackClickable={finalProps.trackClickable}
        renderAboveThumbComponent={(index, currentValue) => renderLabel(currentValue, index)}
        renderThumbComponent={() => renderThumb()}
      />
    </Container>
  );
};

export default Slider;

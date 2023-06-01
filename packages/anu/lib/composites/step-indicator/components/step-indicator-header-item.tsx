import { Container, Divider, Icon, Typography } from 'anu/lib/primitives';
import { DripsyFinalTheme } from 'dripsy';
import React from 'react';
import { Pressable } from 'react-native';

import { getCombinedStylesForText } from '../../../../common/utils';
import { useTheme } from '../../../../config';
import { useStepIndicatorContext } from '../context';
import { StepHeaderItemProps, StepProps } from '../types';
import { getStepIndicatorHeaderItemStyles, getStepNumberStyles } from '../utils';
import { defaultStepProps } from './default';

const getIcon = (props: StepProps, theme: DripsyFinalTheme, index: number, activeStep: number) => {
  const styles = getStepNumberStyles(props, theme, index + 1 === activeStep);

  if (props.error)
    return (
      <Container disableGutters style={styles.container}>
        <Icon size={16} style={styles.icon} name='priority-high' />
      </Container>
    );
  else if (props.completed)
    return (
      <Container disableGutters style={styles.container}>
        <Icon size={16} style={styles.icon} name={props.editable ? 'edit' : 'check'} />
      </Container>
    );
  else
    return (
      <Container disableGutters style={styles.container}>
        <Typography.Body style={styles.text}>{index + 1}</Typography.Body>
      </Container>
    );
};

const StepIndicatorHeaderItem = (props: StepHeaderItemProps) => {
  const theme = useTheme();

  const finalItemProps = { ...defaultStepProps, ...props.item.props };

  const { activeStep, totalSteps } = useStepIndicatorContext();

  const styles = getStepIndicatorHeaderItemStyles(theme, props, props.index + 1 === activeStep);

  return (
    <Container
      disableGutters
      style={{
        ...styles.container,
        ...(props.vertical && props.index + 1 === activeStep ? { flex: totalSteps - 1 > 1 ? totalSteps - 1 : 2 } : {}),
        ...(!props.vertical && props.index === totalSteps - 1 ? { flex: 1 } : {}),
      }}
    >
      <Pressable
        style={styles.stepDetailsContainer}
        disabled={!props.navigateOnPress || finalItemProps.notApplicable}
        onPress={(event) => props.onPressHandler(event, props.index + 1)}
      >
        {finalItemProps.icon ?? getIcon(finalItemProps, theme, props.index, activeStep)}
        <Container disableGutters style={styles.stepNameContainer}>
          <Typography.Body
            ellipsizeMode='tail'
            style={getCombinedStylesForText(styles.stepName, finalItemProps.nameStyle)}
          >
            {finalItemProps.name ?? 'Step ' + (props.index + 1)}
          </Typography.Body>
          {finalItemProps.optional ? (
            typeof finalItemProps.optionalLabel === 'string' ? (
              <Typography.Body style={styles.optional}>{finalItemProps.optionalLabel}</Typography.Body>
            ) : (
              finalItemProps.optionalLabel ?? null
            )
          ) : null}
        </Container>
      </Pressable>
      <Container disableGutters style={styles.stepContainer}>
        <Container disableGutters style={styles.dividerContainer}>
          {props.index === totalSteps - 1
            ? null
            : props.divider ?? (
                <Divider
                  {...(props.vertical
                    ? { orientation: 'vertical', variant: 'full-height', style: { height: '100%', width: 24 } }
                    : { orientation: 'horizontal', variant: 'full-width' })}
                />
              )}
        </Container>
        {props.vertical && props.index + 1 === activeStep ? props.item : null}
      </Container>
    </Container>
  );
};

export default StepIndicatorHeaderItem;

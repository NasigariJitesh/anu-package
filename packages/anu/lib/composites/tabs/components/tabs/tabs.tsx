import { getCombinedStylesForView } from 'anu/common/utils';
import { useTheme } from 'anu/config';
import { Container, Divider } from 'anu/lib';
import React, { useState } from 'react';

import { TabsProps } from '../../types';
import { getTabsStyles } from '../../utils';
import { defaultProps } from './default';
import Tab from './tab';
import TabHeader from './tab-header';

const Tabs = (props: TabsProps) => {
  const finalProps = { ...defaultProps, ...props };

  const {
    active: propsActive,
    onChange,
    children,
    tabHeaderStyle,
    activeTabHeaderStyle,
    type,
    ...containerProps
  } = finalProps;

  const [active, setActive] = useState(propsActive ?? 0);

  const theme = useTheme();

  const styles = getTabsStyles();

  const updateActive = (activeTab: number) => {
    setActive(activeTab);
    if (onChange) onChange(activeTab);
  };

  return (
    <Container
      disableGutters
      {...containerProps}
      style={getCombinedStylesForView(styles.container, containerProps.style)}
    >
      <TabHeader
        tabs={children}
        updateActive={updateActive}
        activeTabHeaderStyle={activeTabHeaderStyle}
        tabHeaderStyle={tabHeaderStyle}
        active={active}
        type={type}
      />
      <Divider thickness={1} color={theme.colors.$surfaceVariant} variant='full-width' style={styles.divider} />

      <Tab {...children[active]!.props}>{children[active]?.props.children}</Tab>
    </Container>
  );
};

export default Tabs;

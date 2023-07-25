import React from 'react';
import { ScrollView } from 'react-native';

import { TabHeaderProps } from '../../types';
import { getTabHeaderStyles } from '../../utils';
import TabHeaderItem from './tab-header-item';

const TabHeader = (props: TabHeaderProps) => {
  const hasName = props.tabs.some((tab) => tab.props.name !== undefined);
  const hasIcon = props.tabs.some((tab) => tab.props.icon !== undefined);

  const styles = getTabHeaderStyles(props, hasName, hasIcon);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {props.tabs.map((tab, index) => (
        <TabHeaderItem
          {...tab.props}
          key={index}
          index={index}
          onPress={props.updateActive}
          isActive={props.active === index}
          type={props.type}
          activeTabHeaderStyle={props.activeTabHeaderStyle}
          tabHeaderStyle={props.headerStyle}
        />
      ))}
    </ScrollView>
  );
};

export default TabHeader;

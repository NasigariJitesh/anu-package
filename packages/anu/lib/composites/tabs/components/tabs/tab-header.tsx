import React from 'react';
import { ScrollView } from 'react-native';

import { TabHeaderProps } from '../../types';
import { getTabHeaderStyles } from '../../utils';
import TabHeaderItem from './tab-header-item';

const TabHeader = (props: TabHeaderProps) => {
  const styles = getTabHeaderStyles();
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
          tabHeaderStyle={props.tabHeaderStyle}
        />
      ))}
    </ScrollView>
  );
};

export default TabHeader;

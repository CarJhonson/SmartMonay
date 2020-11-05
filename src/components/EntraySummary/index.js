import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryChart from './EntraySummaryChart';
import EntrySummaryList from './EntraySummaryList';

const EntrySummary = () => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default EntrySummary;

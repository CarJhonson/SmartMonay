import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntraySummary';
import EntrayList from '../../components/EntrayList';
const Main = () => {
  return (
    <View styles={styles.container}>
      <BalancePanel />
      <EntrySummary></EntrySummary>
      <EntrayList></EntrayList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Main;

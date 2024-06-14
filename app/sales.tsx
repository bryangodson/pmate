import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SalesProps {}

const Sales = (props: SalesProps) => {
  return (
    <View style={styles.container}>
      <Text>Sales</Text>
    </View>
  );
};

export default Sales;

const styles = StyleSheet.create({
  container: {}
});

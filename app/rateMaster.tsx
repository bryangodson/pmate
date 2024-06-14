import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RateMasterProps {}

const RateMaster = (props: RateMasterProps) => {
  return (
    <View style={styles.container}>
      <Text>RateMaster</Text>
    </View>
  );
};

export default RateMaster;

const styles = StyleSheet.create({
  container: {}
});

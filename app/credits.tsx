import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CreditsProps {}

const Credits = (props: CreditsProps) => {
  return (
    <View style={styles.container}>
      <Text>Credits</Text>
    </View>
  );
};

export default Credits;

const styles = StyleSheet.create({
  container: {}
});

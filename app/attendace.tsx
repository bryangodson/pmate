import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AttendanceProps {}

const Attendance = (props: AttendanceProps) => {
  return (
    <View style={styles.container}>
      <Text>Attendance</Text>
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {}
});

 import * as React from 'react';
 import { Text, View, StyleSheet } from 'react-native';
 
 interface ExpensesProps {}
 
 const Expenses = (props: ExpensesProps) => {
   return (
     <View style={styles.container}>
       <Text>Expenses</Text>
     </View>
   );
 };
 
 export default Expenses;
 
 const styles = StyleSheet.create({
   container: {}
 });
 
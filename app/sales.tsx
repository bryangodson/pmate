import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SaleComponent from "@/components/sale";
const Sales = () => {
  const [DATA, setDATA] = useState([
    {
      id: "skjahsj2kdsjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjk5dsjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkd6sjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkdsdbjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkd£sjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkdsj67hkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkddbsjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkdiysjhkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkdsj80hkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
    {
      id: "skjahsjkdsjiythkjs",
      amount: 372323.0,
      rate: 345.0,
      _n1_ms: "345343",
      _n2_ms: "34534545",
      testing: 578555,
      sale_litre: 54,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <SaleComponent
            amount={item.amount}
            rate={item.rate}
            _n1_ms={item._n1_ms}
            _n2_ms={item._n2_ms}
            testing={item.testing}
            sale_litre={item.sale_litre}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Sales;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
});

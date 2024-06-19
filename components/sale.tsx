import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useThemeColors from "@/hooks/useThemeColor";
import SeparatorHorizontal from "@/components/separator_horizal";
import { Octicons } from "@expo/vector-icons";
interface SaleComponentInterface {
  id?: string;
  amount: number;
  rate: number;
  _n1_ms: string;
  _n2_ms: string;
  testing: number;
  sale_litre: number;
}
const SaleComponent = ({
  id,
  amount,
  rate,
  _n1_ms,
  _n2_ms,
  testing,
  sale_litre,
}: SaleComponentInterface) => {
  const colors = useThemeColors();

  return (
    <View
      style={[
        styles.sales,
        {
          borderColor: colors.tabIconDefault,
        },
      ]}
    >
      {/* top of the container */}
      <View
        style={{
          marginBottom: 5,
        }}
      >
        <View style={styles.top}>
          <View style={styles.top}>
            <Text
              style={[
                styles.texts,
                {
                  color: colors.text,
                  fontSize: 16,
                  fontFamily: "regular",
                },
              ]}
            >
              Amount:
            </Text>
            <Text
              style={[
                styles.texts,
                {
                  color: colors.text,
                },
              ]}
            >
              {" "}
              ₹{amount}
            </Text>
          </View>
          <View style={styles.top}>
            <Text
              style={[
                styles.texts,
                {
                  color: colors.text,
                  fontSize: 16,
                  fontFamily: "regular",
                },
              ]}
            >
              Rate:
            </Text>
            <Text
              style={[
                styles.texts,
                {
                  color: colors.text,
                },
              ]}
            >
              {" "}
              ₹{rate}
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.texts,
            {
              color: colors.text,
            },
          ]}
        >
          Petrol Ms
        </Text>
      </View>
      <SeparatorHorizontal />
      {/* middle */}
      <View
        style={[
          styles.top,
          {
            marginTop: 5,
          },
        ]}
      >
        <Text
          style={[
            styles.texts,
            {
              color: colors.text,
            },
          ]}
        >
          N1 Ms Closing
        </Text>
        <Text
          style={[
            styles.texts,
            {
              color: colors.text,
            },
          ]}
        >
          N2 Ms Closing
        </Text>
      </View>
      {/* numbers */}
      <View style={styles.top}>
        <Text
          style={{
            color: colors.text,
            fontFamily: "regular",
            fontSize: 16,
            opacity: 0.8,
          }}
        >
          {_n1_ms}
        </Text>
        <Text
          style={{
            color: colors.text,
            fontFamily: "regular",
            fontSize: 16,
            opacity: 0.8,
          }}
        >
          {_n2_ms}
        </Text>
      </View>
      {/* testing */}
      <View style={styles.top}>
        <Text style={[styles.texts, styles.green]}>Testing: {testing}</Text>
        <Text style={[styles.texts, styles.green]}>Sale Ltr: {sale_litre}</Text>
      </View>
      {/* last  */}
      <View style={styles.top}>
        <Text
          style={{
            color: colors.text,
            fontFamily: "regular",
            fontSize: 16,
            opacity: 0.8,
          }}
        >
          Pump Cashier
        </Text>
        <Octicons
          name="pencil"
          size={18}
          style={{
            opacity: 0.6,
          }}
          color={colors.icon}
        />
      </View>
    </View>
  );
};

export default SaleComponent;

const styles = StyleSheet.create({
  sales: {
    width: "100%",
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 12,
    marginVertical: 12,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texts: {
    fontSize: 16,
    fontFamily: "medium",
    marginVertical: 10,
  },
  green: {
    color: "#8bc34a",
    fontFamily: "medium",
    fontSize: 16,
    marginVertical: 10,
  },
});

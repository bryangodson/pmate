import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import useThemeColors from "@/hooks/useThemeColor";
import { HelloWave } from "@/components/HelloWave";
import MainCardAmount from "./mainCardAmount";
import Separator from "./separator";
export default function ProfileHeader() {
  const colors = useThemeColors();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={styles.user}>
        <Image
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          style={styles.image}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}
            >
              Bryan Benson
            </Text>
            <HelloWave />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.greetings,
                {
                  color: colors.text,
                },
              ]}
            >
              +233 455 344 344
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.amounts}>
        <MainCardAmount
          label="Income"
          amount="30,344.00"
          dotColor="#8bc34a"
          hasIcon={true}
          icon="download"
        />
        <Separator />
        <MainCardAmount
          label="Expenses"
          amount="30,344.00"
          dotColor="#c1817c"
          hasIcon={true}
          icon="upload"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "space-between",
    padding: 18,
    borderRadius: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 52,
    width: 52,
    borderRadius: 25.5,
    marginRight: 8,
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "ft",
  },
  greetings: {
    fontSize: 10,
    fontFamily: "ft",
  },
  amounts: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
});

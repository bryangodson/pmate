import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";
import ProfileHeader from "@/components/profileHeader";
import useThemeColors from "@/hooks/useThemeColor";
import ProfileLink from "@/components/profileLink";
const { height } = Dimensions.get("window");

export default function Profile() {
  const colors = useThemeColors();
  const DATA = [
    {
      label: "Rate Master",
      icon: "beaker",
      link: "../rateMaster",
    },
    {
      label: "Sales",
      icon: "flame",
      link: "../sales",
    },
    {
      label: "Stocks",
      icon: "stack",
      link: "../stocks",
    },
    {
      label: "Expenses",
      icon: "arrow-switch",
      link: "../expenses",
    },
    {
      label: "Cash Flows",
      icon: "graph",
      link: "../cashFlows",
    },
    {
      label: "Banks",
      icon: "briefcase",
      link: "../banks",
    },
    {
      label: "Credits",
      icon: "credit-card",
      link: "../credits",
    },
    {
      label: "Reports",
      icon: "log",
      link: "../reports",
    },
    {
      label: "Attendance",
      icon: "calendar",
      link: "../attendance",
    },
    {
      label: "Assets",
      icon: "container",
      link: "../assets",
    },
  ];
  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View>
        <Text
          style={[
            styles.info,
            {
              color: colors.text,
            },
          ]}
        >
          Info
        </Text>
        <View
          style={[
            styles.scroll,
            {
              backgroundColor: colors.background,
            },
          ]}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <ProfileLink
                label={item.label}
                icon={item.icon}
                link={item.link}
              />
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: colors.text,
                  opacity: 0.05,
                }}
              ></View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          padding: 8,
          backgroundColor: colors.background,
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <ProfileLink
          label="Close Account"
          icon="person"
          link="../closeAccount"
        />
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.05,
          }}
        ></View>
        <ProfileLink
          label="Log Out"
          icon="sign-out"
          link="../signOut"
          isSignOut
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 30,
    paddingBottom: 0,
  },

  info: {
    fontSize: 18,
    fontFamily: "regular",
    marginVertical: 12,
    marginLeft: 10,
  },
  scroll: {
    padding: 10,
    borderRadius: 20,
    height: height * 0.38,
    paddingVertical: 0,
  },
});

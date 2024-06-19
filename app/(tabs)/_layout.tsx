import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import useThemeColors from "../../hooks/useThemeColor";
export default function TabLayout() {
  const colors = useThemeColors();
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarActiveBackgroundColor: colors.background,
        tabBarLabelStyle: {
          fontFamily: "bold",
          marginBottom: 5,
        },
        tabBarIcon: ({ focused }) => {
          let icon: any = "home" || "person";
          switch (route.name) {
            case "index":
              icon = "home";
              break;

            default:
              icon = "person";
              break;
          }
          return (
            <Octicons
              name={icon}
              size={focused ? 23 : 20}
              color={focused ? colors.tabIconSelected : colors.tabIconDefault}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

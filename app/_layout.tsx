import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colors = useColorScheme();

  const [loaded] = useFonts({
    regular: require("../assets/fonts/Montserrat-Light.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colors == "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: "regular",
          },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            title: "Tab",
          }}
        />
        <Stack.Screen
          name="attendance"
          options={{
            title: "Attendance",
          }}
        />
        <Stack.Screen
          name="credits"
          options={{
            title: "Credits",
          }}
        />
        <Stack.Screen
          name="expenses"
          options={{
            title: "Expenses",
          }}
        />
        <Stack.Screen
          name="rateMaster"
          options={{
            title: "Rate Master",
          }}
        />
        <Stack.Screen
          name="reports"
          options={{
            title: "Reports",
          }}
        />
        <Stack.Screen
          name="sales"
          options={{
            title: "Sales",
          }}
        />
        <Stack.Screen
          name="assets"
          options={{
            title: "Assets",
          }}
        />
        <Stack.Screen
          name="banks"
          options={{
            title: "Banks",
          }}
        />
        <Stack.Screen
          name="cashFlows"
          options={{
            title: "Cash Flows",
          }}
        />
        <Stack.Screen
          name="stocks"
          options={{
            title: "Stocks",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

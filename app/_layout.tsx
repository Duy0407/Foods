import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { StatusBar } from "expo-status-bar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    DancingScript: require("../assets/fonts/DancingScript-VariableFont_wght.ttf"),
    MPLUSRounded1cBlack: require("../assets/fonts/MPLUSRounded1c-Black.ttf"),
    MPLUSRounded1cBold: require("../assets/fonts/MPLUSRounded1c-Bold.ttf"),
    MPLUSRounded1cExtraBold: require("../assets/fonts/MPLUSRounded1c-ExtraBold.ttf"),
    MPLUSRounded1cLight: require("../assets/fonts/MPLUSRounded1c-Light.ttf"),
    MPLUSRounded1cMedium: require("../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    MPLUSRounded1cRegular: require("../assets/fonts/MPLUSRounded1c-Regular.ttf"),
    MPLUSRounded1cThin: require("../assets/fonts/MPLUSRounded1c-Thin.ttf"),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

interface IRouter {
  name: string;
  option?: any;
}
const Routers: IRouter[] = [{ name: "(tabs)" }, { name: "index" }, {name: 'login'}];

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style='light' animated hidden={false}/>
      <Stack>
        {Routers.map((router, index) => (
          <Stack.Screen key={index} name={router.name} options={{ headerShown: false }} />
        ))}
      </Stack>
    </ThemeProvider>
  );
}

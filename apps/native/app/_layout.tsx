import "@/global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as SystemUI from "expo-system-ui";
import { HeroUINativeProvider } from "heroui-native";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Uniwind } from "uniwind";

import { AppThemeProvider } from "@/contexts/app-theme-context";
import { LUXURY_COLORS } from "@/constants/luxury-theme";

SplashScreen.setOptions({
  duration: 450,
  fade: true,
});

function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="experience" options={{ animation: "fade" }} />
      <Stack.Screen name="location" options={{ animation: "fade" }} />
    </Stack>
  );
}

export default function Layout() {
  useEffect(() => {
    Uniwind.setTheme("dark");
    void SystemUI.setBackgroundColorAsync(LUXURY_COLORS.background);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: LUXURY_COLORS.background }}>
      <KeyboardProvider>
        <AppThemeProvider>
          <HeroUINativeProvider>
            <StackLayout />
          </HeroUINativeProvider>
        </AppThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

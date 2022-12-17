import { useCallback } from "react";

import AppWrapper from "./templates/AppWrapper"
import { Router } from "./routes"

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

export default () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide splash screen when load finishes
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AppWrapper onLayout={onLayoutRootView}>
      <Router />
    </AppWrapper>
  )
}

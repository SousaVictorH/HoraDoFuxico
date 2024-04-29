import React, { useCallback } from 'react'
import { LogBox } from 'react-native'

import 'react-native-gesture-handler'

import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import { Baskervville_400Regular } from '@expo-google-fonts/baskervville'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

import { Toast } from 'components/toast'

import { AppWrapper } from './templates/AppWrapper'
import { Router } from './routes'


LogBox.ignoreAllLogs()
SplashScreen.preventAutoHideAsync() // Keep the splash screen visible while we fetch resources

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_600SemiBold,
    Baskervville: Baskervville_400Regular,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync() // Hide splash screen when load finishes
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <AppWrapper onLayout={onLayoutRootView}>
          <Toast />
          <Router />
        </AppWrapper>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  )
}

export default App

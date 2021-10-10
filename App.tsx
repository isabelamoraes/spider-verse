import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
}
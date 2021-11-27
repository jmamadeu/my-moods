import 'react-native-gesture-handler';

import { Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';

import AppLoading from 'expo-app-loading';
import { BottomTabsRoutes } from './src/routes/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MoodProvider } from './src/contexts/moods';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MoodProvider>
        <NavigationContainer>
          <BottomTabsRoutes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </MoodProvider>
    </GestureHandlerRootView>
  );
}

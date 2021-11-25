import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MoodProvider } from './src/contexts/moods';
import { BottomTabsRoutes } from './src/routes/bottom-tabs';

export default function App() {
  return (
    <>
      <MoodProvider>
        <NavigationContainer>
          <BottomTabsRoutes />
          <StatusBar style="auto" />
        </NavigationContainer>
      </MoodProvider>
    </>
  );
}

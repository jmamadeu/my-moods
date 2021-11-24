import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTabsRoutes } from './src/routes/bottom-tabs';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabsRoutes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
}

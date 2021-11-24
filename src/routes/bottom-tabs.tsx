import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Analytics } from '../screens/analytics.screen';
import { History } from '../screens/history.screen';
import { Home } from '../screens/home.screen';

type BottomRoutes = {
  Home: undefined;
  History: undefined;
  Analytics: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomRoutes>();

export function BottomTabsRoutes() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
}

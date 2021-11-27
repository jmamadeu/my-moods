import { History } from '../screens/history.screen';
import { Home } from '../screens/home.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons } from '../components/icons';
import { theme } from '../styles/theme';

type BottomRoutes = {
  Home: undefined;
  History: undefined;
  Analytics: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomRoutes>();

export function BottomTabsRoutes() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarIcon: ({ size, color }) => {
          const RouteIcon = icons[route.name.toLocaleLowerCase()];

          return <RouteIcon color={color} size={size} />;
        }
      })}
    >
      <BottomTabs.Screen name="Home" options={{ title: "Today's mood" }} component={Home} />
      <BottomTabs.Screen name="History" component={History} options={{ title: 'Past moods' }} />
    </BottomTabs.Navigator>
  );
}

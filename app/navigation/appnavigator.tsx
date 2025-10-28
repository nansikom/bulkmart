import SaltDetailsScreen from '../screens/SaltDetailsScreen';
import SugarDetailsScreen from '../screens/SugarDetailsScreen';
import OilDetailsScreen from '../screens/OilDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../(tabs)/index';    
export type RootStackParamList = {
  Home: undefined;
  SaltDetailsScreen: undefined;
  SugarDetailsScreen: undefined;
  OilDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SaltDetailsScreen" component={SaltDetailsScreen} />
      <Stack.Screen name="SugarDetailsScreen" component={SugarDetailsScreen} />
      <Stack.Screen name="OilDetailsScreen" component={OilDetailsScreen} />
    </Stack.Navigator>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import colors from './app/config/colors';

import WelcomeScreen from './app/screens/WelcomeScreen';
import MobileScreen from './app/screens/Register/MobileScreen';
import NameScreen from './app/screens/Register/NameScreen';
import DobScreen from './app/screens/Register/DobScreen';
import GenderScreen from './app/screens/Register/GenderScreen';
import PasswordScreen from './app/screens/Register/PasswordScreen';
import OTPScreen from './app/screens/Register/OTPScreen';
import SaveInfoScreen from './app/screens/Register/SaveInfoScreen';
import AccountTypeScreen from './app/screens/Register/AccountTypeScreen';

export default function App () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerStyle: { backgroundColor: colors.primary }, headerTitleStyle: { color: colors.white }, headerTintColor: colors.white }}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="MobileScreen" component={MobileScreen} options={{ headerTitle: 'Sign up' }} />
    <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerTitle: 'Sign up' }} />
    <Stack.Screen name="DobScreen" component={DobScreen} options={{ headerTitle: 'Sign up' }} />
    <Stack.Screen name="GenderScreen" component={GenderScreen} options={{ headerTitle: 'Sign up' }} />
    <Stack.Screen name="PasswordScreen" component={PasswordScreen} options={{ headerTitle: 'Set up Password' }} />
    <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerTitle: 'Verify Code' }} />
    <Stack.Screen name="AccountTypeScreen" component={AccountTypeScreen} options={{ headerTitle: 'Sign up' }} />
    <Stack.Screen name="SaveInfoScreen" component={SaveInfoScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);


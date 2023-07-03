import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MobileScreen from './app/screens/Register/MobileScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import NameScreen from './app/screens/Register/NameScreen';
import DobScreen from './app/screens/Register/DobScreen';
import GenderScreen from './app/screens/Register/GenderScreen';
import PasswordScreen from './app/screens/Register/PasswordScreen';
import OTPScreen from './app/screens/Register/OTPScreen';
import SaveInfoScreen from './app/screens/Register/SaveInfoScreen';
import AccountTypeScreen from './app/screens/Register/AccountTypeScreen';

export default function App () {
  return (
    <Screen>
      {/* <MobileScreen /> */}
      {/* <NameScreen /> */}
      {/* <DobScreen /> */}
      {/* <GenderScreen /> */}
      {/* <PasswordScreen /> */}
      {/* <OTPScreen /> */}
      {/* <SaveInfoScreen /> */}
      <AccountTypeScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});;;

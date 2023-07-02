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

export default function App () {
  return (
    <Screen>
      {/* <MobileScreen /> */}
      {/* <NameScreen /> */}
      <DobScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});;;

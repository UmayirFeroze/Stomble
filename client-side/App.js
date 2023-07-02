import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button, Platform } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MobileScreen from './app/screens/Register/MobileScreen';

export default function App () {
  return (
    <MobileScreen />
  );
}

const styles = StyleSheet.create({});

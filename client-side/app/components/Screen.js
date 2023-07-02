import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Screen ({ children }) {
    return (
        <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: Constants.statusBarHeight,
    }
});

export default Screen;
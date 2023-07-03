import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppHeader from './AppHeader';

function Screen ({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} translucent={false} />
            <View style={styles.content}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'flex-end',
    },
    content: {
        width: '100%',
        flex: 1,
        padding: 10,
    }
});

export default Screen;
import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import App from '../../App';

function WelcomeScreen (props) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.loginIcon}>
                <AppButton title="Login" color={colors.tertiary} onPress={() => { console.log("Login Pressed!"); }} />
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={() => console.log("Login Screen!")} />
                <Text style={styles.baseText}>Don't have an account? <Text style={styles.innerText} onPress={() => console.log("Register Screen!")}>Register Now!</Text></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    baseText: {
        color: colors.white,
        marginTop: 10,
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
        paddingHorizontal: 'auto',
        alignItems: 'center'
    },
    innerText: {
        fontWeight: 'bold'
    },
    loginButton: { width: '100%', height: 7 },
    loginIcon: { backgroundColor: colors.tertiary, position: 'absolute', top: 40, right: 30 },
    logo: { width: 300, height: 150 },
    logoContainer: { position: 'absolute', top: '30 %' },
    registerButton: { width: '100%', height: 70, backgroundColor: 'red' },
});

export default WelcomeScreen;;;
import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import App from '../../App';
import Screen from '../components/Screen';

function WelcomeScreen ({ navigation }) {
    return (
        <Screen>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" onPress={() => console.log("Login Screen!")} />
                <Text style={styles.baseText}>Don't have an account? <Text style={styles.innerText} onPress={() => navigation.navigate('MobileScreen')}>Register Now!</Text></Text>
            </View>
        </Screen>
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
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    innerText: {
        fontWeight: 'bold'
    },
    loginButton: { width: '100%', height: 7 },
    logo: { width: 300, height: 150 },
    logoContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default WelcomeScreen;;;
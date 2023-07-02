import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import AppTextInput from '../../components/AppTextInput';


function MobileScreen (props) {
    return (
        <Screen style={styles.background}>
            <View style={styles.body}>
                <Text style={styles.text}>Verify your mobile number to get started</Text>
                <AppTextInput placeholder='Phone number' keyboardType='phone-pad' />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="continue" onPress={() => console.log("Continue Screen!")} />
                <Text style={styles.baseText}>Already have an account? <Text style={styles.innerText} onPress={() => console.log("Login Screen!")}>Register Now!</Text></Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    baseText: {
        color: colors.white,
        marginTop: 10,
    },
    body: {
        // backgroundColor: 'white',
        top: 10,
        padding: 10,
        width: '100%'
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
    text: {
        color: colors.white,
        fontWeight: 'bold',
    }
});

export default MobileScreen;
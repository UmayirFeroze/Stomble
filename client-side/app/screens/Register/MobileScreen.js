import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import AppTextInput from '../../components/AppTextInput';

import { registerUser } from '../../routes/register';

function MobileScreen ({ navigation }) {
    const [phone, setPhone] = useState();

    const onSubmit = (phone) => {
        navigation.navigate('NameScreen', { phone: phone });
    };

    return (
        <Screen>
            <Text style={styles.text}>Verify your mobile number to get started</Text>
            <View style={styles.body}>
                <Text style={styles.inputText}>Mobile Number</Text>
                <AppTextInput placeholder='Phone number' keyboardType='phone-pad' textContentType='telephoneNumber' onChangeText={text => setPhone(text)} />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="continue" onPress={(phone) => onSubmit(phone)} />
                <Text style={styles.baseText}>Already have an account? <Text style={styles.innerText} onPress={() => navigation.navigate('WelcomeScreen')}>Login Now!</Text></Text>
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
        width: '100%'
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
    inputText: {
        color: colors.white,
        marginTop: 20,
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
    }
});

export default MobileScreen;
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import AppText from '../../components/AppText';

function OTPScreen (props) {
    return (
        <Screen>
            <View style={styles.container}>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
                <TextInput keyboardType='numeric' maxLength={1} placeholderTextColor={colors.white} style={styles.input} textContentType='oneTimeCode'></TextInput>
            </View>

            <View style={styles.content}>
                <View style={styles.centeredView}>
                    <AppText text='Enter the 6 digit code sent to' />
                    <AppText text='+61 ****** 456' />
                </View>
                <AppButton title='Resend Code' color='transparent' />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='verify' color='tertiary' onPress={() => console.log('Continue pressed!')} />
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        width: '100%'
    },
    content: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        flex: 0.5,
        justifyContent: 'center',
        marginTop: 10,
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        color: colors.white,
        fontSize: 20,
        padding: 20,
        textAlign: 'center',
    },
    number: {
        fontSize: 18
    }
});
export default OTPScreen;
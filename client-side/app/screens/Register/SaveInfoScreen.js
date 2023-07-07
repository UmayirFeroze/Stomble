import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import colors from '../../config/colors';

import { useRoute } from '@react-navigation/native';
import { registerUser } from '../../routes/register';

function SaveInfoScreen (props) {

    const { name, phone, gender, dob, password, confirmPassword, otp, accountType } = useRoute().params;

    const handleSubmit = async () => {
        const user = { name, phone, gender, password, confirmPassword };
        try {
            const result = await registerUser(user);
            if (!result.ok) {
                console.log(result);
                return alert('Could not register!');
            }
            alert('success!');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.title}>Save your Login Info?</Text>
                <Text style={styles.description}>We will save the login info for now, so you won't need to enter to your iCloud devices next time you log in </Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='Save' onPress={handleSubmit} />
                <AppButton title='Not now' color='transparent' onPress={() => console.log('Continue pressed!')} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    description: {
        color: colors.white,
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 30,
    },

});

export default SaveInfoScreen;
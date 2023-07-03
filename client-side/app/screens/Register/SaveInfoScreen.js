import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import colors from '../../config/colors';

function SaveInfoScreen (props) {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.title}>Save your Login Info?</Text>
                <Text style={styles.description}>We will save the login info for now, so you won't need to enter to your iCloud devices next time you log in </Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='Save' onPress={() => console.log('Continue pressed!')} />
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
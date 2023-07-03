import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../../components/Screen';

function PasswordScreen (props) {
    return (
        <Screen>
            <Text style={styles.baseText}>Setup password for high security</Text>

            <View>
                <Text style={styles.inputText}>New Password</Text>
                <AppTextInput placeholder='Enter your password' autoComplete={false} />
            </View>

            <View style={styles.validation}>
                <Text>Password must contain</Text>
                <Text>Atleast 8 characters</Text>
                <Text>An Uppercase</Text>
                <Text>A Lowercase</Text>
                <Text>A number</Text>
                <Text>A special character</Text>
            </View>

            <View>
                <Text style={styles.inputText}>Confirm New Password</Text>
                <AppTextInput placeholder='Re-enter your password' autoComplete={false} secureTextEntry={true} textContentType='password' />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='continue' onPress={() => console.log('Continue pressed!')} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    baseText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputText: {
        color: colors.white,
        marginTop: 20,
    },
    buttonContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    validation: {

    }
});

export default PasswordScreen;
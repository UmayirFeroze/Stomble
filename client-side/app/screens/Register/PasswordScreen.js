import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import { View } from 'react-native';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { useRoute } from '@react-navigation/native';

function PasswordScreen ({ navigation }) {
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState('eye-off');
    const [secure, setSecure] = useState(true);
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const onChange = () => {
        setShow(!show);
        setSecure(!secure);
        show ? setIcon('eye-off') : setIcon('eye');
    };

    const { name, phone, dob, gender } = useRoute().params;

    const onSubmit = () => {
        const user = { name, phone, dob, gender, password, confirmPassword };
        navigation.navigate('OTPScreen', { name, phone, dob, gender, password, confirmPassword });
    };

    return (
        <Screen>
            <Text style={styles.baseText}>Setup password for high security</Text>

            <View>
                <Text style={styles.inputText}>New Password</Text>
                <AppTextInput placeholder='Enter your password' autoComplete='password' secureTextEntry={secure} icon={icon} size={25} onIcon={() => onChange()} onChangeText={text => setPassword(text)} />
            </View>

            <View>
                <AppText text='Password must contain' />
                <AppText icon='checkbox-blank-circle' text='Atleast 8 characters' />
                <AppText icon='checkbox-blank-circle' text='An uppercase' />
                <AppText icon='checkbox-blank-circle' text='A lowercase' />
                <AppText icon='checkbox-blank-circle' text='A number' />
                <AppText icon='checkbox-blank-circle' text='A special character' />
            </View>

            <View>
                <Text style={styles.inputText}>Confirm New Password</Text>
                <AppTextInput placeholder='Re-enter your password' autoComplete='password' secureTextEntry={secure} textContentType='password' icon={icon} size={25} onChangeText={text => setConfirmPassword(text)} />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='continue' onPress={onSubmit} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    criteria: {
        color: colors.white
    },
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
});

export default PasswordScreen;
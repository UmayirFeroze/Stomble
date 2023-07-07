import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/Screen';
import AppTextInput from '../../components/AppTextInput';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';

function NameScreen ({ navigation }) {
    const [name, setName] = useState();

    const { phone } = useRoute().params;
    const onSubmit = () => {
        const user = { name, phone };
        navigation.navigate('DobScreen', { name, phone });
    };

    return (
        <Screen>
            <Text style={styles.baseText}>Create your Stomble Account</Text>
            <View>
                <Text style={styles.inputText}>What is your full name?</Text>
                <AppTextInput placeholder='Full name' autoCapitalize={'words'} onChangeText={text => setName(text)} />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='continue' onPress={onSubmit} />
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
    }

});

export default NameScreen;
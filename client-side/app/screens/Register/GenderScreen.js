import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import AppPicker from '../../components/AppPicker';
import colors from '../../config/colors';
import { useRoute } from '@react-navigation/native';


const genders = [{ value: 1, label: 'Male' }, { value: 2, label: 'Female' }, { value: 3, label: 'Other' }, { value: 4, label: 'Prefer not to say' }];

function GenderScreen ({ navigation }) {
    const [gender, setGender] = useState();

    const { name, phone, dob } = useRoute().params;

    const onSubmit = () => {
        navigation.navigate('PasswordScreen', { name, phone, dob, gender: gender });
    };


    return (
        <Screen>
            <Text style={styles.baseText}>Create your Stomble Account</Text>
            <View>
                <Text style={styles.inputText}>What is your gender?</Text>
                <AppPicker selectedItem={gender} onSelectItem={gender => setGender(gender.label)} icon='chevron-down' items={genders} placeholder="Gender" />
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='next' onPress={onSubmit} />
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

export default GenderScreen;
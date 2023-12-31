import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';

import colors from '../../config/colors';
import { useRoute } from '@react-navigation/native';

const memberships = [
    { id: 1, title: 'Business', subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout' },
    { id: 2, title: 'Personal', subtitle: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout' },
];

function AccountTypeScreen ({ navigation }) {
    const [selection, setSelection] = useState();

    const onChange = (id) => {
        setSelection(id);
    };

    const { name, phone, gender, dob, password, confirmPassword, otp } = useRoute().params;
    const onSubmit = () => {
        console.log(name, phone, dob, gender, password, confirmPassword, otp, selection);
        navigation.navigate('SaveInfoScreen', { name, phone, dob, gender, password, confirmPassword, otp, accountType: selection });
    };

    return (
        <Screen>
            <View>
                <Text style={styles.text}>Choose Account Type</Text>
            </View>

            <View>
                {memberships.map(({ id, title, subtitle }) => <AppCard key={id} title={title} subtitle={subtitle} onPress={() => onChange(id)} />)}
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title='sign up' onPress={onSubmit} />
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
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default AccountTypeScreen;
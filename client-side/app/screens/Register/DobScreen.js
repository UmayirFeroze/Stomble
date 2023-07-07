import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../config/colors';
import { useRoute } from '@react-navigation/native';

function DobScreen ({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const { name, phone } = useRoute().params;

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(!show);
    };

    const onSubmit = () => {
        const user = { name, phone, dob: date };
        navigation.navigate('GenderScreen', { name, phone, dob: date.toDateString() });
    };

    return (
        <Screen>
            <Text style={styles.baseText}>Create your Stomble Account</Text>
            <View>
                <Text style={styles.inputText}>What is your date of birth?</Text>

                {show && <DateTimePicker mode='date' display='spinner' value={date} onChange={onChange} />}

                {!show && (<TouchableHighlight onPress={showDatepicker}>
                    <AppTextInput placeholder='Date of birth' edittable={false} onChangeText={date} onPressIn={showDatepicker} value={date.toDateString()} />
                </TouchableHighlight>)}
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

export default DobScreen;
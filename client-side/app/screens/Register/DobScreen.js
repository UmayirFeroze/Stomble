import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Screen from '../../components/Screen';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../config/colors';

function DobScreen (props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    // const showMode = (currentMode) => { setShow(true); setMode(currentMode); };

    const showDatepicker = () => {
        // showMode('date');
        setShow(!show);
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
    }
});

export default DobScreen;
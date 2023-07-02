import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function PickerItem ({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        border: 1,
        borderColor: colors.white,
        borderWidth: 1,
    },
    text: {
        padding: 20,
        backgroundColor: 'transparent',
        color: colors.white,
        borderColor: colors.white
    }
});

export default PickerItem;
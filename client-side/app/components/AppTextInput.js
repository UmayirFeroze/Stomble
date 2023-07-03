import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput ({ icon, placeholder, ...otherProps }) {

    return (
        <View style={styles.container}>
            {/* {icon && <MaterialCommunityIcons icon={icon} />} */}
            <TextInput placeholder={placeholder} style={styles.input} {...otherProps} placeholderTextColor={colors.white} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        color: colors.white,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
    }
});

export default AppTextInput;
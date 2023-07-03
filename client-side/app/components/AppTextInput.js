import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function AppTextInput ({ icon, size = 20, onIcon, placeholder, ...otherProps }) {

    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} style={styles.input} {...otherProps} placeholderTextColor={colors.white} />
            {icon && <MaterialCommunityIcons name={icon} size={size} color={colors.white} style={styles.icon} onPress={onIcon} />}
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
    icon: {
        marginLeft: 10,
        marginRight: 'auto',
    },
    input: {
        fontSize: 18,
        flex: 1,
        color: colors.white
    }
});

export default AppTextInput;
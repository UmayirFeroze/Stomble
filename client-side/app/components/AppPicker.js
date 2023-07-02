import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function AppPicker ({ placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {/* {icon && <MaterialCommunityIcons icon={icon} />} */}
            <Text style={styles.input} {...otherProps}>{placeholder}</Text>
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
        color: colors.white
    }
});

export default AppPicker;
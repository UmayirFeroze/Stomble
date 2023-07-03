import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

function AppText ({ icon, iconSize = 10, iconColor = colors.white, text, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
            <Text style={styles.baseText} {...otherProps}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    baseText: {
        color: colors.white,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        margin: 2,
    },
    icon: {
        margin: 4,
    }

});

export default AppText;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function AppHeader (props) {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'white',
        height: 10
    },
    icon: {
        backgroundColor: colors.tertiary,
        height: 50,
        width: 50
    }
});

export default AppHeader;
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';


function AppCard ({ title, subtitle, onPress }) {

    return (
        <>
            <TouchableOpacity style={styles.container} {...onPress ? onPress = { onPress } : null}>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
}


const styles = StyleSheet.create({
    card: {
        borderColor: colors.white,
        borderRadius: 5,
        borderWidth: 1,
        padding: 15,
        width: '100%'
    },
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        padding: 5,
        width: '100%'
    },
    subtitle: {
        color: colors.white,
        fontSize: 15
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default AppCard;
import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker ({ icon, items, onSelectItem, selectedItem, placeholder }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.white} style={styles.icon} />}
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='none'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        style={styles.list}
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItem label={item.label} onPress={() => { setModalVisible(false); onSelectItem(item); }} />} />
                </Screen>
            </Modal>
        </>
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
    list: {
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        flex: 1,
        color: colors.white
    },
});

export default AppPicker;
import React from 'react';

import { Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

//I set multiple properties to be able to customize my buttons
function AppButton({title, onPress, ...otherProps}) {
    return (
    //The button is the container, the text is the child
    <TouchableOpacity {...otherProps} onPress={onPress}>
        <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
    },
})
export default AppButton;
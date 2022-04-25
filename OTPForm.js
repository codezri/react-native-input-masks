import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import styles from './Style.js';

export default ({note}) => {
  return (
    <View style={styles.form}>

      <Text style={styles.heading}>Verify phone number</Text>
      <Text style={styles.note}>Registration details: {'\n\n'}{note}</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>OTP</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="[0] [0] [0] [0]"
          placeholder="0 0 0 0"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.registerBtnWrapper}>
        <Button title="Verify"/>
      </View>

    </View>
  );
};

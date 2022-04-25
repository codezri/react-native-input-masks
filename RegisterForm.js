import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import styles from './Style.js';

export default ({onSubmit}) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleFieldUpdate = (field, value) => {
    setFormData((prevState) => ({...prevState, [field]: value}));
  };

  return (
    <View style={styles.form}>

      <Text style={styles.heading}>Create an account</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Firstname</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="[A…]"
          value={formData.firstName}
          onChangeText={(value) => handleFieldUpdate('firstName', value)}
          placeholder="i.e., John"
          placeholderTextColor="grey"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Lastname</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="[A…]"
          value={formData.lastName}
          onChangeText={(value) => handleFieldUpdate('lastName', value)}
          placeholder="i.e., Doe"
          placeholderTextColor="grey"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Phone number</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="+1 ([000]) [000]-[00]-[00]"
          value={formData.phone}
          onChangeText={(value) => handleFieldUpdate('phone', value)}
          placeholder="+1 (000) 000-00-00"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Membership number</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="{M-}[00-000]"
          value={formData.memberNumber}
          onChangeText={(value) => handleFieldUpdate('memberNumber', value)}
          placeholder="M 00-000"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.registerBtnWrapper}>
        <Button title="Submit now" onPress={handleSubmit}/>
      </View>

    </View>
  );
};

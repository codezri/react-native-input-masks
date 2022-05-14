import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import styles from './Style.js';

const RegisterForm = ({onSubmit}) => {
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleFieldUpdate = (field, formatted, extracted) => {
    setFormData((prevState) => {
      let formData = {...prevState,
                        [field]: formatted,
                        [`${field}Extracted`]: extracted};
      setIsValid(formData.firstNameExtracted
              && formData.lastNameExtracted
              && formData.phoneExtracted?.length == 10
              && formData.memberNumberExtracted?.length == 5);
      return formData; // new state
    });
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
          onChangeText={(formatted, extracted) => handleFieldUpdate('firstName', formatted, extracted)}
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
          onChangeText={(formatted, extracted) => handleFieldUpdate('lastName', formatted, extracted)}
          placeholder="i.e., Doe"
          placeholderTextColor="grey"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Phone number</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="+1 ([000]) [000]-[0000]"
          value={formData.phone}
          onChangeText={(formatted, extracted) => handleFieldUpdate('phone', formatted, extracted)}
          placeholder="+1 (000) 000-0000"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Membership number</Text>
        <TextInputMask
          style={styles.maskedInput}
          mask="M-[00]-[000]"
          value={formData.memberNumber}
          onChangeText={(formatted, extracted) => handleFieldUpdate('memberNumber', formatted, extracted)}
          placeholder="M 00-000"
          placeholderTextColor="grey"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.registerBtnWrapper}>
        <Button title="Submit now" onPress={handleSubmit} disabled={!isValid}/>
      </View>

    </View>
  );
};

export default RegisterForm;

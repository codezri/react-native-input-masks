import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import RegisterForm from './RegisterForm.js';
import OTPForm from './OTPForm.js';

const App = () => {
  const [form, setForm] = useState('register');
  const [note, setNote] = useState('');

  const handleOnSubmit = (formData) => {
    let note = Object.keys(formData)
                  .reduce((acc, v) => (acc + `${v}: ${formData[v]} \n`)
                    , '');
    note += '\nOTP was sent to your phone — verify to continue.'
    setNote(note);
    setForm('otp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        { form == 'register' ?
            <RegisterForm onSubmit={handleOnSubmit}/> :
                <OTPForm note={note}/> }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
});

export default App;

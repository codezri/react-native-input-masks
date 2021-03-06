import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  heading: {
    color: 'black',
    paddingBottom: 32,
    paddingTop: 32,
    fontSize: 28
  },
  note: {
    color: 'grey',
    paddingBottom: 12,
    paddingTop: 12,
    fontSize: 16
  },
  field: {
    width: '85%'
  },
  fieldLabel: {
    color: 'black',
    paddingBottom: 6,
    paddingTop: 6,
    textAlign: 'left',
    fontSize: 18
  },
  maskedInput: {
    borderWidth: 2,
    borderRadius: 6,
    width: '100%',
    padding: 12,
    color: 'black',
    fontSize: 18
  },
  registerBtnWrapper: {
    marginTop: 20
  }
});

export default styles;

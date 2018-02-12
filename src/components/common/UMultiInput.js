import React from 'react';
import { TextInput } from 'react-native';

const UMultiInput = (props) => {
  return (<TextInput
            style={styles.inputStyle}
            {...props}
            multiline={true}
            numberOfLines={6}
          />);
};

const styles = {
  inputStyle: {
    width: 300,
    height: 100,
    backgroundColor: '#ffffff',
    marginTop: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,

    fontStyle: 'italic',
    fontWeight: '100',
    color: '#818387',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
};

export { UMultiInput };

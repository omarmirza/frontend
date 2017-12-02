import React, { Component } from 'react';
import { TextInput } from 'react-native';

const UInput = (props) => {
    return (
      <TextInput
        autoCapitalize='none'
        autoComplete='none'
        secureTextEntry={props.secureTextEntry || false}
        onFocus={props.onFocus || null}
        style={styles.inputStyle}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    );
};

const styles = {
  inputStyle: {
    width: 300,
    height: 30,
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

export { UInput };

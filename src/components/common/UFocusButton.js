import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const UFocusButton = (props) => {
  const { callback, children, disabled } = props;
  return(
    <TouchableOpacity onPress={callback} style={(!disabled) ? styles.focusStyle: styles.disableStyle} disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  focusStyle: {
    backgroundColor: '#7a327e',
    marginTop: 5,
    width: 300,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  disableStyle: {
    backgroundColor: '#7a327e50',
    marginTop: 5,
    width: 300,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2
  }
};

export { UFocusButton };

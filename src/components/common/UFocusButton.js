import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const UFocusButton = (props) => {
  const { callback, children } = props;
  return(
    <TouchableOpacity onPress={callback} style={styles.focusStyle}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  focusStyle: {
    backgroundColor: '#7a327e',
    marginTop: 5,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
};

export { UFocusButton };

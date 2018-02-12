import React from 'react';
import { Text } from 'react-native';

const ErrorText = (props) => {
  return(
    <Text style={styles.errorStyle}>{props.children}</Text>
  );
};

const styles = {
  errorStyle: {
    color: '#cc0000'
  }
};

export { ErrorText };

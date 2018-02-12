import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.containerStyle} >
      {props.children}
    </View>

  );
};

const styles = {
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'relative'
  }

};

export { Section };

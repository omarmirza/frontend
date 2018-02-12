import React from 'react';
import { View, Text } from 'react-native';

class USelect extends React.Component {
  render() {
    return(
      <View style={styles.defaultStyle}>
        <Text>This is the main screen.</Text>
      </View>
    );
  }
}

const styles = {
  defaultStyle: {
    backgroundColor: '#ff9e1b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { USelect };

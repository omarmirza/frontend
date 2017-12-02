import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import axios from 'axios';

class UExtraInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bio: 'Enter a bio'};
  }

  render() {
    return (
      <View style={styles.defaultStyle}>
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

export { UExtraInfo };

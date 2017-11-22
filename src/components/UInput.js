import React, { Component } from 'react';
import { TextInput } from 'react-native';

class UInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text: props.default };
  }

  render() {
    return (
      <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = {
  inputStyle: {
    width: 200,
    height: 30,
    backgroundColor: '#ffffff',
    marginTop: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    fontStyle: 'italic',
    fontWeight: '100',
    color: '#818387',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
};

export default UInput;

import React, { Component } from 'react';
import { View, Image, Button} from 'react-native';

import { UInput, UFocusButton, UPasswordInput } from '../common';

class ULogin extends Component {

  constructor(props) {
    super(props)
    this.state = {username: 'Username', password: 'Password'}
  }

  _doLogin = () => {
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.defaultStyle}>
        <Image source={require('../../../resources/logo.png')} style={styles.logoStyle}/>
        <UInput
          onFocus={() => this.setState({username: ''})}
          value={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />
        <UPasswordInput
          onFocus={() => this.setState({password: ''})}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        <UFocusButton callback={this._doLogin}>
          Login
        </UFocusButton>
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    height: 150,
    width: 150
  },
  defaultStyle: {
    backgroundColor: '#ff9e1b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export { ULogin };

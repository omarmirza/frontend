import React, { Component } from 'react';
import { Text, View, Image, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UInput, UFocusButton, UPasswordInput, ErrorText, Spinner } from '../common';

import axios from 'axios';

class ULogin extends Component {

  constructor(props) {
    super(props)
    this.state = {username: 'Username', password: 'Password', error: false, isLoading: false}
  }

  _onLoginSuccess() {
    this.setState({isLoading: false});
    Actions.select();
  }

  _onLoginFail() {
    this.setState({error: true, isLoading: false})
  }

  _doLogin = () => {
    this.setState({isLoading: true});
    axios.post('http://10.204.225.209:8000/user/login', {
      "username": this.state.username,
      "password": this.state.password
    })
    .then(this._onLoginSuccess.bind(this))
    .catch(this._onLoginFail.bind(this));
  }

  onRegisterButtonPressed() {
    Actions.register();
  }

  _renderError = () => {
    if(this.state.error) {
      return <ErrorText>Username or Password incorrect</ErrorText>;
    }
    return null;
  }

  _renderLogin = () => {
    if(this.state.isLoading) {
      return (<UFocusButton disabled={true}>
                <Spinner size={'small'} />
              </UFocusButton>);
    }

    return (<UFocusButton callback={this._doLogin}>
              <Text style={styles.textStyle}>
                Login
              </Text>
            </UFocusButton>);
  }

  render() {
    return (
      <View style={styles.defaultStyle}>
        <Image source={require('../../../resources/austinlogo1.png')} style={styles.logoStyle}/>
        {this._renderError()}
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
        {this._renderLogin()}
        <UFocusButton callback={this.onRegisterButtonPressed}>
          <Text style={styles.textStyle}>
            Register
          </Text>
        </UFocusButton>
      </View>
    );
  }
}

const styles = {
  logoStyle: {
    height: 300,
    width: 300,
    marginBottom: 80
  },
  defaultStyle: {
    backgroundColor: '#ff9e1b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17
  },
}

export { ULogin };

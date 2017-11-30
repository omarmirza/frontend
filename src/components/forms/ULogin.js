import React, { Component } from 'react';
import { Text, View, Image, Button} from 'react-native';

import { UInput, UFocusButton, UPasswordInput, ErrorText, Spinner } from '../common';

import axios from 'axios';

class ULogin extends Component {

  constructor(props) {
    super(props)
    this.state = {username: 'Username', password: 'Password', error: false, isLoading: false}
  }

  _doLogin = () => {
    this.setState({isLoading: true});
    axios.post('http://localhost:8000/user/login', {
      "username": this.state.username,
      "password": this.state.password
    })
    .catch(function(error){
      this.setState({error: true, isLoading: false})
    }.bind(this));
  }

  _goToRegister = () => {
    return;
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
        <UFocusButton callback={this._goToRegister}>
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
    height: 150,
    width: 150
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
  }
}

export { ULogin };

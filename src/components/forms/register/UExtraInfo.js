import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UFocusButton, UMultiInput, ErrorText, Spinner } from '../../common';
import axios from 'axios';

class UExtraInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: this.props.username,
                  password: this.props.password,
                  first: this.props.first,
                  last: this.props.last,
                  email: this.props.email,
                  role: this.props.role,
                  bio: "Enter a bio...",
                  error: false,
                  isLoading: false};
  }

  _renderError = () => {
    if(this.state.error) {
      return <ErrorText>Could Not Register New User</ErrorText>;
    }
    return null;
  }

  _onRegisterSuccess() {
    axios.post('http://localhost:8000/user/login', {
      'username': this.state.username,
      'password': this.state.password
    })
    .then(Actions.select())
    .catch(() => {
      console.log('Could not login...');
    });
  }

  _onRegisterFail() {
    this.setState({error: true, isLoading: false});
  }

  onRegisterClick = () => {
    this.setState({isLoading: true})
    axios.post(
      'http://localhost:8000/user',{
      'uname': this.state.username,
      'password': this.state.password,
      'first': this.state.first,
      'last': this.state.last,
      'email': this.state.email,
      'role': this.state.role,
      'bio': this.state.bio
    })
    .then(this._onRegisterSuccess.bind(this))
    .catch(this._onRegisterFail.bind(this));
  }

  _renderRegister = () => {
    if(this.state.isLoading) {
      return (<UFocusButton disabled={true}>
                <Spinner size={'small'} />
              </UFocusButton>);
    }

    return (<UFocusButton callback={this.onRegisterClick}>
              <Text style={styles.textStyle}>
                Register
              </Text>
            </UFocusButton>);
  }

  render() {
    return (
      <View style={styles.defaultStyle}>
        {this._renderError()}
        <UMultiInput
          onFocus={() => this.setState({bio: ''})}
          value={this.state.bio}
          onChangeText={text => this.setState({bio: text})}
        />
        {this._renderRegister()}
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
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17
  },
};

export { UExtraInfo };

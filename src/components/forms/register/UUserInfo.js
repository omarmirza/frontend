import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UFocusButton, UInput, UPasswordInput } from '../../common';

class UUserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: 'Username',
                  password: 'Password',
                  conf_password: 'Password',
                  first: 'First Name',
                  last: 'Last Name',
                  email: 'some_email@email.com',
                  role: this.props.role}
  }

  onNextClick = () => {
    Actions.extra({username: this.state.username,
                  password: this.state.password,
                  first: this.state.first,
                  last: this.state.last,
                  email: this.state.email,
                  role: this.state.role});
  }

  render() {
    return (
      <View style={styles.defaultStyle}>
        <Text>We need some info:</Text>
        <UInput
          onFocus={() => this.setState({first: ''})}
          value={this.state.first}
          onChangeText={text => this.setState({first: text})}
        />
        <UInput
          onFocus={() => this.setState({last: ''})}
          value={this.state.last}
          onChangeText={text => this.setState({last: text})}
        />
        <UInput
          onFocus={() => this.setState({email: ''})}
          value={this.state.email}
          onChangeText={text => this.setState({email: text})}
        />
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
        <UPasswordInput
          onFocus={() => this.setState({conf_password: ''})}
          value={this.state.conf_password}
          onChangeText={text => this.setState({conf_password: text})}
        />
        <UFocusButton callback={this.onNextClick}>
          <Text style={styles.textStyle}>Next</Text>
        </UFocusButton>
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
}

export { UUserInfo };

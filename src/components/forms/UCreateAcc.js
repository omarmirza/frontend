import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Actions } from 'react-native-router-flux';
import { Section } from '../common';

import axios from 'axios';

class UCreateAcc extends Component {
  state = { user: '' }
  componentDidMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
    // play services are available. can now configure library
    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
    })
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      //iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
      webClientId: "406581460719-uaqdo755j1mfitihjrrbn7ila1r8hdha.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceConsentPrompt: true,  // [Android] if you want to show the authorization prompt at each login
      //accountName: '' // [Android] specifies an account name on the device that should be used
    })
    .then(() => {
  // you can now call currentUserAsync()
  GoogleSignin.currentUserAsync().then((user) => {
      console.log('USER', user);
      this.setState({ user: user });
    }).done();
  });

  //GoogleSignin.currentUserAsync().then((user) => {
  //    console.log('USER', user);
  //    this.setState({ user: user });
  //  }).done();

  }

  handle() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user: user });
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }


  render() {
    return (
      <View style={styles.defaultStyle}>
        <Section>
          <View style={styles.rightTextViewStyle}>
            <TouchableOpacity>
              <Text style={styles.rightTextStyle}>
                  Login
                </Text>
            </TouchableOpacity>
            </View>
        </Section>

        <Section>
          <View style={styles.logoViewStyle}>
            <Image source={require('../../../resources/logo.png')} style={styles.logoStyle} />
            <GoogleSigninButton
              style={{ width: 300, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this.handle.bind(this)}
              />
          </View>
        </Section>

      </View>
    );
  }
}

const styles = {
  defaultStyle: {
    backgroundColor: '#ff9e1b',
    flex: 1
  },
  rightTextViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rightTextStyle: {
    fontSize: 17,
    color: '#ffffff'
  },
  logoStyle: {
    height: 200,
    width: 200,
    marginTop: 80
  },
  logoViewStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};


export { UCreateAcc };

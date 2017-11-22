import React from 'react';
import { View, Image, Button} from 'react-native';

import UInput from './UInput';
import UFocusButton from './UFocusButton';

const doLogin = () => {
  console.log('From login!!');
}

const ULogin = () => {
  return (
    <View style={styles.defaultStyle}>
      <Image source={require('../../resources/logo.png')} style={styles.logoStyle}/>
      <UInput default={'Username'}/>
      <UInput default={'Password'}/>
      <UFocusButton callback={doLogin}>
        Login
      </UFocusButton>
    </View>
  );
};

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

export default ULogin;

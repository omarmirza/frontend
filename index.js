import React from 'react';
import { View, Text, AppRegistry, Image } from 'react-native'

import ULogin from './src/components/ULogin';

const App = () => {
  return(
    <ULogin />
  );
}

AppRegistry.registerComponent('ubizie', () => App);

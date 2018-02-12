import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { ULogin, USelect, UChooseRole, UUserInfo, UExtraInfo, UCreateAcc } from './components/forms';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          hideNavBar
          key="createacc"
          component={UCreateAcc}
          title="Create Account"
        />
        <Scene
          hideNavBar={true}
          key="login"
          component={ULogin}
          title="Login"
          inital
        />
        <Scene
          hideNavBar={true}
          key="select"
          component={USelect}
          title="Temp"
        />
        <Scene
          hideNavBar={true}
          key="register"
          component={UChooseRole}
          title="Choose Role"
        />
        <Scene
          hideNavBar={true}
          key="userinfo"
          component={UUserInfo}
          title="Enter User Information"
        />
        <Scene
          hideNavBar={true}
          key="extra"
          component={UExtraInfo}
          title="Enter Extra Information"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

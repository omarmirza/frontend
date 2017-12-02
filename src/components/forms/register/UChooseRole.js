import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UFocusButton } from '../../common';

class UChooseRole extends React.Component {

  constructor(props){
    super(props)
  }

  onJobRoleClick() {
    Actions.userinfo({role: 'worker'});
  }

  onUserRoleClick() {
    Actions.userinfo({role: 'user'});
  }

  render() {
    return(
      <View style={styles.defaultStyle}>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleTextStyle}>What are you here to do?</Text>
          </View>
          <View>
            <UFocusButton callback={this.onJobRoleClick}>
              <Text>I need a job!</Text>
            </UFocusButton>
            <UFocusButton callback={this.onUserRoleClick}>
              <Text>I want to work!</Text>
            </UFocusButton>
          </View>
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
  titleContainerStyle: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle :{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  buttonContainerStyle: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { UChooseRole }

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../Screens'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        // screenOptions={{headerShown:false}}
        >
          <Tab.Screen  name={navigationString.HOME} component={Screens.Home} />
          <Tab.Screen  name={navigationString.REGISTER} component={Screens.Register} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;
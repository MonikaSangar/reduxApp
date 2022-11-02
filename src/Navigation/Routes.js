import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../Screens'
import TabRoutes from './TabRoutes'


const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
      <NavigationContainer>
    <Tab.Navigator >
          <Tab.Screen  name={navigationString.HOME} component={Screens.Home} />
          <Tab.Screen  name={navigationString.PROFILE} component={Screens.Profile} />
       
        </Tab.Navigator>

     </NavigationContainer>
    );
  }
  
  export default Routes;
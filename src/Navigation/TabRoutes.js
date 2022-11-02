import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../Screens'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
  
        <Tab.Navigator
       screenOptions={{
   
   tabBarShowLabel:false
   
       }}
          

       >
          <Tab.Screen  name={navigationString.HOME} component={Screens.Home} />
       
        </Tab.Navigator>

    );
  }
  
  export default Routes;
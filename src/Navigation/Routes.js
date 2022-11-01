import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../Screens'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator 
        // screenOptions={{headerShown:false}}
        > */}
           <Tab.Navigator scree
           >
          <Stack.Screen name={navigationString.HOME} component={Screens.Home} />
          <Stack.Screen name={navigationString.REGISTER} component={Screens.Register} />
          </Tab.Navigator>
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    );
  }
  
  export default Routes;
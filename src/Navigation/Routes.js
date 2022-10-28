import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navigationString from '../constants/navigationString';
import * as Screens from '../Screens'

const Stack = createNativeStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        // screenOptions={{headerShown:false}}
        >
          <Stack.Screen name={navigationString.HOME} component={Screens.Home} />
          <Stack.Screen name={navigationString.PROFILE} component={Screens.Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;
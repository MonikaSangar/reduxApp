//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/Navigation/Routes';


// create a component
const App = () => {
  return (
    <View style={styles.container}>
    <Routes/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
   flex:1
  },
});

//make this component available to the app
export default App;

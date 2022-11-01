//import liraries
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';





// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      
    <Routes/>
    </Provider>
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

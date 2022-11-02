//import liraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import { defaultadata } from './src/redux/action';
import store from './src/redux/store';



// create a component
const App = () => {
  useEffect(()=>{
    alert("i am app screen")
    getData()
  },[])
  
  const getData = async () => {
    try {
      const storagevalue = await AsyncStorage.getItem('userData')
      console.log("data in home screen",JSON.parse(storagevalue))
      let value=JSON.parse(storagevalue)
      if(!!value){
        store.dispatch(defaultadata(value))
      }
    } catch(e) {
      // read error
    }
  }  



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

//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { decremnet, incremnet } from '../../redux/actions';
import store from '../../redux/store';


// create a component
const Home = () => {

    const [number,setNumber]=useState(0);
    const [data,setData]=useState([
        {
            name:'Monika'
        }
    ])

    useEffect(()=>{
       
      
       const unsubscribe = store.subscribe(()=>{
        console.log(store.getState().counter,"COUNTER ON HOME SCREEn")
        setNumber(store.getState().counter)
       });
       return ()=>{
        unsubscribe()
       }
    },[])

    const onIncremnet = ()=>{
        store.dispatch(incremnet(number))
    }
    const onDecremnet = ()=>{
        store.dispatch(decremnet(number))
    }

    return (
        <View style={styles.container}>
           
            <Button 
            title="INCREMENT"
            onPress={onIncremnet}
            />
             <Text>{number}</Text>
            <Button 
            title="DECREMENT"
            onPress={onDecremnet}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Home;

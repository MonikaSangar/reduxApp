//import liraries
import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import navigationString from '../../constants/navigationString';
import { decrement, increment } from '../../redux/actions';
import store from '../../redux/store';
import styles from './styles';


const Profile = ({navigation,route}) => {
    const [data, setData]=useState()

  

    const fetchData = ()=>{
        let homeScreenData = route?.params
        if(!!homeScreenData){
            setData(homeScreenData)
        }
        console.log(homeScreenData, "homeScreenData")
    }

    useEffect(() => {

        fetchData();

        const unsubscribe = store.subscribe(() => {
            let value = store.getState().num 
            setData(value)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
       
        store.dispatch(increment(data))
        navigation.navigate(navigationString.HOME, number)
      
    }
    
    const onDec = () => {
        if (number >0){
            store.dispatch(decrement(data))
        }
        else {
           return
        }
        
    }


    return (
        <View style={styles.container}>
            <View style={styles.cart}>
            <TouchableOpacity
                onPress={onDec}
                >
                <Text style={styles.txtStyle}>-</Text>
            </TouchableOpacity>
            <Text style={styles.txtStyle}>{data}</Text>
            <TouchableOpacity
                onPress={onInc}
                >
                  <Text style={styles.txtStyle}>+</Text>
            </TouchableOpacity>
            
            </View>
            <Button 
            title='click'
            onPress={()=>{
                navigation.navigate(navigationString.HOME,data)
            }}
            >

            </Button>
        </View>
    );
};

export default Profile;
//import liraries
import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import colorPath from '../../constants/colorPath';
import navigationString from '../../constants/navigationString';
import { decrement, increment } from '../../redux/action';
import store from '../../redux/store';
import { moderateScale, moderateScaleVertical } from '../../styles/responsive';
import styles from './styles';




const Profile = ({navigation,route}) => {
    console.log('props',route)
  const itemData = route.params
  console.log(itemData.id,"fhdfhadsjkfhajksfhjadshfajkshfjks")

  const myData = useSelector(state=> state.myData)
  console.log(myData,"mydatatatastatatat")
  let index = myData.findIndex(itemId=>itemId.id==itemData.id)
  console.log(index,"indexindexindex")
  let newValue = myData[index]

  const onInc = (item) => {
    // alert(JSON.stringify(item))
    store.dispatch(increment(item.quantity,item.id))
}

const onDec =(item) => {
   
    if(item.quantity>0){
        store.dispatch(decrement(item.quantity,item.id))
    }else{
        return
    }
          
}

    return (
       
        <View   style={styles.flatStyle}>
            <View >
                        <Text>{newValue.title}</Text>
                        <Text>{newValue.desc}</Text>
                    </View>
                   <View style={styles.cart}>
                        <TouchableOpacity
                            onPress={()=>onDec(newValue)}
                        >
                            <Text style={styles.txtStyle}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtStyle}>{newValue.quantity}</Text>
                        <TouchableOpacity
                            onPress={()=>onInc(newValue)}
                        >
                            <Text style={styles.txtStyle}>+</Text>
                        </TouchableOpacity>
                    </View>
        </View>
    );
};

export default Profile;
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import navigationString from '../../constants/navigationString';
import { decrement, increment } from '../../redux/action';
import store from '../../redux/store';
import styles from './styles';


const Home = ({ navigation, route }) => {
    
   const storeData =useSelector(state=>state.myData)
        const onInc = (item) => {
            // alert(JSON.stringify(item))
            store.dispatch(increment(item.quantity,item.id))
        }

        const onDec =(item) => {

            store.dispatch(decrement(item.quantity,item.id))
            if(item.quantity<=0)
            return
        }
        const renderItem = ({ item , index}) => {
            return (
                <View>
            <TouchableOpacity onPress={()=>navigation.navigate(navigationString.PROFILE,{title:item?.title,
                desc:item?.desc,id:item.id})}
                style={styles.flatStyle}>
                    <View >
                        <Text>{item?.title}</Text>
                        <Text>{item?.desc}</Text>
                    </View>
                    {item.quantity>=1 ? <View style={styles.cart}>
                        <TouchableOpacity
                            onPress={()=>onDec(item)}
                        >
                            <Text style={styles.txtStyle}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtStyle}>{item.quantity}</Text>
                        <TouchableOpacity
                            onPress={()=>onInc(item)}
                        >
                            <Text style={styles.txtStyle}>+</Text>
                        </TouchableOpacity>
                    </View> :
                        <TouchableOpacity
                            style={styles.addBtnStyle}
                            onPress={()=>onInc(item)}

                        >
                            <Text style={styles.txtStyles}>Add</Text>
                        </TouchableOpacity>
                    }
                </TouchableOpacity>
                </View>
            )
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ margin: 16 }}>
                    <FlatList
                        data={storeData}
                        renderItem={renderItem}
                       
                    />
                </View>
            </SafeAreaView>
        );
    };

export default Home;



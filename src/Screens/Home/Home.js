import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import navigationString from '../../constants/navigationString';
import { decrement, increment } from '../../redux/actions';
import store from '../../redux/store';

import styles from './styles';


const Home = ({ navigation, route }) => {
    const [number, setNumber] = useState(0)
    const [flat,setFlat] =useState(store.getState().myData)


    console.log(store.getState(),'getState')


    useEffect(() => {

    //     const unsubscribe = store.subscribe(() => {
    //         let value = store.getState().num
    //         setNumber(value)
    //         let data =store.getState().state.myData
    //         setFlat(data)

    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [route?.params])


    const unsubscribe = store.subscribe(() => {
        let value = store.getState().counter
        let data = store.getState().myData 
        setNumber(value)
        setFlat(data)
    })
    return () => {
        unsubscribe()
    }
}, [route?.params])
    const onInc = () => {
      
        store.dispatch(increment(number))
        // navigation.navigate(NavigationStrings.SECOND_SCREEN, number)

    }

    const onDec = () => {
        if (number > 0) {
            store.dispatch(decrement(number))
        }
        else {
            return
        }

    }
    const onAdd =()=>{

        

    }
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatStyle}>
                <View >
                <Text>{item?.title}</Text>
                <Text>{item?.desc}</Text>
                </View>
                {item.quantity !== 0 ? <View style={styles.cart}>
                    <TouchableOpacity
                    onPress={onDec}
                    >
                        <Text style={styles.txtStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtStyle}>{item.quantity}</Text>
                    <TouchableOpacity
                    onPress={onInc}
                    >
                        <Text style={styles.txtStyle}>+</Text>
                    </TouchableOpacity>
                </View> :
                    <TouchableOpacity
                        style={styles.addBtnStyle}
                        onPress={onAdd}

                    >
                        <Text style={styles.txtStyles}>Add</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
              <View style={{ margin: 16 }}>
           <FlatList
           data={flat}
           renderItem={renderItem}
           ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;









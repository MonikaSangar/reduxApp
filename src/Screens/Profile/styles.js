import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorPath";
import { moderateScale, moderateScaleVertical } from "../../styles/responsive";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    cart:{
        flexDirection:"row",
        width:moderateScale(88),
        height:moderateScaleVertical(32),
        backgroundColor:colorPath.purple,
        justifyContent:"center",
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:moderateScale(14),
        borderRadius:moderateScale(4)

        
    },
    txtStyle:{
        color:colorPath.white
    }
});
export default styles;
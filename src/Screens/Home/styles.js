
import { StyleSheet } from "react-native";
import colorPath from '../../constants/colorPath';
import { moderateScale, moderateScaleVertical, textScale } from "../../styles/responsive";

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    flatStyle: {
        flexDirection: "row", 
        alignItems: 'center', 
        backgroundColor:colorPath.white,
        padding: moderateScale(8), 
        borderRadius: moderateScale(8), 
        justifyContent:'space-between'
    },
    addBtnStyle: {
        marginLeft: 16,
        backgroundColor:colorPath.purple,
        height: moderateScaleVertical(40),
        width: moderateScale(40),
        borderRadius:moderateScale(10),
        alignItems: 'center',
        justifyContent: "center"
    },
    txtStyles:{
        color:colorPath.white
    }
});

export default styles;
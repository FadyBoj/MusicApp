import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:40,
        width:deviceWidth,
        flex:1,
        backgroundColor:'#0b0f20'
    },
    songImage:{
        width:300,
        height:300,
        resizeMode:'contain',
        borderRadius:10
    },
    songNameText:{
        color:'#fff',
        fontFamily:'ProductSans-Medium',
        marginTop:20,
        fontSize:22,
        width:300,
        textAlign:'center'
    },
    artistNameText:{
        color:'#fff',
        fontFamily:'ProductSans-Medium',
        fontSize:17,
        color:'#7d7f87',
        marginTop:10,
        width:300,
        textAlign:'center'
    },
    playIconContainer:{
        padding:15,
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:200,
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50
    },
    songOptions:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:40,
        marginTop:50,
    },
    timing:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:10
  
    },
    time:{
        alignItems:'center',
        justifyContent:'center',
    },
    songDurations:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between'
    }
})

export default styles

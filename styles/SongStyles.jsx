import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height



const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:120,
        width:deviceWidth,
        flex:1,
        height:deviceHeight,
        backgroundColor:'#0b0f20',
        position:'absolute',
        top:0
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
        gap:10,
   
    },
    time:{
        alignItems:'center',
        justifyContent:'center',
     },
    songDurations:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
    },
    timeText:{
        color:"#fff"
    }
})

export default styles

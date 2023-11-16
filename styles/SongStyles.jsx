import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height



const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'relative',
        paddingTop:120,
        width:deviceWidth,
        backgroundColor:'#0b0f20',
        zIndex:100,
        justifyContent:'flex-start',
        
    },
    songList:{
        width:deviceWidth,
        backgroundColor:'#0b0f20',
        zIndex:100,
        top:400,
        position:'absolute',
        top:0,
        height:deviceHeight

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
        textAlign:'center',
     
    },
    artistNameText:{
        color:'#fff',
        fontFamily:'ProductSans-Medium',
        fontSize:17,
        color:'#7d7f87',
        marginTop:10,
        textAlign:'center',
        zIndex:330,
      
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
        zIndex:300,
        position:'absolute',
        bottom:200

   
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
        color:"#fff",
        zIndex:230,
        position:'relative',

    },
    songDetails:{
        backgroundColor:'#0b0f20',
        alignItems:'center',
        width:deviceWidth,
        height:deviceHeight / 2,
        backgroundColor:'#0b0f20',
        paddingTop:24,
        position:'absolute',
        bottom:0,
        zIndex:220

    }
})

export default styles

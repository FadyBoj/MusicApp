import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
  
    },
    linear:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:50,
        alignItems:'center'
    },
    welcomeText:{
        fontFamily:'ProductSans-Medium',
        color:'#fff',
        fontSize:40

    },
    settingContainer:{
        flexDirection:'row',
        alignItems:'center',
        transform:[{translateY:7}],
        gap:20
    },
    settingsIconContainer:{
        backgroundColor:'#1d2849',
        padding:8,
        borderRadius:200,
        justifyContent:'center',
        alignItems:'center',
        transform:[{translateY:2}]

    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:34,
        resizeMode:'center'

    },
    topSongs:{
        width:'100%',
        marginTop:80

    },
    topText:{
        color:'#fff',
        fontSize:25,
        fontFamily:'ProductSans-Medium',
        paddingLeft:20,
        fontWeight:'bold'

    },
    topSongsList:{
        marginTop:30,
        paddingLeft:20,
        paddingRight:20,
    },
    topSong:{
        width:155,
        height:150,
        borderRadius:17,
        position:'relative',
    },
    topSongImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        position:'absolute',
        borderRadius:10
    }
})

export default styles
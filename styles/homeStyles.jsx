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
        fontSize:34

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
        marginTop:60

    },
    topText:{
        color:'#fff',
        fontSize:25,
        fontFamily:'ProductSans-Medium',
        paddingLeft:20,
        fontWeight:'bold'

    },
    topSongsList:{
        marginTop:14,
        paddingLeft:20,
        paddingRight:20,
    },
    topSong:{
        
        borderRadius:17,
        gap:15,
        flex:1
    },
    topSongImage:{
        width:180,
        height:180,
        resizeMode:'contain',
        borderRadius:4
    },
    songNameText:{
        color:'#969595',
        width:155,
        paddingLeft:10,
        fontFamily:'ProductSans-Medium',

    },
    topArtistContainer:{
        width:'100%',
        alignItems:'center',
        marginTop:20
    },
    topArtistImage:{
        width:'90%',
        height:400,
        resizeMode:'contain',
        marginTop:27,
        borderRadius:20,
        position:'relative',
        zIndex:10
    },
    topArtistText:{
        fontFamily:'ProductSans-Medium',
        color:'#fff',
        fontSize:25,
        width:'100%',
        paddingLeft:20,
        textAlign:'center'
    },
    topArtistBrightness:{
        position:'absolute',
        width:'90',
        height:400,
        backgroundColor:'red',
        zIndex:40,
        top:0,
    }
})

export default styles
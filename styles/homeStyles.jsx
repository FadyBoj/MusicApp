import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
        paddingBottom:80,
        position:'relative'
  
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
        marginTop:40

    },
    topText:{
        color:'#fff',
        fontSize:23,
        fontFamily:'ProductSans-Medium',
        paddingLeft:15,
        fontWeight:'bold'

    },
    topSongsList:{
        marginTop:14,
        paddingLeft:10,
        paddingRight:20,
    },
    topSong:{
        gap:15
        
    },
    topSongImage:{
        width:160,
        height:160,
        resizeMode:'contain',
    },
    songNameText:{
        color:'#969595',
        width:155,
        fontFamily:'ProductSans-Medium',

    },

    topArtistText:{
        fontFamily:'ProductSans-Medium',
        color:'#fff',
        fontSize:23,
        width:'100%',
        paddingLeft:20,
        paddingTop:30
    },
    topArtistImageContainer:{
        width:270,
        height:200,
        borderWidth:1
    },
    topArtistImage:{
        width:'100%',
        height:'100%',
        borderRadius:8,
    },
    topArtistLabel:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:40,
        backgroundColor:'rgba(255,255,255,0.5)',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        zIndex:21

    },
    artistLabelText:{
        color:'#fff',
        fontSize:20,
        fontFamily:'ProductSans-Medium',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,

    },
    topArtistContainer:{
        width:'100%',
        marginTop:20
    },
    brightness:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:8,
        zIndex:20
    },
    timeWelcome:{
        fontFamily:'ProductSans-Medium',
        color:'#fff',
        marginTop:10,
        marginLeft:3
    },

    recommendationsContainer:{
        marginTop:20,
        width:'100%'
    },
    recImage:{
        width:180,
        height:180,
        borderRadius:200,
        marginTop:20
    },
    recText:{
        textAlign:'center',
        fontFamily:'ProductSans-Medium',
        width:180

    }

})

export default styles
import {  StyleSheet } from 'react-native';
const IndexStyles = StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems:'center',
        position:'relative',
        gap:50,
        justifyContent:'space-between',
        paddingBottom:40
      
    },
    logo:{
        marginTop:180
    },
    linear:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    mainTitleCont:{
        alignItems:'center',
    },
    mainTitle:{
        color:'#fff',
        fontSize:42,
        fontFamily:'ProductSans-Medium'
    },
    btns:{
 
        gap:20
    },
    createAccountBtn:{
        backgroundColor:'#1590b3',
        padding:10,
        width:'100%',
        height:'100%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        
    }
    ,createAccountText:{
        color:'#fff',
        fontFamily:'ProductSans-Medium',
        fontSize:18
    },
    btnClicked:{
        width:295,
        height:48,
    },
    googleBtn:{
        backgroundColor:'#000',
        padding:10,
        width:'100%',
        height:'100%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'grey',
        borderWidth:0.2
    },
    googleIcon:{
        width:20,
        height:20,
        position:'absolute',
        left:20
    }
    ,googleBtnContent:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        width:'100%'
    },
    googleBtnText:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
        letterSpacing:0.2,
        fontFamily:'ProductSans-Medium'

    },
    emailLoginContainer:{
        alignItems:'center',
        gap:20
    },
    emailLoginInput:{
        borderColor:'#1CB5E0',
        borderWidth:2,
        width:300,
        borderRadius:10,
        paddingLeft:50
    },
    emailLoginText:{
        color:'#fff',
        fontSize:22,
        fontFamily:'ProductSans-Medium'
    },
    userIcon:{
        position:'absolute',
        left:13
    },
    emailContinue:{
        backgroundColor:'#4ea52f',
        padding:10,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',   
        width:300,
        height:50
    },
    emailContinueText:{
        color:'#fff',
        fontFamily:'ProductSans-Medium',
        fontSize:17
    },
    space:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    firstSpace:{
        height:1,
        width:'40%',
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    },
    secondSpace:{
        height:1,
        width:'40%',
        backgroundColor:'grey'
    },
    or:{
        width:'7%',
        alignItems:'center',
        justifyContent:'flex-start'
    }

})

export default IndexStyles
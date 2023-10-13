import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'center',
        gap:40,
        paddingTop:18,
        bottom:0,
        backgroundColor:'rgba(0, 0, 0, 0.847)',
        position:"absolute",
        width:'100%',
        alignItems:'center',
        zIndex:90,
    },
    tabItem:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:3,
        paddingLeft:20,
        paddingRight:20
    },
    tabText:{
        color:"#fff",
        fontFamily:'ProductSans-Medium',
        fontSize:12,

    },
    inActiveText:{
         color:"#919191",
    },
    trackPlayer:{
        position:'absolute',
        zIndex:90,
        bottom:0
    }
})

export default styles;
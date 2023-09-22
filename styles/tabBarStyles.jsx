import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'center',
        gap:60
    },
    tabItem:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:3
    },
    tabText:{
        color:"#fff",
        fontFamily:'ProductSans-Medium',
        fontSize:12,

    },
    inActiveText:{
         color:"#919191",
    }
})

export default styles;
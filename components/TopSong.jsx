import { View, Text, Image,Animated,TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
//Styles
import styles from '../styles/homeStyles'

const TopSong = ({ song }) => {

  const [scaleAnim,setScaleAnim] = React.useState(new Animated.Value(1))

  const scaleDown = ()=>{
    Animated.timing(scaleAnim,{
      toValue:0.96,
      duration:100,
      useNativeDriver:true
    }).start();
  }

  const scaleUp = ()=>{
    Animated.timing(scaleAnim,{
      toValue:1,
      duration:100,
      useNativeDriver:true
    }).start();
  }

  return (
    <Animated.View style={[{transform:[{scale:scaleAnim}]}]}>
      <TouchableOpacity activeOpacity={0.7} onPressIn={scaleDown} onPressOut={scaleUp}  style={styles.topSong}>
          <Image style={styles.topSongImage}
          source={{uri:song.image}}
          />
          <View><Text numberOfLines={1} style={styles.songNameText}>{song.name}</Text></View>

     </TouchableOpacity>
    </Animated.View>
  )
}

export default TopSong
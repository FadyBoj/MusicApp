import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios';
//Styles
import styles from '../styles/homeStyles'

const TopSong = ({ song }) => {

    

  return (
    <View style={styles.topSong}>
        
     <Image style={styles.topSongImage}
     source={{uri:song.image}}
     />
        <View><Text style={styles.songNameText}>{song.name}</Text></View>
    </View>
  )
}

export default TopSong
import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios';
import { Skeleton } from '@rneui/themed';
//Styles
import styles from '../styles/homeStyles'

const LoadingSong = ({ song }) => {

    

  return (
    <View style={styles.topSong}>
        
        <Skeleton
         animation="none"
         width={155}
         height={150}
         style={{borderRadius:3,backgroundColor:'#212121'}}

        />
        <Skeleton
        
         animation="none"
         width={130}
         height={20}
         style={{borderRadius:3,backgroundColor:'#212121'}}

        />
        <View><Text style={styles.songNameText}>{song.name}</Text></View>
    </View>
  )
}

export default LoadingSong
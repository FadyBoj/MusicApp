import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

import React from 'react'
import styles from '../styles/homeStyles'

const TopArtist = ({ artist }) => {
  return (
    <View style={styles.topArtistImageContainer}>
        
      <View style={{position:'relative',width:'100%',height:'100%'}}>
        <View style={styles.brightness}></View>
        <FastImage
        style={styles.topArtistImage}
        source={{
          uri:artist.image,
          cache:FastImage.cacheControl.immutable
        }}
        />
        <View style={styles.topArtistLabel}><Text style={styles.artistLabelText}>{artist.name}</Text></View>
      </View>

    </View>
  )
}

export default TopArtist
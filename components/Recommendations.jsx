import { View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

import React from 'react'
import styles from '../styles/homeStyles'

const Recommendations = ({ artist }) => {
  return (
    <View style={{gap:28}}>
        <FastImage
        style={styles.recImage}
        source={{
            uri:artist.image,
            cache:FastImage.cacheControl.immutable
        }}
        />
        <View><Text numberOfLines={1} style={styles.recText}>{artist.name}</Text></View>
    </View>
  )
}

export default Recommendations
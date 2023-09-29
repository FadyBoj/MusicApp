import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/homeStyles'

const Recommendations = ({ artist }) => {
  return (
    <View style={{gap:28}}>
        <Image
        style={styles.recImage}
        source={{
            uri:artist.image
        }}
        />
        <View><Text numberOfLines={1} style={styles.recText}>{artist.name}</Text></View>
    </View>
  )
}

export default Recommendations
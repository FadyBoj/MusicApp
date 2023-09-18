import { View, Text } from 'react-native'
import React from 'react'
//Styles
import styles from '../styles/customHeader';

const CustomHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>
    </View>
  )
}

export default CustomHeader
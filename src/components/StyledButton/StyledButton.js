import React from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './styles'

const StyledButton = ({ text, type, onPress }) => {
  const backgroundColor = type === 'primary' ? 'black' : 'white'
  const textColor = type === 'primary' ? 'white' : 'black'

  return (
    <View style={[styles.btnContainer, { backgroundColor }]}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={[styles.btnText, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButton

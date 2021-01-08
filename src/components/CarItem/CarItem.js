import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton/StyledButton'

import styles from './styles'

const CarItem = ({ car: { name, subtitle, image, taglineCTA } }) => {
  const customOrderHandler = () => {}

  const existingInventoryHandler = () => {}

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.mainBg} />

      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {subtitle} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnsBox}>
        <StyledButton
          text="Custom order"
          type="primary"
          onPress={customOrderHandler}
        />
        <StyledButton
          text="Existing inventory"
          type="secondary"
          onPress={existingInventoryHandler}
        />
      </View>
    </View>
  )
}

export default CarItem

import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'

import styles from './styles'

import cars from './cars'

const CarsList = () => {
  return (
    <View style={styles.carsListWrapper}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.name}
        snapToAlignment="start"
        snapToInterval={Dimensions.get('window').height}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  )
}

export default CarsList

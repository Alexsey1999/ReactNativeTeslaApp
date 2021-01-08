import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import CarItem from './src/components/CarItem'
import CarsList from './src/components/CarsList'
import Header from './src/components/Header'

export default function App() {
  return (
    <View>
      <Header />
      <CarsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})

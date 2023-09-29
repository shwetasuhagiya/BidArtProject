import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const HomeTab = () => {
  return (
    <SafeAreaView>
      <Text style={localstyles.fonts}>HomeTab</Text>
    </SafeAreaView>
  )
}
const localstyles=StyleSheet.create({
  fonts:{
    fontFamily:'Urbanist-Bold'
  }
})
export default HomeTab
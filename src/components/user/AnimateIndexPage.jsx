import { StyleSheet, Text, View } from 'react-native'
import  Onboarding from './Onboarding';
import React, {useState} from 'react'

const AnimatePageIndicator = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View>
        <Onboarding 
            total={4}
            selectedIndex={selectedIndex}
            onIndexChange={(index) => setSelectedIndex(index)}
        />
    </View>
  )
}

export default AnimatePageIndicator

const styles = StyleSheet.create({})
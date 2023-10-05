import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextExample = () => {
  return (
    <Text>
      <Text style={styles.l}>L</Text>
      <Text style={styles.orem}>orem ipsum dolor sit amet, sed do eiusmod. Utenim ad </Text>
      <Text style={styles.minim}>minim</Text>
      <Text style={styles.orem}> veniam, quis aliquip ex ea commodo consequat.</Text>
      <Text style={styles.Duis}>Duis aute irude dolor in reprehenderit in voluptate velit esse cillum.</Text>
      <Text style={styles.Excepteur}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official deserunt mollit anim id est laborum.</Text>
    </Text>
  )
}

export default TextExample

const styles = StyleSheet.create({
    l:{
        fontSize: 20,
        color: 'red',
    },
    orem:{
        fontSize: 20,
        color: '#6DD8F6',
    },
    minim:{
        fontSize: 20,
        color: 'black',
    },
    Duis:{
        fontSize: 20,
        color: '#7cafbc',
    },
    Excepteur:{
        fontSize: 20,
        color: '#6DD8F6',
        textShadowColor: 'red',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 20,
    },
})
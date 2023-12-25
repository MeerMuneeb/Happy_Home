import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput style={styles.search} placeholder="Search Properties" placeholderTextColor="#0008"/>
      </View>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  search:{
    backgroundColor: '#F0F5FF',
    marginHorizontal: 20,
    height: 35,
    borderRadius: 35 / 2,
  },
  headerContainer:{
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F5FF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', 
  },
});

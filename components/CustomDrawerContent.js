import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header with account picture, name, and email */}
      <View style={styles.drawerHeader}>
        <Image
          source={require('../images/account-picture.png')} // Replace with your image source
          style={styles.accountPicture}
        />
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>John Doe</Text>
          <Text style={styles.accountEmail}>john.doe@example.com</Text>
        </View>
      </View>
      {/* Drawer content */}
      <View style={{ flex: 1 }}>
        {props.state.routeNames.map((route, index) => (
          <Drawer.Item
            key={index}
            label={route}
            onPress={() => props.navigation.navigate(route)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#28246A',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountPicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountEmail: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default CustomDrawerContent;
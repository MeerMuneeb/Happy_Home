import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Properties from './screens/Properties';
import Profile from './screens/Profile';
import Chats from './screens/Chats';
import AddProperty from './screens/AddProperty';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
            {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              position: 'absolute',

            }
          ],        
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let labelStyle;

          if (route.name === 'Home') {
            iconSource = require('./images/home.png');
          } else if (route.name === 'Chats') {
            iconSource = require('./images/chat.png');
          } else if (route.name === 'Gallery') {
            iconSource = require('./images/gallery.png');
          } else if (route.name === 'Profile') {
            iconSource = require('./images/profile.png');
          }

          if (focused) {
            labelStyle = {
              color: '#000',
              fontFamily: 'Poppins',
              fontSize: 10,
              fontWeight: 'medium',
            };
          } else {
            labelStyle = { display: 'none' };
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={{
                  width: 18,
                  height: 18,
                  opacity: focused ? 1 : 0.4,
                }}
              />
              <Text style={labelStyle}>{route.name}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }}/>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen
        name=" "
        component={AddProperty}
        options={{
          tabBarIcon: () => (
            <View style={styles.plusIcon}>
              <Image
                source={require('./images/plus.png')}
                style={styles.icon}
              />
            </View>
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen name="Gallery" component={Properties} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homee" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopWidth: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 27,
    height: 27,
  },
  plusIcon: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    overflow: 'hidden',
    backgroundColor: '#28246A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 6,
  },
});

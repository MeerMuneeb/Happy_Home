import * as React from 'react';
import { View, Text } from 'react-native';
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
    <Tab.Navigator>
      <Tab.Screen name="HomeDrawer" component={HomeDrawer} options={{ headerShown: false }}/>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name=" " component={AddProperty} />
      <Tab.Screen name="Gallery" component={Properties} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
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

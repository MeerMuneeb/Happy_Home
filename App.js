import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Properties from './screens/Properties';
import Profile from './screens/Profile';
import Chats from './screens/Chats';
import AddProperty from './screens/AddProperty';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Add your profile picture, name, and email here */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./images/account-picture.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>your.email@example.com</Text>
        </View>
      </View>
      <DrawerItem
        label="Home"
        icon={() => (
          <Image
            source={require('./images/drawerhome.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="My Properties"
        icon={() => (
          <Image
            source={require('./images/drawerproperties.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('MyProperties')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Flats/Appartments"
        icon={() => (
          <Image
            source={require('./images/drawerflats.png')}
            style={{...styles.drawerIcon, }}
          />
        )}
        onPress={() => props.navigation.navigate('Flats')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Villas"
        icon={() => (
          <Image
            source={require('./images/drawervillas.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Villas')}
        labelStyle={styles.drawerLabel}
      />
      <View style={styles.blank}/>
      <DrawerItem
        label="Messages"
        icon={() => (
          <Image
            source={require('./images/drawerchats.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Messages')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Settings"
        icon={() => (
          <Image
            source={require('./images/drawersetting.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Settings')}
        labelStyle={styles.drawerLabel}
      />
      
      <View style={styles.blank}/>
      <DrawerItem
        label="Logout"
        icon={() => (
          <Image
            source={require('./images/drawerlogout.png')}
            style={styles.drawerIcon}
          />
        )}
        onPress={() => props.navigation.navigate('Logout')}
        labelStyle={styles.drawerLabel}
      />
    </DrawerContentScrollView>
  );
}
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
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Properties" component={HomeScreen} />
      <Drawer.Screen name="Flats/Appartments" component={HomeScreen}/>
      <Drawer.Screen name="Villas" component={HomeScreen}/>
      <Drawer.Screen name="Messages" component={HomeScreen}/>
      <Drawer.Screen name="Setting" component={HomeScreen}/>
      <Drawer.Screen name="Logout" component={HomeScreen}/>
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
  blank:{
    height: 25,
  },
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
  profileContainer: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    margin: 20
  },
  profileImage: {
    width: 46,
    height: 46,
    borderRadius: 40,
    margin: 5
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#324054',
  },
  profileEmail: {
    fontSize: 12,
    color: 'gray',
  },  
  drawerIcon: {
    width: 23.017,
    height: 23.017,   
    marginStart: 20 
  },
  drawerLabel: {
    color: '#324054',
    fontFamily: 'Poppins',
    fontSize: 14.998,
  },
});

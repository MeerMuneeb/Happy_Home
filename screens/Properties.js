import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SortButton from '../components/SortButton';
import GallerySlider from '../components/GallerySlider';
import Gallery1 from './Gallery';
import firestore from '@react-native-firebase/firestore';


const Stack = createStackNavigator();

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState()

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Properties')
      .onSnapshot(querySnapshot => {
        const propertiesData = [];
        querySnapshot.forEach(doc => {
          propertiesData.push({ id: doc.id, ...doc.data() });
        });
        setProperties(propertiesData);
      });

    return () => unsubscribe();
  }, []);

  const handleSort = (isAscending) => {
    // Handle sorting logic based on the current order (isAscending)
    console.log('Sorting order:', isAscending ? 'Ascending' : 'Descending');
  };

  // const slides2 = [
  //   {
  //     image: require('../images/SliderImg1.png'),
      
  //     price: '1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  //   {
  //     image: require('../images/SliderImg1.png'),
  //     height: 210,
  //     width: 152,
  //     collapse: true,
  //     borderRadius: 10,
  //     price: '$1000',
  //     title: '4 Villa flat is awesome and awesome and awesome',
  //     location: 'New York',
  //     date: '12/12/2020',
  //     time: '10:00 AM',
  //   },  
  // ];

  const goToGallery1 = () => {
    navigation.navigate('House Gallery');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="PropertiesScreen" component={PropertiesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="House Gallery" component={Gallery1} />
      {/* <Stack.Screen name="House Gallery" component={Favourites} /> */}
    </Stack.Navigator>
  );

  function PropertiesScreen(){
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headingPortion}>
            <Text style={styles.headerText}>My Properties</Text>            
            <Image source={require('../images/setting.png')} style={styles.arrowIcon} />
          </View>
          <View style={styles.search}>
            <View style={styles.searchIcon}><Image source={require('../images/mg.png')}/></View>
            <TextInput
              style={styles.searchField}
              placeholder="Search Properties"
              placeholderTextColor="#0008"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={goToGallery1}>
              <Text style={styles.buttonText}>Go to Gallery  </Text>
              <Image source={require('../images/back.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentContainer}>  
          <View style={styles.topButtons}>  
            <SortButton onPress={handleSort} />
            <TouchableOpacity>
              <Image source={require('../images/filter.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.slideContainer}>                  
            <FlatList         
              contentContainerStyle={styles.flatListContainer}   
              data={properties ? properties.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ) : []}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2} 
              renderItem={({ item }) => <GallerySlider
                id={item.id}
                image={item.image}
                height={210}
                width={152}
                collapse={true}
                borderRadius={10}
                price={item.price.toString()}
                title={item.title}
                location={item.location}
                date={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleDateString() : ''}
                time={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleTimeString() : ''}/>
              }
              ItemSeparatorComponent={() => <View style={styles.blank}/>}
            />    
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingPortion:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingBottom: 70, 
    justifyContent: 'center'
  },
  headerText: {
    color: '#000',
    fontFamily: 'Poppins-Black',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  blank: {
    height: 10,
  },
  slideContainer:{
    flexDirection: 'row',
    marginTop: 15,
  },
  topButtons:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 15,
  },
  btn:{
    alignItems: 'flex-end',
    marginEnd: 20,
  },
  logoContainer:{
    flexDirection: 'row',
    alignItems: 'center',    
  },
  search:{
    backgroundColor: '#F0F5FF',
    marginHorizontal: 20,
    height: 35,
    borderRadius: 35 / 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  searchField:{
    backgroundColor: '#F0F5FF',
    color: '#000',
    paddingVertical: 5
  },
  searchIcon:{
    padding: 5
  },
  headerContainer:{
    backgroundColor: '#fff',
    elevation: 5
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
  button: {
    backgroundColor: '#28246A', 
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    width: 115,
    height: 25.5,
    padding: 3,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12.5,
    fontWeight: 'normal',
  },
  arrowIcon: {
    width: 18, 
    height: 18, 
    resizeMode: 'contain',
  },
});

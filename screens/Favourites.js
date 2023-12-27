import React from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SortButton from '../components/SortButton';
import GallerySlider from '../components/GallerySlider';

const Stack = createStackNavigator();

export default function Favourites() {

  const handleSort = (isAscending) => {
    // Handle sorting logic based on the current order (isAscending)
    console.log('Sorting order:', isAscending ? 'Ascending' : 'Descending');
  };

  const slides2 = [
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 152,
      sliderNoBg: true,
      borderRadius: 10,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 152,
      sliderNoBg: true,
      borderRadius: 10,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 152,
      sliderNoBg: true,
      borderRadius: 10,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 152,
      sliderNoBg: true,
      borderRadius: 10,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 152,
      sliderNoBg: true,
      borderRadius: 10,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
      location: 'New York',
      date: '12/12/2020',
      time: '10:00 AM',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{...styles.search, marginBottom: 30}}>
          <View style={styles.searchIcon}><Image source={require('../images/mg.png')}/></View>
          <TextInput style={styles.searchField} placeholder="Search Properties" placeholderTextColor="#0008"/>
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
            data={slides2}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2} 
            renderItem={({ item }) => <GallerySlider {...item} />}
            ItemSeparatorComponent={() => <View style={styles.blank}/>}
          />    
        </View>
      </View>
    </View>
  );
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
    paddingBottom: 80, 
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

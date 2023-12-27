import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import SortButton from '../components/SortButton';
import GallerySlider from '../components/GallerySlider';


export default function Gallery1() {
  const [activeButton, setActiveButton] = useState('Flats/Appartments'); 

  const switchActiveButton = () => {
    setActiveButton((prev) => (prev === 'Flats/Appartments' ? 'Villas' : 'Flats/Appartments'));
  };

  const handleSort = (isAscending) => {
    // Handle sorting logic based on the current order (isAscending)
    console.log('Sorting order:', isAscending ? 'Ascending' : 'Descending');
  };

  const flatsData = [
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

  const villasData = [
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 320,
      overlayText: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
    },    
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 320,
      overlayText: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
    },
    {
      image: require('../images/SliderImg1.png'),
      height: 210,
      width: 320,
      overlayText: true,
      price: '$1000',
      title: '4 Villa flat is awesome and awesome and awesome',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.search}>
          <View style={styles.searchIcon}><Image source={require('../images/mg.png')}/></View>
          <TextInput style={styles.searchField} placeholder="Search Properties" placeholderTextColor="#0008"/>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={[styles.switchBtn, {borderBottomWidth: activeButton === 'Flats/Appartments' ? 2 : 0, borderBottomColor: '#000'}]} onPress={switchActiveButton}>
            <Text style={[styles.buttonText,
                {
                  paddingVertical: 5, 
                  ...(activeButton === 'Flats/Appartments'
                    ? { color: '#000', fontFamily: 'Poppins-Black', fontWeight: 'bold' }
                    : { color: 'rgba(0, 0, 0, 0.50)', fontFamily: 'Poppins-Regular', fontWeight: 'normal' }),
                },
              ]
            }>Flats/Appartments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.switchBtn, {borderBottomWidth: activeButton === 'Villas' ? 2 : 0, borderBottomColor: '#000'}]} onPress={switchActiveButton}>
            <Text style={[styles.buttonText,
                {
                  paddingVertical: 5, 
                  ...(activeButton === 'Villas'
                    ? { color: '#000', fontFamily: 'Poppins-Black', fontWeight: 'bold' }
                    : { color: 'rgba(0, 0, 0, 0.50)', fontFamily: 'Poppins-Regular', fontWeight: 'normal' }),
                },
              ]
            }>Villas</Text>
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
          {activeButton === 'Flats/Appartments' ? (
            <FlatList
              contentContainerStyle={styles.flatListContainer}
              data={flatsData}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              renderItem={({ item }) => <GallerySlider {...item} />}
              ItemSeparatorComponent={() => <View style={styles.blank} />}
              key={activeButton}
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.flatListContainer}
              data={villasData}
              keyExtractor={(item, index) => index.toString()}              
              renderItem={({ item }) => <GallerySlider {...item} />}
              ItemSeparatorComponent={() => <View style={styles.blank2} />}
              key={activeButton}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 80, 
  },
  blank: {
    height: 10,
  },
  blank2: {
    height: 15,
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
    flexDirection: 'row',
    marginVertical: 17,
    marginHorizontal: 20,
    justifyContent: 'space-around'
    
  },
  switchBtn: {
    paddingHorizontal: 10,
    justifyContent: 'center',
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

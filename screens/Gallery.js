import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import SortButton from '../components/SortButton';
import GallerySlider from '../components/GallerySlider';
import firestore from '@react-native-firebase/firestore';

export default function Gallery1() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeButton, setActiveButton] = useState('Flats/Appartments');
  const [flatsData, setFlatsData] = useState([]);
  const [villasData, setVillasData] = useState([]);

  useEffect(() => {
    const unsubscribeFlats = firestore()
      .collection('Properties')
      .where('Category', '==', 'Flat')
      .onSnapshot(querySnapshot => {
        const flatsData = [];
        querySnapshot.forEach(doc => {
          flatsData.push({ id: doc.id, ...doc.data() });
        });
        setFlatsData(flatsData);
      });

    const unsubscribeVillas = firestore()
      .collection('Properties')
      .where('Category', 'in', ['Villa', 'House'])
      .onSnapshot(querySnapshot => {
        const villasData = [];
        querySnapshot.forEach(doc => {
          villasData.push({ id: doc.id, ...doc.data() });
        });
        setVillasData(villasData);
      });

    return () => {
      unsubscribeFlats();
      unsubscribeVillas();
    };
  }, []);

  const switchActiveButton = () => {
    setActiveButton((prev) => (prev === 'Flats/Appartments' ? 'Villas' : 'Flats/Appartments'));
  };

  const handleSort = (isAscending) => {
    // Handle sorting logic based on the current order (isAscending)
    console.log('Sorting order:', isAscending ? 'Ascending' : 'Descending');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.search}>
          <View style={styles.searchIcon}><Image source={require('../images/mg.png')}/></View>
          <TextInput
            style={styles.searchField}
            placeholder="Search Gallery"
            placeholderTextColor="#0008"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
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
              data={flatsData ? flatsData.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ) : []}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              renderItem={({ item }) => <GallerySlider
                id={item.id}  
                image={item.image}
                height={210}
                width={152}
                sliderNoBg={true}
                borderRadius={10}
                price={item.price.toString()}
                title={item.title}
                location={item.location}
                date={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleDateString() : ''}
                time={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleTimeString() : ''}/>
              }
              ItemSeparatorComponent={() => <View style={styles.blank} />}
              key={activeButton}
            />
          ) : (
            <FlatList
              contentContainerStyle={styles.flatListContainer}
              data={villasData ? villasData.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ) : []}
              keyExtractor={(item, index) => index.toString()}              
              renderItem={({ item }) => <GallerySlider
                id={item.id}
                image={item.image}
                height={210}
                width={320}
                overlayText={true}
                borderRadius={10}
                price={item.price.toString()}
                title={item.title}
                location={item.location}
                date={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleDateString() : ''}
                time={item.date && item.date.seconds ? new Date(item.date.seconds * 1000).toLocaleTimeString() : ''}/>
              }
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
    justifyContent: 'center'
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

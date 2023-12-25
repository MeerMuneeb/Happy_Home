import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeSlider = ({ image, heading, description, onPress }) => (
  <View style={styles.imageContainer}>
    <ImageBackground source={image} style={styles.imageBackground}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.descText}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Start Now  </Text>
              <Image source={require('../images/back.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
  
);

const styles = StyleSheet.create({  
  imageContainer: {
    height: 200
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    marginLeft: 165,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 40,
  },
  heading: {
    color: '#FFF',
    textAlign: 'right',
    fontFamily: 'Poppins-Black',
    fontSize: 17.5,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },  
  description: {
    color: '#FFF',
    textAlign: 'right',
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'semibold',
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#28246A', 
    padding: 5,
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  arrowIcon: {
    width: 20, 
    height: 20, 
    resizeMode: 'contain',
  },
});

export default HomeSlider;

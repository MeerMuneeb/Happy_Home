import React from 'react';
import { Modal, Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeSlider2 = ({ image, height, width, overlayText, text }) => (
  <TouchableOpacity style={{...styles.imageContainer, height: height, width: width}}>   
    <ImageBackground source={{uri:image}} style={styles.imageBackground}>
    {overlayText && (
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayText} numberOfLines={1}>{text}</Text>
            <Image source={require('../images/play.png')}/>
          </View>
        </View>
      )}
    </ImageBackground>
  </TouchableOpacity>  
);

const styles = StyleSheet.create({  
  imageContainer: {
    marginRight: 12,
    borderRadius: 10, 
    overflow: 'hidden', 
    elevation: 10
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    justifyContent: 'center',
    height: 30,
    bottom: 0,
    right: 0,
    left: 0,
  },
  overlayContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  overlayText: {
    color: '#FFF',
    fontFamily: 'Arial',
    fontSize: 12.5,
    marginRight: 10,
  },
});

export default HomeSlider2;

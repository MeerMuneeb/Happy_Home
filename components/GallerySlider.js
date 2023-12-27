import React from 'react';
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const GallerySlider = ({ image, height, width, overlayText, sliderBg, sliderNoBg, collapse, elevation, price, title, location, date, time, borderRadius}) => (
  <TouchableOpacity style={{...styles.imageContainer, height: height, width: width, elevation: elevation}}>   
    <ImageBackground source={image} style={{...styles.imageBackground, borderRadius: borderRadius, overflow: 'hidden'}}>
      {overlayText && (
        <TouchableOpacity style={styles.settingIcon}>
          <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
      </TouchableOpacity>
      )}
      {overlayText && (          
          <View style={styles.overlay}>
            <View style={styles.overlayContent}>
              <View style={styles.overlayText}>
                <Text style={{...styles.heading, marginTop: -2, color: '#fff'}}>{price}</Text>
                <Text style={{...styles.title, marginTop: -2, color: '#fff'}} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
              </View>
              <TouchableOpacity>
                  <Image source={require('../images/notepad.png')} style={styles.setIcon} />
              </TouchableOpacity>
            </View>
          </View>   
        )}        
    </ImageBackground>
    {sliderBg && (
      <View style={{...styles.imageContent, backgroundColor: '#fff',}}>        
        <TouchableOpacity style={styles.settingIcon}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>{price}</Text>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={{...styles.locDate, justifyContent: 'space-between'}}>
          <View style={styles. locOnly}>
            <Image style={styles.locImg} source={require('../images/loc.png')}/>            
            <Text style={styles.location}>{location}</Text>
          </View>
          <Text style={styles.location}>{date}</Text>
        </View>
      </View>
    )}
    {sliderNoBg && (
      <View style={{...styles.imageContent}}>        
        <TouchableOpacity style={styles.settingIcon}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>{price}</Text>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={styles.locDate}>
          <View style={{...styles. locOnly, justifyContent:'space-between'}}>
            <Image style={styles.locImg} source={require('../images/loc.png')}/>            
            <Text style={styles.location}>{location}</Text>
          </View>
          <Text style={styles.location}>{date}</Text>
        </View>
      </View>
    )}
    {collapse && (
      <View style={{...styles.imageContent}}>        
        <TouchableOpacity style={styles.settingIcon}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
        </TouchableOpacity>
        <Text style={{...styles.heading, paddingEnd: 20, marginTop: -2}} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <View style={styles.locDate}>
          <Text style={{...styles.title, marginTop: -2}}>{date},</Text>
          <Text style={{...styles.title, marginTop: -2}}>{time}</Text>
        </View>
      </View>
    )}
  </TouchableOpacity>  
);

const styles = StyleSheet.create({    
  settingIcon: {
    position: 'absolute',
    top: 12,
    right: 6,
  },
  setIcon: {
    width: 15, 
    height: 15, 
    resizeMode: 'contain',
  },
  imageContent: {
    padding: 8,
  },
  locOnly: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 12.5,
    fontWeight: 'bold',
    paddingLeft: 2,
    marginVertical: 2,
  },
  title: {
    color: 'rgba(60, 60, 67, 0.90)',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingLeft: 2,
    marginVertical: 2,
  },
  locImg: {
    width: 10,
    height: 10,
    marginRight: 3,
  },
  location: {
    color: 'rgba(60, 60, 67, 0.60)',
    fontFamily: 'Poppins',
    fontSize: 8,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  locDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 12,
    borderRadius: 10, 
    overflow: 'hidden', 
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    justifyContent: 'center',
    height: 45,
    right: 0,
    left: 0,
    bottom: 0
  },
  overlayContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  overlayText: {
    width: 250,
  },
});

export default GallerySlider;

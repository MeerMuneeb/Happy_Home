import React, { useState } from 'react';
import { Modal, Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


const SettingsModal = ({ isVisible, onClose, onDelete, propertyTitle }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{propertyTitle}</Text>

          <TouchableOpacity style={styles.modalButton} onPress={onDelete}>
            <Image source={require('../images/delete.png')} style={styles.modalButtonIcon} />
            <Text style={styles.modalButtonText}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.modalButton, justifyContent: 'center', marginTop: 60}} onPress={onClose}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const GallerySlider = ({id, image, height, width, overlayText, sliderBg, sliderNoBg, collapse, elevation, price, title, location, date, time, borderRadius}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDelete = async () => {
    try {
      await firestore().collection('Properties').doc(id).delete();
      console.log('Property deleted successfully');
      toggleModal(); // Close the modal after deletion
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <TouchableOpacity style={{ ...styles.imageContainer, height: height, width: width, elevation: elevation }}>
      <ImageBackground source={{ uri: image || "https://images.pexels.com/photos/6210772/pexels-photo-6210772.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ ...styles.imageBackground, borderRadius: borderRadius, overflow: 'hidden' }}>
        {overlayText && (
          <TouchableOpacity style={styles.settingIcon} onPress={toggleModal}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
          </TouchableOpacity>
        )}
        {overlayText && (
          <View style={styles.overlay}>
            <View style={styles.overlayContent}>
              <View style={styles.overlayText}>
                <Text style={{ ...styles.heading, marginTop: -2, color: '#fff' }}>{price}</Text>
                <Text style={{ ...styles.title, marginTop: -2, color: '#fff' }} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
              </View>
              <TouchableOpacity>
                <Image source={require('../images/notepad.png')} style={styles.setIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ImageBackground>
      {sliderBg && (
        <View style={{ ...styles.imageContent, backgroundColor: '#fff', }}>
          <TouchableOpacity style={styles.settingIcon} onPress={toggleModal}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>{price}</Text>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
          <View style={{ ...styles.locDate, justifyContent: 'space-between' }}>
            <View style={styles.locOnly}>
              <Image style={styles.locImg} source={require('../images/loc.png')} />
              <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.location}>{date}</Text>
          </View>
        </View>
      )}
      {sliderNoBg && (
        <View style={{ ...styles.imageContent }}>
          <TouchableOpacity style={styles.settingIcon} onPress={toggleModal}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>{price}</Text>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
          <View style={{ ...styles.locDate, justifyContent: 'space-between' }}>
            <View style={styles.locOnly}>
              <Image style={styles.locImg} source={require('../images/loc.png')} />
              <Text style={styles.location}>{location}</Text>
            </View>
            <Text style={styles.location}>{date}</Text>
          </View>
        </View>
      )}
      {collapse && (
        <View style={{ ...styles.imageContent }}>
          <TouchableOpacity style={styles.settingIcon} onPress={toggleModal}>
            <Image source={require('../images/dotmenu.png')} style={styles.setIcon} />
          </TouchableOpacity>
          <Text style={{ ...styles.heading, paddingEnd: 20, marginTop: -2 }} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
          <View style={styles.locDate}>
            <Text style={{ ...styles.title, marginTop: -2 }}>{date},</Text>
            <Text style={{ ...styles.title, marginTop: -2 }}>{time}</Text>
          </View>
        </View>
      )}

      <SettingsModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onDelete={handleDelete}
        propertyTitle={title}
      />
    </TouchableOpacity>
  );
};

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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 20% dark overlay
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 270
  },
  modalTitle: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
  },
  modalText: {
    color: '#333',
    fontFamily: 'Poppins',
    fontSize: 14,
    marginBottom: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 15
  },
  modalButtonIcon: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  modalButtonText: {
    color: '#333',
    fontFamily: 'Poppins',
    fontSize: 16,
  },
});

export default GallerySlider;

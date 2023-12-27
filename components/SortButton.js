import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SortButton = ({ onPress }) => {
  const [isAscending, setIsAscending] = useState(true);

  const handleSortPress = () => {
    setIsAscending((prev) => !prev);
    if (onPress) {
      onPress(!isAscending); // Pass the current sorting order to the parent component
    }
  };

  return (
    <TouchableOpacity onPress={handleSortPress} style={styles.buttonContainer}>
    <View style={styles.buttonContent}>
      <Text style={styles.buttonText}>Sort by Date</Text>
      <Image
        source={isAscending ? require('../images/up.png') : require('../images/down.png')}
        style={styles.arrowIcon}
      />
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(60, 60, 67, 0.60)',
    fontFamily: 'Poppins',
    fontSize: 12.5,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 17.69,
    letterSpacing: -0.077,
    marginRight: 5,
  },
  arrowIcon: {
    width: 8.409,
    height: 4.955,
  },
});


export default SortButton;
import React from 'react';
import {Image, StyleSheet} from 'react-native';

const sunny = require('../../assets/sunny.png');
const rainy = require('../../assets/rainy.png');
const thunderstorm = require('../../assets/thunderstorm.png');
const clouds = require('../../assets/cloud.png');

const WeatherPNG = display => {
  switch (display.weather) {
    case 'Sun':
      return <Image source={sunny} style={styles.icon} />;
    case 'Rain':
      return <Image source={rainy} style={styles.icon} />;
    case 'Thunderstorm':
      return <Image source={thunderstorm} style={styles.icon} />;
    case 'Clouds':
      return <Image source={clouds} style={styles.icon} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
  },
});

export default WeatherPNG;

// Divider.js
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Divider = ({margin = 5}) => {
  return (
    <View style={[styles.divider, {marginTop: margin, marginBottom: margin}]} />
  );
};

export default Divider;

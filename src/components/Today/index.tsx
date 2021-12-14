import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DAYS, MONTHS} from './constants';

const Today = () => {
  const date = new Date();
  const today = `${DAYS[date.getDay()]} ${date.getDate()} ${
    MONTHS[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <View>
      <Text style={styles.today}>{today}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  today: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    lineHeight: 40,
  },
});

export default Today;

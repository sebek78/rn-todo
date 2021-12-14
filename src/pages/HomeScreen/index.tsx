import React from 'react';
import {Button, View} from 'react-native';
import Today from '../../components/Today';
import {HomeScreenProps} from '../../types';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Today />
      <Button
        title="Add new todo"
        onPress={() => navigation.navigate('TodoForm')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
export default HomeScreen;

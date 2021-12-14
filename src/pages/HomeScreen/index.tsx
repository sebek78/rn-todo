import React from 'react';
import {Button, View} from 'react-native';
import Today from '../../components/Today';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Today />
      <Button
        title="Add new todo"
        onPress={() => navigation.navigate('TodoForm')}
      />
    </View>
  );
};
export default HomeScreen;

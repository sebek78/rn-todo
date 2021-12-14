import React from 'react';
import {Button} from 'react-native';

const TodoForm = ({navigation}: any) => (
  <Button
    title="Back to todo list"
    onPress={() => navigation.navigate('HomeScreen')}
  />
);

export default TodoForm;

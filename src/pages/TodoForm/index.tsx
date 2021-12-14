import React from 'react';
import {Button} from 'react-native';
import {TodoFormScreenProps} from '../../types';

const TodoForm = ({navigation}: TodoFormScreenProps) => (
  <Button
    title="Back to todo list"
    onPress={() => navigation.navigate('HomeScreen')}
  />
);

export default TodoForm;

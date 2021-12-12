import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TodosList = ({navigation}: any) => (
  <Button
    title="Add new todo"
    onPress={() => navigation.navigate('TodoForm')}
  />
);

const TodoForm = ({navigation}: any) => (
  <Button
    title="Back to todo list"
    onPress={() => navigation.navigate('TodoList')}
  />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen
          name="TodoList"
          component={TodosList}
          options={{title: 'To do:'}}
        />
        <Stack.Screen
          name="TodoForm"
          component={TodoForm}
          options={{title: 'Add new Todo:'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

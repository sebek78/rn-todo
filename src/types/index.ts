import {NativeStackScreenProps} from '@react-navigation/native-stack';

// https://reactnavigation.org/docs/typescript

type RootStackParamList = {
  HomeScreen: undefined;
  TodoForm: undefined;
  Settings: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

export type TodoFormScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TodoForm'
>;

import React from 'react';
import {Button} from 'react-native';
import {SettingsScreenProps} from '../../types';

const Settings = ({navigation}: SettingsScreenProps) => (
  <Button
    title="Back to todo list"
    onPress={() => navigation.navigate('HomeScreen')}
  />
);

export default Settings;

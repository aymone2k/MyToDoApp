import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function App() {
  //mettre un use effect ici pour mise à jour ..., 
  return (
    <View style={styles.container}>
      <Text>LA TODO LIST </Text>
      <AddTask/>
      <TaskList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

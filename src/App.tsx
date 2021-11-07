import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import TodoList from './TodoList';

const App = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.root}>
        <TodoList />
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default App;

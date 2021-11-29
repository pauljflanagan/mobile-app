import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* <Button
        color='orange'
        title='clickme' 
        onPress={() => Alert.alert("my title", 'my message', [
          {text: 'Yes', onPress: () => console.log('yes')},
          {text: 'No', onPress: () => console.log('no')}
        ])}/> */}
      <Button title='clickme'
        onPress={() => 
          Alert.prompt("my title", "my message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

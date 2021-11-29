import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, 
        TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback,
        Image, SafeAreaView } from 'react-native';

export default function App() {
  let x=1;
  console.log("App executed");

  const handlePress = () => {
    console.log('TextClicked')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={x} onPress={handlePress}>Hello World! - A really long text. Now I wanna make this even longer 
        and see what happens</Text>
        {/* <TouchableWithoutFeedback onPress={() => console.log('Image tapped')}> 
          <Image
            blurRadius={10}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"}}/>
        </TouchableWithoutFeedback> */}
        {/* <TouchableOpacity onPress={() => console.log('Image tapped')}> 
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"}}/>
        </TouchableOpacity> */}
        {/* <TouchableHighlight onPress={() => console.log('Image tapped')}> 
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"}}/>
        </TouchableHighlight> */}
        <TouchableNativeFeedback onPress={() => console.log('Image tapped')}> 
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"}}/>
        </TouchableNativeFeedback>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, {useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';

export default function App() {
  const inputRef = useRef(null);
  const i = 4
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity onPress={() => inputRef.current.open()} style={styles.btn} ><Text>test</Text></TouchableOpacity>
      <Modal style={{ height: 30 + 80 * i, justifyContent: 'flex-start', alignItems: 'flex-start' }} position={"bottom"} ref={inputRef}>
        <View style={{height: 30, width: '100%', backgroundColor: 'red'}} />
        <TouchableOpacity style={{height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1,}}><Text>Modal on bottom with backdrop</Text></TouchableOpacity>
        <TouchableOpacity style={{height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1,}}><Text>Modal on bottom with backdrop</Text></TouchableOpacity>
        <TouchableOpacity style={{height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1,}}><Text>Modal on bottom with backdrop</Text></TouchableOpacity>
        <TouchableOpacity style={{height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1,}}><Text>Modal on bottom with backdrop</Text></TouchableOpacity>
        <TouchableOpacity style={{height: 80, borderBottomColor: '#ccc', borderBottomWidth: 1,}}><Text>Modal on bottom with backdrop</Text></TouchableOpacity>
      </Modal>
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
  modal: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

});

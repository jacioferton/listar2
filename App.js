import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import api from './src/api';

export default function App() {
  const [DATA, setDATA] = useState({})

  async function listar(){
    try {
      const response = await api.get('')
      console.log(response)
      setDATA(response)
    } catch (error) {
      
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Inserir Nome</Text>
      <TextInput style={styles.ipt}></TextInput>
      <Pressable style={styles.btn} onPress={listar}>
        <Text style={styles.txtBtn}>Inserir</Text>
      </Pressable>

      <Text style={styles.title}>Lista de Nome</Text>
      {/* <FlatList
        data={DATA}
        renderItem={}
        keyExtractor={}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  ipt: {
    borderWidth: 1,
    width: '80%',
    height: 30,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: '#000000',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 6
  },
  txtBtn: {
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet
} from 'react-native';

const DataDiri = ({ navigation }) => {
  const [nama, setNama] = useState('');
  const [hobi, setHobi] = useState('');

  const handleSimpan = () => {
    // Simpan data nama dan hobi ke penyimpanan atau state aplikasi
    // Misalnya: simpan ke AsyncStorage atau Redux state

    // Kemudian arahkan ke halaman beranda dengan membawa data pengguna
    navigation.navigate('Home', { namaPengguna: nama });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textRed}>Isi Nama :</Text>
      <TextInput
        style={[styles.input, { color: 'blue' }]} // Ganti warna teks menjadi biru
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />
      <Text style={styles.textRed}>Hobi :</Text>
      <TextInput
        style={[styles.input, { color: 'blue' }]} // Ganti warna teks menjadi biru
        placeholder="Hobi"
        value={hobi}
        onChangeText={(text) => setHobi(text)}
      />
      <Button title="Simpan" onPress={handleSimpan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textRed: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red', // Mengubah warna teks menjadi merah
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
});

export default DataDiri;
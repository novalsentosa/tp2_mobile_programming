/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function HalamanHome({ route }){
  const { namaPengguna } = route.params || {}; // Mengambil nama pengguna dari parameter rute

  return (
    <View style={styles.container}>
      <Text style={[styles.blackText, styles.rightAlign]}>
        {namaPengguna}
      </Text>
      {/* <Text style={styles.blackText}>Selamat datang pada aplikasi ini</Text> */}
      {/* Tambahkan media atau konten tambahan jika diperlukan */}
      <Text style={[styles.blackText, styles.fontSize]}>
        {namaPengguna ? `Selamat datang, ${namaPengguna}!` : 'Selamat datang pada aplikasi ini'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  blackText: {
    color: 'black',
    padding : 20
  },
  rightAlign: {
    textAlign: 'right',
    padding : 10
  },
  fontSize: {
    fontSize: 20,
  },
});
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function ProductDetail(props: any) {

  return (
    <View style={styles.container}>
      <View>
        <Text>$ 99.9</Text>
        <Text>Biore | Sun UV</Text>
      </View>
      <View style={styles.wrapperBtnCart}>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <Text>Masukkan Keranjang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  wrapperBtnCart: {
    backgroundColor: 'aqua',
    paddingVertical: 20,
  },
});

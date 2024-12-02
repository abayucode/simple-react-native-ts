import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductCard(props: any) {

  const navigation = useNavigation();

  const { data } = props;

  const handleClickProduct = () => {
    navigation.navigate("ProductDetail");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClickProduct}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.productImage}
          source={{ uri: data.thumbnail }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.wrapperTxt}>
        <Text style={styles.txtTitleProduct}>{data.brand} | {data.title}</Text>
        <Text style={styles.txtPriceProduct}>$.{data.price}</Text>
        <View style={styles.wrapperRating}>
          <Image
            style={styles.imgRating}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/276/276020.png' }}
          />
          <Text style={styles.txtRating}>{data.rating} Rating</Text>
        </View>
        <Text style={styles.txtStock}>Tersedia {data.stock}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: '45%',
    paddingHorizontal: 15,
  },

  productImage: {
    width: 100,
    height: 150,
    alignSelf: 'center',
  },

  txtTitleProduct: {
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 12,
  },

  txtPriceProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 7,
  },

  wrapperTxt: {
    // paddingLeft: 10,
  },

  wrapperImage: {
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: '#272727',
    borderWidth: 0.5,
    marginBottom: 10,
  },

  wrapperRating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },

  imgRating: {
    width: 15,
    height: 15,
    marginRight: 10,
  },

  txtRating: {
    fontSize: 14,
    paddingLeft: 7,
    borderLeftWidth: 0.7,
    borderColor: '#272727',
    fontWeight: '400',
  },

  txtStock: {
    fontSize: 14,
  },
});

import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from '../../interface/RouteTabInterface';
import ProductCard from '../productCard';
import { getAllProductRequest } from '../../features/products/productSlice';
import { RootState } from '../../redux/store';

export default function ListProduct(props: Route) {

  const { result, loading, error } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  const [products, setProducts] = React.useState([{}]);

  const handleGetProducts = React.useCallback(() => {
    dispatch(getAllProductRequest(props.slug));
  }, []);

  React.useEffect(() => {
    handleGetProducts();
  }, []);

  React.useEffect(() => {
    setProducts(result.products);
  }, [result]);

  const renderProductCard = () => {
    if (products) {
      return products.map((item, key) => (
        <ProductCard key={item.id} data={item} />
      ));
    }

    return null;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {renderProductCard()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
});



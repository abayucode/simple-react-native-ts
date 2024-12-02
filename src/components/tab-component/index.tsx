import * as React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { TabView } from 'react-native-tab-view';
import ListProduct from '../listProduct';
import { Route } from '../../interface/RouteTabInterface';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductCategoryRequest } from '../../features/productCategory/productCategorySlice';
import { RootState } from '../../redux/store';

export default function Tab() {

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { slug: '', name: '', url: '', key: '0' },
    { slug: '', name: '', url: '', key: '1' },
  ]);

  const dispatch = useDispatch();

  const { result, loading, error } = useSelector((state: RootState) => state.productCategory);

  const dispatchProductCategory = React.useCallback(() => {
    dispatch(getAllProductCategoryRequest());
  }, [dispatch]);

  React.useEffect(() => {
    dispatchProductCategory();
  }, [dispatchProductCategory]);

  React.useEffect(() => {
    if (Array.isArray(result)) {
      setRoutes(result.map((item: any, iterator: number) => ({
        name: item.name,
        slug: item.slug,
        url: item.url,
        key: iterator.toString(),
      })));
    }
  }, [result]);


  const renderScene = React.useCallback(
    ({ route }: { route: Route }) => {

      if (route.key !== index.toString()) {
        return null;
      }

      return <ListProduct
        url={route.url}
        name={route.name}
        slug={route.slug}
        key={route.key}
      />;
    }, [index]
  );

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: number) => i);

    return (
      <View style={styles.tabBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {props.navigationState.routes.map((route: any, i: number) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex: any) =>
                inputIndex === i ? 1 : 0.5
              ),
            });

            return (
              <TouchableOpacity
                key={i}
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Animated.Text style={[{ opacity }, styles.txtTabName]}>{route.name}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      lazy
    />
  );
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#002343',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white',
    elevation: 3,
  },
  tabItem: {
    alignItems: 'center',
    padding: 16,
  },

  txtTabName: {
    fontSize: 16,
    fontWeight: '500',
  },

});

import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme } from 'react-native';
import Tab from './components/tab-component';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default function Page(params: any) {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.titleContent}>Product Trending Gen Z</Text>
      <Tab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleContent: {
    color: '#263238',
    paddingLeft: 11,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
});


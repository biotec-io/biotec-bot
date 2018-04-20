import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#233978"
          centerComponent={{ text: 'BiotecBot', style: { color: '#fff' } }}
        />
      </View>
    );
  }
}

export default App;

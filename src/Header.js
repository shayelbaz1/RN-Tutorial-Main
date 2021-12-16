import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Tutorial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 80,
    paddingBottom: 10,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;

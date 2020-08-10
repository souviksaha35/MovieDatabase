import React, { Component } from 'react'
import {View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import BackIcon from '../component/Utils/BackIcon';


export default class MovieDetailsScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.mainView}>
        <ScrollView style={styles.scrollview} contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar translucent backgroundColor={"transparent"}/>
        </ScrollView>
        <BackIcon navigation={navigation} style={{ marginLeft: 5, position: "absolute", top: 40 }} color={'#ffffff'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    scrollview: {
      backgroundColor: '#ffffff',
      flexGrow: 1,
    }
});
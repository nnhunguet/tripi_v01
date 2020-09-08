import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useSelector } from 'react-redux'

export default function GolobalLoading() {
  const loading = useSelector(state => state.loadingReducer.status);
  console.log(loading);
  if(loading) {
    console.log(2);
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/loading.gif')} style={styles.image}/>
      </View>
    )
  }
  return (
    <View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    zIndex: 99,
  },
})
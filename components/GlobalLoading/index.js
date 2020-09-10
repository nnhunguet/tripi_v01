import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux'

export default function GolobalLoading() {
  const loading = useSelector(state => state.loadingReducer.status);
  if(loading) {
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
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  image: {
    width: "60%",
  }
})
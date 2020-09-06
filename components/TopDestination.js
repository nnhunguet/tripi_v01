import React from 'react';
import { 
  View, 
  Image, 
  Text, 
  StyleSheet 
} from 'react-native'; 

export default function TopDestination() {
  return (
    <View style={styles.city_scrollView}>
      <Image style={styles.city_img} source={require('../assets/Ha_Noi.jpg')}/>
      <View style={styles.city_img_background}>
        <Text style={styles.city_name}>Hà Nội</Text> 
        <Text style={styles.city_hotel}>3557 khách sạn</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  city_scrollView: {
    marginLeft: 10
  },
  city_img: { 
    height: 100, 
    width: 150, 
    borderRadius: 10
  },
  city_img_background: {
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
    position: 'absolute', 
    borderRadius: 10
  },
  city_name: {
    position: 'absolute', 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    left: 5, 
    bottom: 23
  },
  city_hotel: { 
    color: 'white', 
    position: 'absolute', 
    left: 5, 
    bottom: 4
  },
})
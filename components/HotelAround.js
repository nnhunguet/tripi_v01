import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import { FontAwesome } from 'react-native-vector-icons';

export default function HotelAround(){
  return(
    <>
    <View style={styles.suggestion_first}>
      <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
      <View style={styles.suggestion_img_background}>
        <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
        <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
        </View>
        <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
      </View>
      <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
        <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
      </View>
    </View>
    <View style={styles.suggestion_scrollView}>
      <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
      <View style={styles.suggestion_img_background}>
        <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
        <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
        </View>
        <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
      </View>
      <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
        <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
      </View>
    </View>
    <View style={styles.suggestion_scrollView}>
      <Image style={styles.suggestion_img} source={require('../assets/Ha_Noi.jpg')}/>
      <View style={styles.suggestion_img_background}>
        <Text style={styles.suggestion_name}>Cereja Hotel {'&'} Resort Đà Lạt by</Text> 
        <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 20}}>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <FontAwesome name="star" size={13} color="orange" style={{paddingRight: 1}}/>
          <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: 'grey'}}>9.0</Text>
        </View>
        <Text style={{fontSize: 12, color: 'grey', paddingLeft: 10, marginTop: 10, paddingBottom: 10}}>73 Trương Định, Quận 3, Hồ Chí Minh</Text>
      </View>
      <View style={{justifyContent: "center", borderTopColor: '#111', borderTopWidth: 0.5, height: 62}}>
        <Text style={{textAlign: "right", fontSize: 10, paddingRight: 12}}>Nhập mã X_force còn 933.000 đ</Text>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  suggestion_first: {
    marginLeft: 10,
    height: 300,
    borderColor: 'grey',
    borderRadius: 12,
    borderWidth: 1,
  },
  suggestion_scrollView: {
    marginLeft: 20,
    height: 300,
    borderColor: 'grey',
    borderRadius: 12,
    borderWidth: 1,
  },
  suggestion_footer: {
    flexDirection: 'row', 
    margin: 10, 
    alignItems: "center"
  },
  suggestion_img: {
      height: 150, 
      width: 240, 
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
  },
  suggestion_name: {
    fontWeight: 'bold', 
    fontSize: 14, 
    bottom: - 10,
    left: 10,
  },
  suggestion_hotel: { 
    left: 5, 
  },
})
import React from 'react';
import { 
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

export default function Card({ navigation }){
  return(
    <View style={styles.container}>
      <View style={styles.wrapText}>
        <Text style={styles.textName}>
          {/* name */}
          Amada
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        >
          <Text styles={styles.textEditProfile}>
            View and edit profile
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapAvatar}>
        <Image  
          source={{uri: 'https://64.media.tumblr.com/ee4b87f321586d31ce7a47f569a8e843/6a593c63d383a532-9d/s1280x1920/f44dba1bf399195292f2b1a02a707dc28e28ef97.jpg'}}
          style={styles.avatar}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 60,
  },
  wrapText: {
    justifyContent: 'center'
  },
  textName: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  textEditProfile: {
    fontSize: 28,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius:  50,
    resizeMode: 'cover',
  }
})

import React from 'react';

import { 
  View, 
  Text, 
  StyleSheet,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { 
  PADDING,
  ACCOUNT 
} from '../constants';
import ListItems from '../components/ListItems';

export default function EditProfile(){
  return(
    <View style={styles.container}>
      <Text style={styles.textEditProfile}>
        Edit Profile
      </Text>
      <View style={styles.wrapAvatar}>
        <Image  
          source={{uri: 'https://64.media.tumblr.com/ee4b87f321586d31ce7a47f569a8e843/6a593c63d383a532-9d/s1280x1920/f44dba1bf399195292f2b1a02a707dc28e28ef97.jpg'}}
          style={styles.avatar}
        />
      </View>
      <ListItems data={ACCOUNT}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING*2,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius:  90,
    resizeMode: 'cover',
  },
  textEditProfile: {
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 8,
  },
  wrapAvatar: {
    alignItems: 'center'
  }
})
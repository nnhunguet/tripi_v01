import * as React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { 
  Text,
  StyleSheet,
} from 'react-native';

import { 
  PADDING, 
  SETTING 
} from '../constants';

import ListItems from '../components/ListItems';
import { ScrollView } from 'react-native-gesture-handler';

export default function Setting(){
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.textSettings}>
        Settings
      </Text>
      <ListItems data={SETTING}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING,
    marginTop: 40,
  },
  textSettings: {
    marginVertical: 12,
    fontSize: 36,
    fontWeight: 'bold',
  }
})
import * as React from 'react';
import { 
  StyleSheet,
} from 'react-native';

import { 
  PADDING, 
  PROFILE 
} from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

import ListItems from '../components/ListItems';
import CardProfile from '../components/CardProfile';

export default function Profile({ navigation }){
  return(
    <ScrollView style={styles.container}>
      <CardProfile navigation={navigation} />
      {
        <ListItems data={PROFILE} navigation={navigation}/>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: '#fff',
  },
})
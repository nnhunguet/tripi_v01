import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';
import { 
  FlatList, 
  TouchableOpacity 
} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
function Item({ item, navigation }){
  return (
    <TouchableOpacity
      onPress={ () => {
        navigation.push('Setting')
      }}
    >
      <View style={styles.wrapItem}>
        <View style={styles.item}> 
          <Text style={styles.text}>
            {item.title}
          </Text>
        </View>
        {
          item.icon ? <Feather name={item.icon} style={styles.icon}/> : <Text style={{fontSize: 18,}}>{item.desc}</Text> 
        }
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  )
}

export default function ListItems({ data, navigation }) {
  return(
    <View style={styles.listItem}>
      <FlatList
        data={data.type}
        keyExtractor={data.id}
        renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  }, 
  wrapItem: {
    flexDirection: 'row', 
    alignItems: "center", 
    justifyContent: 'space-between', 
    paddingVertical: 12
  },
  icon: {
    marginRight: 6,
    fontSize: 26,
    color: '#aaa'
  },
  text: {
    fontSize: 22,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: '#ccc'
  },
  listItem: {
    marginVertical: 6,
  }
})
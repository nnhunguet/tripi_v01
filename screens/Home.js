import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback, 
  ScrollView, 
  Dimensions, 
  Image, 
  Button, 
  TouchableHighlight  
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'

import { MaterialCommunityIcons } from "react-native-vector-icons";
import { FontAwesome5 } from 'react-native-vector-icons';
import { SearchBar } from 'react-native-elements';

import TopDestination from '../components/TopDestination'; 
import HotelAround from '../components/HotelAround';

import { bookTime } from '../redux/actions'

const wd = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const dispath = useDispatch();
  const {checkin_date_id, checkout_date_id} = useSelector(state => state.inforBookReducer);  
  const [inputText, setInputText] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    dispath(bookTime(currentDate,currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView_container} >
          <View style={styles.booking_container}>
            <View style={styles.booking_padding}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="map-marker-radius" size={17} color="grey" />
                <Text style={styles.booking_footer}>Địa điểm hoặc khách sạn</Text>
              </View>
              <View>
                <SearchBar
                  placeholder="Nhập điểm đến hoặc tên khách sạn"
                  onChangeText={text => setInputText(text)}
                  value={inputText}
                  lightTheme={true}
                  inputContainerStyle={{backgroundColor: null}}
                  // style={styles.location_input_placeholder}
                />
              </View>
              <View style={styles.date_input}>
                <TouchableHighlight
                  onPress={showDatepicker}
                >
                  <>
                    <Text style={styles.date_day}> 1 </Text>
                    <View style={{paddingRight: 30}}>
                      <Text style={styles.date_weekdays}> 1 </Text>
                      <Text style={styles.date_month}>1</Text>
                    </View>
                  </>
                </TouchableHighlight>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date(checkin_date_id)}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
                <FontAwesome5 name="arrow-right" size={24} color="black" style={{paddingRight: 30}}/>
                <Text style={styles.date_day}>10</Text>
                <View>
                  <Text style={styles.date_weekdays}>Thứ 2</Text>
                  <Text style={styles.date_month}>Tháng 8</Text>
                </View>
              </View>
              <View style={styles.person_input}>
                <Text style={styles.person_zoom}>1</Text>
                {/* nếu không có trẻ em thì them paddingLeft vào person_zoom */}
                <Text style={styles.person_type}>Phòng</Text>
                <Text style={styles.person_count}>2</Text>
                <Text style={styles.person_type}>Người lớn</Text>
                <Text style={styles.person_count}>2</Text>
                <Text style={styles.person_type}>Trẻ em</Text>
              </View>
              <View style={styles.button_container}>
              <View style={styles.button}>
              <TouchableWithoutFeedback>
                  <Text style={{fontWeight: 'bold', color: 'white'}}>Tìm Kiếm</Text>
              </TouchableWithoutFeedback>
              </View>
              </View>
            </View>
          </View>
          <View style={styles.cty_container}>
            <View style={styles.city_footer}>
              <Image style={{ height: 50, width: 80}} source={require('../assets/map_maker.jpg')}/>
              <View style={{paddingLeft: 12, paddingTop: 7}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>ĐIỂM ĐẾN HÀNG ĐẦU</Text>
                <Text style={{fontSize: 12, color: 'grey', paddingTop: 5}}>Những thành phố nổi tiếng</Text>
              </View>
            </View>
            <View> 
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin: 10}}>
                <TopDestination />
                <TopDestination />
                <TopDestination />
              </ScrollView>
            </View>
          </View>
          <View style={styles.suggestion_container}>
            <View style={styles.suggestion_footer}>
              <Image style={{ height: 50, width: 80}} source={require('../assets/recommend.jpg')}/>
              <View style={{paddingLeft: 12, paddingTop: 7}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>KHÁCH SẠN QUANH ĐÂY</Text>
                <Text style={{fontSize: 12, color: 'grey', paddingTop: 5}}>Tìm khách sạn quanh đây</Text>
              </View>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin: 10}}>
                <HotelAround />
              </ScrollView>
            </View>
          </View>          
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center'
  },
  scrollView_container: {
    borderTopColor: '#111', 
    borderTopWidth: 0.5
  },
  booking_container: {
    width: wd, 
    height: 300, 
    backgroundColor: '#fafafa'
  },
  booking_padding: {
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10, 
    },
  booking_footer: {
    fontSize: 12, 
    color: 'grey', 
    paddingLeft: 5
  },
  location_input: {
    paddingTop: 10, 
    paddingBottom: 12,
    paddingLeft: 20, 
    paddingRight: 20, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  location_input_placeholder: {
    color: 'grey', 
    fontSize: 18, 
    fontWeight: 'bold', 
  },
  date_input: {
    flexDirection: 'row', 
    paddingTop: 15, 
    alignItems: "center",
    paddingBottom: 17,
    paddingLeft: 30, 
    paddingRight: 27, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  date_day: {
    fontSize: 40, 
    color: '#f60053', 
    fontWeight: 'bold', 
    paddingRight: 5
  },
  date_weekdays: {
    color: 'grey', 
    fontSize: 12
  },
  date_month: {
    fontSize: 15, 
    fontWeight: 'bold'
  },
  person_input: {
    flexDirection: 'row', 
    paddingTop: 10, 
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12,
    width: 340, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#111'
  },
  person_zoom: {
    fontSize: 30, 
    color: '#111', 
    fontWeight: 'bold', 
    paddingRight: 5
  },
  person_type: {
    fontSize: 15, 
    fontWeight: '400', 
    paddingTop: 10
  },
  person_count: {
    fontSize: 30, 
    color: '#111', 
    fontWeight: 'bold', 
    paddingRight: 5, 
    paddingLeft: 30
  },
  button_container: {
    justifyContent: "center", 
    alignItems: "center",
    height: 90
  },
  button: { 
    width: 190, 
    backgroundColor: '#54d3c2', 
    height: 40,
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cty_container: {
    marginTop: 10, 
    width: wd, 
    height: 200, 
    backgroundColor: '#fff'
  },
  city_footer: {
    flexDirection: 'row', 
    margin: 13, 
    alignItems: "center"
  },
  suggestion_container: {
    marginTop: 10, 
    width: wd, 
    height: 410, 
    backgroundColor: '#fff'
  },
});  
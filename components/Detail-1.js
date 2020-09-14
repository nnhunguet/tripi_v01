import { StatusBar } from 'expo-status-bar'
import React, { useState, useRef } from 'react'
import { StyleSheet, 
  Text, 
  View,  
  ScrollView, 
  Image, 
  Dimensions, 
  ActionSheetIOS,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from "react-native-gesture-bottom-sheet";
import { 
  AntDesign, 
  FontAwesome5, 
  FontAwesome, 
  MaterialCommunityIcons,
  MaterialIcons 
} from 'react-native-vector-icons';
import StarRating from './star-rating';
import { Feather } from '@expo/vector-icons';
import  { Color }  from './Color'; 
import { TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const convertVND = (price) => {
  return price.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
}

import { useSelector, useDispatch } from 'react-redux';
import { getInforHotelAction, serviceHotel, sortPriceAsc, starHotel } from '../redux/actions'

export default function DetailsScreen({ navigation }) {
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100]);
  const multiSliderValuesChange = (values) => setMultiSliderValue(values);
  const [priceValue, setPriceValue] = useState([0, 50]);
  const PriceValuesChange = (values) => setPriceValue(values);

  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  const dataHotels = useSelector(state => state.getHotelReducer.data);
  console.log('data Hotel', dataHotels);
  const dispatch = useDispatch();
  const action = () =>
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: ["Bỏ qua", "Mặc Định", "Theo giá tăng dần", "Theo giá giảm dần"],
      cancelButtonIndex: 0, 
      title : 'Tiêu chí sắp xếp giá',
      tintColor: Color.primary
    },
    buttonIndex => {
      switch(buttonIndex) {
        case 0:
          console.log('Cancel');
        case 1: 
          console.log(1);
        case 2: 
          dispatch(sortPriceAsc());
        case 3: 
          console.log(3);
        default:
          console.log('default');
          break;
      }
    }
  );


  const bottomSheet = useRef();

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={HEIGHT/1.2} >
        <View
          style={{
            height: 550,
          }}
        >
          <View style={styles.BottomSheet_tittle}>
            <MaterialCommunityIcons name="reload" size={24} color={Color.primary} />
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Bộ Lọc</Text>
            <TouchableWithoutFeedback onPress={() => bottomSheet.current.close()}>
              <Feather name="x" size={24} color={Color.primary} />
            </TouchableWithoutFeedback>
          </View>
          <ScrollView style={{flex: 0.68}}>
            <View style={styles.BottomSheet_price}>
              <View style={styles.Bottom_warp}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Giá mỗi đêm</Text>
                <View style={{justifyContent: "center", alignItems: 'center',}}>
                  <View  style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%'}}>
                    <Text style={{fontSize: 13}}>{(priceValue[0]*100000).toLocaleString('en-US')} đ</Text>
                    <Text style={{fontSize: 13}}>{(priceValue[1]*100000).toLocaleString('en-US')} đ+</Text>
                  </View>
                  <MultiSlider
                    markerStyle={{
                      ...Platform.select({
                        ios: {
                          height: 20,
                          width: 20,
                          shadowColor: '#000000',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 1,
                          shadowOpacity: 0.1
                        },
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                          backgroundColor: Color.primary
                        }
                      })
                    }}
                    pressedMarkerStyle={{
                      ...Platform.select({
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#148ADC'
                        }
                      })
                    }}
                    selectedStyle={{
                      backgroundColor: Color.primary
                    }}
                    trackStyle={{
                      backgroundColor: '#CECECE'
                    }}
                    touchDimensions={{
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      slipDisplacement: 40
                    }}
                    values={[priceValue[0], priceValue[1]]}
                    sliderLength={WIDTH/1.2}
                    onValuesChange={PriceValuesChange}
                    min={0}
                    max={50}
                    allowOverlap={false}
                    minMarkerOverlapDistance={1}
                  />
                </View>
              </View>
            </View>
            <View style={styles.BottomSheet_star}>
              <View style={styles.Bottom_warp}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Hạng khách sạn</Text>
                <View style={{ height: HEIGHT/9, marginTop: 10, justifyContent: "space-around"}}>
                  <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
                    <TouchableOpacity
                      onPress={() => {
                        console.log('1 sao');
                      }}
                    >
                      <View style={{paddingHorizontal: 15, paddingVertical: 7,  borderColor: star1 ? '#f0a500' : 'grey', borderWidth: 1, borderRadius: 5}} >
                        <FontAwesome name="star" size={13} color={star1 ?'#f0a500' : 'grey'}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={{
                        flexDirection: 'row',
                        paddingVertical: 7,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: star2 ? '#f0a500' :'grey',
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        setStar2(!star2);
                        console.log('2 sao');
                      }}
                    >
                      <FontAwesome name="star" size={13} color={star2 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star2 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={{
                        flexDirection: 'row',
                        paddingVertical: 7,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: star3 ? '#f0a500' :'grey',
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        setStar3(!star3);
                        console.log('3 sao')
                      }}
                    >
                      <FontAwesome name="star" size={13} color={star3 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star3 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star3 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                      style={{
                        flexDirection: 'row',
                        paddingVertical: 7,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: star4 ? '#f0a500' :'grey',
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        setStar4(!star4);
                        console.log('4 sao')
                      }}
                    >
                      <FontAwesome name="star" size={13} color={star4 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star4 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star4 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star4 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={{
                        flexDirection: 'row',
                        paddingVertical: 7,
                        paddingHorizontal: 15,
                        borderWidth: 1,
                        borderColor: star5 ? '#f0a500' :'grey',
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        setStar5(!star5);
                        console.log('5 sao')
                      }}  
                    >
                      <FontAwesome name="star" size={13} color={star5 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star5 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star5 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star5 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                      <FontAwesome name="star" size={13} color={star5 ? '#f0a500' :'grey'} style={{paddingRight: 1}}/> 
                    </TouchableOpacity>
                  </View>
                </View>
              </View>  
            </View>
            <View style={styles.BottomSheet_rating}>
              <View style={styles.Bottom_warp}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Đánh giá</Text>
                <View style={{justifyContent: "center", alignItems: 'center'}}>
                  <View  style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%'}}>
                    <Text style={{fontSize: 13}}>{(multiSliderValue[0]/10).toFixed(1)}</Text>
                    <Text style={{fontSize: 13}}>{(multiSliderValue[1]/10).toFixed(1)}</Text>
                  </View>
                  <MultiSlider
                    markerStyle={{
                      ...Platform.select({
                        ios: {
                          height: 20,
                          width: 20,
                          shadowColor: '#000000',
                          shadowOffset: {
                            width: 0,
                            height: 3
                          },
                          shadowRadius: 1,
                          shadowOpacity: 0.1
                        },
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                          backgroundColor: Color.primary
                        }
                      })
                    }}
                    pressedMarkerStyle={{
                      ...Platform.select({
                        android: {
                          height: 30,
                          width: 30,
                          borderRadius: 20,
                          backgroundColor: '#148ADC'
                        }
                      })
                    }}
                    selectedStyle={{
                      backgroundColor: Color.primary
                    }}
                    trackStyle={{
                      backgroundColor: '#CECECE'
                    }}
                    touchDimensions={{
                      height: 30,
                      width: 30,
                      borderRadius: 20,
                      slipDisplacement: 40
                    }}
                    values={[multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={WIDTH/1.2}
                    onValuesChange={multiSliderValuesChange}
                    min={0}
                    max={100}
                    allowOverlap={false}
                    minMarkerOverlapDistance={10}
                  />
                </View>
              </View>  
            </View>
            <View style={styles.BottomSheet_Kieu}>
              <View style={styles.Bottom_warp}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Kiểu</Text>
                <View style={{ height: HEIGHT/9, marginTop: 10, justifyContent: "space-between"}}>
                  <View style={{flexDirection: 'row', width: WIDTH/1.5, justifyContent: 'space-between'}}>
                    <View style={styles.star_ratting}>
                      <Text style={{fontSize: 12}}>Khách Sạn</Text>
                    </View>
                    <View style={styles.star_ratting}>
                      <Text style={{fontSize: 12}}>Resort</Text>
                    </View>
                    <View style={styles.star_ratting}>
                      <Text style={{fontSize: 12}}>Nhà trọ</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', width: WIDTH/1.9, justifyContent: 'space-between'}}>
                      <TouchableOpacity onPress={()=> {console.log('nha')}}>
                    <View style={styles.star_ratting}>
                      <Text style={{fontSize: 12}}>Căn hộ/Villa</Text>
                    </View>
                      </TouchableOpacity>
                    <View style={styles.star_ratting}>
                      <Text style={{fontSize: 12}}>Du thuyền</Text>
                    </View>
                  </View>
                </View>
              </View>  
            </View>
            <View style={styles.BottomSheet_tien_ich}>
              <View style={styles.Bottom_warp}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Tiện ích sẵn có</Text>
                <View style={{ height: HEIGHT/5, marginTop: 10, justifyContent: "space-around"}}>
                  <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(14));
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Bể bơi ngoài trời</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(13));
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Dịch vụ tour</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(13));
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Wifi/Internet</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(13));
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Giặt ủi</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(12));
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Quầy bar</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', width: WIDTH/1.42, justifyContent: 'space-between'}}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(8))
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Hướng dẫn viên du lịch</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(serviceHotel(7))
                      }}
                    >
                      <View style={styles.star_ratting}>
                        <Text style={{fontSize: 12}}>Nhà hàng</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>  
            </View>
          </ScrollView>
        </View>
        <View style={styles.button_view}>
          <TouchableOpacity
            style={styles.Bottomsheet_Button}
            onPress={ () => {
              bottomSheet.current.close();
              
            }}
          >
            <Text style={{color: "#fff", fontSize: 20, fontWeight: '400',}}>Áp Dụng</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
        <View style={styles.menu_chose}>
            <TouchableWithoutFeedback onPress={action}>
              <View style={{flexDirection: 'row', alignItems: "center"}}>
                <MaterialCommunityIcons name="sort-descending" size={24} color={Color.primary} />
                <Text style={{fontSize: 14, paddingLeft: 3}}>Sắp xếp</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => bottomSheet.current.show()}>
              <View style={{flexDirection: 'row', alignItems: "center", marginLeft: 10}}>
              <MaterialIcons name="filter-list" size={24} color={Color.primary} />
                <Text style={{fontSize: 14, paddingLeft:3}}>Bộ lọc</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>
        <View style={styles.flatList}>
          <FlatList style={styles.scrollView}
            data={dataHotels}
            renderItem={({item, index}) => {
            return (
            <TouchableOpacity
              onPress={() => {
                dispatch(getInforHotelAction(item.hotel_id)); 
                navigation.navigate('Hotel', { minPrice: item.minPrice.minPrice, domain_id: item.minPrice.domain_id});
              }}
              style={{height: WIDTH*(9/10)*(28/35)}}
            >
              <View style={styles.card}>
                <View style={styles.card_Img}>
                  <Image style={styles.Image} source={{uri: item.logo ? item.logo : 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-0/p640x640/68401906_157744848700465_7740565304106811392_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_ohc=K-qqLuKEe3QAX8rTOUz&_nc_ht=scontent.fhan2-2.fna&tp=6&oh=498085993b02cf8a7c1670bd50660e5c&oe=5F7D0E5C'}}/>
                  <View style={styles.card_heart}>
                    <AntDesign name="hearto" size={14} color={Color.primary} style={{padding: 10}}/>
                  </View>
                </View>
                  <View
                    style={styles.card_Info}
                  >
                    <View style={styles.card_row_1}>
                      <View>
                        <Text numberOfLines= {2} style={{fontSize: 14, fontWeight: "bold", color: '#111',  textAlign: 'left', marginLeft: 10}}> { item.name } </Text>
                        <Text numberOfLines= {2} style={{fontSize: 11, color: 'grey', marginLeft: 10}}> { item.address } </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginLeft: 10}}>
                        <StarRating rating={item.star_number}/>   
                        <Text style={{color:'white', marginLeft: 7, fontSize: 12,paddingLeft: 5,paddingRight: 5, borderColor: 'black',backgroundColor: Color.primary}}> { (item.point_hidden/10).toFixed(1)} </Text>
                      </View>
                    </View>
                    <View style={styles.card_row_2}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}> {(item.minPrice.minPrice === 20000000000) ? '???' : convertVND(item.minPrice.minPrice)} </Text>
                      <Text style={{}}>/Đêm</Text>
                    </View>
                  </View> 
              </View> 
            </TouchableOpacity>
            )}}
            keyExtractor={item => item.hotel_id}
          >
          </FlatList>
        </View>
    </SafeAreaView>
    </>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_chose:{
    paddingHorizontal: 20,
    flex: 0.078,
    backgroundColor: "#fff",
    flexDirection: 'row',
    marginTop: -19,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: 'space-between',
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  menu_chose_first: {
    flex: 0.5,
    justifyContent: "space-around",
    flexDirection: "row",
    marginLeft: 10,
  },
  menu_chose_second:{
    flex: 0.5,
    flexDirection: "row-reverse",
    height: 35,
    paddingLeft: 20,
  },
  menu_chose_second_icon: {
    flexDirection: 'row',
    alignItems: "center",
    borderColor: '#d3d3d3',
    borderWidth: 1,
    width: 73,
    justifyContent: "space-between",
  },
  flatList: {
    flex: 0.922,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  },
  scrollView: {
    paddingRight: 10,
    // paddingTop: 10
  },
  card: {
    flex: 1,
    width: WIDTH*(9/10),
    height: WIDTH*(9/10)*(25/35),
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: WIDTH/15,
    marginRight: 5,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  card_Img: {
    flex: 0.65,
  },
  Image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card_Info: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  card_row_1: {
    flex: 0.65,
    justifyContent: 'space-around',
  },
  card_row_2: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  card_row_3: {
    flex: 0.25,
  },
  card_title: {
    flex: 0.80,
    paddingLeft: 10,
    flexDirection: "row",
    paddingTop: 7,
    alignItems: "center",
    flexWrap: 'wrap',
    position: "relative",
  },
  card_heart: {
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: '#fff',
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton_custom: {
    color: 'pink',
  },
  BottomSheet_tittle: {
    // width: WIDTH,
    // height: HEIGHT/11.5,
    flex: 0.13,
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: WIDTH - (WIDTH/1.07)
  },
  BottomSheet_price: {
    width: WIDTH,
    height: HEIGHT/5.5,
    backgroundColor: '#fff',
    borderBottomColor: '#dbd7d7',
    borderBottomWidth: 3
  },
  BottomSheet_star: {
    width: WIDTH,
    height: HEIGHT/4.7,
    backgroundColor: '#fff',
    marginTop: 5,
    borderBottomColor: '#dbd7d7',
    borderBottomWidth: 3
  },
  BottomSheet_rating: {
    width: WIDTH,
    height: HEIGHT/5.5,
    backgroundColor: '#fff',
    marginTop: 5,
    borderBottomColor: '#dbd7d7',
    borderBottomWidth: 3
  },
  BottomSheet_button:{
    width: WIDTH,
    height: HEIGHT/8,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 17,
  },
  Select_Button: {
    width: "95%",
    height: 37,
    backgroundColor:'#54d3c2',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: HEIGHT/35
  },
  Bottom_warp: {
    margin:  WIDTH - (WIDTH/1.07)
  },
  star_ratting: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  BottomSheet_Kieu: {
    width: WIDTH,
    height: HEIGHT/4.7,
    backgroundColor: '#fff',
    marginTop: 5,
    borderBottomColor: '#dbd7d7',
    borderBottomWidth: 3,
  },
  BottomSheet_tien_ich: {
    width: WIDTH,
    height: HEIGHT/3,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 100,
    
  },
  Bottomsheet_Button: {
    width: WIDTH*(9/10),
    height: HEIGHT*(9/10)*(1/14),
    backgroundColor: '#54d3c2',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  button_view: {
    width: WIDTH,
    height: HEIGHT/8,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: HEIGHT/8.7,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,
  elevation: 17,
  },
});

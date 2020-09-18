import React, { useState, useRef, useCallback } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView, 
  Dimensions, 
  FlatList,
  Animated
} from 'react-native';
import { PricingCard } from 'react-native-elements';
import { Color } from './Color'; 
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import BottomSheet from "react-native-gesture-bottom-sheet";
import MapView, {Marker} from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import  Topnavigate  from './TopNavigation';
const wp = Dimensions.get('window').width;
const hp = Dimensions.get('window').height;
const LATITUDE = 21.037814;
const LONGITUDE = 105.781468;
import { TouchableOpacity } from 'react-native-gesture-handler';
import StarRating from './star-rating';
const convertVND = (price) => {
  return price.toLocaleString('en-US', {style : 'currency', currency : 'VND'});
}

import { useSelector, useDispatch } from 'react-redux';
import { getUrl } from '../redux/actions';

const stringDomain = (domain_id) => {
  switch(domain_id) {
    case 2: 
      return 'Traveloka';
    case 3: 
      return 'agoda';
    case 4: 
      return 'Expedia';
    case 5: 
      return 'Booking.com';
    default:
      return 'Hết Phòng';
      break;
  }
} 
const imagelogo = (domain_id) => {
  switch(domain_id) {
    case 2: 
      return require('../assets/traveloka.png');
    case 3: 
      return require('../assets/agoda.jpg');
    case 4: 
      return require('../assets/expedia.jpg');
    case 5: 
      return require('../assets/Booking.jpg');
    default:
      return require('../assets/hetphong.png');
      break;
  }
}
 
export default function Hotel_info_screens({ route, props }) {
  const dispatch = useDispatch();
  const inforHotel = useSelector(state => state.getInforHotelReducer.data[0]);
  const { minPrice, domain_id } = route.params;
  let allPrice = useSelector(state => state.getInforHotelReducer.allPrice);
  let urlHotel = useSelector(state => state.getUrlHotelReducer);
  console.log('url', urlHotel);
  const regex = /(<([^>]+)>)/ig;
  const bottomSheet = useRef();
  const [textShown, setTextShown] = useState(false);
  const [lengthMore,setLengthMore] = useState(false); 
  const toggleNumberOfLines = () => {
      setTextShown(!textShown);
  }
  let room_score = (inforHotel.sleep_quality_score + inforHotel.meal_score + inforHotel.cleanliness_score) / 3;
  let average_score = (inforHotel.overall_score + inforHotel.service_score + inforHotel.location_score + room_score) / 4;
  const onTextLayout = useCallback(e =>{
      setLengthMore(e.nativeEvent.lines.length >=4); 
  },[]);
  const scrollA = useRef(new Animated.Value(0)).current;   
  return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <BottomSheet hasDraggableIcon ref={bottomSheet} height={hp/1.35}>
          <FlatList
            ListHeaderComponent={() => {
              return (
                <View>
                  <Text style={{textAlign: 'center', fontSize: 30, }}>
                    BẢNG GIÁ
                  </Text>
                </View>
              )
            }}
            style={{marginTop: 15}}
            data={allPrice}
            renderItem={ ({ item }) => (
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,paddingHorizontal: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(urlHotel);
                  }}
                >
                <View style={{height: hp/6, width: '100%', borderBottomColor: '#d3d3d3', borderBottomWidth: 1, flexDirection: 'row'}}>
                  <View style={{width: '60%'}}>
                    <Image source={imagelogo(item.domain_id)} resizeMode='cover' style={{height:'60%', width: '60%'}}/>
                    <Text style={{width: '95%'}} numberOfLines={2}>{item.room_type_name}</Text>
                  </View>
                  <View style={{width: '40%', justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{fontSize: 20}}>{convertVND(item.final_amount)}</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index}
          >
          </FlatList>
        </BottomSheet>
        <Topnavigate title={inforHotel.name} scrollA={scrollA}/>
         <Animated.ScrollView
            onScroll = {Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollA}}}],
            {useNativeDriver: true},
            )}
            scrollEventThrottle = {16}
         > 
          <View style={styles.Img_Background}>
            <Animated.Image style={styles.background(scrollA)} source={{uri: inforHotel.logo || "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-0/p640x640/68401906_157744848700465_7740565304106811392_o.jpg?_nc_cat=111&_nc_sid=e3f864&_nc_ohc=ALSx5Ro_F-cAX-Q4xwi&_nc_ht=scontent.fhan2-2.fna&tp=6&oh=6071894881c03d120497e3f8a844b4f1&oe=5F7D0E5C"}} resizeMode={'cover'} >
            </Animated.Image>   
          </View>
          <View style={styles.Info_container}> 
            <View style={styles.Hotel_name}>
              <Text numberOfLines={2} style={styles.Hotel_name_tittle}> {inforHotel.name} </Text>
              <View style={{borderRadius: 50, backgroundColor: '#fff', height: 40}}>
                <AntDesign name="hearto" size={20} color={Color.primary} style={{padding: 10}}/>
              </View>
            </View>
            <View style={styles.Price}>
                <View style={styles.Booking_info}>
                  <View style={styles.Booking_room}>
                    <View style={{flex: 0.08, backgroundColor: 'green'}} />
                    <View style={{flex: 0.88, justifyContent: 'center'}}>
                      <View style={{flex: 0.75, justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 10, color: Color.grey}}>Nhận phòng</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 12}}>CN, 23/08/20</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.Booking_room}>
                    <View style={{flex: 0.08, backgroundColor: 'red'}} />
                      <View style={{flex: 0.88, justifyContent: 'center'}}>
                        <View style={{flex: 0.75, justifyContent: 'space-between'}}>
                          <Text style={{fontSize: 10, color: Color.grey}}>Trả phòng</Text>
                          <Text style={{fontWeight: 'bold', fontSize: 12}}>Th,2 - 23/08/20</Text>
                        </View>
                      </View>
                    </View>
                  <View style={styles.Booking_person}>
                    <View style={{flex: 0.7, justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5}}>
                      <Text style={{fontSize: 10, color: Color.grey}}>Khách</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 12}}> 
                          <FontAwesome5 name="bed" size={10} color="black" /> 1  
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 12}}>
                          <Entypo name="users" size={10} color="black" /> 2
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 12}}>
                        <MaterialIcons name="child-care" size={10} color="black" /> 0
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.Best_price}>
                <Image source={imagelogo(allPrice[0].domain_id)} resizeMode='cover' style={{height:'100%', width: '50%'}}/>
                <Text style={{fontWeight: 'bold', fontSize: 24}}> {convertVND(allPrice[0].final_amount) || "???"} </Text>
                </View>
                <View style={styles.Price_footer}>
                  <Text style={{color: 'grey', fontSize: 10}}>
                    <Entypo name="check" size={10} color="black" />
                    Đặt phòng ngay, thanh toán khi lưu trú
                  </Text>
                </View>
                <View style={styles.Button_container}>
                  <View style={styles.Price_sell}>
                    <Text style={{fontSize: 16, fontWeight: "600"}}>Xem chi tiết</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      if(minPrice !== 20000000000){
                        dispatch(getUrl(inforHotel.hotel_id));
                        bottomSheet.current.show();
                      } else {
                        alert('Hết Phòng');
                      }
                    }}
                  >
                    <View style={styles.Price_more}>
                      <Text style={{fontSize: 16, fontWeight: '600', color: Color.primary}}>Xem tất cả giá cả</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            <View style={styles.Rating}>
              <View style={styles.Rating_tittle}>
                <View style={{justifyContent: "center", alignItems: 'center', flex: 0.37}}> 
                  <Text style={styles.Rating_score}> { parseFloat(average_score).toFixed(1)} </Text>
                </View>
                <View style={styles.Rating_overall}>
                  <Text>Hạng khách sạn</Text>
                  <StarRating rating={inforHotel.star_number}/>
                </View>
              </View>  
              <View style={styles.Rating_details}>
                  <View style={styles.Rating_details_name}>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Chung</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Dịch Vụ</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Địa Điểm</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>Phòng</Text>
                  </View>
                  <View style={styles.Rating_details_score}>
                    <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                      <View style={{backgroundColor: Color.primary, width: `${inforHotel.overall_score*10}%`, height: 13, borderRadius: 20}}></View>
                    </View>
                    <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                      <View style={{backgroundColor: Color.primary, width: `${inforHotel.service_score*10}%`, height: 13, borderRadius: 20}}></View>
                    </View>
                    <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                      <View style={{backgroundColor: Color.primary, width: `${inforHotel.location_score*10}%`, height: 13, borderRadius: 20}}></View>
                    </View>
                    <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                      <View style={{backgroundColor: Color.primary, width: `${room_score*10}%`, height: 13, borderRadius: 20}}></View>
                    </View>
                  </View>
              </View> 
            </View>
            <View style={{ justifyContent: 'center', marginTop: hp/20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 13}}>Giới Thiệu</Text>
                <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 5}
                style={{ lineHeight: 21 }}>
                {inforHotel.description.replace(regex, '')}
                </Text>
                {
                    lengthMore ? <Text
                    onPress={toggleNumberOfLines}
                    style={{ lineHeight: 21, marginTop: 10, color: Color.primary}}>{textShown ? 'Thu gọn...' : 'Xem thêm...'}</Text>
                    :null
                }
            </View>
            <View style={styles.Review}> 
              <View style={styles.Review_tittle}>
                <Text style={{color: 'grey', fontSize: 16}}>Đánh giá (20)</Text>
                <Text style={{color: Color.primary, fontSize: 16}}>Viết đánh giá</Text>
              </View>  
              <View style={styles.Review_comment}>
                <View style={styles.Review_comment_display}>
                  <View style={styles.Review_comment_lui}>
                    <View style={styles.Review_comment_info}>
                      <Image source={require('../assets/Ha_Noi.jpg')} resizeMode='cover' style={{flex: 0.16, height: 42, borderRadius: 90}}/>
                      <View style={styles.Review_comment_name}>
                          <Text style={{fontWeight: 'bold'}}>Nguyễn Văn A</Text>
                          <Text style={{color: 'grey', fontSize: 10}}>Cập nhật lần cuối 21/05/2019</Text>
                      </View>
                      <StarRating rating={5}/>
                    </View>
                    <View style={styles.Review_comment_content}>
                      <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>Điểm đến tuyệt vời</Text>
                      <Text numberOfLines={4}>Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói </Text>
                      <Text style={{fontSize: 12, marginTop: 10, height: 20}}>Xem thêm</Text>
                    </View>         
                  </View>
                </View>
                <View style={styles.Review_comment_display}>
                  <View style={styles.Review_comment_lui}>
                    <View style={styles.Review_comment_info}>
                      <Image source={require('../assets/Ha_Noi.jpg')} resizeMode='cover' style={{flex: 0.16, height: 42, borderRadius: 90}}/>
                      <View style={styles.Review_comment_name}>
                          <Text style={{fontWeight: 'bold'}}>Nguyễn Văn A</Text>
                          <Text style={{color: 'grey', fontSize: 10}}>Cập nhật lần cuối 21/05/2019</Text>
                      </View>
                      <StarRating rating={5}/>
                    </View>
                    <View style={styles.Review_comment_content}>
                      <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>Điểm đến tuyệt vời</Text>
                      <Text numberOfLines={4}>Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói </Text>
                      <Text style={{fontSize: 12, marginTop: 10}}>Xem thêm</Text>
                    </View>         
                  </View>
                </View>
                <View style={{justifyContent: "center", alignItems: "center", height: hp/20}}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                  Đọc thêm 
                  <Entypo name="chevron-small-right" size={12} color="black" />
                </Text>
              </View>    
              <View style={{flex: 0.22, borderTopColor: Color.grey, borderTopWidth: 1}}>
                <View style={{flex: 0.9}}>
                  <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, paddingTop: 15}}>Tiện nghi khách sạn</Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginBottom: 10}}><Entypo name="check" size={10} color="black" /> Wifi miễn phí</Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginBottom: 10}}><Entypo name="check" size={10} color="black" /> Wifi miễn phí</Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginBottom: 10}}><Entypo name="check" size={10} color="black" /> Wifi miễn phí</Text>
                  <Text style={{fontSize: 16, marginTop: 10, marginBottom: 10}}><Entypo name="check" size={10} color="black" /> Wifi miễn phí</Text>
                </View>
                <View style={{height: hp/15, justifyContent: 'center'}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>Hiển thị thêm tiện ích</Text>
                </View>
              </View>
              <View style={{height: hp/3, borderTopColor: Color.grey, borderTopWidth: 1}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, paddingTop: 15}}>Thông tin hữu ích</Text>
                <Text style={{fontSize: 16, marginTop: 15, fontWeight: 'bold', color: 'grey'}}>Số tầng</Text>
                <Text style={{marginTop: 3, fontWeight: 'bold'}}>1</Text>
                <Text style={{fontSize: 16, marginTop: 15, fontWeight: 'bold', color: 'grey'}}>Nhà Hàng</Text>
                <Text style={{marginTop: 3, fontWeight: 'bold'}}>2</Text>
              </View>
                </View>
            </View>
            <View style={{height: hp/1.3}}>
              <MapView style={styles.mapView}
                region={
                  {
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                provider='google'>
                <Marker 
                  coordinate={{latitude: LATITUDE, longitude: LONGITUDE}}
                />    
              </MapView> 
              <View style={{flex: 1}}>
                <Text style={{paddingTop: 20, paddingBottom: 5}}><FontAwesome name="map-marker" size={16} color={Color.primary} />  {inforHotel.address} </Text>
                <Text style={{paddingTop: 5, paddingBottom: 5}}><Entypo name="old-phone" size={16} color={Color.primary} />  0907512750</Text>
                <Text style={{paddingTop: 5, paddingBottom: 5, color: Color.primary}}><MaterialCommunityIcons name="web" size={16} color={Color.primary} /> Truy cập Trang web của khách sạn</Text>
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    },
  Img_Background: {
    width: '100%',
    height: hp/3
    },
  // background: {
  //   flex: 1,
  //   height: hp/5,
  //   width: '100%',
  //   },  
  background: scrollA => ({
    width: '100%',
    height: hp/3,
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-(hp/3), 0, hp/3, hp/3 + 1],
          outputRange: [-(hp/3) / 2, 0, hp/3 * 0.5,hp/3 * 0.5],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-(hp/3), 0, hp/3, hp/3 + 1],
          outputRange: [2, 1, 0.995, 0.995],
        }),
      }
    ]
  }),
  Info_container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
    },
  Hotel_name: {
    height: hp/7.5,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
  },  
  Hotel_name_tittle: {
    flex: 0.8,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Price: {
    height: hp/3,
  },
  Booking_info: {
    height: hp/10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Booking_room: {
    flexDirection: 'row',
    borderColor: Color.grey,
    borderWidth: 1,
    flex: 0.35,
    height: 45,
    justifyContent: 'space-between'
  },
  Booking_person: {
    borderColor: Color.grey,
    borderWidth: 1,
    flex: 0.25,
    height: 45,
    justifyContent: 'center'
  },
  Best_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    height: hp/13,
  },
  Price_footer: {
    height: hp/30,
    justifyContent: "center",
  },  
  Button_container: {
    justifyContent: "space-between",
    height: hp/7,
  },
  Price_sell: {
    width: "100%",
    height: 40,
    backgroundColor: 'gold',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  Price_more: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Color.primary,
    marginTop: 10
  },
  Rating: {
    marginTop: 25,
    height: hp/3.5,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  Rating_tittle: {
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Rating_score: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.primary
  },
  Rating_details: {
    flexDirection: 'row',
    flex: 0.7,
  },
  Rating_details_name: {
    flex: 0.25,
    justifyContent: "space-around",
    paddingLeft: 13,
  },
  Rating_details_score: {
    flex: 0.7,
    justifyContent: "space-around",
    paddingRight: 20
  },
  Review: {
    marginTop: hp/30,
  },
  Review_tittle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  Review_comment: {
  },
  Review_comment_display: {
    flex: 0.2,
    borderTopWidth: 1,
    borderTopColor: '#d5d5d5',
    justifyContent: "center",
    height: hp/3.4,
  },
  Review_comment_lui: {
    
  },
  Review_comment_info: {
    height: 55,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  Review_comment_name: {
    flex: 0.75,
    height: hp/20,
    justifyContent: 'space-between'
  },
  Review_comment_content: {
  },
  mapView: {
    width: '100%',
    height: 300,
  },
})

import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Color } from './Color'; 
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import MapView, {Marker} from 'react-native-maps';
const LATITUDE = 21.037814;
const LONGITUDE = 105.781468;
export default function Hotel_info_screens() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView>
                <View style={styles.Img_Background}>
                  <Image style={styles.background} source={require('../assets/Ha_Noi.jpg')} resizeMode={'cover'} >
                  </Image>   
                </View>
                <View style={styles.Info_container}> 
                  <View style={styles.Hotel_name}>
                    <Text style={styles.Hotel_name_tittle}>Grand Royale Park Hotel</Text>
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
                        <Text>Booking.com</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>313.939 d</Text>
                      </View>
                      <View style={styles.Price_footer}>
                        <Text style={{color: 'grey', fontSize: 10}}>
                          <Entypo name="check" size={10} color="black" />
                          Đặt phòng ngay, thanh toán khi lưu trú
                        </Text>
                      </View>
                      <View style={styles.Button_container}>
                        <View style={styles.Price_sell}>
                          <Text style={{fontSize: 16, fontWeight: "600"}}>Xem giảm giá</Text>
                        </View>
                        <View style={styles.Price_more}>
                          <Text style={{fontSize: 16, fontWeight: '600', color: Color.primary}}>Xem tất cả giảm giá</Text>
                        </View>
                      </View>
                    </View>
                  <View style={styles.Rating}>
                    <View style={styles.Rating_tittle}>
                      <View style={{justifyContent: "center", alignItems: 'center', flex: 0.37}}> 
                        <Text style={styles.Rating_score}>9.2</Text>
                      </View>
                      <View style={styles.Rating_overall}>
                        <Text>Đánh giá chung</Text>
                        <View style={{flexDirection: "row"}}>
                          <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                          <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                          <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 1}}/>    
                          <FontAwesome name="star-o" size={13} color={Color.primary} style={{paddingRight: 1}}/>
                          <FontAwesome name="star-o" size={13} color={Color.primary} style={{paddingRight: 1}}/>   
                        </View>
                      </View>
                    </View>  
                    <View style={styles.Rating_details}>
                        <View style={styles.Rating_details_name}>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>Giá</Text>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>Dịch Vụ</Text>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>Địa Điểm</Text>
                          <Text style={{fontWeight: 'bold', fontSize: 14}}>Phòng</Text>
                        </View>
                        <View style={styles.Rating_details_score}>
                          <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                            <View style={{backgroundColor: Color.primary, width: '100%', height: 13, borderRadius: 20}}></View>
                          </View>
                          <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                            <View style={{backgroundColor: Color.primary, width: '80%', height: 13, borderRadius: 20}}></View>
                          </View>
                          <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                            <View style={{backgroundColor: Color.primary, width: '75%', height: 13, borderRadius: 20}}></View>
                          </View>
                          <View style={{backgroundColor: Color.grey, width: '100%', height: 13, borderRadius: 20}}>
                            <View style={{backgroundColor: Color.primary, width: '89%', height: 13, borderRadius: 20}}></View>
                          </View>
                        </View>
                    </View> 
                  </View>
                  <View style={{flex: 0.08, justifyContent: 'center'}}>
                      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 13}}>Giới Thiệu</Text>
                      <Text numberOfLines={3}>While the reusability of automated tests is valued by software development companies, this property can also be viewed as a disadvantage. It leads to the so-called "Pesticide Paradox", where repeatedly executed scripts stop detecting errors that go beyond their frameworks. In such cases, manual testing may be a better investment. This ambiguity once again leads to the conclusion that the decision on test automation should be made individually, keeping in mind project requirements and peculiarities.</Text>
                      <Text style={{fontSize: 12, fontWeight: "bold", marginTop: 5}}>Xem thêm</Text>
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
                            <View style={{flexDirection: 'row'}}>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>  
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                            </View>
                          </View>
                          <View style={styles.Review_comment_content}>
                            <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>Điểm đến tuyệt vời</Text>
                            <Text numberOfLines={4}>Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói </Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Xem thêm</Text>
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
                            <View style={{flexDirection: 'row'}}>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>  
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                            </View>
                          </View>
                          <View style={styles.Review_comment_content}>
                            <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>Điểm đến tuyệt vời</Text>
                            <Text numberOfLines={4}>Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói </Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Xem thêm</Text>
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
                            <View style={{flexDirection: 'row'}}>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>  
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                              <FontAwesome name="star" size={13} color={Color.primary} style={{paddingRight: 2}}/>
                            </View>
                          </View>
                          <View style={styles.Review_comment_content}>
                            <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 18}}>Điểm đến tuyệt vời</Text>
                            <Text numberOfLines={4}>Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói Khách sạn tuyệt vời, con người thân thiện, ánh nắng mỗi bình minh tuyệt đẹp là những gì mà tôi được trả tiền để nói </Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Xem thêm</Text>
                          </View>         
                        </View>
                      </View>
                      <View style={{justifyContent: "center", alignItems: "center", flex: 0.04}}>
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
                      <View style={{flex: 0.2, justifyContent: 'center'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Hiển thị thêm tiện ích</Text>
                      </View>
                    </View>
                    <View style={{flex: 0.22, borderTopColor: Color.grey, borderTopWidth: 1}}>
                      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, paddingTop: 15}}>Thông tin hữu ích</Text>
                      <Text style={{fontSize: 16, marginTop: 5, fontWeight: 'bold', color: 'grey'}}>Hạng khách sạn</Text>
                      <View style={{flexDirection: 'row', marginTop: 3}}>
                        <FontAwesome name="star" size={13} color='black' style={{paddingRight: 2}}/>
                        <FontAwesome name="star" size={13} color='black' style={{paddingRight: 2}}/>
                        <FontAwesome name="star" size={13} color='black' style={{paddingRight: 2}}/>  
                        <FontAwesome name="star" size={13} color='black' style={{paddingRight: 2}}/>
                        <FontAwesome name="star" size={13} color='black' style={{paddingRight: 2}}/>
                      </View>
                      <Text style={{fontSize: 16, marginTop: 15, fontWeight: 'bold', color: 'grey'}}>Số tầng</Text>
                      <Text style={{marginTop: 3, fontWeight: 'bold'}}>1</Text>
                      <Text style={{fontSize: 16, marginTop: 15, fontWeight: 'bold', color: 'grey'}}>Nhà Hàng</Text>
                      <Text style={{marginTop: 3, fontWeight: 'bold'}}>2</Text>
                    </View>
                      </View>
                  </View>
                  <View style={{flex: 0.2}}>
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
                      <Text style={{paddingTop: 20, paddingBottom: 5}}>260 Lý Tự Trọng Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh Việt Nam</Text>
                      <Text style={{paddingTop: 5, paddingBottom: 5}}>0907512750</Text>
                      <Text style={{paddingTop: 5, paddingBottom: 5, color: Color.primary}}>Trang web của khách sạn</Text>
                    </View>
                  </View>
                </View>
            </ScrollView>
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
    flex: 0.12,
    },
  background: {
    flex: 1,
    height: 200,
    width: '100%',
    },  
  Info_container: {
    paddingLeft: 20,
    paddingRight: 20,
    //flex: 0.88,
    height: 2500
    },
  Hotel_name: {
    flex: 0.035,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },  
  Hotel_name_tittle: {
    flex: 0.8,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Price: {
    flex: 0.12,
  },
  Booking_info: {
    flex: 0.3,
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
    flex: 0.2,
    alignItems: "center",
  },
  Price_footer: {
    flex: 0.1,
    justifyContent: "center",
  },  
  Button_container: {
    justifyContent: "space-between",
    flex: 0.3,
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
    flex: 0.11,
    width: '100%',
    borderColor: 'grey',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
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
    flex: 0.55,
  },
  Review_tittle: {
    flex: 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Review_comment: {
    flex: 0.97,
  },
  Review_comment_display: {
    flex: 0.2,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    justifyContent: "center",
  },
  Review_comment_lui: {
    flex: 0.9
  },
  Review_comment_info: {
    height: 55,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  Review_comment_name: {
    flex: 0.75,
  },
  Review_comment_content: {
  },
  mapView: {
    width: '100%',
    height: 300,
  },
})
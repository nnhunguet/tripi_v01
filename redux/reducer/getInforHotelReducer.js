import * as ActionTypes from '../actionTypes';

const initialNoteState = {
  data: [{
    "address": "Số 19 Phạm Đình Hổ, Quận Hai Bà Trưng, Hà Nội",
    "cleanliness_score": 8.2,
    "description": `Nằm cách Nhà hát Lớn Hà Nội 900 m, Sunway Hotel Hanoi cung cấp các phòng với cửa sổ cách âm tại quận Hai Bà Trưng. Khách 
sạn có sân hiên tắm nắng, nhà hàng cùng chỗ đỗ xe riêng miễn phí trong khuôn viên.. Tất cả các phòng rộng rãi tại đây đều có Wi-Fi miễn phí, 
sàn trải thảm, máy điều hòa và hệ thống sưởi. Phòng cũng có két an toàn điện tử, TV truyền hình vệ tinh, tủ lạnh mini đầy ắp đồ và ấm đun nước điện. Phòng tắm riêng đi kèm tiện nghi vòi sen và máy sấy tóc. Đồ vệ sinh cá nhân miễn phí và khăn tắm cũng được cung cấp nhằm mang lại sự 
thoải mái cho quý khách.. Khách sạn có phòng tập thể dục với trang thiết bị tập thể dục và phòng xông hơi ướt. Trung tâm dịch vụ doanh nhân tại khách sạn cung cấp các tiện nghi làm việc và các dịch vụ chuyên nghiệp. Nhân viên tại bàn đặt tour và quầy lễ tân phục vụ 24 giờ sẵn sàng 
trợ giúp quý khách giữ hành lý, sắp xếp các chuyến đi và dịch vụ đưa đón sân bay.. Sunway Hotel Hanoi nằm trong bán kính 1 km từ trung tâm mua sắm Tràng Tiền Plaza cũng như Bảo tàng Cách mạng Việt Nam và 1,7 km từ Nhà thờ Lớn. Sân bay quốc tế Nội Bài cách chỗ nghỉ 23 km.. Nhà hàng 
phục vụ các món ăn Việt Nam và quốc tế. Quý khách có thể thư giãn nhâm nhi đủ các loại cocktail và rượu vang trong lúc thưởng thức nhạc sống 
tại The Bar.`,
    "hotel_id": 67,
    "location_score": 7.6,
    "logo": "https://www.googleapis.com/download/storage/v1/b/hotel_image/o/logo%2F4%2F10967.jpg?generation=1563769973576843&alt=media",     
    "meal_score": 8.6,
    "name": "Khách sạn Sunway Hà Nội (Sunway Hotel)",
    "overall_score": 8,
    "service_score": 8.3,
    "sleep_quality_score": 8.6,
    "star_number": 4,
  }
  ]
};

export default function getInforHotelReducer(state = initialNoteState, action) {
  switch(action.type) {
    case ActionTypes.GET_INFOR_HOTEL_SUCCEEDED:
      return action.payload;
    case ActionTypes.GET_INFOR_HOTEL_FAILD: 
      return state;  
    default:
      return state;
      break;
  }
}


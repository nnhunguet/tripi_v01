import { Dimensions } from 'react-native';

export const COLOR = "#E62E5E";
export const WIDTH_DEVICE = Dimensions.get('window').width;
export const HEIGHT_DEVICE = Dimensions.get('window').height;
export const PADDING = 16;
export const PROFILE = {
  option: 'Profile',
  type: [
    {
      id: 1,
      icon: 'lock',
      title: 'Thay đổi mật khẩu'
    },
    {
      id: 2,
      icon: 'users',
      title: 'Mời bạn bè',
    },
    {
      id: 3,
      icon: 'gift',
      title: 'Ưu đãi & Khuyến mại',
    },
    {
      id: 4,
      icon: 'help-circle',
      title: 'Trợ giúp',
    },
    {
      id: 5,
      icon: 'credit-card',
      title: 'Thanh toán',
    },
    {
      id: 6,
      icon: 'settings',
      title: 'Cài đặt'
    }
  ],
};
export const SETTING = {
  option: 'Setting',
  type: [
    {
      id: 1,
      icon: 'bell',
      title: 'Thông báo'
    },
    {
      id: 2,
      desc: 'Việt Nam',
      title: 'Quốc gia',
    },
    {
      id: 3,
      desc: 'VND',
      title: 'Tiền tệ',
    },
    {
      id: 4,
      icon: 'chevron-right',
      title: 'Điều khoản dịch vụ',
    },
    {
      id: 5,
      icon: 'chevron-right',
      title: 'Chính sách bảo mật',
    },
    {
      id: 6,
      icon: 'chevron-right',
      title: 'Gửi phản hồi'
    },
    {
      id: 7,
      icon: 'chevron-right',
      title: 'Đăng xuất'
    }
  ],
};

export const ACCOUNT = {
  option: 'Account',
  type: [
    {
      id: 1,
      desc: 'Nguyễn Nghĩa Hùng',
      title: 'Họ và tên',
    },
    {
      id: 2,
      desc: 'nnhungjs@gmail.com',
      title: 'Email',
    },
    {
      id: 3,
      desc: '0866979200',
      title: 'Điện thoại',
    },
    {
      id: 4,
      desc: '30/09/2000', //Phải sử dụng moment ở đây
      title: 'Ngày sinh',
    },
    {
      id: 5,
      desc: 'Cầu Giấy, Hà Nội',
      title: 'Địa chỉ',
    },
  ],
}

export const account = {
  id: '1',
  usename: 'hungbn12301',
  password: 'hungbn01',
}
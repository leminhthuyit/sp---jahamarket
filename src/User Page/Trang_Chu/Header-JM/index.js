import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle from './container.styled';
import 'antd/dist/antd.css';
import { Row, Col, Input, Badge, Typography, Button, Drawer, Menu, Image, Space } from 'antd';

import { BsSmartwatch, BsTools, BsController, BsPersonCircle } from 'react-icons/bs';
import {
  FaShoppingBag,
  FaBars,
  FaShoppingCart,
  FaHeadphonesAlt,
  FaShippingFast,
} from 'react-icons/fa';
import { AiOutlineMobile, AiOutlineTablet } from 'react-icons/ai';

const { Search } = Input;
const { Title, Text } = Typography;

//====== Menu =======
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to="/dienthoai">Điện Thoại</Link>, 'sub1', <AiOutlineMobile />, [
    getItem(<Link to="/danhmucsanpham">Apple</Link>, '1'),
    getItem(<Link to="/danhmucsanpham">Samsung</Link>, '2'),
    getItem(<Link to="/danhmucsanpham">Xiaomi</Link>, '3'),
    getItem(<Link to="/danhmucsanpham">Nokia</Link>, '4'),
    getItem(<Link to="/danhmucsanpham">Realme</Link>, '5'),
  ]),
  getItem(<Link to="/maytinhbang">Máy Tính Bảng</Link>, 'sub2', <AiOutlineTablet />, [
    getItem(<Link to="/danhmucsanpham">iPad Pro</Link>, '6'),
    getItem(<Link to="/danhmucsanpham">Samsung</Link>, '7'),
    getItem(<Link to="/danhmucsanpham">Xiaomi</Link>, '8'),
  ]),
  getItem(<Link to="/smartwatch">Smart Watchs</Link>, 'sub4', <BsSmartwatch />, [
    getItem(<Link to="/danhmucsanpham">Apple Watch</Link>, '11'),
    getItem(<Link to="/danhmucsanpham">Samsung</Link>, '12'),
    getItem(<Link to="/danhmucsanpham">Xiaomi</Link>, '13'),
  ]),
  getItem(<Link to="/amthanh">Âm Thanh</Link>, 'sub3', <FaHeadphonesAlt />, [
    getItem(<Link to="/danhmucsanpham">Loa</Link>, '9'),
    getItem(<Link to="/danhmucsanpham">Tai Nghe</Link>, '10'),
  ]),

  getItem(<Link to="/phukien">Phụ Kiện</Link>, 'sub6', <BsTools />, [
    getItem(<Link to="/danhmucsanpham">Sạc - Cáp</Link>, '14'),
    getItem(<Link to="/danhmucsanpham">Pin Dự Phòng</Link>, '15'),
  ]),
  getItem(<Link to="/xbox">Xbox</Link>, 'sub5', <BsController />),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Headers = () => {
  //====== Menu =======
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
    console.log(keys);
  };

  const handleMenuItemClick = (e) => {
    console.log(e.key);
  };
  //========== end ============

  //==== Drawer Menu ======
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  //========== end ============

  return (
    <HeaderStyle>
      <Row align="middle" justify="space-around" style={{ height: '100%' }}>
        <Col offset={1}>
          <div className="container_logo">
            <Link to="/">
              <div className="name_logo">
                <FaShoppingBag />
                <Title level={3}>JaHoMarket</Title>
              </div>
            </Link>
          </div>
        </Col>

        <Col offset={1}>
          <div className="container_menu_search">
            <div className="container_menu">
              <Button type="primary" onClick={showDrawer} ghost>
                <FaBars />
              </Button>
              <Drawer
                title={<Title level={3}>JaHoMarket</Title>}
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                key="left"
                width={300}
              >
                <Space
                  direction="vertical"
                  size={32}
                  style={{
                    display: 'flex',
                  }}
                >
                  <Menu
                    mode="inline"
                    onOpenChange={onOpenChange}
                    style={{
                      width: '100%',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                    }}
                    items={items}
                    onClick={handleMenuItemClick}
                    className="content_menu"
                  />
                  <Image style={{ borderRadius: '10px' }} />
                </Space>
              </Drawer>
            </div>
            <div className="container_search">
              <Search placeholder="Nhập từ khóa tìm kiếm..." enterButton />
            </div>
          </div>
        </Col>

        <Col>
          <div className="container_login_cart">
            <Link to="/dangnhap">
              <BsPersonCircle />
              <Text className="txt_content">Tài Khoản</Text>
            </Link>
          </div>
        </Col>

        <Col>
          <div className="container_login_cart">
            <Link to="/tracuudonhang">
              <FaShippingFast />
              <Text className="txt_content">
                Tra Cứu
                <br />
                Đơn hàng
              </Text>
            </Link>
          </div>
        </Col>

        <Col>
          <div className="container_login_cart">
            <Link to="/giohang">
              <Badge className="" count={9} size={'small'} color={'#16BCDC'}>
                <FaShoppingCart />
              </Badge>
              <Text className="txt_content">Giỏ Hàng</Text>
            </Link>
          </div>
        </Col>
      </Row>
    </HeaderStyle>
  );
};

export default Headers;

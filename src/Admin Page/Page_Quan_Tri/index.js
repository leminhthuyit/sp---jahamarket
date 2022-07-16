import React from 'react';
import { Link } from 'react-router-dom';
import PageQuanTriStyle from './container.styled';
import 'antd/dist/antd.css';
import {
  AppstoreOutlined,
  SettingOutlined,
  ShoppingOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { FaRegCompass, FaRegUser, FaShoppingBag, FaAward } from 'react-icons/fa';
import { Col, Row, Menu, Avatar, Typography } from 'antd';
const { Title } = Typography;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem(
    <Link to="/bangdieukhien">
      <AppstoreOutlined />
      Bảng Điều Kiển
    </Link>,
    '1'
  ),
  getItem(
    <Link to="/cacsanpham">
      <ShoppingOutlined />
      Các Sản Phẩm
    </Link>,
    '2'
  ),
  getItem(
    <Link to="/loaisanpham">
      <ProfileOutlined />
      Loại Sản Phẩm
    </Link>,
    '3'
  ),
  getItem(
    <Link to="/thuonghieu">
      {' '}
      <FaAward />
      Thương Hiệu Sản Phẩm
    </Link>,
    '4'
  ),
  getItem(
    <Link to="/khachhang">
      <TeamOutlined />
      Khách Hàng
    </Link>,
    '5'
  ),
  getItem(
    <Link to="/donhang">
      {' '}
      <FaRegCompass />
      Đơn Hàng
    </Link>,
    '6'
  ),
  getItem(
    <Link to="/nhanvien">
      {' '}
      <FaRegUser />
      Danh Sách Nhân Viên
    </Link>,
    '7'
  ),
  getItem(
    <Link to="/caidat">
      <SettingOutlined />
      Cài Đặt
    </Link>,
    '8'
  ),
];

const PageQuanTri = ({ children }) => {
  return (
    <PageQuanTriStyle>
      <Row>
        <div className="header_main">
          <Link to="/bangdieukhien">
            <div className="shop_name">
              <FaShoppingBag />
              <Title level={3}>JaHoMarket</Title>
            </div>
          </Link>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </Row>
      <Row>
        <Col span={4}>
          <div className="navbar_main">
            <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
          </div>
        </Col>

        <Col span={20}>
          <div className="content">{children}</div>
        </Col>
      </Row>
    </PageQuanTriStyle>
  );
};

export default PageQuanTri;

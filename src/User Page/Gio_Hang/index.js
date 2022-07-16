import React, { useState } from 'react';
import 'antd/dist/antd.css';
import GioHangStyle from './giohang.style';
import './style.css';
import { Typography, Image, Space, InputNumber, Button, Drawer, Input, Radio, message } from 'antd';
import {
  BsFillCartCheckFill,
  BsTrash,
  BsCashCoin,
  BsGeoAltFill,
  BsTruck,
  BsCreditCard2Front,
} from 'react-icons/bs';

import Headers from '../Trang_Chu/Header-JM';
import Footers from '../Trang_Chu/Footers-JM';

const { Title } = Typography;

// ========= Radio =======
const onChangeInput = (value) => {
  console.log('changed', value);
};

// ========= message =======
const key = 'updatable';

const openMessage = () => {
  message.loading({
    content: 'Đặt Hàng...',
    key,
  });
  setTimeout(() => {
    message.success({
      content: 'Đặt Hàng Thành Công!',
      key,
      duration: 2,
    });
  }, 1000);
};

const GioHang = () => {
  // ========= Drawer ==============================
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  //=================================================

  // ========= Radio ================================
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  //=================================================

  return (
    <>
      <Headers />
      <GioHangStyle>
        <div className="main_content">
          <div className="title_cart">
            <Title level={2}>
              <BsFillCartCheckFill />
              Giỏ Hàng
            </Title>
          </div>

          <div className="cart_table">
            <table className="table_container">
              <thead>
                <tr>
                  <th style={{ width: '500px' }}>Sản Phẩm</th>
                  <th style={{ width: '190px' }}>Đơn Giá</th>
                  <th style={{ width: '130px' }}>Số Lượng</th>
                  <th style={{ width: '190px' }}>Số Tiền</th>
                  <th style={{ width: '85px' }}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'start' }}>
                    <Space align="center" size={12}>
                      <Image preview={false} />
                      {/* <Title level={5}>{data[0].name}</Title> */}
                    </Space>
                  </td>
                  <td>3.000.000.000.000 đ</td>
                  <td>
                    <InputNumber
                      min={1}
                      max={99}
                      keyboard={true}
                      defaultValue={1}
                      onChange={onChangeInput}
                    />
                  </td>
                  <td>3.000.000.000.000 đ</td>
                  <td>
                    <BsTrash />
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: 'start' }}>
                    <Space align="center" size={12}>
                      <Image preview={false} />
                      {/* <Title level={5}>{data[1].name}</Title> */}
                    </Space>
                  </td>
                  <td>3.000.000.000.000 đ</td>
                  <td>
                    <InputNumber
                      min={1}
                      max={99}
                      keyboard={true}
                      defaultValue={1}
                      onChange={onChangeInput}
                    />
                  </td>
                  <td>3.000.000.000.000 đ</td>
                  <td>
                    <BsTrash />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="total_payment">
            <div className="content_total">
              <Title level={3}>TỔNG THANH TOÁN:</Title>
              <Title level={3}>9.000.000.000 đ</Title>
              <Button onClick={showDrawer}>Mua Hàng</Button>
              <Drawer
                title={
                  <Title
                    level={3}
                    style={{
                      color: '#263C97',
                      margin: '0',
                    }}
                  >
                    <Space align="center">
                      <BsCashCoin />
                      Mua Hàng
                    </Space>
                  </Title>
                }
                placement="right"
                onClose={onClose}
                visible={visible}
                className="container_drawer"
                size="large"
                // bodyStyle={{ backgroundColor: "blueviolet" }}
              >
                <div className="address_content box_style">
                  <Title level={5}>
                    <Space align="center">
                      <BsGeoAltFill />
                      Địa Chỉ Nhận Hàng
                    </Space>
                  </Title>
                  <Input className="input_number" placeholder="Họ và Tên" />
                  <Input className="input_number" placeholder="Số Điện Thoại" />
                  <Input placeholder="Địa chỉ" />
                </div>
                <div className="product_content box_style">
                  <table className="table_drawer">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Sản Phẩm</th>
                        <th style={{ width: '25%' }}>Đơn Giá</th>
                        <th style={{ width: '10%' }}>Số Lượng</th>
                        <th style={{ width: '25%' }}>Thành TIền</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: 'start' }}>
                          <Space align="center" size={12}>
                            <Image preview={false} width={60} style={{ objectFit: 'cover' }} />
                            {/* <Title level={5}>{data[0].name}</Title> */}
                          </Space>
                        </td>
                        <td>3.000.000.000.000 đ</td>
                        <td>1</td>
                        <td>3.000.000.000.000 đ</td>
                      </tr>

                      <tr>
                        <td style={{ textAlign: 'start' }}>
                          <Space align="center" size={12}>
                            <Image preview={false} width={60} style={{ objectFit: 'cover' }} />
                            {/* <Title level={5}>{data[0].name}</Title> */}
                          </Space>
                        </td>
                        <td>3.000.000.000.000 đ</td>
                        <td>1</td>
                        <td>3.000.000.000.000 đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="transport_content box_style">
                  <Title level={5} style={{ color: '#263C97' }}>
                    <Space align="center">
                      <BsTruck />
                      Đợn Vị Vận Chuyển
                    </Space>
                  </Title>
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={1}>Giao Hàng Nhanh</Radio>
                      <Radio value={2}>Giao Hàng TIết Kiệm</Radio>
                      <Radio value={3}>Viettel Post</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <div className="payment_method box_style">
                  <div className="pay_content">
                    <Title level={5} style={{ color: '#263C97' }}>
                      <Space align="center">
                        <BsCreditCard2Front />
                        Phương thức thanh toán
                      </Space>
                    </Title>
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      optionType="button"
                      buttonStyle="solid"
                    >
                      <Space>
                        <Radio value={4}>Thanh Toán Khi Nhận Hàng</Radio>
                        <Radio value={5}>Thanh Toán Online</Radio>
                      </Space>
                    </Radio.Group>
                  </div>

                  <div className="total_content">
                    <div className="total_payment ">
                      <div className="title_pay">
                        <Title level={5}>Tổng Tiền Hàng:</Title>
                        <Title level={5}>Phí Vận Chuyển:</Title>
                        <Title level={4}>TỔNG THANH TOÁN:</Title>
                      </div>
                      <div className="number_pay">
                        <Title level={5}>3.000.000.000 đ</Title>
                        <Title level={5}>50.000 đ</Title>
                        <Title level={4}>9.000.000.000 đ</Title>
                      </div>
                    </div>
                    <div className="btn_pay">
                      <Button onClick={openMessage}>Đặt Hàng</Button>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </GioHangStyle>
      <Footers />
    </>
  );
};

export default GioHang;

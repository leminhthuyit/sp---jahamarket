import React from "react";
import BangDieuKhienStyle from "./container.style";
import { Col, Row, Typography, Table } from "antd";
import "antd/dist/antd.css";
import {
  AiOutlineWallet,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineCheck,
} from "react-icons/ai";
import { BsArrowRepeat, BsTruck } from "react-icons/bs";
import ColumnChart from "./Charts/ColumnChart";
import PieChart from "./Charts/PieChart";

const { Title, Text } = Typography;

//==== Start - Table ===============================
const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "key",
    width: 120,
    className: "column1",
  },
  {
    title: "Số điện thoại",
    dataIndex: "numberphone",
    width: 130,
  },
  {
    title: "Ngày đặt hàng",
    dataIndex: "ordertime",
    width: 120,
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    width: 180,
  },
  {
    title: "Phương thức thanh toán",
    dataIndex: "paymentmethod",
    width: 150,
  },
  {
    title: "Thành tiền",
    dataIndex: "money",
    width: 150,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    width: 100,
    className: "column2",
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: `${i}JM${i}SPOR`,
    numberphone: `099${i}33${i}55${i}`,
    ordertime: `0${i}/06/2022`,
    address: `Hà Nội, Hoàn Kiếm Số. ${i}`,
    paymentmethod: "COD",
    money: "333.555 đ",
    status: "Đã giao hàng",
  });
}
//==== End - Table =================================

const BangDieuKhien = () => {
  return (
    <BangDieuKhienStyle>
      <Row>
        <div className="title_function">
          <Title level={4}>Tổng Quan</Title>
        </div>
      </Row>

      {/* start - Thống kê doanh thu */}
      <div className="container_turnover">
        <Row justify="space-between">
          <Col>
            <div className="box_today box_content">
              <AiOutlineWallet />
              <Text>Hôm Nay</Text>
              <Title level={2}>300.000 VNĐ</Title>
            </div>
          </Col>
          <Col>
            <div className="box_month box_content">
              <AiOutlineShoppingCart />
              <Text>Trong Tháng</Text>
              <Title level={2}>3.000.000 VNĐ</Title>
            </div>
          </Col>
          <Col>
            <div className="box_total box_content">
              <AiOutlineShop />
              <Text>Một Năm</Text>
              <Title level={2}>300.000.000 VNĐ</Title>
            </div>
          </Col>
        </Row>
      </div>
      {/* end - doanh thu */}

      {/* start - Thống kê đơn hàng */}
      <div className="container_order">
        <Row justify="space-between">
          <Col>
            <div className="content_total box_order">
              <div className="icon_order icon_total">
                <AiOutlineShoppingCart />
              </div>
              <div className="txt_order">
                <Text>Tổng Đơn Hàng</Text>
                <Title level={3}>333</Title>
              </div>
            </div>
          </Col>

          <Col>
            <div className="content_pending box_order">
              <div className="icon_order icon_pending">
                <BsArrowRepeat />
              </div>
              <div className="txt_order">
                <Text>Đơn Hàng Đang Xử Lý</Text>
                <Title level={3}>33</Title>
              </div>
            </div>
          </Col>

          <Col>
            <div className="content_processing box_order">
              <div className="icon_order icon_processing">
                <BsTruck />
              </div>
              <div className="txt_order ">
                <Text>Đơn Hàng Đã Xử Lý</Text>
                <Title level={3}>123</Title>
              </div>
            </div>
          </Col>

          <Col>
            <div className="content_delivered box_order">
              <div className="icon_order icon_delivered">
                <AiOutlineCheck />
              </div>
              <div className="txt_order">
                <Text>Đơn Hàng Đã Giao Hàng</Text>
                <Title level={3}>111</Title>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* end - Thống kê đơn hàng */}

      {/* start - Biểu đồ sản phẩm */}
      <div className="container_chart">
        <Row justify="space-between">
          <Col>
            <div className="main_chart">
              <Title level={4}>Doanh Số Một Năm</Title>
              <div className="column_chart">
                <ColumnChart />
              </div>
            </div>
          </Col>

          <Col>
            <div className="main_chart">
              <Title level={4}>Top Sản Phẩm Bán Chạy</Title>
              <div className="pie_chart">
                <PieChart />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* end - Biểu đồ sản phẩm */}

      {/* start - Lịch sử đơn hàng */}
      <div className="table_recent_orders">
        <Row>
          <Title level={4}>Đơn Hàng Gần Đây</Title>
          <Table
            className="container_table"
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
            }}
            scroll={{
              y: 400,
            }}
          />
        </Row>
      </div>
      {/* end - Lịch sử đơn hàng */}
    </BangDieuKhienStyle>
  );
};

export default BangDieuKhien;

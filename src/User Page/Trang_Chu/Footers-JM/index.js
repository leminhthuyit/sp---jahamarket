import React from "react";
import { Row, Col, Input, Button, Typography } from "antd";
import "antd/dist/antd.css";
import { FaHeadset } from "react-icons/fa";
import FooterStyle from "./container.style"; 

const { Title, Text, Link } = Typography;

const Footers = () => {
  return (
    <FooterStyle>
      <Row gutter={24}>
        <Col span={6}>
          <div className="store_introduction">
            <Title level={5}>Giới Thiệu Cửa Hàng</Title>
            <Text>
              Sứ mệnh của chúng tôi là cung cấp trải nghiệm khách hàng tuyệt đối
              tốt nhất hiện có trong ngành Điện tử mà không có ngoại lệ.
            </Text>
            <div className="container_hotline">
              <FaHeadset className="icon_hotline" />
              <div className="content_hotline">
                <Text>Hotline 24/7!</Text>
                <br />
                <Link href="#">(+84) 123 456 7890</Link>
              </div>
            </div>
            <Text>Địa chỉ: Kim Chung, Hoài Đức, Hà Nội, Việt Nam</Text>
          </div>
        </Col>

        <Col span={4}>
          <div className="help_account">
            <Title level={5}>Tài Khoản</Title>
            <ul>
              <li>
                <Link>Hỗ trợ sản phẩm</Link>
              </li>
              <li>
                <Link>Thủ tục thanh toán</Link>
              </li>
              <li>
                <Link>Giỏ hàng</Link>
              </li>
              <li>
                <Link>Danh sách yêu thích</Link>
              </li>
              <li>
                <Link>Điều khoản và điều kiện</Link>
              </li>
              <li>
                <Link>Phiếu đổi thưởng</Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col span={4}>
          <div className="help_care">
            <Title level={5}>Chăm Sóc Khách Hàng</Title>
            <ul>
              <li>
                <Link>Khách hàng mới</Link>
              </li>
              <li>
                <Link>Hướng dẫn sử dụng tài khoản</Link>
              </li>
              <li>
                <Link>Đặt hàng</Link>
              </li>
              <li>
                <Link>Phương thức thanh toán</Link>
              </li>
              <li>
                <Link>Giao hàng &amp; gửi hàng</Link>
              </li>
              <li>
                <Link>Các vấn đề về đơn hàng</Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col span={4}>
          <div className="customer_service">
            <Title level={5}>Dịch Vụ Khách Hàng</Title>
            <ul>
              <li>
                <Link>Trung tâm trợ giúp</Link>
              </li>
              <li>
                <Link>Liên hệ chúng tôi</Link>
              </li>
              <li>
                <Link>Báo cáo lạm dụng</Link>
              </li>
              <li>
                <Link>Gửi tranh chấp</Link>
              </li>
              <li>
                <Link>Chính sách &amp; quy tắc</Link>
              </li>
            </ul>
          </div>
        </Col>

        <Col span={6}>
          <div className="get_notifications">
            <Title level={5}>Đăng Ký Nhận Thông Báo</Title>
            <ul>
              <li>
                <Text>
                  Tham gia cùng hơn 60.000 người đăng ký và nhận phiếu giảm giá
                  mới vào thứ Bảy hàng tuần
                </Text>
              </li>
              <li>
                <Input.Group compact className="input_group_footer">
                  <Input
                    className="input_footer"
                    placeholder="Nhập Email ....."
                  />
                  <Button className="btn_footer" type="primary">
                    Submit
                  </Button>
                </Input.Group>
              </li>
              <li className="li_botom">
                <Text>
                  By providing your email address, you agree to our
                  <Link> Privacy Policy</Link> and <Link>Terms of Service</Link>
                  .
                </Text>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </FooterStyle>
  );
};

export default Footers;

import React from "react";
import { Row, Col, Typography, Image } from "antd";
import StyledSliderContent from "./Container.styled";

import banner_1 from "../../../../images/Banner/banner-1.jpg";
import banner_2 from "../../../../images/Banner/banner-2.jpg";
import banner_3 from "../../../../images/Banner/banner-3.jpg";

const { Title, Text, Link } = Typography;

const SliderContent = () => {
  return (
    <StyledSliderContent>
      <Row gutter={32}>
        <Col span={8}>
          <div className="banner_1 banner_hover">
            <div className="img_banner">
              <Image src={banner_1} preview={false}></Image>
            </div>
            <div className="content_banner">
              <Title level={3}>
                <Link className="txt_title" href="#">
                  Thông minh
                  <br /> Điều kiển cảm ứng mới
                </Link>
              </Title>
              <Text className="txt_title_small">
                Giảm giá 20% cho các sản phẩm
              </Text>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <div className="banner_2 banner_hover">
            <div className="img_banner">
              <Image src={banner_2} preview={false}></Image>
            </div>
            <div className="content_banner content_banner_2">
              <Title level={3}>
                <Link className="txt_title">
                  Đàng giảm giá <br /> Giá tốt nhất
                </Link>
              </Title>
              <Text className="txt_title_small">
                Thời gian có hạn: chỉ áp dụng mua online
              </Text>
            </div>
          </div>
        </Col>

        <Col span={8}>
          <div className="banner_3 banner_hover">
            <div className="img_banner">
              <Image src={banner_3} preview={false}></Image>
            </div>
            <div className="content_banner content_banner_3">
              <Title level={3}>
                <Link className="txt_title">
                  Hot sale <br /> Máy tính xách tay 2022
                </Link>
              </Title>
              <Text className="txt_title_small">
                Miễn Phí Vận Chuyển tất cả các đơn hàng
              </Text>
            </div>
          </div>
        </Col>
      </Row>
    </StyledSliderContent>
  );
};

export default SliderContent;

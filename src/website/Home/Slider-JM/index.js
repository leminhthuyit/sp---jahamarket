import React from "react";
import { Row, Col, Button, Typography, Image, Space } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide1 from "../../../images/Slider/03-slide-1.jpg";
import Slide2 from "../../../images/Slider/03-slide-2.jpg";
import Slide3 from "../../../images/Slider/03-slide-3.jpg";

import Banner1 from "../../../images/Banner/banner-17.jpg";
import Banner2 from "../../../images/Banner/banner-18.jpg";
import Banner3 from "../../../images/Banner/banner-19.jpg";

import SliderStyle from "./container.style";

const { Title, Text, Link } = Typography;

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <SliderStyle>
      <Row>
        <Space size={34}>
          <Col>
            <div className="main_slider">
              <Slider className="container_slider" {...settings}>
                <div className="content_slider">
                  <Image src={Slide1} preview={false} />
                  <div className="txt_slider">
                    <Button className="btn_top">Ưu đãi lớn</Button>
                    <Title level={2}>
                      Giảm giá lớn <br />
                      Hãng tai nghe hàng đầu
                    </Title>
                    <Text className="txt_bottom">
                      Phiên Bản Thể Thao Tốt Nhất 2022
                    </Text>
                    <br />
                    <Button className="btn_bottom" ghost>
                      XEM NGAY
                    </Button>
                  </div>
                </div>

                <div className="content_slider">
                  <Image src={Slide2} preview={false} />
                  <div className="txt_slider">
                    <Button className="btn_top">Ưu đãi lớn</Button>
                    <Title level={2}>
                      GEAR 360 <br />
                      Phụ kiện không dây
                    </Title>
                    <Text className="txt_bottom">
                      Tai Nghe &amp; Phụ Kiện Chất Lượng Hàng Đầu
                    </Text>
                    <br />
                    <Button className="btn_bottom" ghost>
                      XEM NGAY
                    </Button>
                  </div>
                </div>

                <div className="content_slider">
                  <Image src={Slide3} preview={false} />
                  <div className="txt_slider">
                    <Button className="btn_top">Ưu đãi lớn</Button>
                    <Title level={2}>
                      Giới hạn <br />
                      Duy nhất trong tuần
                    </Title>
                    <Text className="txt_bottom">
                      Giảm Giá 20% Cho Các Sản Phẩm
                    </Text>
                    <br />
                    <Button className="btn_bottom" ghost>
                      XEM NGAY
                    </Button>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>

          <Col>
            <div className="banner_center">
              <div className="general_banner banner_center_top">
                <div className="container_banner">
                  <Image src={Banner1} preview={false} />
                  <div className="banner_content">
                    <Title level={5}>
                      <Link>
                        Phong Cách Mới <br /> Loa Bluetooh
                      </Link>
                    </Title>
                    <Text>Miễn Phí Vận Chuyển 20km</Text>
                  </div>
                </div>
              </div>

              <div className="general_banner">
                <div className="container_banner">
                  <Image src={Banner2} preview={false} />
                  <div className="banner_content">
                    <Title level={5}>
                      <Link>
                        Phiên Bản Giới Hạn <br /> Hãng Máy Ảnh Hàng Đầu
                      </Link>
                    </Title>
                    <Text>Miễn Phí Vận Chuyển 20km</Text>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="banner_right">
              <div className="containers_banner">
                <Image src={Banner3} preview={false} />
                <div className="banners_content">
                  <Button className="btn_top" type="primary">
                    Ưu đãi lớn
                  </Button>
                  <br />
                  <Text className="txt_banner_right">Xbox Không Dây</Text>
                  <Title level={5}>
                    <Link>Giảm Giá Tới 50%</Link>
                  </Title>
                  <Button className="btn_bottom" ghost>
                    XEM NGAY
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Space>
      </Row>
    </SliderStyle>
  );
};

export default Sliders;

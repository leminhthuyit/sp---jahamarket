import React, { useState } from "react";
import SanPhamStyle from "./container.styled";
import {
  Row,
  Col,
  Image,
  Typography,
  Breadcrumb,
  Button,
  Rate,
  InputNumber,
} from "antd";

const { Title, Text, Link } = Typography;

const SanPham = (slides) => {
  const [currentImg, setCurrentImg] = useState(0);

  console.log(currentImg);

  const handleImageClick = (number) => {
    setCurrentImg(number);
  };

  return (
    <SanPhamStyle>
      {/* start - Row phân tầng hệ thống */}
      <Row>
        <div className="product_breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="hierarchy_breadcrumb" href="">
                Application Center
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="hierarchy_breadcrumb" href="">
                Application List
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Row>
      {/* end - Row phân tầng hệ thống */}

      {/*start - Row layout sản phẩm */}
      <div className="main_products">
        <Row>
          {/*start - Col slides image sản phẩm */}
          <Col>
            <div className="img_product_container">
              <section className="slides_product">
                <div className="img_product">
                  <Button>
                    <Image
                      
                      preview={false}
                      onClick={() => handleImageClick(0)}
                    />
                  </Button>
                  <Button>
                    <Image
                      
                      preview={false}
                      onClick={() => handleImageClick(1)}
                    />
                  </Button>
                  <Button>
                    <Image
                      
                      preview={false}
                      onClick={() => handleImageClick(2)}
                    />
                  </Button>
                </div>
                {/* <div className="img_big_product">
                  {DataImage.map((slide, index) => (
                    <div
                      className={
                        index === currentImg ? "slide active" : "slide"
                      }
                      key={index}
                    >
                      {index === currentImg && (
                        <Image
                          src={slide.imagebig}
                          alt="image-big"
                          className="image_big"
                        />
                      )}
                    </div>
                  ))}
                </div> */}

              </section>
            </div>
          </Col>
          {/*end - Col slides image sản phẩm */}

          {/*start - Col chi tiết sản phẩm */}
          <Col offset={2}>
            <div className="container_content_product">
              <div className="name_product">
                <Title level={3} className="txt_name">
                  Samsung Galaxy A12, 32GB, Black – (Locked)
                </Title>
                <Rate disabled defaultValue={4} />
                <Text className="txt_review">5 đánh giá</Text>
                <br />
                <Title level={3} className="txt_price">
                  11.590.000 ₫
                </Title>
              </div>
              <div className="content_product">
                <ul>
                  <li>Âm trầm và âm thanh nổi.</li>
                  <li>Màn hình với độ phân giải 3088 x 1440 pixel.</li>
                  <li>Bộ nhớ, Lưu trữ &#38; SIM: RAM 12GB, 256GB.</li>
                  <li>Androi v10.0 Operating system.</li>
                </ul>
                <Title level={5}>
                  Sẵn có: <Text>940 sản phẩm</Text>
                </Title>
                <div className="buy_product">
                  <InputNumber
                    className="input_number"
                    min={1}
                    max={100}
                    addonAfter="số lượng"
                    defaultValue={1}
                  />
                  <Button>
                    <Title level={5}>Mua ngay</Title>
                  </Button>
                </div>
              </div>
              <div className="info_product">
                <ul>
                  <li>MSP:</li>
                  <li>Thể loại:</li>
                  <li>Thẻ:</li>
                </ul>
                <ul className="ul_product">
                  <li>
                    <Text>DK1002</Text>
                  </li>
                  <li>
                    <Link>iPhone </Link>
                    <Link>Điện Thoại</Link>
                  </li>
                  <li>
                    <Link>Điện Thoại, </Link>
                    <Link>Máy Tính Bảng</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/*end - Col chi tiết sản phẩm */}
        </Row>
      </div>
      {/*end - Row layout sản phẩm */}
    </SanPhamStyle>
  );
};

export default SanPham;

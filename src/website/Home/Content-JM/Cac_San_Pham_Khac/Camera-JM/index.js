import React from "react";
import CameraStyled from "./Container.styled";
import { Row, Col, Typography, Image } from "antd";

import { AiOutlineStar, AiFillStar, AiOutlineRight } from "react-icons/ai";

import product1 from "../../../../../images/features-product/fp-8.jpg";
import product2 from "../../../../../images/features-product/fp-8.jpg";
import product3 from "../../../../../images/features-product/fp-8.jpg";

const { Title, Text, Link } = Typography;

const Cameras = () => {
  return (
    <CameraStyled>
      {/* Bắt đầu tiêu đề */}
      <Row justify="space-between" align="middle">
        <Col>
          <div className="title_product">
            <Title level={2}>Cameras</Title>
          </div>
        </Col>
        <Col>
          <div className="link_product">
            <Link href="#">Xem tất cả</Link>
            <AiOutlineRight className="icon_link_product" />
          </div>
        </Col>
      </Row>
      {/* kết thúc tiêu đề */}

      <Row gutter={[0, 20]} style={{ flexDirection: "column" }}>
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product1} preview={false}></Image>
              </div>
              <div className="offer_product">
                <Text>-15%</Text>
              </div>
            </div>
            <div className="product_content">
              <div className="product_content_1">
                <Title level={5}>
                  <Link className="name_product">
                    Epple iPad Pro 10.5-inch Cellular 64G
                  </Link>
                </Title>
                <Text className="product_price">11.590.000 ₫</Text>
                <div className="product_reviews">
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                  </ul>
                  <Text>99 đánh giá</Text>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Sản phẩm 2 */}
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product2} preview={false}></Image>
              </div>
              <div className="offer_product">
                <Text>-15%</Text>
              </div>
            </div>
            <div className="product_content">
              <div className="product_content_1">
                <Title level={5}>
                  <Link className="name_product">
                    Epple iPad Pro 10.5-inch Cellular 64G
                  </Link>
                </Title>
                <Text className="product_price">11.590.000 ₫</Text>
                <div className="product_reviews">
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                  </ul>
                  <Text>99 đánh giá</Text>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* Sản phẩm 3 */}
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product3} preview={false}></Image>
              </div>
              <div className="offer_product">
                <Text>-15%</Text>
              </div>
            </div>
            <div className="product_content">
              <div className="product_content_1">
                <Title level={5}>
                  <Link className="name_product">
                    Epple iPad Pro 10.5-inch Cellular 64G
                  </Link>
                </Title>
                <Text className="product_price">11.590.000 ₫</Text>
                <div className="product_reviews">
                  <ul>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiFillStar />
                    </li>
                    <li>
                      <AiOutlineStar />
                    </li>
                  </ul>
                  <Text>99 đánh giá</Text>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </CameraStyled>
  );
};

export default Cameras;

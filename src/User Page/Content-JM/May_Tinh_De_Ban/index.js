import React from "react";
import ComputedStyle from "./Container.styled";
import { Row, Col, Typography, Image } from "antd";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import product1 from "../../../../images/product/tp-9.jpg";
import product2 from "../../../../images/product/tp-9.jpg";
import product3 from "../../../../images/product/tp-9.jpg";
import product4 from "../../../../images/product/tp-9.jpg";
import product5 from "../../../../images/product/tp-9.jpg";
import product6 from "../../../../images/product/tp-9.jpg";

const { Title, Text, Link } = Typography;

const Computers = () => {
  return (
    <ComputedStyle>
      {/* Bắt đầu tiêu đề */}
      <Row>
        <Col>
          <div className="title_product">
            <Title level={2}>Máy tính để bàn</Title>
          </div>
        </Col>
      </Row>
      {/* kết thúc tiêu đề */}

      <Row gutter={32}>
        {/* Sản phẩm 1 */}
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
                    <li className="icon_star">
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
                    <li className="icon_star">
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

        {/* Sản phẩm 4 */}
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product4} preview={false}></Image>
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
                    <li className="icon_star">
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

        {/* Sản phẩm 5 */}
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product5} preview={false}></Image>
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
                    <li className="icon_star">
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

        {/* Sản phẩm 6 */}
        <Col>
          <div className="container_product">
            <div className="img_product_content">
              <div className="img_product">
                <Image src={product6} preview={false}></Image>
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
                    <li className="icon_star">
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
    </ComputedStyle>
  );
};

export default Computers;

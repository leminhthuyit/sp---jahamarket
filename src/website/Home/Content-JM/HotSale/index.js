import React from "react";
import StyleHotSale from "./Container.style";
import { Row, Col } from "antd";
import { AiFillFire, AiOutlineStar, AiFillStar } from "react-icons/ai";

import product1 from "../../../../images/product/tp-3.jpg";
import product2 from "../../../../images/product/tp-3.jpg";
import product3 from "../../../../images/product/tp-3.jpg";
import product4 from "../../../../images/product/tp-3.jpg";
import product5 from "../../../../images/product/tp-3.jpg";

const HotSales = () => {
  return (
    <StyleHotSale>
      {/* Bắt đầu tiêu đề */}
      <Row className="main_title_hotsale">
        <Col className="title_hotsale">
          Khuyến Mãi Hot <AiFillFire className="icon_title_hot" />{" "}
        </Col>
      </Row>
      {/* kết thúc tiêu đề */}

      {/* Bắt đầu danh mục sản phẩm */}
      <Row className="main_category_products">
        {/* bắt đầu product 1 */}
        <Col className="category_products product_1">
          <div className="contents_img_product">
            <div className="img_product">
              <a>
                <img src={product1}></img>
              </a>
            </div>

            <div className="offer_product">
              <p>-15%</p>
            </div>

            <div className=""></div>
          </div>

          <div className="product_content">
            <h6>
              <a>Epple iPad Pro 10.5-inch Cellular 64G</a>
            </h6>
            <div className="product_price">
              <p>11.590.000 ₫</p>
            </div>
            <div className="icon_star">
              <ul>
                <li className="icon">
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
              <p>99 đánh giá</p>
            </div>
          </div>
        </Col>

        {/* bắt đầu product 2 */}
        <Col className="category_products product_2">
          <div className="contents_img_product">
            <div className="img_product">
              <a>
                <img src={product2}></img>
              </a>
            </div>

            <div className="offer_product">
              <p>-25%</p>
            </div>
          </div>

          <div className="product_content">
            <h6>
              <a>Áo bóng rổ nam cỡ lớn màu vàng</a>
            </h6>
            <div className="product_price">
              <p>290.000 ₫</p>
            </div>
            <div className="icon_star">
              <ul>
                <li className="icon">
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
              <p>99 đánh giá</p>
            </div>
          </div>
        </Col>

        {/* bắt đầu product 3 */}
        <Col className="category_products product_3">
          <div className="contents_img_product">
            <div className="img_product">
              <a>
                <img src={product3}></img>
              </a>
            </div>

            <div className="offer_product">
              <p>-15%</p>
            </div>
          </div>

          <div className="product_content">
            <h6>
              <a>Epple iPad Pro 10.5-inch Cellular 64G</a>
            </h6>
            <div className="product_price">
              <p>11.590.000 ₫</p>
            </div>
            <div className="icon_star">
              <ul>
                <li className="icon">
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
              <p>99 đánh giá</p>
            </div>
          </div>
        </Col>

        {/* bắt đầu product 4 */}
        <Col className="category_products product_4">
          <div className="contents_img_product">
            <div className="img_product">
              <a>
                <img src={product4}></img>
              </a>
            </div>

            <div className="offer_product">
              <p>-15%</p>
            </div>
          </div>

          <div className="product_content">
            <h6>
              <a>Epple iPad Pro 10.5-inch Cellular 64G</a>
            </h6>
            <div className="product_price">
              <p>11.590.000 ₫</p>
            </div>
            <div className="icon_star">
              <ul>
                <li className="icon">
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
              <p>99 đánh giá</p>
            </div>
          </div>
        </Col>

        {/* bắt đầu product 5 */}
        <Col className="category_products product_5">
          <div className="contents_img_product">
            <div className="img_product">
              <a>
                <img src={product5}></img>
              </a>
            </div>

            <div className="offer_product">
              <p>-15%</p>
            </div>
          </div>

          <div className="product_content">
            <h6>
              <a>Epple iPad Pro 10.5-inch Cellular 64G</a>
            </h6>
            <div className="product_price">
              <p>11.590.000 ₫</p>
            </div>
            <div className="icon_star">
              <ul>
                <li className="icon">
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
              <p>99 đánh giá</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* Kết thúc danh mục sản phẩm */}
    </StyleHotSale>
  );
};

export default HotSales;

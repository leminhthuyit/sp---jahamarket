import React from 'react';
import StylesSanPhamNoiBat from './Container.styled';
import { Row, Col } from 'antd';
import { AiFillFire, AiOutlineStar, AiFillStar } from 'react-icons/ai';

const SanPhamNoiBat = () => {
  return (
    <StylesSanPhamNoiBat>
      {/* Bắt đầu tiêu đề */}
      <Row className="main_title_hotsale">
        <Col className="title_hotsale">
          Sản Phẩm Nổi Bật <AiFillFire className="icon_title_hot" />{' '}
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
                <img></img>
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
            <div className="product_content_detail">
              <ul>
                <li>Bass and Stereo Sound.</li>
                <li>Display with 3088 x 1440 pixels resolution.</li>
                <li>Memory, Storage &amp; SIM: 12GB RAM, 256GB.</li>
                <li>Androi v10.0 Operating system.</li>
              </ul>
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

        <Col>
          <Row className="main_category_product_small">
            {/* bắt đầu product 2 */}
            <Col>
              <Col className="category_products product_2">
                <div className="contents_img_product">
                  <div className="img_product">
                    <a>
                      <img></img>
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
                      <img></img>
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
            </Col>

            {/* bắt đầu product 4 */}
            <Col>
              <Col className="category_products product_4">
                <div className="contents_img_product">
                  <div className="img_product">
                    <a>
                      <img></img>
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
                      <img></img>
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
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Kết thúc danh mục sản phẩm */}
    </StylesSanPhamNoiBat>
  );
};

export default SanPhamNoiBat;

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BangSanPhamStyle from './container.styled';
import BangLocSanPhamStyle from './containerss.styled';
import {
  Row,
  Col,
  Image,
  Button,
  Typography,
  Select,
  Rate,
  Pagination,
  Space,
  Checkbox,
} from 'antd';
import { dbApp } from '../../../api/dbApp';
import { dbImages } from '../../../images/dbImages';

const { Title, Text } = Typography;
const { Option } = Select;

//====== pagination ================================
const data = dbApp.products;

const DanhMucSanPhamJM = (dbPhones) => {
  const [products, setProducts] = useState(dbPhones.data); // eslint-disable-next-line

  return (
    <div style={{ margin: '50px 50px' }}>
      <Row gutter={16}>
        <Col span={5}>
          <BangLocSanPhamStyle>
            <div className="filter_table_box">
              <div className="filter_table type_of_phone">
                <div className="txt_name">
                  <Title level={5}>Loại Điện Thoại</Title>
                </div>
                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Android">Android</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="iPhone">iPhone(IOS)</Checkbox>
                    </Col>
                    <Col span={16}>
                      <Checkbox value="Điện thoại phổ thông">Điện thoại phổ thông</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div className="filter_table_box">
              <div className="filter_table product_price">
                <div className="txt_name">
                  <Title level={5}>Giá</Title>
                </div>
                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Dưới 2 triệu">Dưới 2 triệu</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Từ 2 - 4 triệu">Từ 2 - 4 triệu</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Từ 4 - 7 triệu">Từ 4 - 7 triệu</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Từ 7 - 13 triệu">Từ 7 - 13 triệu</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Từ 13 - 20 triệu">Từ 13 - 20 triệu</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Trên 20 triệu">Trên 20 triệu</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div className="filter_table_box">
              <div className="filter_table internal_memory">
                <div className="txt_name">
                  <Title level={5}>Bộ Nhớ Trong</Title>
                </div>

                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Dưới 32G">Dưới 32G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="32G và 64G">32G và 64G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="128G và 256G">128G và 256G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Trên 512G">Trên 512G</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div className="filter_table_box">
              <div className="filter_table ram_capacity">
                <div className="txt_name">
                  {' '}
                  <Title level={5}>Dung Lượng Ram</Title>
                </div>

                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Dưới 4G">Dưới 4G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="4G - 6G">4G - 6G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="8G - 12G">8G - 12G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="12G trở lên">12G trở lên</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div className="filter_table_box">
              <div className="filter_table screen_product">
                <div className="txt_name">
                  {' '}
                  <Title level={5}>Màn Hình</Title>
                </div>

                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Dưới 6 inch">Dưới 6 inch</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Trên 6 inch">Trên 6 inch</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Màn hình gập">Màn hình gập</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div className="filter_table_box">
              <div className="filter_table design_product">
                <div className="txt_name">
                  {' '}
                  <Title level={5}>Thiết kế</Title>
                </div>

                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Tràn viền">Tràn viền</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Mỏng nhẹ">Mỏng nhẹ</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Mặt lưng kính">Mặt lưng kính</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>

            <div class="filter_table_box special_features_box">
              <div className="filter_table special_features">
                <div className="txt_name">
                  {' '}
                  <Title level={5}>Tính Năng Đặc Biệt</Title>
                </div>

                <Checkbox.Group>
                  <Row gutter={[0, 16]}>
                    <Col span={12}>
                      <Checkbox value="Hỗ trợ 5G">Hỗ trợ 5G</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Bảo mật khuôn mặt">Bảo mật khuôn mặt</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Bảo mật vân tay">Bảo mật vân tay</Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="Sạc không dây">Sạc không dây</Checkbox>
                    </Col>
                    <Col span={16}>
                      <Checkbox value="Kháng nước, kháng bụi">Kháng nước, kháng bụi</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </div>
          </BangLocSanPhamStyle>
        </Col>

        <Col span={19}>
          <BangSanPhamStyle>
            {/* start - banner */}
            <Row>
              <div className="banner_product">
                <Image
                  className="img_banner_bg"
                  src={dbImages.banner[0].sl_banner}
                  preview={false}
                />

                <div className="banner_content">
                  <div className="img_banner_sm">
                    <Image src={dbImages.banner[0].sl_banner_sm} preview={false} />
                  </div>
                  <div className="txt_content">
                    <Text>
                      Nhanh Tay!
                      <br />
                      Giao hàng miễn phí!
                      <br />
                      Cho tất cả các đơn hàng trên 499k
                    </Text>
                    <br />
                    <Link to="/maytinhbang">
                      <Button>XEM NGAY</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Row>
            {/* end - banner */}

            {/* start - lọc sản phẩm */}
            <Row>
              <div className="sort_container_box">
                <div className="sort_container">
                  <div className="sort_product">
                    <Title level={5}>Sắp xếp:</Title>
                    <Select defaultValue="Nổi bật">
                      <Option value="Nổi bật">Nổi bật</Option>
                      <Option value="Giá cao đến thấp">Giá cao đến thấp</Option>
                      <Option value="Giá thấp đến cao">Giá thấp đến cao</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </Row>
            {/* end - lọc sản phẩm */}

            {/* start - danh sách sản phẩm */}
            <div className="main_container_product">
              <Row>
                {products.map((datas, index) => (
                  <Col span={6} key={index}>
                    <div className="container_product">
                      <Image src={datas.image} preview={false}></Image>
                      <div className="product_content">
                        <Link to="/thongtinsanpham">
                          <Title level={5}>{datas.name}</Title>
                        </Link>
                        <Text>{datas.price}</Text>
                        <Space align="end">
                          <Rate disabled defaultValue={datas.rate} />
                          <Text className="txt_review">{datas.review}</Text>
                        </Space>
                      </div>
                      <Button>THÊM VÀO GIỎ HÀNG</Button>
                    </div>
                  </Col>
                ))}
                ;
              </Row>
            </div>

            {/* end - danh sách sản phẩm */}

            {/* start - phân trang */}
            <Row justify="center" style={{ width: '100%' }}>
              <div className="container_pagination">
                <Pagination showSizeChanger defaultCurrent={1} defaultPageSize={10} total={50} />
              </div>
            </Row>
            {/* end - phân trang */}
          </BangSanPhamStyle>
        </Col>
      </Row>
    </div>
  );
};

export default DanhMucSanPhamJM;

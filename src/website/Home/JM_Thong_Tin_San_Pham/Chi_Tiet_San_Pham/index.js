import React, { useState } from "react";
import ChiTietSanPhamStyle from "./container.styled";
import {
  Tabs,
  Typography,
  Image,
  Row,
  Col,
  Rate,
  Avatar,
  Input,
  Button,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

import productContent1 from "../../../../images/features-product/product-content-3.jpg";
import productContent2 from "../../../../images/features-product/product-content-4.jpg";

const { TabPane } = Tabs;
const { Title, Text, Link } = Typography;
const { TextArea } = Input;
const desc = ["Rất Tệ", "Tệ", "Bình Thường", "Tốt", "Tuyệt Vời"];

const ChiTietSanPham = () => {
  const [value, setValue] = useState(3);

  return (
    <ChiTietSanPhamStyle>
      <div className="main_product_details">
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="Thông Tin Sản Phẩm" key="1">
            <div className="content_product_details">
              <Text>
                Được thiết kế bởi Hans J. Wegner vào năm 1949, là một trong
                những mẫu ghế đầu tiên được tạo ra đặc biệt cho Carl Hansen
                &amp; Son, và được sản xuất từ năm 1950. Chiếc ghế cuối cùng của
                loạt ghế wegner được thiết kế dựa trên cảm hứng từ những chiếc
                ghế bành cổ của Trung Quốc. Phần trên được bo tròn nhẹ nhàng
                cùng với lưng và ghế ngồi cung cấp nhiều vị trí ngồi thoải mái,
                lý tưởng cho cả những chuyến thăm lâu đến bàn ăn và thư giãn khi
                ngồi thư giãn.
              </Text>
              <Title level={5}>
                The standard passage, used since the 1500s.
              </Title>
              <Text>
                Một chiếc ghế nhẹ nhàng, dễ dàng di chuyển xung quanh bàn ăn và
                xung quanh căn phòng. Nhưng nỗi đau trong phim là không thể lên
                án, trong niềm vui sướng nó muốn thoát khỏi nỗi đau bị cillum
                trong đau đớn, không có kết quả. Bản thân nỗi đau là quan trọng
                để đi theo con đường của giới thượng lưu quyến rũ, nhưng tôi cho
                nó thời gian để rơi vào nó với một số nỗi đau và nỗi đau lớn.
                Điều quan trọng là phải đi theo con đường của giới thượng lưu
                quyến rũ, nhưng hãy cho nó thời gian để rơi vào đó với một số
                nỗi đau và nỗi đau lớn. Để phần lớn điều đó xảy ra, bất kỳ ai
                trong chúng ta cũng sẽ thực hiện bất kỳ loại công việc nào ngoại
                trừ để tận dụng các mục tiêu từ nó.
              </Text>
              <Image src={productContent1} preview={false} />
              <Title level={2}>
                Get 30% Daily Cash <br />
                Back with Membership Card.
              </Title>
              <Text>
                A new collection of lounge furniture, occasional tables and a
                stool by Edward Barber &amp; Jay Osgerby offers a relaxed,
                contemporary attitude toward interior design. The lounge
                furniture includes four individualized sized sofas, and three
                complementary ottomans. Available in a range of upholstery
                fabrics and leathers, the lounge furniture is distinguished by
                stitched seams that reinforce its architectural profile,
                softened by the curvature of cushions on each face range of
                upholstery fabrics and leathers.
              </Text>
              <Image src={productContent2} preview={false} />
              <Text>
                Designed by Puik in 1949 as one of the first models created
                especially for Carl Hansen &amp; Son, and produced since 1950.
                The last of a series of chairs wegner designed based on
                inspiration from antique Chinese armchairs. The gently rounded
                top together with the back and seat offers a variety of
                comfortable seating positions,ideal for both long visits to the
                dining table and relaxed lounging. A light chair easy to move
                around the dining table and about the room. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla.
              </Text>
              <Title level={5}>
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC.
              </Title>
              <Text>
                Sound of Marshall, unplugs the chords, and takes the show on the
                road. Weighing in under 7 pounds, the Kilburn is a lightweight
                piece of vintage styled engineering. Setting the bar as one of
                the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </Text>
            </div>
          </TabPane>
          <TabPane tab="Thông Số Kỹ Thuật" key="2">
            <div className="product_pecifications">
              <ul>
                <li className="li_color">
                  <Title level={5}>Weight</Title>
                  <Text>2 lbs</Text>
                </li>
                <li>
                  <Title level={5}>Dimensions</Title>
                  <Text>12 x 16 x 19 in</Text>
                </li>
                <li className="li_color">
                  <Title level={5}>Product</Title>
                  <Text>Purchase this product on rag-bone.com</Text>
                </li>
                <li>
                  <Title level={5}>Color</Title>
                  <Text>Gray, Black</Text>
                </li>
                <li className="li_color">
                  <Title level={5}>Size</Title>
                  <Text>S, M, L, XL</Text>
                </li>
              </ul>
            </div>
          </TabPane>
          <TabPane tab="Đánh Giá" key="3">
            <div className="review_products">
              {/* start- Phần thông tin đánh giá */}
              <Row>
                <Col span={7}>
                  <div className="review_rate">
                    <Title level={1}>5.00</Title>
                    <Rate disabled defaultValue={5} />
                    <br />
                    <Text className="txt_review_rate">1 Đánh giá</Text>
                  </div>
                </Col>

                <Col span={15}>
                  <div className="review_des_info">
                    <Title level={5}>
                      1 BÀI ĐÁNH GIÁ CHO "
                      <Link>TAI NGHE BLUETOOTH KHÔNG DÂY</Link>"
                    </Title>
                    <div className="review_details_des">
                      <div className="review_details_img">
                        <Avatar size={64} icon={<UserOutlined />} />
                      </div>
                      <div className="review_details_content">
                        <Rate disabled defaultValue={5} />
                        <Title level={5}>
                          Admin - <Text>May 26, 2022</Text>
                        </Title>
                        <Text>
                          A light chair, easy to move around the dining table
                          and about the room. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </Text>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* end- Phần thông tin đánh giá */}

              {/* start- Viết đánh giá */}
              <Row>
                <div className="add_review">
                  <div className="add_rate">
                    <Title level={3}>Thêm Đánh Giá</Title>
                    <Text>
                      Địa chỉ email của bạn sẽ không được công bố. Các trường
                      bắt buộc được đánh dấu *
                    </Text>
                    <Title level={5}>Xếp Hạng: </Title>
                    <Text>
                      <Rate tooltips={desc} onChange={setValue} value={value} />
                      {value ? (
                        <span className="ant-rate-text">{desc[value - 1]}</span>
                      ) : (
                        ""
                      )}
                    </Text>
                  </div>

                  <div className="add_rate_content">
                    <div className="add_name_email">
                      <Input placeholder="Tên của bạn" />
                      <Input placeholder="Email" />
                    </div>
                    <TextArea
                      rows={6}
                      placeholder="Đánh giá sản phẩm"
                      maxLength={1000}
                    />
                    <Button>
                      <Title level={5}>Gửi Đánh Giá</Title>
                    </Button>
                  </div>
                </div>
              </Row>
              {/* end- Viết đánh giá */}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </ChiTietSanPhamStyle>
  );
};

export default ChiTietSanPham;

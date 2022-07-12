import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Select,
  Space,
  Col,
  DatePicker,
  Drawer,
  Form,
  Row,
  Pagination,
} from "antd";
import KhachHangStyle from "./container.style";
import "antd/dist/antd.css";
import { BsPatchPlus, BsTrash, BsPencilSquare, BsEye } from "react-icons/bs";
import moment from "moment";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

const { Title, Text } = Typography;
const { Option } = Select;

//=== Menu ======
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
//=== end =====

const KhachHang = () => {
  //=== Thêm Sản Phẩm ======
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  //=== end =====

  //=== Chi tiết Sản Phẩm ======
  const [condition, setCondition] = useState(false);

  const showDrawerProduct = () => {
    setCondition(true);
  };

  const onCloseProduct = () => {
    setCondition(false);
  };
  //=== end =====

  return (
    <KhachHangStyle>
      <div className="title_box">
        <Title level={4}>Khách Hàng</Title>
      </div>

      {/* start - thanh tác vụ */}
      <div className="task_bar">
        <Space align="center" size={28}>
          <Input placeholder="Tìm Kiếm" />
          <Select
            defaultValue="jack"
            className="filter_categories filter_style"
            dropdownStyle={{ borderRadius: "8px" }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select
            defaultValue="jack"
            className="filter_price filter_style"
            dropdownStyle={{ borderRadius: "8px" }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Button onClick={showDrawer}>
            <BsPatchPlus />
            <Text>Thêm Sản Phẩm</Text>
          </Button>
        </Space>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter user name",
                    },
                  ]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[
                    {
                      required: true,
                      message: "Please enter url",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[
                    {
                      required: true,
                      message: "Please select an owner",
                    },
                  ]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the type",
                    },
                  ]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the approver",
                    },
                  ]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the dateTime",
                    },
                  ]}
                >
                  <DatePicker
                    style={{
                      width: "100%",
                    }}
                    defaultValue={moment("27/06/2022", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "please enter url description",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
      {/* end - thanh tác vụ */}

      {/* start - bảng sản phẩm */}
      <div className="product_table">
        <table className="table_content">
          <thead>
            <tr>
              <th style={{ width: "8%" }}>ID</th>
              <th style={{ width: "22%" }}>Sản phẩm</th>
              <th style={{ width: "15%" }}>Giá</th>
              <th style={{ width: "15%" }}>Số lượng</th>
              <th style={{ width: "15%" }}>DM Sản phẩm</th>
              <th style={{ width: "13%" }}>Hãng sản xuất</th>
              <th style={{ width: "12%" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>aaaaa</td>
              <td>bbbbb</td>
              <td>ccccc</td>
              <td>ddddd</td>
              <td>eeeee</td>
              <td>
                <Space size={14}>
                  <BsPencilSquare />
                  <BsTrash />
                  <BsEye onClick={showDrawerProduct} />
                </Space>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>aaaaa</td>
              <td>bbbbb</td>
              <td>ccccc</td>
              <td>ddddd</td>
              <td>eeeee</td>
              <td>
                <Space size={14}>
                  <BsPencilSquare />
                  <BsTrash />
                  <BsEye />
                </Space>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>aaaaa</td>
              <td>bbbbb</td>
              <td>ccccc</td>
              <td>ddddd</td>
              <td>eeeee</td>
              <td>
                <Space size={14}>
                  <BsPencilSquare />
                  <BsTrash />
                  <BsEye />
                </Space>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>aaaaa</td>
              <td>bbbbb</td>
              <td>ccccc</td>
              <td>ddddd</td>
              <td>eeeee</td>
              <td>
                <Space size={14}>
                  <BsPencilSquare />
                  <BsTrash />
                  <BsEye />
                </Space>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>aaaaa</td>
              <td>bbbbb</td>
              <td>ccccc</td>
              <td>ddddd</td>
              <td>eeeee</td>
              <td>
                <Space size={14}>
                  <BsPencilSquare />
                  <BsTrash />
                  <BsEye />
                </Space>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination
          className="pagination_table"
          total={100}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onCloseProduct}
        visible={condition}
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      {/* end - bảng sản phẩm */}
    </KhachHangStyle>
  );
};

export default KhachHang;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import {
  BsSpeaker,
  BsSmartwatch,
  BsTools,
  BsPhone,
  BsTablet,
  BsHeadphones,
  BsMusicNoteBeamed,
  BsController,
} from "react-icons/bs";
import NavsStyle from "./Container.styled";

const { Text } = Typography;

const Navigations = () => {
  return (
    <NavsStyle>
      <div className="main_nav">
        <Row>
          <Col span={3}>
            <div className="container_nav">
              <Link to="/dienthoai">
                <BsPhone />
                <Text>Điện Thoại</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/maytinhbang">
                <BsTablet />
                <Text>Máy Tính Bảng</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/smartwatch">
                <BsSmartwatch />
                <Text>Smart Watch</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/amthanh">
                <BsMusicNoteBeamed />
                <Text>Âm thanh</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/phukien">
                <BsTools />
                <Text>Phụ Kiện</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/xbox">
                <BsController />
                <Text>Xbox</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/tainghe">
                <BsHeadphones />
                <Text>Tai Nghe</Text>
              </Link>
            </div>
          </Col>

          <Col span={3}>
            <div className="container_nav">
              <Link to="/camera">
                <BsSpeaker />
                <Text>Loa</Text>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </NavsStyle>
  );
};

export default Navigations;

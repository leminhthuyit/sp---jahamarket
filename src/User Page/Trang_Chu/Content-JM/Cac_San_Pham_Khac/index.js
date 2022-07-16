import React from "react";
import AmThanh from "./AmThanh-JM";
import Cameras from "./Camera-JM";
import TaiNghe from "./TaiNghe-JM";
import { Col, Row } from "antd";
import CacSanPhamKhacStyle from "./Container.styled";

const CacSanPhamKhac = () => {
  return (
    <CacSanPhamKhacStyle>
      <Row gutter={34}>
        <Col>
          <Cameras />
        </Col>

        <Col>
          <AmThanh />
        </Col>

        <Col>
          <TaiNghe />
        </Col>
      </Row>
    </CacSanPhamKhacStyle>
  );
};

export default CacSanPhamKhac;

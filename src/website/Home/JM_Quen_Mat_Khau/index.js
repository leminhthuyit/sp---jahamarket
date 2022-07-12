import React from "react";
import { Link } from "react-router-dom";
import QuenMatKhauStyle from "./container.styled";
import { Image, Typography, Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import imgForgotPass from "../../../images/login/forgot-password-office.jpeg";

const { Title, Text } = Typography;

const QuenMatKhauJM = () => {
  return (
    <QuenMatKhauStyle>
      <div className="main_forgot_pass">
        <div className="box_forgot_pass">
          <div className="container_img">
            <Image src={imgForgotPass} preview={false} />
          </div>

          <div className="container_forgot_pass">
            <div className="form_forgot_pass">
              <Title level={3}>Quên Mật Khẩu</Title>
              <Text>Email</Text>
              <Input placeholder="email@.com" prefix={<MailOutlined />} />
              <Button>Khôi Phục Mật Khẩu</Button>
              <Link to="/dangnhap">Bạn đã có tài khoản? Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </QuenMatKhauStyle>
  );
};

export default QuenMatKhauJM;

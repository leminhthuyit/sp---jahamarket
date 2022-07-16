import React from "react";
import { Link } from "react-router-dom";
import DangKyStyle from "./container.styled";
import { Image, Typography, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserAddOutlined, MailOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import imgAccount from "../../../images/login/create-account-office.jpeg";

const { Title, Text } = Typography;

const DangKyJM = () => {
  return (
    <DangKyStyle>
      <div className="main_account">
        <div className="box_account">
          <div className="container_img">
            <Image src={imgAccount} preview={false} />
          </div>

          <div className="container_account">
            <div className="form_account">
              <Title level={3}>Đăng Ký</Title>
              <Text>Email</Text>
              <Input placeholder="email@.com" prefix={<MailOutlined />} />
              <Text>Tên Đăng Nhập</Text>
              <Input placeholder="Tên Đăng Nhập" prefix={<UserAddOutlined />} />
              <Text className="txt_password">Mật Khẩu</Text>
              <Input.Password
                placeholder="Mật Khẩu"
                prefix={<LockOutlined />}
              />
              <Checkbox>
                Tôi đồng ý với <Link to="">chính sách bảo mật</Link>
              </Checkbox>
              <Button>Đăng Ký</Button>
            </div>
            <div className="account_method">
              <Link to="/dangnhap">Bạn đã có tài khoản? Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </DangKyStyle>
  );
};

export default DangKyJM;

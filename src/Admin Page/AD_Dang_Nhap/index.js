import React from 'react';
import DangNhapStyle from './container.styled';
import { Image, Typography, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Title, Text, Link } = Typography;

const ADDangNhap = () => {
  return (
    <DangNhapStyle>
      <div className="main_login">
        <div className="box_login">
          <div className="container_img">
            <Image preview={false} />
          </div>

          <div className="container_login">
            <div className="form_login">
              <Title level={3}>Đăng Nhập</Title>
              <Text>Tài Khoản</Text>
              <Input placeholder="Tài Khoản" prefix={<UserOutlined />} />
              <Text className="txt_password">Mật Khẩu</Text>
              <Input.Password placeholder="Mật Khẩu" prefix={<LockOutlined />} />
              <Button>Đăng Nhập</Button>
            </div>
            <div className="login_method">
              <Link>Quên mật khẩu?</Link>
              <br />
              <Link>Tạo tài khoản</Link>
            </div>
          </div>
        </div>
      </div>
    </DangNhapStyle>
  );
};

export default ADDangNhap;

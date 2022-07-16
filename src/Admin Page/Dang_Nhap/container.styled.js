import styled from "styled-components";

const DangNhapStyle = styled.div`
  background-color: #f9fafb;
  padding: 20px 0;
  .main_login {
    display: flex;
    justify-content: center;
  }

  .box_login {
    width: 820px;
    height: 600px;
    display: flex;
    border-radius: 8px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  }

  .container_img {
    img {
      width: 410px;
      height: 600px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  /* css phần đăng nhập */
  .container_login {
    width: 410px;
    height: 600px;
    padding: 50px 45px;
    background-color: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .container_login button {
    width: 320px;
    height: 45px;
    border-radius: 10px;
  }

  .container_login h5 {
    font-size: 14px;
    margin: 0;
  }

  .form_login {
    border-bottom: 1px solid #e5e5e5;

    h3 {
      margin-bottom: 15px;
    }

    .ant-input-affix-wrapper {
      height: 45px;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    .ant-input-password {
      margin-bottom: 10px;
    }

    button {
      color: #fff;
      background-color: #0099ff;
      margin-bottom: 35px;
      font-size: 14px;
      font-weight: bold;
    }

    button:hover {
      transition: all 0.5s ease;
      background-color: #0066ff;
    }
  }

  .login_method {
    margin-top: 48px;

    .ant-btn {
      margin-bottom: 15px;
      background-color: #f4f5f7;
    }

    .ant-btn-default {
    }

    .btn_facebook:hover {
      color: #fff;
      transition: all 0.5s ease;
      background-color: #1c64f2;
    }

    .btn_google:hover {
      color: #fff;
      transition: all 0.5s ease;
      background-color: #f05252;
    }

    span {
      font-size: 14px;
      font-weight: bold;
    }

    .anticon-facebook,
    .anticon-google {
      font-size: 18px;
    }

    .ant-typography {
      color: #0e9f6e;
    }

    .ant-typography:hover {
      transition: all 0.5s ease;
      text-decoration: underline;
    }
  }
`;

export default DangNhapStyle;

import styled from "styled-components";

const DangKyStyle = styled.div`
  background-color: #f9fafb;
  padding: 20px 0;
  .main_account {
    display: flex;
    justify-content: center;
  }

  .box_account {
    width: 820px;
    height: 712px;
    display: flex;
    border-radius: 8px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  }

  .container_img {
    img {
      width: 410px;
      height: 712px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  /* css phần đăng ký */
  .container_account {
    width: 410px;
    height: 712px;
    padding: 50px 45px;
    background-color: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .container_account button {
    width: 320px;
    height: 45px;
    border-radius: 10px;
  }

  .form_account {
    border-bottom: 1px solid #e5e5e5;

    h3 {
      margin-bottom: 15px;
    }

    .ant-input-affix-wrapper {
      height: 45px;
      border-radius: 10px;
    }

    button {
      color: #fff;
      background-color: #0099ff;
      margin-bottom: 30px;
      font-size: 14px;
      font-weight: bold;
    }

    button:hover {
      transition: all 0.5s ease;
      background-color: #0066ff;
    }

    .ant-select-selector {
      width: 320px;
      height: 45px;
      align-items: center;
      border-radius: 10px !important;
    }

    .ant-checkbox-wrapper {
      margin: 15px 0;

      .ant-typography {
        color: #000;
        text-decoration: underline;
      }

      .ant-typography:hover {
        color: #1890ff;
      }
    }
  }

  //----------------------------------------------------------------

  .account_method {
    margin-top: 30px;

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

export default DangKyStyle;

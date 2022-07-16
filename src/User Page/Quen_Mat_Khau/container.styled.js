import styled from "styled-components";

const QuenMatKhauStyle = styled.div`
  background-color: #f9fafb;
  padding: 115px 0;
  .main_forgot_pass {
    display: flex;
    justify-content: center;
  }

  .box_forgot_pass {
    width: 820px;
    height: 410px;
    display: flex;
    border-radius: 8px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  }

  .container_img {
    img {
      width: 410px;
      height: 410px;
      object-fit: cover;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  /* css phần đăng ký */
  .container_forgot_pass {
    width: 410px;
    height: 410px;
    padding: 50px 45px;
    background-color: #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .container_forgot_pass button {
    width: 320px;
    height: 45px;
    border-radius: 10px;
  }

  .form_forgot_pass {
    h3 {
      margin-bottom: 15px;
    }

    .ant-input-affix-wrapper {
      height: 45px;
      border-radius: 10px;
    }

    button {
      color: #fff;
      margin: 15px 0;
      background-color: #0099ff;
      font-size: 14px;
      font-weight: bold;
    }

    button:hover {
      transition: all 0.5s ease;
      background-color: #0066ff;
    }

    a {
      color: #0e9f6e;
    }

    a:hover {
      transition: all 0.5s ease;
      text-decoration: underline;
    }
  }

  //----------------------------------------------------------------
`;

export default QuenMatKhauStyle;

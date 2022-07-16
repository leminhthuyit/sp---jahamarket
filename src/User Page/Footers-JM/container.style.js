import styled from "styled-components";

const FooterStyle = styled.div`
  padding: 40px 50px;
  height: 350px;
  background-color: #1f2024;

  ul li {
    list-style-type: none;
    padding-bottom: 10px;
  }

  h5 {
    color: #fff;
    margin-bottom: 15px;
  }

  a,
  span {
    color: #999;
    transition: all 0.3s;
  }

  a:hover {
    color: #16b9d8;
    padding-left: 8px;
    transition: all 0.3s;
  }

  .store_introduction {
    .container_hotline {
      display: flex;
      margin: 10px 0;
      .icon_hotline {
        color: #16bcdc;
        width: 55px;
        height: 55px;
      }

      .content_hotline {
        padding-left: 15px;
        a,
        span {
          font-weight: 600;
        }

        a {
          color: #16bcdc;
          font-size: 16px;
        }
      }

      span,
      a {
        font-weight: 600;
      }
    }

    a {
      color: #16bcdc;
      font-size: 16px;
    }
  }

  //==================================

  .get_notifications {
    .ant-input-group {
      padding: 15px 0;
    }
    input {
      width: 218px;
      height: 50px;
    }

    button {
      height: 50px;
      span {
        color: #fff;
        font-weight: 600;
      }
    }

    .li_botom {
      a:hover {
        padding: 0;
        text-decoration: underline;
      }
    }
  }
`;

export default FooterStyle;

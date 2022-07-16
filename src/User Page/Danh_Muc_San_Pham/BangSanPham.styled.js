import styled from "styled-components";

const BangSanPhamStyle = styled.div`
  /* start - css banner */
  .banner_product {
    position: relative;
    .img_banner_bg {
      width: 1119px;
    }
  }

  .banner_content {
    .img_banner_sm {
      position: absolute;
      top: 7%;
      left: 30%;
    }

    .txt_content {
      position: absolute;
      top: 16%;
      right: 4%;
      text-align: center;
      span {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
      }
      button {
        width: 200px;
        height: 50px;
        margin-top: 20px;
        background-color: #fcbe00;
        border: 0;
        font-weight: bold;

        span {
          color: #000;
        }
      }

      button:hover {
        background-color: #fff;
      }
    }
  }
  /* end - css banner */

  /* lọc sản phẩm */
  .sort_container_box {
    width: 100%;
    height: 60px;
    margin-top: 30px;
    border: 1px solid #e5e5e5;
  }

  .sort_container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .page_size {
      display: flex;
    }

    .sort_product {
      display: flex;
      align-items: center;
      margin: 0 30px;
      h5 {
        font-size: 14px;
        margin: 8px 0;
      }

      .ant-select {
        width: 150px;
        margin-left: 10px;
      }
    }
  }
  //==================================

  /* css hộp sản phẩm */
  .main_container_product {
    .container_product {
      min-height: 450px;
      overflow: hidden;
      text-align: center;
      border: 1px solid #e5e5e5;

      img {
        width: 222px;
        height: 222px;
        margin-top: 10px;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .product_content {
        padding: 0 25px;
        text-align: left;
        margin-top: 20px;

        h5 {
          font-weight: bold;
        }

        h5:hover {
          color: #fcbe00;
          transition: all 0.5s ease;
        }

        span {
          font-size: 16px;
          font-weight: bold;
        }

        .txt_review {
          font-weight: normal;
          font-size: 13px !important;
        }
      }

      button {
        width: 222px;
        height: 40px;
        margin-top: 25px;
        background-color: #fcbe00;

        span {
          font-weight: bold;
        }
      }

      button:hover {
        background-color: #fff;
        transition: all 0.5s ease;
      }
    }

    .container_product:hover {
      transition: all 0.5s ease;
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
    }

    .container_product:hover img {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }

  //==================================

  /* css phân trang */
  .container_pagination {
    margin: 30px 0;
  }
`;

export default BangSanPhamStyle;

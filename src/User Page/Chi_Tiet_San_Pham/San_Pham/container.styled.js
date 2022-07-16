import styled from "styled-components";

const SanPhamStyle = styled.div`
  margin: 0 50px;
  /* CSS thanh phân cấp hệ thống */
  .product_breadcrumb {
    margin: 30px 0;
  }

  .hierarchy_breadcrumb {
    color: #00000073;
    transition: color 0.3s;
  }

  .hierarchy_breadcrumb:hover {
    color: #000;
    transition: color 0.3s;
  }

  /* CSS image sản phẩm */
  .img_product_container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slides_product {
    display: flex;
  }

  .img_product {
    width: 119px;
    button {
      width: 119px;
      height: 103px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }

  .img_big_product {
    .image_big {
      width: 571px;
      height: 571px;
    }
  }

  /* CSS chi tiết sản phẩm */

  .container_content_product {
  }

  .name_product {
    border-bottom: 1px solid #e5e5e5;
    .txt_name {
      color: #0068c9;
    }
    .txt_review {
      color: #999;
      margin-left: 5px;
    }

    .txt_price {
      padding: 10px 0;
    }
  }

  .content_product {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid #e5e5e5;

    ul {
      color: #666;
      margin: 18px 15px;
      li {
        margin: 5px 0;
      }
    }

    h5 {
      color: #222;
      span {
        color: #16bcdc;
        margin-left: 10px;
      }
    }

    .buy_product {
      margin-bottom: 30px;
      .ant-input-number-group-addon {
        font-weight: bold;
      }

      button {
        text-transform: uppercase;
        width: 146px;
        height: 47px;
        color: #000;
        margin-left: 20px;
        border: 0;
        background-color: #fcbe00;

        h5 {
          margin: 0;
        }
      }

      button:hover {
        background-color: #fff;
        border: 1px solid #e5e5e5;
        transition: all 0.5s ease;
      }
    }

    .input_number input {
      font-weight: bold;
      text-align: center;
      width: 180px;
      height: 45px;
      color: #000;
    }
  }
  .info_product {
    display: flex;
    margin-top: 20px;
    .ul_product {
      margin: 0 30px;
    }
    ul {
      color: #222;
      font-size: 14px;
      list-style-type: none;
      li {
        margin: 5px 0;
      }

      a,
      span {
        color: #666;
      }

      a:hover {
        color: #fcbe00;
        transition: all 0.5s ease;
      }
    }
  }
`;

export default SanPhamStyle;

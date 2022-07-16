import styled from "styled-components";

const ChiTietSanPhamStyle = styled.div`
  margin: 20px 50px;

  .main_product_details {
    .ant-image {
      width: 100%;
      text-align: center;

      img {
        width: 828px;
        height: 448px;
      }
    }
  }

  /* css thông tin sản phẩm */
  .content_product_details {
  }

  /* css thông số kĩ thuật */
  .product_pecifications {
    ul {
      list-style-type: none;
      li {
        display: flex;
        width: auto;
        height: 56px;
        align-items: center;
        h5 {
          width: 338px;
          margin-left: 30px;
        }

        span {
          width: auto;
        }
      }

      .li_color {
        background-color: #f7f7f7;
      }
    }
  }

  /* css đánh giá sản phầm */
  .review_products {
    margin: 30px 0;
  }

  .review_rate {
    h1 {
      font-size: 100px;
      color: #5aab19;
      margin: 0;
    }
    .txt_review_rate {
      color: #666;
    }
  }

  .review_des_info {
  }

  .review_details_des {
    display: flex;

    .review_details_img {
    }

    .review_details_content {
      margin-left: 20px;
    }
  }

  /* css thêm đánh giá */
  .add_review {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    h3 {
      margin: 0;
    }
  }

  .add_rate_content {
    .add_name_email {
      display: flex;
      justify-content: space-between;

      input {
        width: 680px;
        height: 50px;
      }
    }

    textarea {
      margin: 20px 0;
    }

    button {
      width: 200px;
      height: 50px;
      background-color: #fcbe00;
      h5 {
        margin: 0;
      }
    }

    button:hover {
      background-color: #fff;
      border: 1px solid #e5e5e5;
    }
  }
`;

export default ChiTietSanPhamStyle;

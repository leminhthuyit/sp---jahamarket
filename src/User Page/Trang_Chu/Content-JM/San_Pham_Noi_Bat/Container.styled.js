import styled from "styled-components";

const StylesSanPhamNoiBat = styled.div`
  width: auto;
  height: 500px;
  margin-top: 20px;

  /* Bắt đầu CSS tiêu đề */
  .main_title_hotsale {
    margin-left: 50px;
    width: 250px;
    border-bottom: 3px solid #16bcdc;

    .title_hotsale {
      font-size: 24px;
      color: #000;

      .icon_title_hot {
        color: red;
      }
    }
  }
  /* Kết thúc CSS tiêu đề */

  /* Bắt đầu CSS danh mục sản phẩm */
  .main_category_products {
    margin: 0 50px;
    margin-top: 25px;

    /* CSS all các sản phẩm */
    .category_products {
      display: flex;
      align-items: center;
      width: 330px;
      height: 185px;
      overflow: hidden;
      margin-top: 41px;
      margin-left: 32px;
      border-radius: 20px;
      background-color: #fff;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    .category_products:hover {
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease;
    }

    .category_products img {
      width: 145px;
      height: 145px;
      object-fit: cover;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    .category_products:hover img {
      transform: scale(1.1);
    }

    .product_1 {
      width: 690px;
      height: 411px;
      margin: 0;
      justify-content: space-evenly;

      .product_content {
        margin: 0;
        padding-left: 25px;
      }

      img {
        width: 325px;
        height: 325px;
      }

      .product_content_detail {
        ul {
          font-size: 15px;
        }
      }
    }

    .product_2,
    .product_4 {
      margin-top: 0;
    }

    /* CSS all nội dung sản phẩm */
    .contents_img_product {
      .img_product {
        text-align: center;
        margin-top: 20px;
      }

      .offer_product {
        width: 46px;
        height: 20px;
        color: #fff;
        position: absolute;
        top: 20px;
        margin-left: 20px;
        text-align: center;
        background-color: #5aab19;
      }
    }

    .product_content {
      margin: 0 20px;
      margin-top: 10px;

      h6 a {
        display: block;
        font-size: 15px;
        color: #0068c9;
        text-transform: capitalize;
      }

      h6 a:hover {
        color: #fcbe00;
        transition: all 0.6s ease;
      }

      .product_price p {
        font-size: 16px;
      }

      .icon_star {
        display: flex;
        font-size: 14px;

        ul {
          display: flex;
          color: #e5ac00;
          list-style-type: none;

          li {
            margin-left: 1px;
          }

          .icon {
            margin: 0;
          }
        }

        p {
          margin-left: 2px;
        }
      }
    }
  }
  /* Kết thúc CSS danh mục sản phẩm */
`;

export default StylesSanPhamNoiBat;

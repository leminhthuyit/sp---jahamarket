import styled from "styled-components";

const AmThanhStyle = styled.div`
  width: 450px;

  .title_product {
    text-transform: uppercase;
    border-bottom: 2px solid rgb(22, 188, 220);
    margin-bottom: 20px;
  }

  .link_product {
    border-bottom: 1px solid rgb(22, 188, 220);
    a {
      color: #000;
    }
  }

  .link_product:hover a,
  .link_product:hover .icon_link_product {
    color: #16bcdc;
    transition: all 0.3s ease;
  }

  .icon_link_product {
    padding-top: 3px;
  }

  /* CSS phần sản phẩm */

  .container_product {
    position: relative;
    align-items: center;
    display: flex;
    width: 450px;
    height: 197px;
    overflow: hidden;
    border-radius: 20px;
    background-color: #fff;
  }

  .container_product:hover {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }

  .container_product img {
    border-radius: 20px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .container_product:hover img {
    transform: scale(1.1);
  }

  /* CSS khối ảnh */
  .img_product_content {
  }

  .img_product {
    text-align: center;
  }

  .img_product img {
    width: 170px;
    height: 170px;
    margin-top: 20px;
    object-fit: cover;
  }

  .offer_product {
    position: absolute;
    top: 8%;
    left: 4%;
    width: 46px;
    height: 22px;
    font-size: 12px;
    background: #5aab19;
    text-align: center;

    .ant-typography {
      color: #fff;
    }
  }

  /* CSS khối thông tin sản phẩm */

  .product_content {
    padding-top: 5px;
  }

  .product_content_1 {
    padding: 0 11px;
  }

  .name_product {
    color: #0068c9;
  }

  .name_product:hover {
    color: #16bcdc;
    transition: all 0.3s ease-out 0s;
  }

  .product_price {
    font-size: 16px;
  }

  .product_reviews {
    margin-top: 10px;
    display: flex;
    ul {
      list-style-type: none;
      display: flex;
      color: #e5ac00;
    }

    .ant-typography {
      padding-left: 5px;
    }
  }
`;

export default AmThanhStyle;

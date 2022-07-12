import styled from "styled-components";

const GioHangStyle = styled.div`
  /* background-color: #f4f5f7; */
  margin: 80px 150px 36px 150px;

  .main_content {
    border-radius: 10px;
    background-color: #fff;
    padding-bottom: 1px;
    /* border: 1px solid #000; */
    box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
    .title_cart {
      width: 100%;
      text-align: -webkit-center;
      h2 {
        color: #263c97;
        padding-top: 20px;
        width: max-content;
        border-bottom: 3px solid #2196f3;

        svg {
          margin-right: 8px;
        }
      }
    }
    .cart_table {
      padding: 0 61px;

      .table_container {
        height: auto;
        img {
          width: 100px;
          object-fit: cover;
        }
      }

      tr {
        border-bottom: 1px solid #d7dbdd;
      }

      tr,
      th,
      td {
        text-align: center;
      }

      thead {
        font-size: 19px;
        height: 60px;
      }

      tbody {
        font-size: 16px;

        svg {
          color: #797d7f;
          font-size: 24px;
        }
      }
    }

    .total_payment {
      height: 68px;
      padding: 11px 50px;
      margin: 30px 30px 20px 30px;
      border-radius: 10px;
      box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);

      .content_total {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      h3 {
        color: #21618c;
        margin: 0;
        padding-right: 15px;
      }

      button {
        color: #fff;
        width: 200px;
        height: 45px;
        transition: all 0.5s ease;
        background-color: #2196f3;
        font-weight: 700;
        /* box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2); */
      }

      button:hover {
        color: #2196f3;
        background-color: #fff;
        transition: all 0.5s ease;
      }
    }
  }

  .container_drawer {
    background-color: #797d7f;
  }
`;

export default GioHangStyle;

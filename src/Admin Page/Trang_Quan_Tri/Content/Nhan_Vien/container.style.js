import styled from "styled-components";

const DSNhanVienStyle = styled.div`
  padding: 20px 20px;

  /* css title */
  .title_function {
    height: 75px;
    width: 100%;

    h4 {
      line-height: 75px;
    }
  }
  //================================================

  /* css thanh tác vụ */
  .task_bar {
    width: 100%;
    padding: 26px 20px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #797d7f;

    input {
      width: 350px;
      height: 46px;
      border-radius: 8px;
    }

    .filter_style {
      width: 250px;
      height: 46px;
      border-radius: 8px;

      .ant-select-selector {
        height: 46px;
        border-radius: 8px;
        align-items: center;
      }
    }

    .filter_categories {
    }

    .filter_price {
    }

    button {
      width: 250px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      align-items: center;
      background-color: #3498db;
      transition: all 0.5s ease;

      svg {
        color: #fff;
        font-size: 20px;
        margin-right: 5px;
        transition: all 0.5s ease;
      }

      span {
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        transition: all 0.5s ease;
      }
    }

    button:hover {
      background-color: #fff;
      transition: all 0.5s ease;
      svg,
      span {
        color: #3498db;
        transition: all 0.5s ease;
      }
    }
  }
  //================================================

  /* css bảng sản phẩm */
  .product_table {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #fff;
    padding: 20px 15px;
    border-radius: 8px;
    margin-top: 20px;
    border: 1px solid #797d7f;
    .table_content {
      width: 100%;
      margin-bottom: 20px;
      text-align: center;

      svg {
        font-size: 18px;
      }
    }

    table {
      background-color: #f4f6f7;
      border-radius: 8px;

      tr {
        height: 35px;
        border-bottom: 1px solid #fff;
        border-start-end-radius: 8px;
      }

      tr:last-child {
        border-bottom: none;
      }

      th {
        color: #fff;
        border-right: 1px solid #fff;
        background-color: #2e86c1;
      }

      th:last-child {
        border-right: none;
        border-start-end-radius: 8px;
      }

      th:first-child {
        border-start-start-radius: 8px;
      }

      td {
        border-right: 1px solid #fff;
      }

      td:last-child {
        border-right: none;
      }
    }
  }
`;

export default DSNhanVienStyle;

import styled from "styled-components";

const BangDieuKhienStyle = styled.div`
  padding: 0 20px;
  margin-bottom: 30px;
  /* css title */
  .title_function {
    height: 75px;
    width: 100%;

    h4 {
      line-height: 75px;
    }
  }

  //================================================

  /* css box */
  .container_turnover {
    .box_function {
      width: 100%;
      height: 153px;
    }

    .box_content {
      width: 395px;
      height: 153px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      svg,
      span,
      h2 {
        color: #fff;
      }

      svg {
        font-size: 30px;
      }

      span {
        font-size: 20px;
      }

      h2 {
        margin: 0;
      }
    }
    .box_today {
      background-color: #0694a2;
    }

    .box_month {
      background-color: #3f83f8;
    }

    .box_total {
      background-color: #28b463;
    }
  }

  //================================================

  /* css thống kê đơn hàng */
  .container_order {
    margin: 30px 0;
    .box_order {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 292px;
      height: 83px;
      border-radius: 8px;
      background-color: #fff;
      border: 1px solid #d0d3d4;

      .icon_order {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 16px;
        svg {
          font-size: 25px;
        }
      }

      .icon_total {
        color: #f06292;
        background-color: #ffcdd2;
      }

      .icon_pending {
        color: #1976d2;
        background-color: #bbdefb;
      }

      .icon_processing {
        color: #ff6f00;
        background-color: #ffe082;
      }

      .icon_delivered {
        color: #512da8;
        background-color: #d1c4e9;
      }

      .txt_order {
        h3 {
          margin: 0;
        }
      }
    }
  }

  //================================================

  /* css biểu đồ */
  .container_chart {
    .main_chart {
      width: 600px;
      height: 392px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #d0d3d4;

      h4 {
        margin: 12px 25px;
      }

      .column_chart {
        text-align: -webkit-center;
      }

      .ant-progress {
        margin: 10px 0;
      }
    }

    .pie_chart {
      text-align: -webkit-center;
    }

    .type_color {
      margin: 24px 18px;
      .size_type {
        width: 10px;
        height: 10px;
        border-radius: 5px;
      }

      .type_color_center {
        text-align: -webkit-center;
      }

      .color_1 {
        background-color: #00cc33;
      }

      .color_2 {
        background-color: #ff6600;
      }

      .color_3 {
        background-color: #ab47bc;
      }

      .color_4 {
        background-color: #ff0099;
      }

      .color_5 {
        background-color: #1890ff;
      }
    }

    .pie_chart {
    }
  }

  //================================================

  /* css bảng đơn hàng */

  .table_recent_orders {
    margin: 45px 0;
    h4 {
      margin-bottom: 20px;
    }
    .container_table {
      border-radius: 10px;
      border: 1px solid #d0d3d4;
      background-color: #fff;

      .ant-table {
        border-radius: 10px;
        table thead tr th {
          border-radius: 10px;
        }
      }
    }
  }
`;

export default BangDieuKhienStyle;

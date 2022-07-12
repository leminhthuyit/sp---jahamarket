import styled from "styled-components";

const BangLocSanPhamStyle = styled.div`
  .filter_table_box {
    height: 200px;
    margin-bottom: 20px;
    border: 1px solid #e5e5e5;
  }

  .special_features_box {
    height: 250px;
  }

  .filter_table {
    margin-top: 15px;
    margin-left: 15px;

    .txt_name {
      width: fit-content;
      margin-bottom: 10px;
      border-bottom: 2px solid #1890ff;
    }

    .ant-checkbox-wrapper:hover {
      color: #1890ff;
      transition: all 0.3s ease-out 0s;
    }
  }
`;

export default BangLocSanPhamStyle;

import styled from "styled-components";

const PageQuanTriStyle = styled.div`
  /* css header */
  .header_main {
    height: 64px;
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .shop_name {
    display: flex;

    svg {
      font-size: 30px;
      margin-right: 5px;
    }

    h3 {
      margin: 0;
    }
  }
  //================================================

  /* css navigation bar  */
  .navbar_main {
    height: 100%;
    border-left: 1px solid #e5e5e5;

    /* .ant-menu-item {
      color: #707275;
    }*/

    .ant-menu-item-selected {
      /* color: #239b56; */
      background-color: #f8f9f9;
    }

    .ant-menu-item,
    .ant-menu-item-selected {
      font-size: 15px;
      font-weight: 600;
    }

    .ant-menu-item-icon {
      font-size: 18px;
    }

    /* .ant-menu-inline .ant-menu-item::after {
      border-right: 3px solid #0e9f6e;
    } */
  }

  /* css hiển thị chức năng */
  .display_function {
    width: 100%;
    height: 100%;
    background-color: #f9fafb;
  }
`;

export default PageQuanTriStyle;

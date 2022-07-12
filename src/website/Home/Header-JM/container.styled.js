import styled from "styled-components";

const HeaderStyle = styled.div`
  width: auto;
  height: 56px;
  background-color: #263c97;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  /* css logo shop */
  .container_logo {
    .name_logo {
      display: flex;

      svg {
        color: #fff;
        font-size: 28px;
      }

      h3 {
        font-size: 24px;
        margin: 0 5px;
        color: #fff;
      }
    }
  }
  //================================================

  .container_menu_search {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* css menu header */
    .container_menu {
      button {
        width: 24px;
        height: 24px;
        border: 0;
        border-radius: 0 !important;

        svg {
          color: #fff;
          font-size: 26px;
        }
      }

      .menu_collapsed {
        position: absolute;
        top: 30%;
      }

      .ant-drawer-content-wrapper {
        .img_menu {
          margin-bottom: 35px;
        }
      }
    }

    //================================================

    /* css thanh tìm kiếm */
    .container_search {
      width: 380px;
      input,
      button {
        height: 34px;
      }
    }
  }
  //================================================

  /* css đăng nhập đăng ký & giỏ hàng */
  .container_login_cart {
    text-align: center;

    a {
      display: flex;
      align-items: center;
    }

    a:hover svg,
    a:hover .txt_content {
      color: #1890ff;
      transition: all 0.3s ease-out 0s;
    }

    svg,
    span {
      color: #fff;
      text-align: center;
      transition: all 0.3s ease-out 0s;
    }

    svg {
      margin-right: 5px;
      font-size: 26px;
    }
  }
`;

export default HeaderStyle;

import styled from "styled-components";

const NavsStyle = styled.div`
  height: 70px;
  width: 100%;
  padding: 0 70px;
  margin-top: 56px;
  background-color: #263c97;

  .main_nav {
    padding: 8px 0;
    border-top: 1px solid rgba(189, 195, 199, 0.3);

    svg {
      color: #fff;
      font-size: 30px;
      transition: all 0.5s ease;
    }

    .container_nav {
      a {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        transition: all 0.5s ease;

        span {
          color: #fff;
        }
      }

      a:hover svg,
      a:hover span {
        color: #40a9ff;
        transition: all 0.5s ease;
      }
    }
  }
`;

export default NavsStyle;

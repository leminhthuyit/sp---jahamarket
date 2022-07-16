import styled from "styled-components";

const TraCuuDonHangStyle = styled.div`
  margin: 80px 150px 36px 150px;

  .main_container {
    width: 100%;
    height: 500px;
    padding: 20px 30px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);

    .title_content {
      padding-bottom: 30px;
      text-align: -webkit-center;
      h2 {
        margin: 0;
        color: #263c97;
        width: max-content;

        border-bottom: 3px solid #2196f3;
      }
    }

    .order_content {
      padding: 0 50px;

      h5 {
        margin-bottom: 0;
        margin-top: 30px;
      }

      input {
        height: 45px;
      }

      button {
        color: #fff;
        width: 210px;
        height: 50px;
        margin-top: 30px;
        font-weight: 700;
        background-color: #2196f3;
        transition: all 0.5s ease;
      }

      button:hover {
        color: #40a9ff;
        background-color: #fff;
        transition: all 0.5s ease;
      }
    }
  }
`;

export default TraCuuDonHangStyle;

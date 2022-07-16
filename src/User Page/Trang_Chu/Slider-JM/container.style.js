import styled from "styled-components";

const SliderStyle = styled.div`
  margin: 30px 50px;
  /* css slider */
  .main_slider {
    position: relative;
    transition: all 0.4s ease-out 0s;
  }
  .container_slider {
    .slick-list {
      width: 690px;
      height: 500px;
      border-radius: 20px;
    }

    .slick-dots {
      position: absolute;
      bottom: 3%;
      transition: all 0.4s ease-out 0s;
    }

    .slick-dots li.slick-active button:before {
      opacity: 2.75;
      color: #fff;
      font-size: 10px;
    }

    .slick-dots li button:before {
      font-size: 10px;
      opacity: 0.3;
      color: #fff;
    }
  }

  .content_slider {
    position: relative;
    img {
      width: 690px;
      height: 500px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .txt_slider {
    position: absolute;
    top: 18%;
    left: 10%;
    .btn_top {
      width: 101px;
      height: 30px;
      color: #000;
      border: 0;
      font-size: 13px;
      font-weight: 600;
      padding: 0;
      text-transform: uppercase;
      background-color: #fcbe00;
      transition: all 0.4s ease-out 0s;
    }

    .btn_top:hover {
      background-color: #fff;
      transition: all 0.4s ease-out 0s;
    }

    h2 {
      color: #fff;
      font-size: 36px;
      margin: 30px 0;
    }

    .txt_bottom {
      color: #fff;
      font-size: 18px;
    }

    .btn_bottom {
      width: 205px;
      height: 50px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 55px;
      border-radius: 30px;
      transition: all 0.4s ease-out 0s;
    }

    .btn_bottom:hover {
      border: 0;
      color: #000;
      background-color: #fff;
      transition: all 0.4s ease-out 0s;
    }
  }
  //================================================

  /* css banner center */
  .banner_center {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .general_banner {
    position: relative;
    width: 330px;
    height: 235px;
    overflow: hidden;
    border-radius: 20px;
  }

  .general_banner:hover .container_banner img {
    transform: scale(1.1);
  }

  .container_banner {
    img {
      width: 330px;
      height: 235px;
      border-radius: 20px;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
  }

  .banner_content {
    position: absolute;
    top: 30%;
    left: 12%;

    h5 {
      margin-bottom: 20px;
      a {
        font-size: 24px;
        color: #fff;
      }
    }

    h5:hover a {
      color: #fcbe00;
    }

    span {
      color: #fff;
      font-size: 16px;
    }
  }

  /* css banner right */

  .banner_right {
    position: relative;
    width: 330px;
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
  }

  .banner_right:hover img {
    transform: scale(1.1);
  }

  .containers_banner {
    img {
      width: 330px;
      height: 500px;
      border-radius: 20px;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
  }

  .banners_content {
    position: absolute;
    top: 12%;
    left: 16%;
    text-align: center;
    .btn_top {
      width: 101px;
      height: 30px;
      color: #000;
      border: 0;
      font-size: 13px;
      font-weight: 600;
      padding: 0;
      margin-bottom: 20px;
      text-transform: uppercase;
      background-color: #fcbe00;
      transition: all 0.4s ease-out 0s;
    }

    .btn_top:hover {
      background-color: #fff;
      transition: all 0.4s ease-out 0s;
    }

    .txt_banner_right {
      font-size: 18px;
      color: #fff;
    }

    h5 {
      font-size: 26px;
      margin: 0;
      a {
        color: #fff;
      }
    }

    .btn_bottom {
      width: 150px;
      height: 50px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 222px;
      transition: all 0.4s ease-out 0s;
    }

    .btn_bottom:hover {
      border: 0;
      color: #000;
      background-color: #fff;
      transition: all 0.4s ease-out 0s;
    }
  }
`;

export default SliderStyle;

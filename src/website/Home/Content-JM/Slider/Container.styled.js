import styled from "styled-components";
const StyledSliderContent = styled.div`
  margin: 0 50px;

  .banner_hover {
    overflow: hidden;
    border-radius: 20px; 
  }

  .banner_hover img {
    border-radius: 20px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .banner_hover:hover img {
    transform: scale(1.1);
  }

  .img_banner img {
    border-radius: 20px;
    object-fit: cover;
  }

  .content_banner {
    position: absolute;
    top: 25%;
    right: 33%;
  }

  .content_banner_2 {
    right: 27%;
  }

  .content_banner_3 {
    right: 25%;
  }

  .content_banner .txt_title {
    color: #fff;
  }

  .txt_title:hover {
    color: #fcbe00;
    transition: all 0.4s ease-out 0s;
  }

  .content_banner .txt_title_small {
    font-size: 16px;
    color: #fff;
  }
`;

export default StyledSliderContent;

import React from "react";
import BrandStyled from "./Container.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image } from "antd";

import brand1 from "../../../images/brand/brand-1.jpg";
import brand2 from "../../../images/brand/brand-1.jpg";
import brand3 from "../../../images/brand/brand-1.jpg";
import brand4 from "../../../images/brand/brand-1.jpg";
import brand5 from "../../../images/brand/brand-1.jpg";
import brand6 from "../../../images/brand/brand-1.jpg";
import brand7 from "../../../images/brand/brand-1.jpg";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
  };

  return (
    <BrandStyled>
      <div className="container_brand">
        <Slider {...settings}>
          <div>
            <Image src={brand1} preview={false} />
          </div>
          <div>
            <Image src={brand2} preview={false} />
          </div>
          <div>
            <Image src={brand3} preview={false} />
          </div>
          <div>
            <Image src={brand4} preview={false} />
          </div>
          <div>
            <Image src={brand5} preview={false} />
          </div>
          <div>
            <Image src={brand6} preview={false} />
          </div>
          <div>
            <Image src={brand7} preview={false} />
          </div>
        </Slider>
      </div>
    </BrandStyled>
  );
};

export default Brands;

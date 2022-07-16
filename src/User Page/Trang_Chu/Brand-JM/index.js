import React from 'react';
import BrandStyled from './Container.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image } from 'antd';

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
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
          <div>
            <Image preview={false} />
          </div>
        </Slider>
      </div>
    </BrandStyled>
  );
};

export default Brands;

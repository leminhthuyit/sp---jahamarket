import React, { useEffect } from 'react';
import Brands from './Brand-JM';
import Contents from './Content-JM';
import Footers from './Footers-JM';
import Headers from './Header-JM';
import Navigations from './Navigation-JM';
import Sliders from './Slider-JM';

import { productesApi } from '../../Api/productesApi';

const TrangChu = () => {
  useEffect(() => {
    const fetchApi = async () => {
      const result = await productesApi();

      console.log('result:', result);
    };

    fetchApi();
  }, []);
  return (
    <>
      <Headers />
      <Navigations />
      <Sliders />
      <Contents />
      <Brands />
      <Footers />
    </>
  );
};

export default TrangChu;

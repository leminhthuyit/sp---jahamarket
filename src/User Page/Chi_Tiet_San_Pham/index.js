import React from 'react';
import Footers from '../Trang_Chu/Footers-JM';
import Headers from '../Trang_Chu/Header-JM';
// import Navigations from '../Trang_Chu/Navigation-JM';
import MoTaSanPham from './Mo_Ta_San_Pham';
import SanPham from './San_Pham';

const ChiTietSanPham = () => {
  return (
    <>
      <Headers />
      {/* <Navigations /> */}
      <SanPham />
      <MoTaSanPham />
      <Footers />
    </>
  );
};

export default ChiTietSanPham;

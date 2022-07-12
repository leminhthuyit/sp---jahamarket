import React from "react";
import CacSanPhamKhac from "./Cac_San_Pham_Khac";
import HotSales from "./HotSale";
import Computers from "./May_Tinh_De_Ban";
import SanPhamNoiBat from "./San_Pham_Noi_Bat";
import SliderContent from "./Slider";

const ContentMain = () => {
  return (
    <>
      <HotSales />
      <SanPhamNoiBat />
      <SliderContent />
      <Computers />
      <CacSanPhamKhac />
    </>
  );
};

export default ContentMain;

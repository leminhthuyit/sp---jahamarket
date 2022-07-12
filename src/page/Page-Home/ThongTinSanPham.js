import React from "react";
import Footers from "../../website/Home/Footers-JM";
import Headers from "../../website/Home/Header-JM";
import ChiTietSanPham from "../../website/Home/JM_Thong_Tin_San_Pham/Chi_Tiet_San_Pham";
import SanPham from "../../website/Home/JM_Thong_Tin_San_Pham/San_Pham";
import { DataImage } from "../../website/Home/JM_Thong_Tin_San_Pham/San_Pham/DataImage";

const ThongTinSanPham = () => {
  return (
    <>
      <Headers />
      <SanPham slides={DataImage} />
      <ChiTietSanPham />
      <Footers />
    </>
  );
};

export default ThongTinSanPham;

import React from "react";
import Footers from "../../../../website/Home/Footers-JM";
import Headers from "../../../../website/Home/Header-JM";
import Navigations from "../../../../website/Home/Navigation-JM";
import DanhMucSanPhamJM from "../../../../website/Home/JM_Danh_Muc_San_Pham";
import { dbApp } from "../../../../api/dbApp";

const PhuKien = () => {
  const dbAccessory = dbApp.products.filter((data) => data.categoryId === 5);
  return (
    <>
      <Headers />
      <Navigations />
      <DanhMucSanPhamJM data={dbAccessory} />
      <Footers />
    </>
  );
};

export default PhuKien;

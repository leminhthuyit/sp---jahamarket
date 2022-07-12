import React from "react";
import Footers from "../../../../website/Home/Footers-JM";
import Headers from "../../../../website/Home/Header-JM";
import Navigations from "../../../../website/Home/Navigation-JM";
import DanhMucSanPhamJM from "../../../../website/Home/JM_Danh_Muc_San_Pham";
import { dbApp } from "../../../../api/dbApp";

const Camera = () => {
  const dbCamera = dbApp.products.filter((data) => data.categoryId === 8);
  return (
    <>
      <Headers />
      <Navigations />
      <DanhMucSanPhamJM data={dbCamera} />
      <Footers />
    </>
  );
};

export default Camera;

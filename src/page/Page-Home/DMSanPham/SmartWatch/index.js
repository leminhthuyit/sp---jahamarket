import React from "react";
import Footers from "../../../../website/Home/Footers-JM";
import Headers from "../../../../website/Home/Header-JM";
import Navigations from "../../../../website/Home/Navigation-JM";
import DanhMucSanPhamJM from "../../../../website/Home/JM_Danh_Muc_San_Pham";
import { dbApp } from "../../../../api/dbApp";

const SmartWatch = () => {
  const dbSmartWatch = dbApp.products.filter((data) => data.categoryId === 4);
  return (
    <>
      <Headers />
      <Navigations />
      <DanhMucSanPhamJM data={dbSmartWatch} />
      <Footers />
    </>
  );
};

export default SmartWatch;

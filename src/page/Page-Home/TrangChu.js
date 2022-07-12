import React, { useEffect } from "react";
import Brands from "../../website/Home/Brand-JM";
import ContentMain from "../../website/Home/Content-JM";
import Footers from "../../website/Home/Footers-JM";
import Headers from "../../website/Home/Header-JM";
import Navigations from "../../website/Home/Navigation-JM";
import Sliders from "../../website/Home/Slider-JM";

import * as categoriesService from "../../api/categotiesApi";

const TrangChu = () => {
  useEffect(() => {
    const fetchApi = async () => {
      const result = await categoriesService.categoriesApi();
      console.log(result);
    };
    fetchApi();
  });

  return (
    <div style={{ backgroundColor: "#F4F5F7", position: "relative" }}>
      <Headers />
      <Navigations />
      <Sliders />
      <ContentMain />
      <Brands />
      <Footers />
    </div>
  );
};

export default TrangChu;

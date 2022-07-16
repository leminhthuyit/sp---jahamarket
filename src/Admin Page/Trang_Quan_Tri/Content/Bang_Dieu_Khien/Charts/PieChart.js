import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Smartphone", "Smartwatch", "Tai Nghe", "Loa", "Phụ Kiện"],
  datasets: [
    {
      label: "Top sản phẩm bán chạy",
      data: [33, 55, 66, 88, 99],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(155, 89, 182)",
        "rgb(231, 76, 60)",
      ],
      hoverOffset: 4,
    },
  ],
};
const PieChart = () => {
  return (
    <>
      <div style={{ width: "320px", height: "320px" }}>
        <Doughnut data={data} />
      </div>
    </>
  );
};

export default PieChart;

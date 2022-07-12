import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const datas = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Smartphone",
      data: [11, 22, 33, 55, 66, 88, 99],
      backgroundColor: ["rgb(255, 99, 132)"],
      hoverOffset: 4,
    },

    {
      label: "Smartwatch",
      data: [11, 22, 33, 55, 66, 88, 99],
      backgroundColor: ["rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
    {
      label: "Tai Nghe",
      data: [11, 22, 33, 55, 66, 88, 99],
      backgroundColor: ["rgb(255, 205, 86)"],
      hoverOffset: 4,
    },
    {
      label: "Loa",
      data: [11, 22, 33, 55, 66, 88, 99],
      backgroundColor: ["rgb(155, 89, 182)"],
      hoverOffset: 4,
    },
    {
      label: "Phụ kiện",
      data: [11, 22, 33, 55, 66, 88, 99],
      backgroundColor: ["rgb(231, 76, 60)"],
      hoverOffset: 4,
    },
  ],
};
const ColumnChart = () => {
  return (
    <>
      <div style={{ width: "568px", height: "283px" }}>
        <Bar data={datas} />;
      </div>
    </>
  );
};

export default ColumnChart;

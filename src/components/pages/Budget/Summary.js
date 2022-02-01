import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Summary(props) {
  const budget = props.budget;

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    data: {
      labels: budget.map((category) => category.name),
      datasets: [
        {
          label: "Total",
          data: Number(
            budget
              .map((category) => {
                let total = 0;
                category.items.map((item) => (total += parseFloat(item.price)));
                return total;
              })
              .join("")
          ),
          backgroundColor: ["black"],
          borderWidth: 1,
        },
        {
          label: "Paid",
          data: budget.map((category) => {
            let total = 0;
            category.items.map((item) => (total += parseFloat(item.paid)));
            return total;
          }),
          backgroundColor: ["#005544"],
          borderWidth: 1,
        },
        {
          label: "Left to pay",
          data: budget.map((category) => {
            let total = 0;
            category.items.map(
              (item) => (total += parseFloat(item.price - item.paid))
            );
            return total;
          }),
          backgroundColor: ["#707070"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              family: "Open Sans",
              size: "2rem",
              color: "black",
            },
          },
        },
      },
    },
  };
  return (
    <div className="chart">
      <Bar data={data.data} options={options} />
    </div>
  );
}

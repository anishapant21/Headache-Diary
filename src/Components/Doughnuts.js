import React from "react";
import { Doughnut } from "react-chartjs-2";

function Doughnuts({ typesVal, typesCount, color }) {
  const data = {
    labels: typesVal,
    datasets: [
      {
        label: "Types",
        data: typesCount,
        backgroundColor: color,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data}></Doughnut>
    </div>
  );
}

export default Doughnuts;

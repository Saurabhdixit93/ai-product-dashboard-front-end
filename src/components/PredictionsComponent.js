import React from "react";
import { Line } from "react-chartjs-2";
import Loader from "./Loader";

const PredictionsComponent = ({ predictions, loading }) => {
  if (loading) {
    return <Loader />;
  }

  if (!predictions.predicted || !predictions.actual) {
    return <p>Data not available.</p>;
  }

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Predicted Values",
        data: predictions.predicted,
        borderColor: "blue",
      },
      {
        label: "Actual Values",
        data: predictions.actual,
        borderColor: "green",
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
      },
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Predictions and Results</h2>
      <div className="mt-4">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PredictionsComponent;

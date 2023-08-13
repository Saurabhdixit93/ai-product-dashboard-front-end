import React from "react";
import Loader from "./Loader";

const MetricsComponent = ({ metrics, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Key Performance Metrics</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <p className="text-sm text-gray-500">{key}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsComponent;

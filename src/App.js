import React, { useState, useEffect } from "react";
import axios from "axios";
import MetricsComponent from "./components/MetricsComponent";
import PredictionsComponent from "./components/PredictionsComponent";
axios.defaults.baseURL = "https://ai-product-dashboard-backend.onrender.com";
function App() {
  const [metrics, setMetrics] = useState({});
  const [predictions, setPredictions] = useState({ predicted: [], actual: [] });
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingPredictions, setLoadingPredictions] = useState(true);

  useEffect(() => {
    // Fetch metrics data from API
    axios
      .get("/api/metrics")
      .then((response) => {
        setMetrics(response.data);
        setLoadingMetrics(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch predictions data from API
    axios
      .get("/api/predictions")
      .then((response) => {
        setPredictions(response.data);
        setLoadingPredictions(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">AI Product Dashboard</h1>
      <MetricsComponent metrics={metrics} loading={loadingMetrics} />
      <PredictionsComponent
        predictions={predictions}
        loading={loadingPredictions}
      />
    </div>
  );
}

export default App;

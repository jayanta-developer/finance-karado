import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Home from "./Pages/Home";
import CreditFinalPage from "./Pages/CreditFinalPage";

export default function App() {
  const [data, setData] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="/credit-score"
          element={<CreditFinalPage data={data} setData={setData} />}
        />
      </Routes>
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContinentsPage from "./pages/ContinentsPage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/continents/:continent" element={<CountriesPage />} />
        <Route
          path="/continents/:continent/countries/:country"
          element={<CountryDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;

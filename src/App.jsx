import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import TechnologyPage from "./pages/TechnologyPage";
import companyList from "./companies.json";
import techList from "./technologies.json";

// const companyList = companies
// const {id,
//   slug, name, website, description, logo, techStack: [ {langName, slugLang, techLogo } ] } = companyList
function App() {
  const [companies, setCompanies] = useState(companyList);
  const [technologies, setTechnologies] = useState(techList);

  return (
    <div className="App">
      {/* <h1>LAB | React Stack Tracker</h1> */}
      <Navbar />
      {/*<HomePage />
      <CompanyPage />
      <TechnologyPage /> */}

      <Routes>
        <Route path="/" element={<HomePage companyList={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage companyList={companies} />} />
        <Route path="/tech/:techSlug" element={<TechnologyPage techList={technologies}/>} />
      </Routes>
    </div>
  );
}

export default App;

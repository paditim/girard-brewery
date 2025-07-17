import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Footer from "./app/components/Footer";
import Navbar from "./app/components/Navbar";
import Main from "./app/components/Main";
import Beer from "./app/components/Beer";
import Taproom from "./app/components/Taproom";
import Story from "./app/components/Story";
import Contact from "./app/components/Contact";
import Events from "./app/components/Events";
import RefAndComp from "./app/components/RefAndComp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className={"container-fluid"}>
      <Router>
        <Navbar />


        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/beer" element={<Beer />}/>
          <Route path="/taproom" element={<Taproom />} />
          <Route path="/story" element={<Story />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

        <Routes>

          <Route path="/RefAndComp" element={<RefAndComp />} />

        </Routes>

      </Router>
    </div>

  </React.StrictMode>
);


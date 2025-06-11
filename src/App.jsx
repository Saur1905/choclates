import React from "react";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Menu from "./Pages/Menu";
import Menubar from "./Pages/Menubar";
import { Routes,Route} from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Menubar" element={<Menubar/>}/>
        {/* Add more routes as needed */}
      </Routes>
   
  
    </div>
  );
};

export default App;

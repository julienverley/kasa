import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Location from "./pages/Location";
//
// import { home, about, location } from "./routes";
import { about, location } from "./routes";
//

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Local routes paths */}
        {/* <Route path={home} element={<Home />} />
        <Route path={about} element={<About />} />
        <Route path={location} element={<Location />} /> */}
        <Route path={process.env.REACT_APP_FOR_PATH + "/"} element={<Home />} />
        <Route path={about} element={<About />} />
        <Route path={location} element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

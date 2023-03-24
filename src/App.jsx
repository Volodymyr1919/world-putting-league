import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/layouts/MainLayout";
import NFLayout from "./pages/layouts/NFLayout";
import Home from "./pages/home/Home";
import Top8 from "./pages/top8finalists/Top8";
import NotFound from "./pages/notFound/NotFound";
// eslint-disable-next-line no-unused-vars
import appStyle from "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/top-8" element={<Top8 />} />
          </Route>
          <Route element={<NFLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

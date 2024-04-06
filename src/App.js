import "./App.css"
import { Home } from "./Home";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SchemeRecommend } from "./SchemeRecommend";

function App() {
  return (
    <div className="App">
<Router>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/SchemeRecommend" element={<SchemeRecommend/>} />
</Routes>
</Router>
    </div>
  );
}
export default App;
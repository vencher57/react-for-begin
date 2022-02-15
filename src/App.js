import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={"/Detail/:id"} element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App;

import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/Home";
import PesananPage from "./components/pesanan";
import LoginPage from "./components/login";
import MlPage from "./components/ml";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/pesanan" Component={PesananPage}/>
      <Route path="/login" Component={LoginPage}/>
      <Route path="/ml" Component={MlPage}/>
      
    </Routes>
      
    </>
  );
}

export default App;
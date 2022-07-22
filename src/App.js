/** @format */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreatToken from "./pages/Create_Token/CreatToken";
import Launchpad from "./pages/Launchpad/Launchpad";
import Saving from "./pages/saving/Saving";
import Presale from "./pages/Presale/Presale";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CreateToken/" element={<CreatToken />} />
          <Route path="Saving/" element={<Saving />} />
          <Route path="launchpad/" element={<Launchpad />} />
          <Route path="presale/" element={<Presale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

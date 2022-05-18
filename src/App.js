import { Routes, Route } from "react-router-dom";
import Module from "./Components/Module";
import Home from "./Pages/Home";
import Rankings from "./Pages/Rankings";
import Drivers from "./Pages/Drivers";
import Teams from "./Pages/Teams";
import Circuits from "./Pages/Circuits";

function App() {
  return (
    <Module>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/circuits" element={<Circuits />} />
      </Routes>
    </Module>
  );
}

export default App;

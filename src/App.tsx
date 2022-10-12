import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/layout/main_header/MainHeader";
import Film from "./components/pages/Film";
import Films from "./components/pages/Films";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import Species from "./components/pages/Species";
import Starships from "./components/pages/Starships";
import Vehicles from "./components/pages/Vehicles";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:filmId" element={<Film />} />
        <Route path="/people" element={<People />} />
        <Route path="/species" element={<Species />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

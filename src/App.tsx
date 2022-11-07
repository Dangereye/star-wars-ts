import { Routes, Route } from "react-router-dom";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Context
import AppContextProvider from "./context/AppContext";

// Components
import Navbar from "./components/layout/navbar/Navbar";

// Pages
import Film from "./pages/Film";
import Films from "./pages/Films";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Planet from "./pages/Planet";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Starship from "./pages/Starship";
import Vehicles from "./pages/Vehicles";
import Vehicle from "./pages/Vehicle";
import Person from "./pages/Person";
import Entity from "./pages/Entity";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <AppContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:filmId" element={<Film />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:personId" element={<Person />} />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:speciesId" element={<Entity />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:planetId" element={<Planet />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:starshipId" element={<Starship />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:vehicleId" element={<Vehicle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContextProvider>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

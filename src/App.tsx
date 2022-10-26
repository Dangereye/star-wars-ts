import { Routes, Route } from "react-router-dom";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Components
import Navbar from "./components/layout/navbar/Navbar";

// Pages
import Film from "./pages/Film";
import Films from "./pages/Films";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Person from "./pages/Person";
import Entity from "./pages/Entity";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
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
          <Route path="/starships" element={<Starships />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

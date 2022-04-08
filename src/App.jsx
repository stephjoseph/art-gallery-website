import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Location from "./components/Location";

function App() {
  return (
    <div className="App flex w-full max-w-[47.938rem] flex-col items-center font-['Outfit']">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

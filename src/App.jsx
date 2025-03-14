import { Route, Routes } from "react-router-dom";
import Pagehome from "./pages/Pagehome";
import PageCart from "./pages/PageCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pagehome />} />
      <Route path="/cart" element={<PageCart />} />
    </Routes>
  );
}

export default App;

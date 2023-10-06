import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/' element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;

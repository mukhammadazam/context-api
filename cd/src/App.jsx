import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HOme";
import UseParams from "./components/UseParams";
import AllData from "./components/AllData";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/All' element={<AllData />} />
        <Route path="/:title" element={<UseParams/>}/>
        
      </Routes>
    </>
  );
}

export default App;

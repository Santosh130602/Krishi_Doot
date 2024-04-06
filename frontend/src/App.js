import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voice from "./pages/voice/voice";
import Fertilizer from "./pages/fertilizer/fertilizer";
import Crop from "./pages/crop/crop";
import SmsService from "./pages/sms/sms";
import Disease from "./pages/disease/disease";
import Register from "./pages/login/SignUp";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/Crop" element={<Crop/>} />
          <Route path="/sms" element={<SmsService />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// code completed
export default App;

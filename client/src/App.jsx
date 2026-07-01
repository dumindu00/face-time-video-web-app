import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Register from './pages/Register/register'
import Welcome from "./pages/Welcome/welcome";
import VideoChat from "./pages/VideoChat/videoChat";

function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/videoChat" element={<VideoChat />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App

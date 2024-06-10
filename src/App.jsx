import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from "./pages/pricing/Pricing";


function App() {  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>      
    </>
  )
}

export default App

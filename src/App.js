import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar.jsx";
import Homepage from './components/Homepage/Homepage.jsx'
import HospitalPage from './components/HospitalPage/HospitalPage'
import OxygenPage from './components/OxygenPage/OxygenPage'
import PlasmaPage from './components/PlasmaPage/PlasmaPage'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/oxygen" element={<OxygenPage />} />
          <Route path="/plasma" element={<PlasmaPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

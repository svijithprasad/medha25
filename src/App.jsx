import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Events } from './pages/events/Events';
import { Event } from './pages/Event/Event';
import Home from './pages/home/Home';
import SocialBar from './components/SocialBar';
import { Contact } from './components/Contact';

import Glimpse from "./components/Glimpse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SocialBar />
        <Contact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:section" element={<Event />} />
          <Route path="/glimpse" element={<Glimpse />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
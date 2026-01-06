// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import WelcomeNotif from './components/welcomenotif';

function App() {
  return (
    <div className="scroll-smooth">
      <WelcomeNotif />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
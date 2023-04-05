import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ViewJournals from './components/ViewJournals';
import AddJournal from './components/AddJournal';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MoodTracker from './components/MoodTracker';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/view-journal" element={<ViewJournals />} />
        <Route path="/add-journal" element={<AddJournal />} />
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

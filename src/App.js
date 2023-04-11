import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewJournals from './components/ViewJournals';
import AddJournal from './components/AddJournal';
import LoginPage from './components/LoginPage';
import MoodTracker from './components/MoodTracker';
import Contact from './components/Contact';
import SafetyPlan from './components/SafetyPlan';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/view-journal" element={<ViewJournals />} />
        <Route path="/add-journal" element={<AddJournal />} />
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety-plan" element={<SafetyPlan />} />
      </Routes>
    </div>
  );
}

export default App;

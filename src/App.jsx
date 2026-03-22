import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import SyllabusTracker from './pages/SyllabusTracker';
import StudyMaterials from './pages/StudyMaterials';
import TestInterface from './pages/TestInterface';
import ResultsAnalytics from './pages/ResultsAnalytics';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="syllabus" element={<SyllabusTracker />} />
          <Route path="materials" element={<StudyMaterials />} />
          <Route path="test" element={<TestInterface />} />
          <Route path="results" element={<ResultsAnalytics />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ProjectDetails from './ProjectDetails';
import NotFound from './NotFound';
import './tailwind.css'; // Import Tailwind CSS file

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-yellow-100"> {/* Add min-h-screen for full height */}
        <Navbar />
        <div className="container mx-auto px-4 py-8"> {/* Add container for content padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
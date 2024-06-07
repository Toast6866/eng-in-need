import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import ProjectDetails from './ProjectDetails'; // Ensure this path is correct
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
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
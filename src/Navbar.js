import { Link } from "react-router-dom";
import './tailwind.css'; // Ensure Tailwind CSS is imported

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">EngInNeed</h1>
      <div className="flex items-center ml-auto">
        <Link to="/" className="text-white hover:text-gray-300 mr-4">Home</Link>
        <Link to="/create" className="text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg">New Project</Link>
      </div>
    </nav>
  );
}

export default Navbar;
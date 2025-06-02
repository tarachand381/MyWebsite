import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-whitesmoke italic shadow-md p-7">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxw0RJtIDMkb1zZgvdF4L9xIj6gy2sbx9qPycuP4zZKsiPrmH0BtDBCPYAM0DboO8dCY&usqp=CAU"
            alt="Website Logo"
            className="w-10 h-10 object-contain" />

          <h1 className="text-3xl font-bold">
            <span className="text-red-600">Web</span>
            <span className="text-green-700">Site</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent text-xl font-bold text-gray-600 px-4 md:px-0 z-10 transition-all duration-300 ease-in-out
            ${isOpen ? 'flex flex-col space-y-4 py-4' : 'hidden'}
            md:flex md:flex-row md:items-center md:space-x-6 md:space-y-0`}
        >
          <li><Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)} className="hover:text-pink-600">About</Link></li>
          <li><Link to="/services" onClick={() => setOpen(false)} className="hover:text-pink-600">Services</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)} className="hover:text-pink-600">Projects</Link></li>
          <li><Link to="/blog" onClick={() => setOpen(false)} className="hover:text-pink-600">Blog</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:text-pink-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

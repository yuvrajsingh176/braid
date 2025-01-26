import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white py-4 shadow-md w-full">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.svg" alt="logo" className="h-8" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8 text-base font-medium text-gray-700">
          <div
            className="cursor-pointer  hover:text-blue-800"
            onClick={() => navigate("/whyPool")}
          >
            Why Pool?
          </div>
          <Link to="/about" className="hover:text-blue-800 transition-colors">
            About Us
          </Link>
          <p className="cursor-pointer hover:text-blue-800 transition-colors">
            FAQs
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={() => navigate("/startPool")}
          >
            Start a Pool
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

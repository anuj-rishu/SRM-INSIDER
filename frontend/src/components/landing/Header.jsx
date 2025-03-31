import { useState } from "react";
import SignInModal from "../model/SignInModel";
function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/Srmseal_m5owvy.png"
            alt="SRM INSIDER"
            className="h-12 mr-3"
          />
          <h1 className="text-primary text-2xl font-bold">SRM INSIDER</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className={`font-medium hover:text-primary transition ${
              activeSection === "home" ? "text-primary" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#features"
            className={`font-medium hover:text-primary transition ${
              activeSection === "features" ? "text-primary" : ""
            }`}
          >
            Features
          </a>
          <a
            href="#clubs"
            className={`font-medium hover:text-primary transition ${
              activeSection === "clubs" ? "text-primary" : ""
            }`}
          >
            Clubs
          </a>
          <a
            href="#events"
            className={`font-medium hover:text-primary transition ${
              activeSection === "events" ? "text-primary" : ""
            }`}
          >
            Events
          </a>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full hover:shadow-md transition">
            Sign In
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-white py-4 px-6 md:hidden flex flex-col space-y-4 animate-fade-in">
          <a
            href="#home"
            className="font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#clubs"
            className="font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Clubs
          </a>
          <a
            href="#events"
            className="font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </a>
          <button className="bg-gradient-to-r from-primary to-indigo-600 text-white px-5 py-2 rounded-full hover:bg-opacity-90 w-full">
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
// components/Header.tsx
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/home/hexaarchLogo.svg"
            alt="HEXAARCH"
            className="h-10 w-auto"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#reit" className="hover:text-indigo-400 transition">
            REITs
          </a>
          <a href="#roi" className="hover:text-indigo-400 transition">
            ROI
          </a>
        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You can later add a hamburger menu here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

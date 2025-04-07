import { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const leaveTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    clearTimeout(leaveTimeout.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (menuName) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-white shadow text-black" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 z-50">
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/black-logo.svg"
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setActiveDropdown(null);
          }}
          className="text-black focus:outline-none"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "right-0" : "-right-full "
        } md:right-auto md:translate-x-0 fixed md:static top-0 h-full md:h-auto w-3/4 md:w-auto  bg-white md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-4 px-6 pt-20 pb-6 md:p-0 transition-all duration-300 ease-in-out z-40`}
      >
        {["home", "pages", "courses", "blog"].map((menu) => (
          <div
            key={menu}
            className="relative w-full md:w-auto  "
            onMouseEnter={() => !isMenuOpen && handleMouseEnter(menu)}
            onMouseLeave={() => !isMenuOpen && handleMouseLeave()}
          >
            <div
              className="flex justify-between md:justify-start items-center w-full font-bold cursor-pointer hover:text-purple-600 font-helvetica py-2 md:py-0"
              onClick={() => isMenuOpen && toggleMobileDropdown(menu)}
            >
              <span className="capitalize">{menu}</span>
              <ChevronDown size={16} className="ml-1" />
            </div>

            {(activeDropdown === menu) && (
              <div
                className={`${
                  isMenuOpen ? "relative mt-1 w-full" : "absolute top-8 left-0 w-40"
                } bg-white shadow-lg rounded-md py-2 z-50`}
              >
                {menu === "home" && (
                  <>
                    <Link to="/">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 ">Home One</p>
                    </Link>
                    <Link to="/">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 ">Home Two</p>
                    </Link>
                    <Link to="/">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600 ">Home Three</p>
                    </Link>
                  </>
                )}
                {menu === "pages" && (
                  <>
                    <Link to="/aboutus"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">About Us</p></Link>
                    <Link to="/allteam"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Team</p></Link>
                    <Link to="/allteam"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Team Details</p></Link>
                    <Link to="/"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Privacy Policy</p></Link>
                    <Link to="/allteam"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Term Conditions</p></Link>
                    <Link to="/"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">404 Page</p></Link>
                  </>
                )}
                {menu === "courses" && (
                  <>
                    <Link to="/categories"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Web Dev</p></Link>
                    <Link to="/categories"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">AI/ML</p></Link>
                    <Link to="/categories"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointe hover:text-purple-600r">Course Details</p></Link>
                  </>
                )}
                {menu === "blog" && (
                  <>
                    <Link to="/newblog"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Blog Grid</p></Link>
                    <Link to="/newblog"><p className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-purple-600">Blog Details</p></Link>

                  </>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Contact */}
     <Link to="/contact">
     <div className="cursor-pointer font-bold hover:text-purple-600 font-helvetica py-2 md:py-0">
          Contact
        </div>

     </Link>
        {/* Button (Mobile View) */}
        <div className="md:hidden mt-4 w-full">
          <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 w-full transition font-helvetica">
            Start Free Trial <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>

      {/* Button with Popover (Desktop) */}
      <div
        className="relative hidden md:block"
        onMouseEnter={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition font-helvetica">
          Start Free Trial <ArrowRight className="ml-2" size={18} />
        </button>

        {showPopover && (
          <div className="absolute right-0 mt-2 w-52 bg-white text-black rounded-lg shadow-lg p-3 text-sm z-50">
            🎉 Start your 7-day free trial now! <br />
            No credit card required.
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

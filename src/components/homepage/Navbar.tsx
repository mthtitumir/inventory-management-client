import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-sky-200 fixed w-full ${scrolled ? 'border-b border-gray-300 z-10' : ''}`}>
      <div className="flex py-4 container mx-auto justify-between">
        <div className="">
          <h4 className="text-xl">Inventory</h4>
        </div>
        <div className=" flex align-center gap-8">
          <ul className="flex justify-end align-center gap-8 text-lg">
            <li>Features</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li onClick={() => navigate("/login")} className="cursor-pointer hover:border-main hover:rounded-lg">Login</li>
          </ul>
          <div className="flex gap-5 align-center">
            <button className="bg-gradient-to-r from-[#0A192F] to-sky-800 text-slate-100 rounded-md py-1 px-3 text-center text-md">
              Try Demo Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

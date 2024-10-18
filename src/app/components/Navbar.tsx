"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaUtensils, FaStar, FaInfoCircle, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black text-white shadow fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-2">
        <Link href="/" className="flex items-center">
          <Image 
            src="https://i.pinimg.com/564x/f8/47/e9/f847e9213277a801cd801e9d64dbe929.jpg" 
            alt="Restaurant Logo" 
            width={64} 
            height={64} 
            className="rounded-full object-cover" 
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`md:flex md:flex-row md:space-x-6 absolute md:relative bg-black w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/" className="flex flex-col items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
              <FaHome className="text-xl" />
              <span className="text-xs">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/Food" className="flex flex-col items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
              <FaUtensils className="text-xl" />
              <span className="text-xs">Food</span>
            </Link>
          </li>
          <li>
            <Link href="/Reviews" className="flex flex-col items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
              <FaStar className="text-xl" />
              <span className="text-xs">Reviews</span>
            </Link>
          </li>
          <li>
            <Link href="/About" className="flex flex-col items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
              <FaInfoCircle className="text-xl" />
              <span className="text-xs">About</span>
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="flex flex-col items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
              <FaEnvelope className="text-xl" />
              <span className="text-xs">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-black p-4 flex flex-col">
          <button onClick={closeMenu} className="self-end text-2xl mb-4">
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="flex items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
                <FaHome className="text-xl" />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/Food" className="flex items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
                <FaUtensils className="text-xl" />
                <span className="ml-2">Food</span>
              </Link>
            </li>
            <li>
              <Link href="/Reviews" className="flex items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
                <FaStar className="text-xl" />
                <span className="ml-2">Reviews</span>
              </Link>
            </li>
            <li>
              <Link href="/About" className="flex items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
                <FaInfoCircle className="text-xl" />
                <span className="ml-2">About</span>
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="flex items-center p-2 hover:bg-orange-400 rounded" onClick={closeMenu}>
                <FaEnvelope className="text-xl" />
                <span className="ml-2">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

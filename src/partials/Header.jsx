import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
// import NukleosLogo from '../images/nukleos_logo_1k.png';

function Header() {

  const [top, setTop] = useState(true);

  const [isNavOpen, setIsNavOpen] = useState(false); 

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-md'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 my-1">

        {/* Site branding */}
        <div className="flex-shrink-0 mr-4">
          {/* Logo */}
          <Link to="/" className="block">
            <img src="" alt="logo" className='mx-4 w-16 h-16'/>
          </Link>
        </div>
        <nav>
        <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <Transition
            show={isNavOpen === true}
            appear={true}
            // className="w-full"
            enter="transition ease-in-out duration-700"
            enterStart="opacity-0"
            enterEnd="opacity-100 "
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className=" my-8 uppercase">
                <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Lien 1</Link>
              </li>
              <li className=" my-8 uppercase">
                <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Lien 2</Link>
              </li>
            </ul>
        </Transition>
          </div>
        </section>

        <ul className="items-center hidden md:flex md:flex-grow md:justify-end md:flex-wrap">
          <li>
              <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Lien 1</Link>
          </li>
          <li>
              <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Lien 2</Link>
          </li>
        </ul>
      </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;

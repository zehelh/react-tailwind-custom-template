import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function HeroHome() {


  return (
    <section className="relative h-screen">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-48 lg:pt-60 xl:pt-80">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className='custom-gradient'>Custom</span> Boilerplate</h1>
            <div className="max-w-3xl mx-auto">
              <div className='my-5 text-xl'>
                <p className='h3'>Made with</p>
                <ul>
                  <li>Tailwind CSS</li>
                  <li>React - Redux - Router</li>
                  <li>Build with Vite</li>
                </ul>
              </div>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                    <Link to="/" className="btn text-white bg-[#4b79bc] hover:bg-[#29477b] w-full mb-4 sm:w-auto sm:mb-0">Lien 1</Link>
                </div>
                <div>
                    <Link to="/" className="btn text-white bg-[#2cafc1] hover:bg-[#246a7a] w-full sm:w-auto sm:ml-4">Lien 2</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
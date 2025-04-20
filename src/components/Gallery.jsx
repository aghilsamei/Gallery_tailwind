import React, { useState } from "react";

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'images/1.jpg',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
  'images/2.jpg',
  'images/3.webp',
  'images/4.webp',
  'images/5.webp',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24',
  'images/1.jpg',
  'images/2.jpg',
];

export default function Gallery() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  return (

    <>
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              Logo Icon
              <svg className="h-8" viewBox="0 0 28 24" fill="none">
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643..."
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 hover:text-gray-700" href="#">About</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Careers</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">History</a></li>
              <li><a className="text-gray-500 hover:text-gray-700" href="#">Services</a></li>

              {/* Projects Dropdown */}
              <li className="relative group">
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                  Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <ul className="absolute hidden group-hover:block bg-white shadow rounded mt-2 w-40 z-10">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Apps</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Apps</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Other</a>
                  </li>
                </ul>
              </li>

              <li><a className="text-gray-500 hover:text-gray-700" href="#">Blog</a></li>
            </ul>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-8 h-8 focus:outline-none"
            >
              <span
                className={`absolute h-0.5 w-8 bg-gray-600 transition-transform duration-300 ease-in-out ${
                  mobileMenuOpen ? "rotate-45 top-3.5" : "top-2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-8 bg-gray-600 transition-opacity duration-300 ease-in-out ${
                  mobileMenuOpen ? "opacity-0" : "top-3.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-8 bg-gray-600 transition-transform duration-300 ease-in-out ${
                  mobileMenuOpen ? "-rotate-45 bottom-3.5" : "bottom-2"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm">
            <li><a className="block text-gray-700 hover:text-teal-600" href="#">About</a></li>
            <li><a className="block text-gray-700 hover:text-teal-600" href="#">Careers</a></li>
            <li><a className="block text-gray-700 hover:text-teal-600" href="#">History</a></li>
            <li><a className="block text-gray-700 hover:text-teal-600" href="#">Services</a></li>

            {/* Projects with dropdown */}
            <li className="relative group">
                <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                  Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow rounded w-40 z-20">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Apps</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Apps</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Other</a>
                  </li>
                </ul>
              </li>

            <li><a className="block text-gray-700 hover:text-teal-600" href="#">Blog</a></li>
          </ul>
        </div>
      )}
    </header>
      
      <div className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="sm:col-span-2 md:col-span-3 overflow-hidden rounded-xl">
            <img
              src={images[0]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="sm:row-span-2 overflow-hidden rounded-xl">
            <img
              src={images[1]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="sm:col-span-1 md:col-span-2 overflow-hidden rounded-xl">
            <img
              src={images[10]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="row-span-2 overflow-hidden rounded-xl">
            <img
              src={images[3]}
              className="w-full h-full object-top hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="sm:row-span-2 overflow-hidden rounded-xl">
            <img
              src={images[4]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src={images[5]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="sm:col-span-2 overflow-hidden rounded-xl">
            <img
              src={images[6]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src={images[7]}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { ThemeController } from './ThemeController';

export const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
        <button 
          onClick={() => scrollToSection('home')}
          className="btn btn-ghost text-xl font-bold"
        >
          AI Portfolio
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('about')}>About</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button className="btn btn-ghost" onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
};
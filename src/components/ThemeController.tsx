import React, { useEffect, useState } from 'react';

interface ThemeControllerProps {
  className?: string;
}

const themes = [
  { name: 'light', label: '☀️ Light' },
  { name: 'dark', label: '🌙 Dark' },
  { name: 'synthwave', label: '🌊 Synthwave' },
  { name: 'cyberpunk', label: '🤖 Cyberpunk' },
  { name: 'dracula', label: '🧛 Dracula' },
  { name: 'luxury', label: '💎 Luxury' },
  { name: 'business', label: '💼 Business' },
  { name: 'forest', label: '🌲 Forest' },
];

export const ThemeController: React.FC<ThemeControllerProps> = ({ className = '' }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        {themes.map((theme) => (
          <li key={theme.name}>
            <button
              className={`${currentTheme === theme.name ? 'active' : ''}`}
              onClick={() => handleThemeChange(theme.name)}
            >
              {theme.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
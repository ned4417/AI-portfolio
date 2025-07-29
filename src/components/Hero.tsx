import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'AI Software Engineer',
    'Machine Learning Developer',
    'Full Stack Developer',
    'Data Scientist'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    if (text.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [text, currentIndex, roles]);

  return (
    <div id="home" className="hero min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar mb-8">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-content">AI</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-primary">Eddie</span>
          </h1>
          
          <div className="text-2xl mb-8 h-8">
            <span className="text-secondary font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="py-6 text-lg opacity-80">
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in machine learning, AI development, and full-stack applications.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};
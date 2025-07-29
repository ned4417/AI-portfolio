import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">My Journey</h3>
                <p className="text-lg leading-relaxed">
                  I'm a passionate AI Software Engineer with expertise in machine learning, 
                  deep learning, and full-stack development. My journey started with a fascination 
                  for how computers can learn and adapt, leading me to specialize in creating 
                  intelligent systems that solve complex real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in the power of AI to transform industries and improve lives. 
                  My approach combines cutting-edge research with practical implementation, 
                  ensuring that the solutions I build are both innovative and deployable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="stat bg-primary text-primary-content rounded-lg">
              <div className="stat-figure">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title text-primary-content/80">Projects</div>
              <div className="stat-value">50+</div>
            </div>
            
            <div className="stat bg-secondary text-secondary-content rounded-lg">
              <div className="stat-figure">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <div className="stat-title text-secondary-content/80">Experience</div>
              <div className="stat-value">5+ Years</div>
            </div>
            
            <div className="stat bg-accent text-accent-content rounded-lg">
              <div className="stat-figure">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
              <div className="stat-title text-accent-content/80">Models</div>
              <div className="stat-value">25+</div>
            </div>
            
            <div className="stat bg-info text-info-content rounded-lg">
              <div className="stat-figure">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="stat-title text-info-content/80">Awards</div>
              <div className="stat-value">10+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
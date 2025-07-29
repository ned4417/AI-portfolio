import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'AI/ML' | 'Web App' | 'API' | 'Research';
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neural Language Model',
    description: 'A transformer-based language model trained on domain-specific data for content generation and analysis.',
    image: '🧠',
    technologies: ['Python', 'PyTorch', 'Transformers', 'AWS'],
    category: 'AI/ML',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Computer Vision Pipeline',
    description: 'Real-time object detection and classification system using YOLOv8 and custom trained models.',
    image: '👁️',
    technologies: ['Python', 'OpenCV', 'YOLO', 'FastAPI'],
    category: 'AI/ML',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Modern chat application with AI integration, real-time messaging, and intelligent responses.',
    image: '💬',
    technologies: ['React', 'TypeScript', 'WebSocket', 'OpenAI'],
    category: 'Web App',
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Recommendation Engine',
    description: 'Collaborative filtering system with deep learning for personalized recommendations.',
    image: '🎯',
    technologies: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL'],
    category: 'AI/ML',
    githubUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'ML Model API',
    description: 'RESTful API for serving machine learning models with auto-scaling and monitoring.',
    image: '🚀',
    technologies: ['FastAPI', 'Docker', 'Kubernetes', 'MLflow'],
    category: 'API',
    githubUrl: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Anomaly Detection System',
    description: 'Time series analysis and anomaly detection for IoT sensor data using autoencoders.',
    image: '📊',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly'],
    category: 'Research',
    githubUrl: '#',
    featured: false
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['All', 'AI/ML', 'Web App', 'API', 'Research'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Here are some of my recent projects showcasing AI development, 
            machine learning, and full-stack applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${filter === category ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  {project.featured && (
                    <div className="badge badge-primary">Featured</div>
                  )}
                </div>
                
                <h3 className="card-title text-xl mb-2">{project.title}</h3>
                <span className="badge badge-outline mb-4">{project.category}</span>
                
                <p className="text-base opacity-80 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-secondary badge-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="card-actions justify-end">
                  {project.githubUrl && (
                    <button className="btn btn-outline btn-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                      </svg>
                      Code
                    </button>
                  )}
                  {project.demoUrl && (
                    <button className="btn btn-primary btn-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="text-center">
            <button 
              className="btn btn-outline btn-lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `View All Projects (${filteredProjects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
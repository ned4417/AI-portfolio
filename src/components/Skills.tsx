import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'AI/ML' | 'Frontend' | 'Backend' | 'Tools';
}

const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'AI/ML' },
  { name: 'TensorFlow', level: 90, category: 'AI/ML' },
  { name: 'PyTorch', level: 88, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 92, category: 'AI/ML' },
  { name: 'OpenAI API', level: 85, category: 'AI/ML' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 87, category: 'Backend' },
  { name: 'FastAPI', level: 90, category: 'Backend' },
  { name: 'PostgreSQL', level: 82, category: 'Backend' },
  { name: 'Docker', level: 85, category: 'Tools' },
  { name: 'AWS', level: 80, category: 'Tools' },
  { name: 'Git', level: 90, category: 'Tools' },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'AI/ML', 'Frontend', 'Backend', 'Tools'];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'progress-success';
    if (level >= 80) return 'progress-info';
    if (level >= 70) return 'progress-warning';
    return 'progress-error';
  };

  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Here are the technologies and tools I work with to bring AI solutions to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="card-title text-lg">{skill.name}</h3>
                  <span className="badge badge-outline">{skill.category}</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <progress 
                    className={`progress ${getProgressColor(skill.level)} w-full`} 
                    value={skill.level} 
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl justify-center mb-4">
                Always Learning
              </h3>
              <p className="text-lg opacity-80">
                The field of AI is constantly evolving, and so am I. I'm always exploring new 
                technologies, frameworks, and methodologies to stay at the cutting edge of innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="badge badge-primary badge-lg">Continuous Learning</span>
                <span className="badge badge-secondary badge-lg">Innovation</span>
                <span className="badge badge-accent badge-lg">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
  description: string;
  icon: React.ReactNode;
  delay?: number;
  isVisible: boolean;
}

const SkillCategory = ({
  title,
  skills,
  description,
  icon,
  delay = 0,
  isVisible
}: SkillCategoryProps) => {
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-1">{skill.icon}</div>
              <span className="text-sm text-gray-600 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-start gap-2">
          <div className="text-green-500 mt-1">✓</div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;


import React from "react";
import { Card } from "@/components/ui/card";

interface CoreSpecializationsProps {
  isVisible: boolean;
}

const CoreSpecializations = ({ isVisible }: CoreSpecializationsProps) => {
  return (
    <Card className={`mt-16 p-8 bg-white border border-gray-200 shadow-lg transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Core Specializations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3 text-blue-600">Machine Learning & AI</h4>
          <p className="text-gray-600 text-sm">Deep Learning, Computer Vision, Natural Language Processing, Neural Networks</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-blue-600">Data Science & Analytics</h4>
          <p className="text-gray-600 text-sm">Data Analysis, Statistical Modeling, Data Visualization, Predictive Analytics</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-blue-600">Software Development</h4>
          <p className="text-gray-600 text-sm">Full-stack Development, API Design, Database Management, Version Control</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-blue-600">Cloud & DevOps</h4>
          <p className="text-gray-600 text-sm">Cloud Computing, Containerization, CI/CD Pipelines, Infrastructure Management</p>
        </div>
      </div>
    </Card>
  );
};

export default CoreSpecializations;

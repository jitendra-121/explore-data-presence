
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "WiseChoice - E-commerce Analytics Platform",
      description: "Scalable analytics platform with Flask, React.js, and ML models (RoBERTa, Voting Classifier) for sentiment analysis and real-time price tracking across major platforms. Features distributed system with Celery, Redis, and secure APIs.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      tags: ["Flask", "React.js", "ML", "RoBERTa", "Selenium", "Redis", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "3D MRI Brain Tumor Segmentation", 
      description: "Advanced 3D brain tumor segmentation using BraTS 2020 dataset with multi-level architecture for detecting edema, enhancing tumor, and non-enhancing tumor areas. Achieved Dice Score of 0.85 with memory-efficient preprocessing.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "NumPy"],
      github: "#"
    },
    {
      title: "Hybrid Vision Transformer for Malaria Classification",
      description: "Innovative approach combining Vision Transformer with Kolmogorov-Arnold Neural Networks and Mixture of Experts framework for robust malaria parasite detection with custom training pipeline and soft attention gating.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      tags: ["Vision Transformer", "PyTorch", "Computer Vision", "MOE", "KAN"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI-Powered Financial Forecasting System",
      description: "Machine learning system for predicting stock market trends using LSTM networks and technical indicators. Implements portfolio optimization algorithms with risk assessment and backtesting capabilities.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      tags: ["LSTM", "Financial ML", "Portfolio Optimization", "Risk Analysis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Object Detection and Tracking",
      description: "High-performance computer vision system using YOLO and DeepSORT algorithms for multi-object tracking in video streams. Optimized for edge deployment with TensorRT acceleration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      tags: ["YOLO", "DeepSORT", "Computer Vision", "TensorRT", "Edge AI"],
      github: "#"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "Conversational AI system built with transformer models and fine-tuned on domain-specific data. Features context awareness, sentiment analysis, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      tags: ["Transformers", "NLP", "Chatbot", "BERT", "Multi-language"],
      github: "#",
      demo: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Showcasing my work in AI/ML, computer vision, and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              index={index}
            />
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-8 py-2 mb-4 mr-4"
            >
              {showAll ? "Show Less" : `View More Projects (${projects.length - 3} more)`}
            </Button>
            <Button 
              asChild
              className="px-8 py-2 mb-4"
            >
              <Link to="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            These are key projects demonstrating my AI/ML expertise. Visit my GitHub for more implementations.
          </p>
          <Link 
            to="/resume" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            View Detailed Projects
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

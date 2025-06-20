
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
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
    }
  ];

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
          {projects.map((project, index) => (
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
        
        <div className="text-center mt-12">
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

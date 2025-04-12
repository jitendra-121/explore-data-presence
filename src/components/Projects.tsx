
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Diabetic Retinopathy Classification",
      description: "Developed a deep learning model using ResNet50 and SVM to detect diabetic retinopathy severity with advanced image preprocessing techniques.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      tags: ["Deep Learning", "TensorFlow", "OpenCV", "Scikit-Learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "3D MRI Brain Tumor Segmentation",
      description: "Created a robust 3D brain tumor segmentation model using a custom U-Net architecture with multi-stage attention mechanisms, achieving a Dice Score of 0.85.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
      tags: ["Deep Learning", "TensorFlow", "Computer Vision", "Numpy"],
      github: "#"
    },
    {
      title: "Hybrid Vision Transformer for Malaria Classification",
      description: "Combined Vision Transformer with Klomogrovo-Arnold Neural Networks and Mixture of Experts framework for robust malaria cell classification.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      tags: ["Deep Learning", "PyTorch", "Computer Vision", "Transformers"],
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
            Showcasing my work in AI, machine learning, and computer vision
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
            These are just a few examples of my work. Visit my GitHub to see more projects.
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


import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Customer Analysis",
      description: "Developed machine learning models to predict customer behavior and churn rates, improving retention by 23%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Scikit-Learn", "Pandas", "Data Visualization"],
      github: "#",
      demo: "#"
    },
    {
      title: "Natural Language Processing for Sentiment Analysis",
      description: "Built an NLP model to analyze customer reviews and social media posts to gauge brand perception.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "TensorFlow", "BERT", "Python"],
      github: "#"
    },
    {
      title: "Time Series Forecasting Dashboard",
      description: "Created an interactive dashboard for forecasting sales and inventory needs using advanced time series models.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Time Series", "Tableau", "Prophet", "R"],
      github: "#",
      demo: "#"
    },
    {
      title: "Image Classification System",
      description: "Implemented a deep learning model for classifying product images to automate inventory management.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["Computer Vision", "PyTorch", "CNN", "Transfer Learning"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Showcasing my work in data science and machine learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
          <a 
            href="#" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            View All Projects
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

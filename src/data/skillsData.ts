
import { Code, Database, Cloud, Settings, Brain, Globe, Terminal, Cpu } from "lucide-react";

export const programmingLanguages = [{
  name: "Python",
  icon: <Code className="h-6 w-6 text-blue-500" />
}, {
  name: "Java", 
  icon: <Cpu className="h-6 w-6 text-orange-500" />
}, {
  name: "C Programming",
  icon: <Terminal className="h-6 w-6 text-gray-600" />
}];

export const aiMlTechnologies = [{
  name: "PyTorch",
  icon: <Brain className="h-6 w-6 text-red-500" />
}, {
  name: "TensorFlow",
  icon: <Brain className="h-6 w-6 text-orange-500" />
}, {
  name: "Keras",
  icon: <Settings className="h-6 w-6 text-red-600" />
}, {
  name: "Scikit-learn",
  icon: <Database className="h-6 w-6 text-blue-600" />
}, {
  name: "OpenCV",
  icon: <Globe className="h-6 w-6 text-green-600" />
}, {
  name: "NLTK",
  icon: <Code className="h-6 w-6 text-purple-500" />
}, {
  name: "SpaCy",
  icon: <Code className="h-6 w-6 text-blue-500" />
}, {
  name: "NumPy",
  icon: <Database className="h-6 w-6 text-blue-700" />
}, {
  name: "Pandas",
  icon: <Database className="h-6 w-6 text-green-500" />
}, {
  name: "Matplotlib",
  icon: <Settings className="h-6 w-6 text-orange-600" />
}];

export const webTechnologies = [{
  name: "HTML",
  icon: <Globe className="h-6 w-6 text-orange-500" />
}, {
  name: "CSS",
  icon: <Globe className="h-6 w-6 text-blue-500" />
}, {
  name: "JavaScript",
  icon: <Code className="h-6 w-6 text-yellow-500" />
}, {
  name: "FastAPI",
  icon: <Settings className="h-6 w-6 text-green-600" />
}, {
  name: "Flask",
  icon: <Code className="h-6 w-6 text-gray-600" />
}, {
  name: "MySQL",
  icon: <Database className="h-6 w-6 text-blue-600" />
}, {
  name: "Git",
  icon: <Code className="h-6 w-6 text-orange-600" />
}];

export const cloudDeployment = [{
  name: "Azure DevOps",
  icon: <Cloud className="h-6 w-6 text-blue-500" />
}, {
  name: "AWS Services",
  icon: <Cloud className="h-6 w-6 text-orange-500" />
}, {
  name: "Azure ML Studio",
  icon: <Brain className="h-6 w-6 text-blue-600" />
}, {
  name: "MLflow",
  icon: <Settings className="h-6 w-6 text-green-500" />
}, {
  name: "Docker",
  icon: <Database className="h-6 w-6 text-blue-700" />
}, {
  name: "Jenkins",
  icon: <Settings className="h-6 w-6 text-red-500" />
}, {
  name: "Kubernetes",
  icon: <Cloud className="h-6 w-6 text-blue-600" />
}];

export const developerTools = [{
  name: "VS Code",
  icon: <Code className="h-6 w-6 text-blue-500" />
}, {
  name: "Anaconda",
  icon: <Terminal className="h-6 w-6 text-green-500" />
}, {
  name: "Jupyter Notebook",
  icon: <Code className="h-6 w-6 text-orange-500" />
}, {
  name: "Eclipse",
  icon: <Code className="h-6 w-6 text-purple-600" />
}, {
  name: "MS Office",
  icon: <Settings className="h-6 w-6 text-blue-600" />
}, {
  name: "Tableau",
  icon: <Database className="h-6 w-6 text-orange-600" />
}];

export const specializations = [
  "PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, NLTK, SpaCy, NumPy, Pandas, Matplotlib",
  "Deep Learning (Neural Networks, Transformers, LLMs - Huggingface), Computer Vision, Natural Language Processing (NLP)",
  "HTML, CSS, Java Script, FastAPI, Microservices, MySQL, Oracle Database, Git, Bitbucket, Agile, SDLC",
  "Azure DevOps, AWS Services, Azure ML Studio, MLflow, CI/CD, Docker, Jenkins, Kubernetes",
  "VS Code, Anaconda, Jupyter Notebook, Eclipse, MS Office, Tableau"
];

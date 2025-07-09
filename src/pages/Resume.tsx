
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeDropzone from "@/components/ResumeDropzone";
import { ArrowLeft, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const [currentResumeUrl, setCurrentResumeUrl] = useState<string | null>(null);
  const [showDropzone, setShowDropzone] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load current resume on component mount
    loadCurrentResume();
  }, []);

  const loadCurrentResume = async () => {
    try {
      console.log('Loading current resume...');
      const { data, error } = await supabase
        .from('resumes')
        .select('file_path')
        .eq('is_current', true)
        .maybeSingle();

      console.log('Resume query result:', { data, error });

      if (data && !error) {
        const { data: urlData } = supabase.storage
          .from('resumes')
          .getPublicUrl(data.file_path);
        console.log('Setting current resume URL:', urlData.publicUrl);
        setCurrentResumeUrl(urlData.publicUrl);
      }
    } catch (error) {
      console.error('Error loading current resume:', error);
    }
  };

  const handleDownloadResume = () => {
    if (currentResumeUrl) {
      const link = document.createElement('a');
      link.href = currentResumeUrl;
      link.download = "Jitendra_Aluri_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback to original resume
      const resumeUrl = "/resume.pdf";
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = "Jitendra_Aluri_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleResumeUploaded = (resumeUrl: string) => {
    console.log('Resume uploaded successfully:', resumeUrl);
    setCurrentResumeUrl(resumeUrl);
    setShowDropzone(false);
    toast({
      title: "Resume updated!",
      description: "Your resume has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>
          <div className="flex gap-3">
            <Button 
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              onClick={() => setShowDropzone(!showDropzone)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Upload className="h-4 w-4 mr-2" />
              {showDropzone ? 'Hide Upload' : 'Update Resume'}
            </Button>
          </div>
        </div>

        {/* Drag and Drop Zone */}
        {showDropzone && (
          <div className="mb-8">
            <ResumeDropzone onResumeUploaded={handleResumeUploaded} />
          </div>
        )}
        
        {/* Resume Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">ALURI JITENDRA</h1>
            <p className="text-muted-foreground mt-2">Guntur-522017, Andhra Pradesh</p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="flex items-center">
                <span className="h-4 w-4 mr-1 text-primary">📞</span>
                <span>9391057056</span>
              </div>
              <div className="flex items-center">
                <span className="h-4 w-4 mr-1 text-primary">✉️</span>
                <a href="mailto:jitendraaluri10@gmail.com" className="hover:text-primary">jitendraaluri10@gmail.com</a>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Education</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="font-semibold">Vignan's Foundation For Science And Technology</h3>
                <p className="text-muted-foreground italic">B.Tech in Computer Science Engineering - Artificial Intelligence and Machine Learning</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p>Aug 2022 - April 2026</p>
                <p className="font-semibold">CGPA: 8.0</p>
              </div>
            </div>
          </section>
          
          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Programming Languages:</h3>
                <p>Python, Java, HTML, CSS, JavaScript</p>
              </div>
              <div>
                <h3 className="font-semibold">Core CS:</h3>
                <p>Data Structures and Algorithms, Computer Networks, DBMS, Operating Systems</p>
              </div>
              <div>
                <h3 className="font-semibold">Web Frameworks:</h3>
                <p>Flask, Streamlit</p>
              </div>
              <div>
                <h3 className="font-semibold">Developer Tools:</h3>
                <p>Git, GitHub, VS Code, AWS Services</p>
              </div>
              <div>
                <h3 className="font-semibold">Databases:</h3>
                <p>MySQL</p>
              </div>
              <div>
                <h3 className="font-semibold">Frameworks:</h3>
                <p>TensorFlow, PyTorch, OpenCV</p>
              </div>
              <div>
                <h3 className="font-semibold">AI:</h3>
                <p>Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Gen AI</p>
              </div>
            </div>
          </section>
          
          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-6">Projects</h2>
            
            {/* Project 1 */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold">Diabetic Retinopathy Classification using Machine Learning and Deep Learning</h3>
                <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                  <Badge variant="outline">Scikit-Learn</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">OpenCV</Badge>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a deep learning model using ResNet50 as a feature extractor and SVM for classification</li>
                <li>Implemented advanced image preprocessing techniques, including CLAHE, Gaussian filtering, and blood vessel enhancement, to improve model performance</li>
                <li>Extracted handcrafted features using HOG, LBP, GLCM, and Wavelet Transform for enhanced pattern recognition</li>
                <li>Achieved good classification accuracy, demonstrating robustness in detecting diabetic retinopathy severity</li>
              </ul>
            </div>
            
            {/* Project 2 */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold">3D MRI Brain Tumor Segmentation</h3>
                <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Numpy</Badge>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a robust 3D brain tumor segmentation model using the BraTS 2020 dataset, focusing on multi-class segmentation (edema, enhancing tumor, and non-enhancing tumor)</li>
                <li>Developed a custom U-Net architecture with an advanced attention mechanism at the encoder to improve feature learning and segmentation accuracy</li>
                <li>Integrated a multi-stage attention mechanism: Channel Attention → Spatial Attention → Gating Attention → Adaptive Attention, enhancing focus on tumor regions</li>
                <li>Implemented a custom data pipeline for efficient 3D MRI preprocessing, including intensity normalization, resizing, and augmentation</li>
                <li>Achieved high segmentation performance with a Dice Score of 0.85, demonstrating the effectiveness of the custom architecture</li>
              </ul>
            </div>
            
            {/* Project 3 */}
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold">Hybrid Vision Transformer with Klomogrovo-Arnold Neural Networks for Multiclass Malaria Classification</h3>
                <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Leveraged a Vision Transformer backbone to extract robust feature representations from malaria cell images</li>
                <li>Removed standard classification heads and integrated Klomogrovo-Arnold Neural Networks as custom classifiers</li>
                <li>Incorporated a Mixture of Experts (MOE) framework with soft attention gating to dynamically fuse expert outputs and enhance class discrimination</li>
                <li>Designed a customized training pipeline to optimize feature extraction and model convergence</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;

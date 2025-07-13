
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeDropzone from "@/components/ResumeDropzone";
import ResumeControls from "@/components/resume/ResumeControls";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeProjects from "@/components/resume/ResumeProjects";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const [currentResumeUrl, setCurrentResumeUrl] = useState<string | null>(null);
  const [showDropzone, setShowDropzone] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
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

  const handleToggleDropzone = () => {
    setShowDropzone(!showDropzone);
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
        <ResumeControls 
          onDownload={handleDownloadResume}
          onToggleDropzone={handleToggleDropzone}
          showDropzone={showDropzone}
        />

        {showDropzone && (
          <div className="mb-8">
            <ResumeDropzone onResumeUploaded={handleResumeUploaded} />
          </div>
        )}
        
        {/* Always show the resume content - either PDF or static content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 animate-fade-in">
          {currentResumeUrl ? (
            <div className="w-full">
              <iframe
                src={currentResumeUrl}
                className="w-full h-[800px] border-0 rounded-lg"
                title="Resume PDF"
              />
            </div>
          ) : (
            <>
              <ResumeHeader />
              <ResumeEducation />
              <ResumeSkills />
              <ResumeProjects />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;

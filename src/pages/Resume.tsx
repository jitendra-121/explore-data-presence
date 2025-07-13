import ResumeDropzone from "@/components/ResumeDropzone";
import ResumeControls from "@/components/resume/ResumeControls";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeProjects from "@/components/resume/ResumeProjects";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [currentResumeUrl, setCurrentResumeUrl] = useState<string | null>(null);
  const [showDropzone, setShowDropzone] = useState(false);
  const [showStaticContent, setShowStaticContent] = useState(true);
  const [pdfError, setPdfError] = useState(false);
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
        console.log('Full URL details:', urlData);
        
        setCurrentResumeUrl(urlData.publicUrl);
        setShowStaticContent(false);
        setPdfError(false);
      } else {
        console.log('No current resume found, showing static content');
        setShowStaticContent(true);
      }
    } catch (error) {
      console.error('Error loading current resume:', error);
      setShowStaticContent(true);
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
    setShowStaticContent(false);
    setPdfError(false);
    toast({
      title: "Resume updated!",
      description: "Your resume has been successfully updated.",
    });
  };

  const handleViewPdf = () => {
    if (currentResumeUrl) {
      window.open(currentResumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 md:px-6">
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
        
        {currentResumeUrl && !showStaticContent ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
            <iframe
              src={currentResumeUrl}
              className="w-full h-[800px] border-0"
              title="Resume PDF"
              onError={() => setPdfError(true)}
            />
            {pdfError && (
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Current Resume</h2>
                <p className="text-muted-foreground mb-6">
                  Your resume has been uploaded successfully. Click the button below to view it.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleViewPdf} className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Resume
                  </Button>
                  <Button onClick={handleDownloadResume} variant="outline">
                    Download PDF
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 animate-fade-in">
            <ResumeHeader />
            <ResumeEducation />
            <ResumeSkills />
            <ResumeProjects />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;

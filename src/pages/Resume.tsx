
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
import { ExternalLink, Download } from "lucide-react";
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

  const handlePdfError = () => {
    console.error('PDF failed to load');
    setPdfError(true);
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
        
        {currentResumeUrl && !showStaticContent ? (
          <div className="bg-white rounded-lg shadow-md p-4 mb-12 animate-fade-in">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Current Resume</h2>
              <div className="flex gap-2">
                <Button onClick={handleViewPdf} variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button onClick={handleDownloadResume} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
            
            {pdfError ? (
              <div className="text-center p-8 border border-dashed rounded-lg">
                <p className="text-lg mb-4 text-muted-foreground">
                  PDF preview is not available in this browser
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={handleViewPdf}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View in New Tab
                  </Button>
                  <Button onClick={handleDownloadResume} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-full border rounded-lg overflow-hidden" style={{ height: '800px' }}>
                <iframe
                  src={currentResumeUrl}
                  className="w-full h-full"
                  title="Current Resume"
                  onError={handlePdfError}
                  style={{ border: 'none' }}
                />
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

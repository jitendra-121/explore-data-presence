
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ResumeDropzoneProps {
  onResumeUploaded: (resumeUrl: string) => void;
}

const ResumeDropzone = ({ onResumeUploaded }: ResumeDropzoneProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    console.log('File dropped:', file.name, file.type, file.size);

    // Validate file type
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file only.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Generate unique filename
      const timestamp = Date.now();
      const fileName = `resume_${timestamp}.pdf`;
      const filePath = `public/${fileName}`;

      console.log('Uploading file to:', filePath);

      // Upload file to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      console.log('Upload successful:', uploadData);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      console.log('Public URL:', urlData.publicUrl);

      // Mark previous resumes as not current
      await supabase
        .from('resumes')
        .update({ is_current: false })
        .neq('file_path', filePath);

      // Save resume metadata to database
      const { error: dbError } = await supabase
        .from('resumes')
        .insert({
          filename: file.name,
          file_path: filePath,
          file_size: file.size,
          is_current: true
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      console.log('Resume metadata saved to database');

      onResumeUploaded(urlData.publicUrl);
      
      toast({
        title: "Resume updated successfully!",
        description: "Your new resume has been uploaded and is now current.",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "There was an error uploading your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  }, [onResumeUploaded, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false,
    disabled: isUploading
  });

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}
        ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center gap-4">
        {isUploading ? (
          <div className="animate-spin">
            <Upload className="h-12 w-12 text-primary" />
          </div>
        ) : isDragActive ? (
          <CheckCircle className="h-12 w-12 text-primary" />
        ) : (
          <FileText className="h-12 w-12 text-muted-foreground" />
        )}
        
        <div>
          <p className="text-lg font-semibold mb-2">
            {isUploading ? 'Uploading...' : isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
          </p>
          <p className="text-muted-foreground">
            {isUploading ? 'Please wait while we upload your resume' : 'Or click to browse for a PDF file (max 10MB)'}
          </p>
        </div>
        
        {!isUploading && (
          <Button variant="outline" className="mt-2">
            Browse Files
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResumeDropzone;

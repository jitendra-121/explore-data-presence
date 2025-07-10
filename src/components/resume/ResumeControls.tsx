
import React from 'react';
import { ArrowLeft, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ResumeControlsProps {
  onDownload: () => void;
  onToggleDropzone: () => void;
  showDropzone: boolean;
}

const ResumeControls = ({ onDownload, onToggleDropzone, showDropzone }: ResumeControlsProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Portfolio
      </Link>
      <div className="flex gap-3">
        <Button 
          onClick={onDownload}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
        <Button 
          onClick={onToggleDropzone}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Upload className="h-4 w-4 mr-2" />
          {showDropzone ? 'Hide Upload' : 'Update Resume'}
        </Button>
      </div>
    </div>
  );
};

export default ResumeControls;

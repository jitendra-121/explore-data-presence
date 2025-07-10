
import React from 'react';

const ResumeHeader = () => {
  return (
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
  );
};

export default ResumeHeader;

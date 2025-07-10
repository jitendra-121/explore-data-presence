
import React from 'react';

const ResumeEducation = () => {
  return (
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
  );
};

export default ResumeEducation;

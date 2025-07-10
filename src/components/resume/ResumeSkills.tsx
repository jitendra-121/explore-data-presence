
import React from 'react';

const ResumeSkills = () => {
  return (
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
  );
};

export default ResumeSkills;

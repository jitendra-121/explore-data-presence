
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ResumeProjects = () => {
  return (
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
  );
};

export default ResumeProjects;

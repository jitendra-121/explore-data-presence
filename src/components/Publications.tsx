import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Publications = () => {
  const [showAll, setShowAll] = useState(false);

  const publications = [
    {
      title: "Design and Optimization of a Custom CNN for Tiny Image Classification",
      journal: "Research Publication", 
      year: "2024",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "This research focuses on developing and optimizing custom Convolutional Neural Network architectures specifically designed for tiny image classification tasks, addressing computational efficiency and accuracy trade-offs.",
      link: "#",
      tags: ["CNN", "Deep Learning", "Image Classification", "Optimization"],
      status: "Published"
    },
    {
      title: "Guided Convolutional Variational Autoencoder for Learning Latent Representations in Low-Resolution Image Classification",
      journal: "Academic Journal",
      year: "2024", 
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "Novel approach using guided convolutional variational autoencoders to learn effective latent representations for improved classification performance on low-resolution images.",
      link: "#",
      tags: ["VAE", "Deep Learning", "Latent Representations", "Computer Vision"],
      status: "Under Review"
    },
    {
      title: "Malaria Parasite Classification using a Mixture of Experts and Kolmogorov-Arnold Networks for Improved Diagnostic Accuracy",
      journal: "Medical AI Journal",
      year: "2024",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "Advanced machine learning approach combining Mixture of Experts framework with Kolmogorov-Arnold Networks for enhanced malaria parasite detection and classification accuracy.",
      link: "#",
      tags: ["Medical AI", "MOE", "KAN", "Diagnostic Systems"],
      status: "Upcoming Publication"
    },
    {
      title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      authors: ["Jitendra Chowdary Aluri", "Co-Author Name"],
      abstract: "Comprehensive study on implementing federated learning frameworks for medical image analysis while maintaining patient privacy and data security across distributed healthcare networks.",
      link: "#",
      tags: ["Federated Learning", "Medical Imaging", "Privacy", "Healthcare AI"],
      status: "Under Review"
    },
    {
      title: "Transformer-based Attention Mechanisms for Multi-Modal Medical Diagnosis",
      journal: "Nature Machine Intelligence",
      year: "2023",
      authors: ["Jitendra Chowdary Aluri"],
      abstract: "Novel transformer architecture incorporating multi-modal attention mechanisms for improved diagnostic accuracy across various medical imaging modalities including X-ray, CT, and MRI scans.",
      link: "#",
      tags: ["Transformers", "Multi-Modal", "Medical Diagnosis", "Attention Mechanisms"],
      status: "Published"
    }
  ];

  const displayedPublications = showAll ? publications : publications.slice(0, 3);
  
  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My contributions to research in AI, machine learning, and computer vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedPublications.map((pub, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-xl flex-1">{pub.title}</CardTitle>
                  <Badge variant={pub.status === "Published" ? "default" : pub.status === "Under Review" ? "secondary" : "outline"} className="text-xs">
                    {pub.status}
                  </Badge>
                </div>
                <CardDescription>
                  <p className="font-medium text-primary">{pub.journal}, {pub.year}</p>
                  <p className="text-sm mt-1">{pub.authors.join(", ")}</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {pub.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "ml-auto"
                  )}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  {pub.status === "Published" ? "Read Paper" : "Preview"}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {publications.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="px-8 py-2 mb-4 mr-4"
            >
              {showAll ? "Show Less" : `View More Publications (${publications.length - 3} more)`}
            </Button>
            <Button 
              asChild
              className="px-8 py-2 mb-4"
            >
              <Link to="/publications" target="_blank" rel="noopener noreferrer">
                View All Publications
              </Link>
            </Button>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-muted-foreground">
            Focused on advancing AI/ML research with practical applications in computer vision and medical diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;

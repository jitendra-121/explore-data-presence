
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches to Diabetic Retinopathy Classification",
      journal: "Journal of Medical Imaging",
      year: "2023",
      authors: ["Jitendra Aluri", "Sarah Chen", "Robert Johnson"],
      abstract: "This paper presents a novel deep learning approach for automatic classification of diabetic retinopathy severity using ensemble methods and advanced preprocessing techniques.",
      link: "#",
      tags: ["Deep Learning", "Medical Imaging", "Classification"]
    },
    {
      title: "Attention-based Segmentation of Brain Tumors in 3D MRI",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2022",
      authors: ["Mark Davis", "Jitendra Aluri", "Emma Wilson"],
      abstract: "We propose a novel 3D CNN architecture incorporating multi-stage attention mechanisms for accurate brain tumor segmentation from volumetric MRI scans.",
      link: "#",
      tags: ["3D CNN", "Medical Imaging", "Attention Mechanisms"]
    },
    {
      title: "Hybrid Vision Transformer for Malaria Parasite Detection",
      journal: "Nature Scientific Reports",
      year: "2022", 
      authors: ["Jitendra Aluri", "Lisa Wang", "Michael Taylor"],
      abstract: "This research introduces a hybrid approach combining Vision Transformers with Klomogrovo-Arnold Networks for robust detection of malaria parasites in microscopic blood smear images.",
      link: "#",
      tags: ["Vision Transformer", "Medical Imaging", "Parasite Detection"]
    }
  ];
  
  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My contributions to academic research in AI and medical imaging
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
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
                  Read Paper
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            For a complete list of publications, please view my academic profile or CV.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;

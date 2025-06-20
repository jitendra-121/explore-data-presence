
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Learning Analytical Tools",
      issuer: "IIT Bombay",
      date: "2024",
      skills: ["Data Analysis", "Statistical Methods", "Research Methodology"],
      credentialUrl: "#"
    },
    {
      title: "Generative AI and Large Language Models",
      issuer: "IIMB Bangalore",
      date: "2024",
      skills: ["Generative AI", "LLMs", "AI Applications"],
      credentialUrl: "#"
    },
    {
      title: "Microsoft Certified Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      skills: ["Cloud Computing", "Azure Services", "Cloud Architecture"],
      credentialUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Professional certifications that validate my expertise in AI, data analytics, and cloud technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <a 
                    href={cert.credentialUrl} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

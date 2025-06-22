
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Target, User, Zap, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  index: number;
  problem?: string;
  role?: string;
  challenges?: string;
  impact?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  index,
  problem,
  role,
  challenges,
  impact
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition-all animate-slide-up" style={{
      animationDelay: `${index * 0.1}s`
    }}>
      <div className="h-48 w-full bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        
        {problem && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-red-500" />
              <h4 className="font-semibold text-sm">Problem</h4>
            </div>
            <p className="text-xs text-gray-600 pl-6">{problem}</p>
          </div>
        )}
        
        {role && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-500" />
              <h4 className="font-semibold text-sm">My Role</h4>
            </div>
            <p className="text-xs text-gray-600 pl-6">{role}</p>
          </div>
        )}
        
        {challenges && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-500" />
              <h4 className="font-semibold text-sm">Challenges & Solutions</h4>
            </div>
            <p className="text-xs text-gray-600 pl-6">{challenges}</p>
          </div>
        )}
        
        {impact && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <h4 className="font-semibold text-sm">Impact/Outcome</h4>
            </div>
            <p className="text-xs text-gray-600 pl-6">{impact}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {github && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
        {demo && (
          <Button size="sm" asChild className="flex-1">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

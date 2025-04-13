import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  index: number;
}
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  index
}: ProjectCardProps) => {
  return <Card className="overflow-hidden border border-border hover:shadow-lg transition-all animate-slide-up" style={{
    animationDelay: `${index * 0.1}s`
  }}>
      <div className="h-48 w-full bg-muted overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, idx) => <Badge key={idx} variant="secondary">{tag}</Badge>)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {github && <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>}
        {demo && <Button size="sm" asChild>
            
          </Button>}
      </CardFooter>
    </Card>;
};
export default ProjectCard;
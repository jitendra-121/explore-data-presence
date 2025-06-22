
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("testimonials");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const testimonials = [
    {
      quote: "Testimonial quote will be provided by user",
      name: "Name of Person",
      title: "Title/Position",
      company: "Company/Organization"
    },
    {
      quote: "Another testimonial quote will be provided by user",
      name: "Name of Person",
      title: "Title/Position", 
      company: "Company/Organization"
    },
    {
      quote: "Third testimonial quote will be provided by user",
      name: "Name of Person",
      title: "Title/Position",
      company: "Company/Organization"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What colleagues and collaborators say about working with me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-6 bg-white border border-border hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-gray-600 italic leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

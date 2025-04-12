import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 1000);
  };
  return <section id="contact" className="section-padding bg-gradient-to-b from-background to-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary">jitendraaluri10@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">www.linkedin.com/in/jitendra-aluri-677236304</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/alexchen</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground">
                Currently available for internships and freelance work. Feel free to reach out if you have any interesting projects or opportunities.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message here..." rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
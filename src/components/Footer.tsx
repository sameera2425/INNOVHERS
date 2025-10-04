import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail, Twitter, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-20 px-4 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
      
      <div className="container mx-auto relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Us in Building a
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Safer Digital World</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with the latest security insights and product updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-1 max-w-md">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pl-12 h-12 bg-card/30 backdrop-blur-sm border-border focus:border-primary/40"
              />
            </div>
            <Button 
              variant="glassmorphic" 
              size="lg"
              className="sm:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">Privora</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Empowering digital safety through cutting-edge cybersecurity solutions. 
              Protecting users, organizations, and communities worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Privora. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/40 flex items-center justify-center transition-all">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/40 flex items-center justify-center transition-all">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/40 flex items-center justify-center transition-all">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

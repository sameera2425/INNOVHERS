import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import heroCybersecurity from "@/assets/hero-cybersecurity.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-in-left">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Simplifying Safety,
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Empowering Trust
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl">
            Revolutionizing cybersecurity with AI-powered protection. From RAT detection to intelligent threat analysis, 
            we're building a safer digital world for everyone.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              variant="glassmorphic" 
              size="lg"
              className="font-semibold"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-muted-foreground/20 hover:border-primary/40"
            >
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">Protected Users</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-secondary">99.9%</div>
              <div className="text-sm text-muted-foreground">Threat Detection</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <img 
            src={heroCybersecurity} 
            alt="Cybersecurity Data Protection" 
            className="relative w-full max-w-lg rounded-2xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

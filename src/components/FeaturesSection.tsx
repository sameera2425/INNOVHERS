import { FeatureCard } from "./FeatureCard";
import { Shield, Bug, MessageSquare, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Login",
    description: "Multi-factor biometric authentication ensuring your account stays protected with enterprise-grade security protocols.",
    link: "/secure-login"
  },
  {
    icon: Bug,
    title: "RAT Detection",
    description: "Advanced protection from Remote Access Trojans with real-time monitoring and intelligent threat identification.",
    link: "#"
  },
  {
    icon: MessageSquare,
    title: "Tone Analysis and AI Report Generator",
    description: "AI-powered sentiment detection and report generation.",
    link: "/tone-analysis"
  },
  {
    icon: Users,
    title: "Empower Citizens",
    description: "Educational tools and resources providing guidance to help everyone stay safe in the digital landscape.",
    link: "#"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Security
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge features designed to protect, detect, and empower in the digital age
          </p>
        </div>

        {/* Horizontally scrollable feature cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="snap-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
          
          {/* Gradient fade on edges */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

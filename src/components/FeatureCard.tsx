import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, link = "#" }: FeatureCardProps) => {
  const ButtonContent = (
    <Button 
      variant="glassmorphic" 
      size="sm"
      className="w-full"
    >
      Explore in Detail
    </Button>
  );

  return (
    <div className="group flex-shrink-0 w-[320px] md:w-[380px] p-8 rounded-2xl bg-card/30 backdrop-blur-lg border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      {link.startsWith('/') ? (
        <Link to={link}>
          {ButtonContent}
        </Link>
      ) : (
        ButtonContent
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import { Shield, Building2, TrendingUp } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  suffix = "" 
}: { 
  icon: any; 
  value: number; 
  label: string; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="group relative p-8 rounded-2xl bg-card/20 backdrop-blur-lg border border-border hover:border-primary/40 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        
        <div className="text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  );
};

export const ImpactSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Impact We
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results in the fight against cyber threats and digital harassment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard 
            icon={Shield}
            value={1247000}
            label="Cybercrimes Reported Annually"
            suffix="+"
          />
          <StatCard 
            icon={Building2}
            value={250}
            label="Partner Organizations"
            suffix="+"
          />
          <StatCard 
            icon={TrendingUp}
            value={92}
            label="Users Feeling Safer"
            suffix="%"
          />
        </div>
      </div>
    </section>
  );
};

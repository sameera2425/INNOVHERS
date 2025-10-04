import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users } from "lucide-react";

export default function EmpowerCitizens() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            The Digital Self-Defense Dojo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gamified cybersecurity training platform that transforms traditional security concepts into engaging, interactive experiences
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Modules Completed</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">127</div>
              <div className="text-sm text-muted-foreground">Threats Identified</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1,542</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
          </div>

          {/* Video demo - centered */}
          <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-lg border border-border shadow-lg mb-16">
            <div className="aspect-video bg-muted/20 rounded-xl overflow-hidden border border-border/50">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/Recording 2025-10-04 142720.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gamified Training */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
            <h2 className="text-3xl font-bold mb-6">Why Gamified Training?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Traditional cybersecurity training is often dry, forgettable, and disengaging. Our gamified 
                approach transforms complex security concepts into interactive experiences that stick with you.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Studies show <span className="text-primary">90% improvement</span> in retention and engagement 
                compared to traditional training methods.
              </p>
              <p>
                By using martial arts terminology and structured progression, we make security awareness 
                training actually relevant and memorable, preparing you for real-world digital threats.
              </p>
            </div>
          </div>

          {/* How It Works - Overall */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">How The Dojo Works</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Digital Self-Defense Dojo operates by <strong className="text-foreground">simulating 
                real-world cyber threats</strong> in a safe, controlled environment. Each module presents 
                authentic scenarios you might encounter in your digital life, forcing you to make critical 
                decisions under realistic conditions.
              </p>
              <p>
                As you progress through each level, you receive <strong className="text-foreground">immediate, 
                corrective feedback</strong> that reinforces learning and helps you understand not just what 
                the right answer is, but <em>why</em> it's right. This builds practical digital defense skills 
                that transfer directly to real-world situations.
              </p>
              <p>
                The platform uses <strong className="text-foreground">martial arts-themed progression</strong> 
                (Kata, Jujitsu, Stance, Dojo) to structure your learning journey, making it memorable and 
                engaging. Complete each "Kata" to unlock the next level, with challenges progressively 
                increasing in difficulty as your skills develop.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
            <h2 className="text-3xl font-bold mb-8">Why Choose The Digital Self-Defense Dojo?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Interactive & Engaging</h3>
                  <p className="text-muted-foreground">
                    Transform boring security training into an exciting learning experience with gamified 
                    challenges, immediate feedback, and progressive difficulty levels that keep you engaged.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Real-World Scenarios</h3>
                  <p className="text-muted-foreground">
                    Practice with authentic phishing emails, social engineering calls, and security incidents 
                    based on actual cyber threats, ensuring your training translates to real protection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Track Your Progress</h3>
                  <p className="text-muted-foreground">
                    Monitor your growth with detailed metrics showing modules completed, threats identified, 
                    and skill improvements, providing clear motivation and measurable results.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Self-Paced Learning</h3>
                  <p className="text-muted-foreground">
                    Complete modules at your own pace, from 10 to 25 minutes each, fitting cybersecurity 
                    education into your busy schedule without pressure or time constraints.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-muted-foreground">
                    From phishing detection to password security, from social engineering to incident response, 
                    master all essential cybersecurity skills needed to protect yourself in the digital age.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

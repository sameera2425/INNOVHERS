import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageSquare } from "lucide-react";

export default function ToneAnalysis() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Tone Analysis <br>and</br>AI Report Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered sentiment detection to keep your digital interactions safe and respectful
          </p>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Video demo - centered */}
          <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-lg border border-border shadow-lg mb-16">
            <div className="aspect-video bg-muted/20 rounded-xl overflow-hidden border border-border/50">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/ai armkr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Detailed Explanation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">How it Works</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Tone Analysis uses state-of-the-art natural language processing and machine learning 
                algorithms to evaluate the sentiment and emotional tone of written communications. 
                The system processes text in real-time, analyzing linguistic patterns, word choices, 
                and contextual cues to detect potentially harmful content.
              </p>
              <p>
                When aggressive, threatening, or abusive language is detected, the system immediately 
                flags the content and provides you with alerts. This allows you to take appropriate 
                action before situations escalate, whether that's blocking a user, reporting harassment, 
                or documenting evidence for authorities.
              </p>
              <p>
                The AI continuously learns and improves its detection capabilities, adapting to new 
                forms of online abuse and maintaining high accuracy across different communication 
                styles and platforms. It works seamlessly across social media, messaging apps, email, 
                and any other text-based digital communication.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
            <h2 className="text-3xl font-bold mb-8">Why Use This Feature?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Protection</h3>
                  <p className="text-muted-foreground">
                    Instant detection of harmful content as it happens, giving you immediate awareness 
                    and the ability to respond quickly to potential threats.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Evidence Collection</h3>
                  <p className="text-muted-foreground">
                    Automatically logs and timestamps flagged content, creating a comprehensive record 
                    that can be used for reporting to authorities or platform administrators.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Mental Health Support</h3>
                  <p className="text-muted-foreground">
                    Reduces exposure to harmful content and provides insights into communication 
                    patterns, helping you maintain healthier digital interactions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Cross-Platform Coverage</h3>
                  <p className="text-muted-foreground">
                    Works across all your digital communications, from social media to email, 
                    providing comprehensive protection wherever you interact online.
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

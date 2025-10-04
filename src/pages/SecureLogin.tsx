import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

export default function SecureLogin() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Secure Login
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multi-factor biometric authentication ensuring your account stays protected with enterprise-grade security
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
                <source src="/demovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Detailed Explanation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">How it Works</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Secure Login implements cutting-edge multi-factor authentication combining biometric 
                verification with traditional security measures. The system uses advanced encryption 
                protocols and secure token generation to ensure that only you can access your account, 
                even if your password is compromised.
              </p>
              <p>
                Our biometric authentication supports fingerprint recognition, facial recognition, 
                and voice authentication, providing multiple layers of security without sacrificing 
                convenience. Each login attempt is verified through multiple channels, with suspicious 
                activity triggering additional verification steps or instant alerts to your registered devices.
              </p>
              <p>
                The platform employs bank-level encryption (AES-256) and secure key management, 
                ensuring your biometric data never leaves your device and is never stored on our servers. 
                All authentication tokens are time-limited and single-use, preventing replay attacks 
                and unauthorized access attempts.
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
                  <h3 className="font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-muted-foreground">
                    Military-grade encryption and security protocols that meet the highest industry 
                    standards, protecting your account from sophisticated cyber threats and unauthorized access.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Biometric Convenience</h3>
                  <p className="text-muted-foreground">
                    Skip the hassle of remembering complex passwords. Use your fingerprint, face, 
                    or voice for quick and secure authentication that's unique to you.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Threat Detection</h3>
                  <p className="text-muted-foreground">
                    Advanced AI monitors all login attempts, detecting and blocking suspicious activity 
                    in real-time. Receive instant alerts if someone tries to access your account.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy-First Design</h3>
                  <p className="text-muted-foreground">
                    Your biometric data stays on your device and is never uploaded to the cloud. 
                    We use zero-knowledge architecture to ensure complete privacy and data protection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Multi-Device Support</h3>
                  <p className="text-muted-foreground">
                    Seamlessly authenticate across all your devices with synchronized security settings 
                    and consistent protection wherever you log in.
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

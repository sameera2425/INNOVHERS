import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bug, Shield, Search, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function RATDetection() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            RAT Detection & Protection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced protection from Remote Access Trojans with real-time monitoring and intelligent threat identification
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* What is RAT */}
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20">
            <div className="flex items-start gap-4 mb-4">
              <Bug className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold mb-4">What is a Remote Access Trojan (RAT)?</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Remote Access Trojan (RAT) is a type of malicious software that provides unauthorized 
                    remote access to a victim's computer. Once installed, attackers can monitor your activities, 
                    steal sensitive data, access your camera and microphone, log keystrokes, and even take complete 
                    control of your system.
                  </p>
                  <p>
                    RATs are often disguised as legitimate software or files and can be delivered through phishing 
                    emails, malicious downloads, or compromised websites. They operate silently in the background, 
                    making them particularly dangerous and difficult to detect without specialized security tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prevention Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Prevention: Stay Protected</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Keep Software Updated</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Regularly update your operating system, antivirus software, web browsers, and all applications. 
                      Security patches often fix vulnerabilities that RATs exploit. Enable automatic updates whenever 
                      possible to ensure you're always protected against the latest threats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Be Cautious with Downloads</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Only download software from official sources and verified websites. Avoid downloading files 
                      from unknown email attachments, suspicious links, or torrent sites. Always scan downloaded 
                      files with antivirus software before opening them, even if they appear to come from trusted sources.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Use Strong Security Software</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Install reputable antivirus and anti-malware software with real-time protection. Enable 
                      firewall protection on your router and computer. Consider using additional security layers 
                      like intrusion detection systems (IDS) and endpoint protection platforms for comprehensive defense.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Practice Safe Browsing Habits</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Avoid clicking on suspicious links or pop-up advertisements. Be wary of websites offering 
                      free downloads of paid software. Use browser extensions that block malicious websites and 
                      scripts. Never provide personal information on unsecured websites (look for HTTPS in the URL).
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Secure Your Network</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use strong, unique passwords for your Wi-Fi network and enable WPA3 encryption. Change 
                      default router credentials immediately. Avoid using public Wi-Fi for sensitive transactions, 
                      or use a VPN to encrypt your connection when on public networks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Enable Multi-Factor Authentication</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Activate multi-factor authentication (MFA) on all accounts that support it. This adds an 
                      extra layer of security, making it harder for attackers to gain access even if they obtain 
                      your password through keylogging malware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detection Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Search className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Detection: Identify the Threat</h2>
            </div>

            <div className="mb-8 p-6 rounded-xl bg-secondary/5 border border-secondary/20">
              <p className="text-muted-foreground leading-relaxed">
                Early detection of RATs is crucial to minimize damage. Our advanced detection system uses 
                machine learning algorithms to identify suspicious behavior patterns and known RAT signatures 
                in real-time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Warning Signs of RAT Infection</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Unexplained system slowdowns or frequent crashes without apparent cause</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Mouse cursor moving on its own or programs opening without your interaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Camera or microphone indicator lights turning on unexpectedly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Unusual network activity or high data usage when your computer is idle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Unknown programs running in Task Manager or Activity Monitor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Antivirus software being disabled or unable to update</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Changed system settings, passwords, or account permissions you didn't modify</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Files being deleted, moved, or modified without your knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Our RAT detection system continuously monitors your system for suspicious activities:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>Process behavior analysis to detect unauthorized remote access attempts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>Network traffic monitoring for unusual outbound connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>File integrity checking to detect unauthorized modifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>Registry and system configuration monitoring for suspicious changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>Behavioral heuristics to identify zero-day RAT variants</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Signature-Based Detection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our system maintains an up-to-date database of known RAT signatures and malware patterns. 
                      This includes fingerprints of popular RATs like DarkComet, NanoCore, njRAT, and Poison Ivy. 
                      Regular updates ensure protection against the latest threats as they emerge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Response Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-3xl font-bold">How to Respond: Immediate Actions</h2>
            </div>

            <div className="mb-8 p-6 rounded-xl bg-destructive/5 border border-destructive/20">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">If you suspect a RAT infection, act immediately.</strong> Quick 
                response can prevent data theft, minimize damage, and protect your personal information.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Disconnect from the Internet</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Immediately disconnect your device from the internet by disabling Wi-Fi or unplugging the 
                      ethernet cable. This severs the attacker's connection and prevents further data exfiltration 
                      or system commands from being executed. Do not reconnect until the threat is fully removed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Enter Safe Mode</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Restart your computer in Safe Mode to prevent the RAT from loading automatically. Safe Mode 
                      runs only essential system processes, making it easier to remove malware. On Windows, press 
                      F8 during startup; on Mac, hold Shift during boot. This limits the malware's ability to hide 
                      or defend itself.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Run Anti-Malware Scans</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use multiple reputable anti-malware tools to scan your system thoroughly. Run a full system 
                      scan with your primary antivirus, then use specialized malware removal tools like Malwarebytes 
                      or HitmanPro for a second opinion. Remove all detected threats and infected files. Consider 
                      using bootable rescue disks for stubborn infections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Change All Passwords</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      After removing the malware, change passwords for all your accounts from a clean, uninfected 
                      device. Start with critical accounts like email, banking, and social media. Use strong, unique 
                      passwords for each account. Enable multi-factor authentication wherever possible for added 
                      security. Assume any passwords used on the infected device may have been compromised.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Monitor for Suspicious Activity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Check your bank accounts, credit cards, and online accounts for unauthorized transactions 
                      or changes. Review account login histories for unfamiliar access. Set up fraud alerts with 
                      your financial institutions. Monitor your credit report for suspicious activity. Keep detailed 
                      records of any unusual findings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Report the Incident</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Report the RAT infection to relevant authorities such as local law enforcement, the FBI's 
                      Internet Crime Complaint Center (IC3), or your country's cybercrime unit. If the infection 
                      occurred at work, notify your IT security team immediately. Document everything for potential 
                      legal action. Reporting helps track and combat cybercrime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-destructive font-bold">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Consider a Clean Reinstall</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For severe infections, the safest option is to back up important files (after scanning them 
                      for malware), then perform a complete system wipe and clean OS reinstallation. This ensures 
                      all traces of the RAT are removed, including any persistent backdoors or rootkits. While 
                      time-consuming, it provides the highest level of certainty that your system is clean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our RAT Protection?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Advanced AI Detection</h3>
                  <p className="text-muted-foreground">
                    Machine learning algorithms that adapt to new threats and detect even zero-day RAT variants 
                    by analyzing behavioral patterns and system anomalies.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Real-Time Protection</h3>
                  <p className="text-muted-foreground">
                    Continuous monitoring that never sleeps, providing instant alerts and automatic threat 
                    neutralization to keep your system secure around the clock.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Comprehensive System Coverage</h3>
                  <p className="text-muted-foreground">
                    Protects all entry points including network traffic, file systems, registry, processes, 
                    and browser activities for complete defense against RAT infiltration.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Minimal System Impact</h3>
                  <p className="text-muted-foreground">
                    Lightweight protection that runs efficiently in the background without slowing down your 
                    computer or interfering with your daily activities.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Support & Guidance</h3>
                  <p className="text-muted-foreground">
                    Access to cybersecurity professionals who can assist with incident response, system cleanup, 
                    and ongoing security recommendations tailored to your needs.
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

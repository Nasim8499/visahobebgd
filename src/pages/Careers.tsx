import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase, ArrowRight, Users, Globe, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import globalNetwork from "@/assets/global-network.jpg";

const jobListings = [
  {
    title: "Senior Visa Consultant",
    location: "Singapore",
    type: "Full-time",
    department: "Visa & Immigration",
    desc: "Handle complex multi-country visa applications, prepare embassy-ready documentation, and guide clients through the entire visa process.",
    requirements: ["5+ years visa processing experience", "Knowledge of Singapore, Australia, EU regulations", "Fluent in English and Bengali"],
  },
  {
    title: "Recruitment Coordinator",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Manpower Recruitment",
    desc: "Coordinate employer requirements with worker screening, manage deployment schedules, and ensure compliance with destination country labor laws.",
    requirements: ["3+ years in international recruitment", "Strong employer coordination skills", "Experience with Gulf & APAC markets"],
  },
  {
    title: "Client Relations Manager",
    location: "Singapore / Remote",
    type: "Full-time",
    department: "Business Development",
    desc: "Build and maintain client relationships, identify new business opportunities, and expand our corporate partnership network across Asia-Pacific.",
    requirements: ["4+ years B2B relationship management", "Immigration industry knowledge preferred", "Excellent communication skills"],
  },
  {
    title: "Documentation Specialist",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Operations",
    desc: "Prepare and verify all travel and employment documents, ensure accuracy for embassy submissions, and maintain compliance records.",
    requirements: ["2+ years document processing", "Attention to detail", "Knowledge of embassy requirements"],
  },
];

const Careers = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img src={globalNetwork} alt="Careers at VisaHOBe" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))]/70 via-[hsl(var(--primary))]/30 to-background/95" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded-full mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Join Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-2xl text-sm md:text-base">
            Build your career with a leading global mobility company. We're looking for passionate professionals.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Why VisaHOBe</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Why Work With Us?</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Globe, title: "Global Impact", desc: "Help workers and families achieve their dreams of working abroad across 180+ countries." },
              { icon: Users, title: "Collaborative Culture", desc: "Work alongside experienced immigration professionals in a supportive, growth-oriented environment." },
              { icon: Zap, title: "Career Growth", desc: "Access training programs, mentorship, and clear advancement paths in a fast-growing company." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-3xl p-6 sm:p-7 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Open Positions</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Current Openings</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {jobListings.map((job, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-card rounded-2xl p-5 sm:p-7 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold bg-primary/10 text-primary rounded-full">{job.department}</span>
                        <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                          <MapPin size={10} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground">
                          <Clock size={10} /> {job.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">{job.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.requirements.map((req, j) => (
                          <span key={j} className="px-2.5 py-1 text-[10px] sm:text-xs bg-muted text-muted-foreground rounded-lg">{req}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
                      >
                        Apply Now <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,79%,50%,0.3),transparent_50%)]" />
        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            We're always looking for talented people. Send us your CV and we'll reach out when the right opportunity comes up.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all">
              Send Your CV <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Users, Shield, ArrowRight, Briefcase, Plane, Building2, ChevronRight, CheckCircle, Calendar, GraduationCap } from "lucide-react";
import { useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import FloatingCTA from "@/components/FloatingCTA";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import PartnersMarquee from "@/components/PartnersMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import aboutTeam from "@/assets/about-team.jpg";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const services = [
  {
    icon: Briefcase, title: "Manpower Recruitment",
    desc: "Placement of skilled and semi-skilled workers with overseas employer coordination.",
    image: servicesManpower,
  },
  {
    icon: Plane, title: "Visa & Travel Services",
    desc: 'Embassy-ready documentation and processing assistance for all visa types.',
    image: servicesVisa,
  },
  {
    icon: Building2, title: "Program Management",
    desc: "End-to-end program management for multi-country immigration needs.",
    image: aboutTeam,
  },
  {
    icon: GraduationCap, title: "Training & Compliance",
    desc: "Pre-departure orientation, skill training, and regulatory compliance support.",
    image: globalNetwork,
  },
];

const newsAlerts = [
  { date: "Apr 10, 2026", tag: "Singapore", title: "Singapore Updates Work Permit Quotas for Q3 2026" },
  { date: "Apr 5, 2026", tag: "Australia", title: "Australia Extends Temporary Visa Concessions for Skilled Workers" },
  { date: "Mar 28, 2026", tag: "Europe", title: "Serbia Updates English Language Test Requirements" },
  { date: "Mar 20, 2026", tag: "Russia", title: "Russia Introduces New Employee Registration Requirements" },
  { date: "Mar 15, 2026", tag: "Cambodia", title: "Cambodia Streamlines Work Visa Procedures" },
  { date: "Mar 10, 2026", tag: "Europe", title: "EU Final Approval of Talent Platform for Third-Country Workers" },
];

const stats = [
  { end: 180, suffix: "+", label: "Countries Covered" },
  { end: 5000, suffix: "+", label: "Workers Placed" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 15, suffix: "+", label: "Years Experience" },
];

const features = [
  { icon: Globe, title: "Global Immigration Services", desc: "Comprehensive immigration solutions across 180+ countries with expert guidance." },
  { icon: Users, title: "User-Friendly Technology", desc: "Cutting-edge digital platform to simplify complex visa processes." },
  { icon: Shield, title: "Decades of Expertise", desc: "Experienced professionals committed to delivering results with integrity." },
];

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="pb-16 lg:pb-0">
      <HeroSlider />
      <FloatingCTA />

      {/* Services - 4 Card Grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">What We Do</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Specialized immigration and recruitment services with deep expertise across multiple corridors.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-3xl overflow-hidden group cursor-pointer border border-border hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/15 transition-all h-full flex flex-col relative"
                >
                  <div className="h-36 sm:h-44 relative overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-accent/20 transition-all duration-500" />
                    <div className="absolute top-3 left-3">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                      >
                        <s.icon className="text-primary-foreground" size={18} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                    <Link to="/services" className="mt-3 inline-flex items-center gap-1.5 text-primary font-semibold text-xs group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-3xl p-6 sm:p-7 cursor-pointer group border border-border hover:border-primary/30 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                    <f.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6 text-sm sm:text-base">
              We bring together smart, friendly legal teams and smart, friendly technology
              <span className="text-gradient font-semibold"> to make immigration easier for companies and the global talent they depend on.</span>
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <PartnersMarquee />

      {/* Stats Counter */}
      <section ref={parallaxRef} className="relative py-20 md:py-28 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <img src={globalNetwork} alt="Global network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(207,100%,8%)]/90 via-[hsl(207,80%,15%)]/70 to-[hsl(207,100%,8%)]/90" />
        </motion.div>
        <div className="relative z-10 container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <CounterAnimation key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Talent */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold mb-4">Global Reach</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-5">
              Helping you win the race for <span className="text-gradient">global talent</span> across 180+ countries.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Virtually any business can benefit from using VisaHOBe to access, manage, or optimize their global talent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
              With deep expertise in manpower recruitment and embassy-ready documentation, we ensure the best possible experience.
            </p>
            <Link to="/destinations" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-sm">
              Explore Destinations <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
              <img src={aboutTeam} alt="Global talent team" className="rounded-3xl shadow-lg w-full relative" loading="lazy" width={800} height={600} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* News Alerts */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--footer-bg))] via-[hsl(207,60%,10%)] to-[hsl(207,80%,12%)]">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-4">Latest Updates</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Immigration News Alerts
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {newsAlerts.map((n, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/[0.06] rounded-2xl p-4 sm:p-5 h-full flex flex-col group cursor-pointer border border-white/[0.06] hover:bg-white/[0.1] hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-accent/25 text-accent rounded-full">{n.tag}</span>
                    <span className="text-[10px] sm:text-xs text-white/35 flex items-center gap-1"><Calendar size={10} />{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-xs sm:text-sm leading-snug group-hover:text-primary transition-colors flex-1">{n.title}</h3>
                  <Link to="/insights" className="mt-3 inline-flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all">
                    Read More <ChevronRight size={12} />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/insights" className="inline-flex items-center gap-2 px-7 py-2.5 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all text-sm">
              All Alerts <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* CTA Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,79%,50%,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(207,100%,30%,0.4),transparent_60%)]" />
        <div className="relative z-10 container-main text-center px-4">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Simplify Your Global Immigration?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Partner with VisaHOBe for seamless workforce mobility across 180+ countries. Let our experts handle the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link to="/contact" className="block px-8 py-3.5 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get Started Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link to="/services" className="block px-8 py-3.5 bg-white/15 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all">
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-[hsl(var(--footer-bg))] via-[hsl(207,60%,10%)] to-[hsl(207,80%,12%)]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Get the latest immigration news and insights, right in your inbox.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/8 text-white placeholder:text-white/35 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/8 text-white placeholder:text-white/35 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/8 text-white placeholder:text-white/35 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                  className="px-7 py-3 bg-white text-primary font-bold rounded-full hover:shadow-lg transition-all">
                  Subscribe
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

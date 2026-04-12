import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Users, Shield, ArrowRight, Briefcase, Plane, Building2, ChevronRight, Sparkles, CheckCircle } from "lucide-react";
import { useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import PartnersMarquee from "@/components/PartnersMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import aboutTeam from "@/assets/about-team.jpg";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const features = [
  { icon: Globe, title: "Global Immigration Services", desc: "Comprehensive immigration solutions across 180+ countries with expert guidance at every step." },
  { icon: Users, title: "User-Friendly Technology", desc: "Our cutting-edge digital platform helps simplify complex visa and immigration processes." },
  { icon: Shield, title: "Decades of Expertise", desc: "A team of experienced professionals committed to delivering results with integrity and compliance." },
];

const newsAlerts = [
  { date: "Apr 10, 2026", tag: "Singapore", title: "Singapore Updates Work Permit Quotas for Q3 2026" },
  { date: "Apr 5, 2026", tag: "Australia", title: "Australia Extends Temporary Visa Concessions for Skilled Workers" },
  { date: "Mar 28, 2026", tag: "Europe", title: "Serbia Updates English Language Test Requirements" },
  { date: "Mar 20, 2026", tag: "Russia", title: "Russia Introduces New Employee Registration Requirements" },
  { date: "Mar 15, 2026", tag: "Cambodia", title: "Cambodia Streamlines Work Visa Procedures" },
  { date: "Mar 10, 2026", tag: "Europe", title: "EU Final Approval of Talent Platform for Third-Country Workers" },
];

const services = [
  {
    icon: Briefcase, title: "Manpower Recruitment",
    desc: "Placement of skilled and semi-skilled workers with overseas employer coordination and professional contract preparation.",
    image: servicesManpower, highlights: ["Employer Coordination", "Worker Screening", "Contract Preparation"],
  },
  {
    icon: Plane, title: "Visa & Travel Services",
    desc: 'Processing assistance for all visa types. We specialize in preparing "Embassy-Ready" documentation.',
    image: servicesVisa, highlights: ["Embassy-Ready Docs", "All Visa Types", "Travel Guidance"],
  },
  {
    icon: Building2, title: "Strategic Program Management",
    desc: "Comprehensive program management for organizations with complex, multi-country immigration needs.",
    image: aboutTeam, highlights: ["Multi-Country", "Compliance", "End-to-End"],
  },
];

const stats = [
  { end: 180, suffix: "+", label: "Countries Covered" },
  { end: 5000, suffix: "+", label: "Workers Placed" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 15, suffix: "+", label: "Years Experience" },
];

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="pb-16 lg:pb-0">
      <HeroSlider />

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 md:-mt-20 relative z-20">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-2xl p-6 sm:p-8 cursor-pointer group"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                    <f.icon className="text-primary mb-4 group-hover:text-accent transition-colors" size={32} />
                  </motion.div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full mt-4 transition-all duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6 text-sm sm:text-base">
              We bring together smart, friendly legal teams and smart, friendly technology
              <span className="text-primary font-semibold"> to make immigration easier for companies and the global talent they depend on.</span>
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl hover:shadow-primary/25">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <PartnersMarquee />

      {/* Stats Counter with Parallax */}
      <section ref={parallaxRef} className="relative py-20 md:py-28 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <img src={globalNetwork} alt="Global network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
        </motion.div>
        <div className="relative z-10 container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <CounterAnimation key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Talent Race */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection>
            <motion.span initial={{ width: 0 }} whileInView={{ width: "3rem" }} viewport={{ once: true }} className="block h-1 bg-primary rounded-full mb-6" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Helping you win the race for global talent across 180+ countries.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Virtually any business, and many organizations, can benefit from using VisaHOBe to access, manage, or optimize their global talent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
              With deep expertise in manpower recruitment, employer coordination, and embassy-ready documentation, we ensure the best possible experience for both employers and workers.
            </p>
            <motion.div whileHover={{ x: 5 }} className="inline-block">
              <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                Explore Destinations <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ scale: 1.03, rotateY: 2 }} transition={{ type: "spring", stiffness: 200 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl -rotate-3" />
              <img src={aboutTeam} alt="Global talent team" className="relative rounded-2xl shadow-2xl w-full" loading="lazy" width={800} height={600} />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* News Alerts */}
      <section className="section-padding glass-dark">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-10">
              <Sparkles className="text-primary" size={22} />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
                Immigration News Alerts
              </h2>
              <Sparkles className="text-primary" size={22} />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {newsAlerts.map((n, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 h-full flex flex-col group cursor-pointer backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-primary/20 text-primary rounded-full">{n.tag}</span>
                    <span className="text-[10px] sm:text-xs text-white/40">{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-xs sm:text-sm leading-snug group-hover:text-primary transition-colors flex-1">{n.title}</h3>
                  <Link to="/insights" className="mt-3 inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                    Read More <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/insights" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                All Alerts <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.span initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} className="block h-1 bg-primary rounded-full mx-auto mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Specialized immigration and recruitment services with deep expertise across multiple corridors.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} glass-card rounded-2xl overflow-hidden group cursor-pointer`}
                >
                  <div className="md:w-2/5 h-48 sm:h-56 md:h-auto relative overflow-hidden">
                    <motion.img src={s.image} alt={s.title} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <s.icon className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {s.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/8 border border-primary/15 rounded-xl text-xs font-medium text-primary">
                          <CheckCircle size={12} /> {h}
                        </span>
                      ))}
                    </div>
                    <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl hover:shadow-primary/25">
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Newsletter */}
      <section className="section-padding glass-dark">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Get the latest immigration news and insights, right in your inbox.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="First Name" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/15 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm backdrop-blur-sm" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/15 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm backdrop-blur-sm" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/15 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm backdrop-blur-sm" />
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl hover:shadow-primary/25">
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

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Users, Shield, ArrowRight, Briefcase, Plane, Building2, ChevronRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import CounterAnimation from "@/components/CounterAnimation";
import ParallaxSection from "@/components/ParallaxSection";
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
  { date: "Apr 10, 2026", tag: "Singapore", title: "Singapore Updates Work Permit Quotas for Q3 2026", desc: "MOM announces revised quotas affecting S Pass and Work Permit holders in the construction sector." },
  { date: "Apr 5, 2026", tag: "Australia", title: "Australia Extends Temporary Visa Concessions for Skilled Workers", desc: "The Department of Home Affairs has announced extensions for Subclass 482 visa holders." },
  { date: "Mar 28, 2026", tag: "Europe", title: "Serbia Updates English Language Test Requirements for Worker Visas", desc: "New language proficiency standards announced for incoming foreign workforce." },
  { date: "Mar 20, 2026", tag: "Russia", title: "Russia Introduces New Employee Registration Requirements Effective April 2026", desc: "Federal Migration Service updates registration procedures for foreign workers." },
  { date: "Mar 15, 2026", tag: "Cambodia", title: "Cambodia Introduces New Project to Streamline Work Visa Procedures", desc: "Ministry of Labour simplifies documentation requirements for skilled foreign workers." },
  { date: "Mar 10, 2026", tag: "Europe", title: "European Union Final Approval of EU Talent Platform for Third-Country Workers", desc: "The platform aims to match qualified workers with EU employers efficiently." },
];

const services = [
  { icon: Briefcase, title: "Manpower Recruitment", desc: "Placement of skilled and semi-skilled workers with overseas employer coordination and professional contract preparation.", image: servicesManpower },
  { icon: Plane, title: "Visa & Travel Services", desc: 'Processing assistance for all visa types. We specialize in preparing "Embassy-Ready" documentation to minimize errors.', image: servicesVisa },
  { icon: Building2, title: "Strategic Program Management", desc: "Comprehensive program management for organizations with complex, multi-country immigration needs.", image: aboutTeam },
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
    <div>
      <HeroSlider />

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 md:-mt-20 relative z-20">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-xl shadow-xl p-8 border border-border cursor-pointer group"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                    <f.icon className="text-primary mb-4 group-hover:text-highlight-hover transition-colors" size={32} />
                  </motion.div>
                  <h3 className="font-display font-bold text-lg mb-2 text-card-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full mt-4 transition-all duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              We bring together smart, friendly legal teams and smart, friendly technology
              <span className="text-primary font-semibold"> to make immigration easier for companies and the global talent they depend on.</span>
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors shadow-lg hover:shadow-xl">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Counter with Parallax Background */}
      <section ref={parallaxRef} className="relative py-20 md:py-28 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
          <img src={globalNetwork} alt="Global network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay/80" />
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
      <section className="section-padding bg-section-alt">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="block h-1 bg-primary rounded-full mb-6"
            />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Helping you win the race for global talent across 180+ countries.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Virtually any business, and many organizations, can benefit from using VisaHOBe to access, manage, or optimize their global talent. Whether you need to place skilled workers in Singapore, Australia, Russia, Saudi Arabia, Cambodia, or Belarus — we've got you covered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With deep expertise in manpower recruitment, employer coordination, and embassy-ready documentation, we ensure the best possible experience for both employers and workers.
            </p>
            <motion.div whileHover={{ x: 5 }} className="inline-block">
              <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
                Explore Destinations <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3" />
              <img
                src={aboutTeam}
                alt="Global talent team"
                className="relative rounded-2xl shadow-2xl w-full"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* News Alerts */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Sparkles className="text-primary" size={24} />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground">
                Immigration News Alerts
              </h2>
              <Sparkles className="text-primary" size={24} />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {newsAlerts.map((n, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card border border-border rounded-xl p-6 h-full flex flex-col group cursor-pointer"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full"
                    >
                      {n.tag}
                    </motion.span>
                    <span className="text-xs text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2 text-sm leading-snug group-hover:text-primary transition-colors">{n.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{n.desc}</p>
                  <Link to="/insights" className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                    Read More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/insights" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                All Alerts <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              VisaHOBe offers specialized immigration and recruitment services, providing seamless support throughout your journey with deep expertise across multiple corridors.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <motion.div whileHover={{ rotate: 5 }} className="inline-block">
                      <s.icon className="text-primary mb-3" size={28} />
                    </motion.div>
                    <h3 className="font-display font-bold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors shadow-lg hover:shadow-xl">
                View All Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Newsletter */}
      <section className="section-padding bg-nav">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-nav-foreground">
                Get the latest immigration news and insights, right in your inbox.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="First Name" className="px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                  <input type="text" placeholder="Last Name" className="px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors shadow-lg"
                >
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

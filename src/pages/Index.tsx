import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Users, FileCheck, Shield, ArrowRight, Briefcase, Plane, Building2, ChevronRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";

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

const Index = () => {
  return (
    <div>
      <HeroSlider />

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 md:-mt-20 relative z-20">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-xl shadow-xl p-8 border border-border hover:shadow-2xl transition-shadow">
                  <f.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-display font-bold text-lg mb-2 text-card-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              We bring together smart, friendly legal teams and smart, friendly technology
              <span className="text-primary font-semibold"> to make immigration easier for companies and the global talent they depend on.</span>
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors">
              Learn More <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Talent Race */}
      <section className="section-padding bg-section-alt">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Helping you win the race for global talent across 180+ countries.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Virtually any business, and many organizations, can benefit from using VisaHOBe to access, manage, or optimize their global talent. Whether you need to place skilled workers in Singapore, Australia, Russia, Saudi Arabia, Cambodia, or Belarus — we've got you covered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With deep expertise in manpower recruitment, employer coordination, and embassy-ready documentation, we ensure the best possible experience for both employers and workers.
            </p>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore Destinations <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.img
              src={aboutTeam}
              alt="Global talent team"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              width={800}
              height={600}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* News Alerts */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Immigration News Alerts
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsAlerts.map((n, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{n.tag}</span>
                    <span className="text-xs text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2 text-sm leading-snug">{n.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{n.desc}</p>
                  <Link to="/insights" className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-semibold hover:gap-2 transition-all">
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/insights" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
              All Alerts <ArrowRight size={16} />
            </Link>
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
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <s.icon className="text-primary mb-3" size={28} />
                    <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

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
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-nav-foreground/10 text-nav-foreground placeholder:text-nav-foreground/40 border border-nav-foreground/20 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

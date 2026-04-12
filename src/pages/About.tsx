import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Users, Globe, Shield, ArrowRight, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={globalNetwork} alt="Global network" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-background mb-4"
          >
            About VisaHOBe Pte. Ltd.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-background/80 max-w-2xl text-sm md:text-base"
          >
            Your Trusted Global Mobility Partner — Registered in Singapore, operating worldwide.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Guided by compliance, driven by expertise.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our company is guided by a structure that ensures compliance with Singapore's legal framework and deep market expertise. We are a Private Company Limited by Shares, registered in Singapore.
            </p>
            <div className="space-y-4">
              {[
                { icon: Building, label: "Legal Identity", value: "Private Company Limited by Shares, UEN 202524173E" },
                { icon: Globe, label: "Registered Office", value: "68 Circular Road, #02-01, Singapore 049422" },
                { icon: Users, label: "Operational Focus", value: "Fully foreign-owned, operational hub in Dhaka, Bangladesh" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={aboutTeam} alt="VisaHOBe team" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={800} height={600} />
          </AnimatedSection>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding bg-section-alt">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Directors</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Nasim Shariyar",
                role: "Director & Majority Shareholder (75%)",
                desc: "As the primary director, Nasim holds the final decision-making authority. He directs the company's core strategy, operating from Dhaka, Bangladesh, ensuring a deep connection to the primary target market.",
              },
              {
                name: "Dr. Abdul Rashid Bin Mohamed Ali",
                role: "Local Director (Singapore)",
                desc: "Appointed to fulfill the legal requirement for a locally resident Singaporean director. Dr. Ali brings extensive experience from the education and administration sectors, including roles as Chairman of the Academic Board for Birmingham Academy.",
              },
            ].map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-card-foreground mb-1">{d.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{d.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Portfolio Table */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Comprehensive Service Portfolio
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-accent text-accent-foreground">
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Service Category</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Description</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Target Destinations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-6 py-5 font-semibold text-sm text-foreground align-top">Manpower Recruitment</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
                      Placement of skilled and semi-skilled workers, including overseas employer coordination, worker screening, and professional employment contract preparation.
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
                      Singapore (WP, S Pass, EP), Australia (Subclass 482), Russia, Saudi Arabia, Cambodia, and Belarus.
                    </td>
                  </tr>
                  <tr className="border-t border-border bg-muted/30">
                    <td className="px-6 py-5 font-semibold text-sm text-foreground align-top">Visa & Travel Services</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
                      Processing assistance for all visa types (Work, Tourist, Business, Student). We specialize in preparing "Embassy-Ready" documentation to minimize errors, coupled with post-approval guidance on travel and relocation.
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">
                      Strategically focused on high-value destinations like Australia and emerging European Gateways like Serbia and Moldova.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Digital Transparency */}
      <section className="section-padding bg-section-alt">
        <div className="container-main max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Award className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Commitment to Digital Transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are committed to modernizing the migration process. We are actively developing a cutting-edge digital platform featuring a <span className="text-primary font-semibold">"Liquid Interface"</span> designed to simplify complex information. This platform will allow users to easily switch between different visa types and tracking information, reflecting our commitment to operational transparency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Important Note on Compliance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    VisaHOBe is legally registered with ACRA under the business activity code <span className="font-semibold text-foreground">70201: Management Consultancy Services</span>.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The company does not currently hold an Employment Agency (EA) license from Singapore's Ministry of Manpower (MOM) for manpower placement. Our services are focused on consultancy, file preparation, and travel assistance.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us today to discuss your global mobility needs and discover how VisaHOBe can support your journey.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-semibold rounded-full hover:shadow-xl transition-all">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

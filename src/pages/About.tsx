import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Users, Globe, Shield, ArrowRight, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const About = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={globalNetwork} alt="Global network" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))]/70 via-[hsl(var(--primary))]/20 to-background/95" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded-full mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            About VisaHOBe Pte. Ltd.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-2xl text-sm md:text-base">
            Your Trusted Global Mobility Partner — Registered in Singapore, operating worldwide.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold mb-4 uppercase tracking-wider">Who We Are</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Guided by compliance, driven by <span className="text-gradient">expertise.</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Our company is guided by a structure that ensures compliance with Singapore's legal framework and deep market expertise. We are a Private Company Limited by Shares, registered in Singapore.</p>
            <div className="space-y-4">
              {[
                { icon: Building, label: "Legal Identity", value: "Private Company Limited by Shares, UEN 202524173E" },
                { icon: Globe, label: "Registered Office", value: "68 Circular Road, #02-01, Singapore 049422" },
                { icon: Users, label: "Operational Focus", value: "Fully foreign-owned, operational hub in Dhaka, Bangladesh" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} className="flex gap-3 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/25 group-hover:to-accent/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
              <img src={aboutTeam} alt="VisaHOBe team" className="rounded-3xl shadow-2xl w-full relative" loading="lazy" width={800} height={600} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Directors */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Directors</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Nasim Shariyar", role: "Director & Majority Shareholder (75%)", desc: "As the primary director, Nasim holds the final decision-making authority. He directs the company's core strategy, operating from Dhaka, Bangladesh, ensuring a deep connection to the primary target market." },
              { name: "Dr. Abdul Rashid Bin Mohamed Ali", role: "Local Director (Singapore)", desc: "Appointed to fulfill the legal requirement for a locally resident Singaporean director. Dr. Ali brings extensive experience from the education and administration sectors, including roles as Chairman of the Academic Board for Birmingham Academy." },
            ].map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-card rounded-3xl p-8 relative overflow-hidden group border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }} />
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-accent/20 transition-colors">
                    <motion.div whileHover={{ rotate: 10 }}>
                      <Users size={28} className="text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">{d.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{d.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Portfolio Table */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Comprehensive Service Portfolio</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <motion.table className="w-full border-collapse bg-card rounded-3xl overflow-hidden border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Service Category</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Description</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Target Destinations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Manpower Recruitment", desc: "Placement of skilled and semi-skilled workers, including overseas employer coordination, worker screening, and professional employment contract preparation.", dest: "Singapore (WP, S Pass, EP), Australia (Subclass 482), Russia, Saudi Arabia, Cambodia, and Belarus." },
                    { cat: "Visa & Travel Services", desc: 'Processing assistance for all visa types (Work, Tourist, Business, Student). We specialize in preparing "Embassy-Ready" documentation to minimize errors, coupled with post-approval guidance on travel and relocation.', dest: "Strategically focused on high-value destinations like Australia and emerging European Gateways like Serbia and Moldova." },
                  ].map((row, i) => (
                    <motion.tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}>
                      <td className="px-6 py-5 font-semibold text-sm text-foreground align-top">{row.cat}</td>
                      <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.desc}</td>
                      <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.dest}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Digital Transparency */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Commitment to Digital Transparency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are committed to modernizing the migration process. We are actively developing a cutting-edge digital platform featuring a <span className="text-gradient font-semibold">"Liquid Interface"</span> designed to simplify complex information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
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
      <section className="section-padding bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,79%,50%,0.3),transparent_50%)]" />
        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Contact us today to discuss your global mobility needs.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
